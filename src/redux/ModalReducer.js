import { createSlice } from "@reduxjs/toolkit";

  export const modalSlice = createSlice({
    name: "Modals",
    initialState: {
      modals: {
        deleteModal: false,
        colorModal: false,
        canvasSettingsModal: false,
      }
    },
    reducers: {
      modalActive: (state, action) => {
        const modalName = action.payload;
        if (state.modals.hasOwnProperty(modalName)) {
            state.modals[modalName] = true;
        }
      },
      modalHide: (state, action) => {
        if (state.modals.hasOwnProperty(action.payload)) {
            state.modals[action.payload] = false;
        }
      }, 
    },
  })

  export const { modalActive, modalHide } = modalSlice.actions;
  export const modalReducer = modalSlice.reducer;