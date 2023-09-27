import { createSlice } from "@reduxjs/toolkit";

export const drawingSlice = createSlice({
  name: "Drawing",
  initialState: {
    isDrawing: false,
  },
  reducers: {
    isDown: (state) => {
      state.isDrawing = true;
    },
    isUp: (state) => {
      state.isDrawing = false;
    },
  },
});

export const historySlice = createSlice({
  name: "History",
  initialState: {
    lineHistory: [],
  },
  reducers: {
    addToHistory: (state, action) => {
      const {path, color, opacity, width} = action.payload;
      state.lineHistory.push({path, color, opacity, width});
    },
    deleteFromHistory: (state) => {
      state.lineHistory.pop();
    },
    deleteAll: (state) => {
      state.lineHistory = [];
    }, 
  },
})

export const { isDown, isUp } = drawingSlice.actions;
export const { addToHistory, deleteFromHistory, deleteAll } = historySlice.actions;

export const drawingReducer = drawingSlice.reducer;
export const historyReducer = historySlice.reducer;
