import { configureStore } from "@reduxjs/toolkit";
import {
  drawingReducer,
  historyReducer,
  toolReducer,
  currentPathReducer,
  redoReducer,
} from "./DrawingReducer";
import { canvasReducer } from "./CanvasReducer";
import {
  colorReducer,
  opacityReducer,
  widthReducer,
  colorHistoryReducer,
  colorPaletteReducer,
} from "./LineReducer";
import { modalReducer } from "./ModalReducer";

export default configureStore({
  reducer: {
    drawing: drawingReducer,
    history: historyReducer,
    currentPath: currentPathReducer,
    redo: redoReducer,
    modal: modalReducer,
    color: colorReducer,
    opacity: opacityReducer,
    width: widthReducer,
    colorHistory: colorHistoryReducer,
    palette: colorPaletteReducer,
    tool: toolReducer,
    canvas: canvasReducer,
  },
});
