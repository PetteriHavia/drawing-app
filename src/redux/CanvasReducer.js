import { createSlice } from "@reduxjs/toolkit";

export const canvasSlice = createSlice({
  name: "Drawing",
  initialState: {
    canvas: {
        width: 1500,
        height: 800,
        projectName: "NewProject",
        background: "#fff",
    }
  },
  reducers: {
    changeCanvasSize: (state, action) => {
        const {width, height} = action.payload
      state.canvas.width = width;
      state.canvas.height = height;
    },
    changeBackground: (state, action) => {
      state.canvas.background = action.payload;
    },
    changeProjectName: (state, action) => {
      action.payload.trim();
      state.canvas.projectName = action.payload;
    }
  },
});

export const { changeCanvasSize, changeBackground, changeProjectName } = canvasSlice.actions;

export const canvasReducer = canvasSlice.reducer;

