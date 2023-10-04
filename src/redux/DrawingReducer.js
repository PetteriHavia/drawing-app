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

export const currentPathSlice = createSlice({
  name: "currentPath",
  initialState : {
    currentPath: [],
  },
  reducers: {
    addToCurrentPath: (state, action) => {
      const {x, y} = action.payload;
      state.currentPath.push({x, y});
    },
    emptyCurrentPath: (state) => {
      state.currentPath = [];
    },
  },
})

export const redoSlice = createSlice({
  name: "redoHistory",
  initialState : {
    redoHistory: [],
  },
  reducers: {
    addToredoHistory: (state, action) => {
      state.redoHistory.push(action.payload);
    },
    deleteFromredoHistory: (state) => {
      state.redoHistory.pop();
    },
    emptyRedoHistory: (state) => {
      state.redoHistory = [];
    }
  },
})

export const toolSlice = createSlice({
  name: "toolstate",
  initialState: {
    toolType: "",
  },
  reducers: {
    changeTool: (state, action) => {
      state.toolType = action.payload;
    }
  }
})

export const { isDown, isUp } = drawingSlice.actions;
export const { addToHistory, deleteFromHistory, deleteAll } = historySlice.actions;
export const { addToCurrentPath, emptyCurrentPath} = currentPathSlice.actions;
export const { addToredoHistory, deleteFromredoHistory, emptyRedoHistory } = redoSlice.actions;
export const { changeTool } = toolSlice.actions;

export const drawingReducer = drawingSlice.reducer;
export const historyReducer = historySlice.reducer;
export const currentPathReducer = currentPathSlice.reducer;
export const redoReducer = redoSlice.reducer;
export const toolReducer = toolSlice.reducer;
