import { configureStore } from "@reduxjs/toolkit";
import { drawingReducer, historyReducer} from "./DrawingReducer";
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
    modal: modalReducer,
    color: colorReducer,
    opacity: opacityReducer,
    width: widthReducer,
    colorHistory: colorHistoryReducer,
    palette: colorPaletteReducer,
    colorModal: colorModalReducer,
  },
});
