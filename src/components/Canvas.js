import {
  isDown,
  isUp,
  addToHistory,
  deleteFromHistory,
  deleteAll,
  modalActive,
  modalHide,
} from "../redux/DrawingReducer";
import { CanvasArea, CanvasContainer, Modal } from "../styles/Elements.style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef} from "react";

const Canvas = ({ctxRef}) => {
  const { isDrawing } = useSelector((state) => state.drawing);
  const { lineHistory } = useSelector((state) => state.history);
  const { PopUp } = useSelector((state) => state.modal);
  const { lineColor } = useSelector((state) => state.color);
  const { lineOpacity } = useSelector((state) => state.opacity);
  const { lineWidth } = useSelector((state) => state.width);
  const dispatch = useDispatch();

  const Refcanvas = useRef(null);
  let currentPath = [];
  
  useEffect(() => {
    const canvas = Refcanvas.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = lineColor;
    ctx.globalAlpha = lineOpacity;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
    redrawCanvas();
  }, [lineHistory, lineColor, lineOpacity, lineWidth]);

  
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
   
    currentPath.push({ x, y });
    
  };

  const endDrawing = () => {
    dispatch(isUp());
    ctxRef.current.closePath();
    dispatch(addToHistory({ path: currentPath, color: ctxRef.current.strokeStyle,
      opacity: ctxRef.current.globalAlpha, width: ctxRef.current.lineWidth,}));
    currentPath = [];
  };

  const handleDelete = () => {
    if (lineHistory.length > 0) {
      dispatch(deleteFromHistory());
      redrawCanvas();
    }
  };

  const redrawCanvas = () => {
    clearCanvas();
    lineHistory.forEach((line) => {
      const { path, color, opacity, width } = line;
      if (path.length > 0 ) {
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

  const clearCanvas = () => {
    ctxRef.current.clearRect(0, 0, Refcanvas.current.width, Refcanvas.current.height);
  };

  const handleDeleteAll = () => {
    dispatch(deleteAll());
    clearCanvas();
    dispatch(modalHide());
  };

  const handleShowModal = () => {
    if(lineHistory.length > 0) {
      dispatch(modalActive());
    }
  };

  const handleHideModal = () => {
    dispatch(modalHide());
  };

  return (
    <CanvasContainer>
      <button onClick={handleDelete}>Delete Last Line</button>
      <button onClick={handleShowModal}>Clear Canvas</button>
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
      {PopUp ? (
        <Modal>
          <h2>Clear Canvas</h2>
          <h3>Are you sure you want to clear canvas?</h3>
          <button onClick={handleHideModal}>Cancel</button>
          <button onClick={handleDeleteAll}>Clear Canvas</button>
        </Modal>
      ) : (
        ""
      )}
      ;
    </CanvasContainer>
  );
};

export default Canvas;
