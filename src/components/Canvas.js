import {
  isDown,
  isUp,
  addToHistory,
  addToCurrentPath,
  emptyCurrentPath,
} from "../redux/DrawingReducer";
import { addColor } from "../redux/LineReducer";
import { CanvasArea, CanvasContainer } from "../styles/Elements.style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { clearCanvas } from "../utils/clearCanvas";
import DeleteAllModal from "./DeleteAllModal";
import { toolTypeNotEmpty } from "../utils/toolTypeCheck";

const Canvas = ({ ctxRef }) => {
  const { isDrawing } = useSelector((state) => state.drawing);
  const { lineHistory } = useSelector((state) => state.history);
  const { PopUp } = useSelector((state) => state.modal);
  const { lineColor } = useSelector((state) => state.color);
  const { lineOpacity } = useSelector((state) => state.opacity);
  const { lineWidth } = useSelector((state) => state.width);
  const { colorHistory } = useSelector((state) => state.colorHistory);
  const { toolType } = useSelector((state) => state.tool);
  const { currentPath } = useSelector((state) => state.currentPath);
  const dispatch = useDispatch();

  const Refcanvas = useRef(null);

  useEffect(() => {
    const canvas = Refcanvas.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = lineColor;
    ctx.globalAlpha = lineOpacity;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
    redrawCanvas();
  }, [lineHistory, lineColor, lineOpacity, lineWidth, toolType]);

  const startDrawing = (e) => {
    toolTypeNotEmpty(toolType, () => {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctxRef.current.globalCompositeOperation = toolType === "eraser" ? "destination-out" : "source-over";
      dispatch(isDown());
    });
  };

  const currentlyDrawing = (e) => {
    toolTypeNotEmpty(toolType, () => {
      if (!isDrawing) {
        return;
      }
    
      const x = e.nativeEvent.offsetX;
      const y = e.nativeEvent.offsetY;

      ctxRef.current.lineTo(x, y);
      ctxRef.current.stroke();
      dispatch(addToCurrentPath({ x, y }));
    });
  };

  const endDrawing = () => {
    toolTypeNotEmpty(toolType, () => {
      dispatch(isUp());
      let global = ctxRef.current.globalCompositeOperation = "source-over"; 
      ctxRef.current.closePath();
      if(toolType === "eraser"){
        global = ctxRef.current.globalCompositeOperation = "destination-out"; 
      }
      dispatch(
        addToHistory({
          path: currentPath,
          color: ctxRef.current.strokeStyle,
          opacity: ctxRef.current.globalAlpha,
          width: ctxRef.current.lineWidth,
          global: global,
          tool: toolType,
        })
      );

      const newColor = ctxRef.current.strokeStyle;

      const existingColor = colorHistory.findIndex(
        (element) => element.color === newColor
      );
      if (existingColor !== -1 || toolType === "eraser" || toolType === "") {
        return;
      } else {
        dispatch(addColor({ color: newColor }));
      }
      dispatch(emptyCurrentPath());
    });
  };

  const redrawCanvas = () => {
    clearCanvas(ctxRef, dispatch);
    lineHistory.forEach((line) => {
      const { path, color, opacity, width, global } = line;
      if (path.length > 0) {
        ctxRef.current.save();
        ctxRef.current.beginPath();
        ctxRef.current.strokeStyle = color;
        ctxRef.current.globalAlpha = opacity;
        ctxRef.current.lineWidth = width;
        ctxRef.current.globalCompositeOperation = global;
        ctxRef.current.moveTo(path[0].x, path[0].y);
        path.forEach((point) => {
          ctxRef.current.lineTo(point.x, point.y);
        });
        ctxRef.current.stroke();
        ctxRef.current.closePath();
        ctxRef.current.restore();
      }
    });
  };

  return (
    <CanvasContainer>
      <CanvasArea>
        <canvas
          width={1780}
          height={800}
          onMouseMove={currentlyDrawing}
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          ref={Refcanvas}
        />
      </CanvasArea>
      {PopUp ? <DeleteAllModal ctxRef={ctxRef} /> : null}
    </CanvasContainer>
  );
};

export default Canvas;
