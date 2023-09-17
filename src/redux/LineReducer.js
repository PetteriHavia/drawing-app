import { createSlice } from "@reduxjs/toolkit";

export const lineSlice = createSlice({
  name: "LineColor",
  initialState: {
    lineColor: "#a05858",
  },
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { changeColor } = lineSlice.actions;

export const colorReducer = lineSlice.reducer;
