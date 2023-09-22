import { configureStore } from "@reduxjs/toolkit";
import { drawingReducer, historyReducer, modalReducer } from "./DrawingReducer";
import {
  colorReducer,
  opacityReducer,
  widthReducer,
  colorHistoryReducer,
  colorPaletteReducer,
} from "./LineReducer";

export default configureStore({
  reducer: {
    drawing: drawingReducer,
    history: historyReducer,
    modal: modalReducer,
    color: colorReducer,
    opacity: opacityReducer,
    width: widthReducer,
    colorHistory: colorHistoryReducer,
    palette: colorPaletteReducer,
  },
});
