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
import { useEffect, useRef, useState} from "react";

const Canvas = () => {
  const { isDrawing } = useSelector((state) => state.drawing);
  const { lineHistory } = useSelector((state) => state.history);
  const { PopUp } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const Refcanvas = useRef(null);
  const crcRef = useRef(null);
  const currentPath = useRef([]);

  

  useEffect(() => {
    const canvas = Refcanvas.current;
    const ctx = canvas.getContext("2d");
    crcRef.current = ctx;
    clearCanvas();
    redrawCanvas();
  }, [lineHistory]);

  const startDrawing = (e) => {
    crcRef.current.beginPath();
    crcRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    dispatch(isDown());
  };

  const currentlyDrawing = (e) => {
    if (!isDrawing) {
      return;
    }
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    crcRef.current.lineTo(x, y);
    crcRef.current.stroke();
    currentPath.current.push({ x, y });
  };

  const endDrawing = () => {
    dispatch(isUp());
    crcRef.current.closePath();
    dispatch(addToHistory(currentPath.current));
    currentPath.current = [];
  };

  const handleDelete = () => {
    if (lineHistory.length > 0) {
      dispatch(deleteFromHistory());
      //dispatch(deleteFromHistory());
      clearCanvas();
      redrawCanvas();
    }
  };

  const redrawCanvas = () => {
    lineHistory.forEach((path) => {
      if (path.length > 0) {
        crcRef.current.beginPath();
        crcRef.current.moveTo(path[0].x, path[0].y);
        path.forEach((point) => {
          crcRef.current.lineTo(point.x, point.y);
        });
        crcRef.current.stroke();
        crcRef.current.closePath();
      }
    });
  };

  const clearCanvas = () => {
    crcRef.current.clearRect(0, 0, Refcanvas.current.width, Refcanvas.current.height);
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
          id="canvas"
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
