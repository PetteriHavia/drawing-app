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

export const colorReducer = colorSlice.reducer;
export const opacityReducer = opacitySlice.reducer;
export const widthReducer = widthSlice.reducer;

