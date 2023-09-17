import {configureStore} from "@reduxjs/toolkit";
import {drawingReducer, historyReducer, modalReducer} from "./DrawingReducer";
import {colorReducer} from "./LineReducer";

export default configureStore ({
    reducer: {
        drawing: drawingReducer,
        history: historyReducer,
        modal: modalReducer,
        color: colorReducer,
    }
});