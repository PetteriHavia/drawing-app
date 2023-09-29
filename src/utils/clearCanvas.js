import { emptyCurrentPath } from "../redux/DrawingReducer";

  export const clearCanvas = (ctxRef, dispatch,) => {
    const canvas = ctxRef.current.canvas;
    ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
    dispatch(emptyCurrentPath());
  };