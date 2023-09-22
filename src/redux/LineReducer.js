import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "LineColor",
  initialState: {
    lineColor: "#a05858",
  },
  reducers: {
    changeColor: (state, action) => {
      state.lineColor = action.payload;
    },
  },
});

export const colorHistorySlice = createSlice({
  name: "ColorHistory",
  initialState: {
    colorHistory: [],
  },
  reducers: {
    addColor: (state, action) => {
      if (state.colorHistory.length >= 10) {
        state.colorHistory.shift();
        state.colorHistory.push(action.payload);
      } else {
        state.colorHistory.push(action.payload);
      }
    },
  },
});

export const colorPaletteSlice = createSlice({
  name: "ColorPalette",
  initialState: {
    colorPalette: [
      {color: "#FCBA04"},
      {color: "#E9080B"},
      {color: "#c922c9"},
      {color: "#3b1bb1"},
      {color: "#7c358a"},
      {color: "#831b23"},
      {color: "#b3a789"},
      {color: "#3ca753"},
      {color: "#3be9e0"},
      {color: "#4be4be"},
    ]
  },
   reducers: {
    updatePalette: (state, action) => {

    } 
   },
});

export const opacitySlice = createSlice({
  name: "LineOpacity",
  initialState: {
    lineOpacity: "1",
  },
  reducers: {
    changeOpacity: (state, action) => {
      state.lineOpacity = action.payload;
    },
  },
});

export const widthSlice = createSlice({
  name: "LineOpacity",
  initialState: {
    lineWidth: "5",
  },
  reducers: {
    changeWidth: (state, action) => {
      state.lineWidth = action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;
export const { changeOpacity } = opacitySlice.actions;
export const { changeWidth } = widthSlice.actions;
export const { addColor, removeColor } = colorHistorySlice.actions;
export const { updatePalette} = colorPaletteSlice.actions;

export const colorReducer = colorSlice.reducer;
export const opacityReducer = opacitySlice.reducer;
export const widthReducer = widthSlice.reducer;
export const colorHistoryReducer = colorHistorySlice.reducer;
export const colorPaletteReducer = colorPaletteSlice.reducer;
