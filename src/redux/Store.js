import { configureStore } from "@reduxjs/toolkit";
import {
  drawingReducer,
  historyReducer,
  toolReducer,
  currentPathReducer,
  redoReducer,
} from "./DrawingReducer";
import {
  colorReducer,
  opacityReducer,
  widthReducer,
  colorHistoryReducer,
  colorPaletteReducer,
} from "./LineReducer";
import { modalReducer, colorModalReducer } from "./ModalReducer";

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
    colorModal: colorModalReducer,
    tool: toolReducer,
  },
});
