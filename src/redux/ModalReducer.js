import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "ModalPopUp",
    initialState: {
      PopUp: false,
    },
    reducers: {
      modalActive: (state) => {
        state.PopUp = true;
      },
      modalHide: (state) => {
        state.PopUp = false;
      }, 
    },
  })

  export const colorModalSlice = createSlice({
    name: "ColorModalPopUp",
    initialState: {
      colorPopUp: false,
    },
    reducers: {
      colorModalActive: (state) => {
        state.colorPopUp = true;
      },
      colorModalHide: (state) => {
        state.colorPopUp = false;
      }, 
    },
  })

  export const { modalHide, modalActive } = modalSlice.actions;
  export const { colorModalHide, colorModalActive } = colorModalSlice.actions;

  export const modalReducer = modalSlice.reducer;
  export const colorModalReducer = colorModalSlice.reducer;