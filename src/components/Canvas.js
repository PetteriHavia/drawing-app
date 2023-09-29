import {
  isDown,
  isUp,
  addToHistory,
  addToCurrentPath,
  emptyCurrentPath,
  addToredoHistory
} from "../redux/DrawingReducer";
import { addColor } from "../redux/LineReducer";
import { CanvasArea, CanvasContainer } from "../styles/Elements.style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { clearCanvas } from "../utils/clearCanvas";
import Modal from "./Modal";

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
  const { redoHistory } = useSelector((state) => state.redo);
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
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    dispatch(isDown());
  };

  const currentlyDrawing = (e) => {
    if (!isDrawing) {
      return;
    }
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();
    if (toolType === "eraser") {
      ctxRef.current.strokeStyle = "white";
    }
    dispatch(addToCurrentPath({ x, y }));
  };

  const endDrawing = () => {
    dispatch(isUp());
    ctxRef.current.closePath();
    dispatch(
      addToHistory({
        path: currentPath,
        color: ctxRef.current.strokeStyle,
        opacity: ctxRef.current.globalAlpha,
        width: ctxRef.current.lineWidth,
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
  };

  const redrawCanvas = () => {
    clearCanvas(ctxRef, dispatch);
    lineHistory.forEach((line) => {
      const { path, color, opacity, width } = line;
      if (path.length > 0) {
        ctxRef.current.save();
        ctxRef.current.beginPath();
        ctxRef.current.strokeStyle = color;
        ctxRef.current.globalAlpha = opacity;
        ctxRef.current.lineWidth = width;
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
          width={1500}
          height={1000}
          onMouseMove={currentlyDrawing}
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          ref={Refcanvas}
        />
      </CanvasArea>
      {PopUp ? <Modal ctxRef={ctxRef} /> : ""}
    </CanvasContainer>
  );
};

export default Canvas;
