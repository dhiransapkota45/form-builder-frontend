import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  index: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.index = payload;
      state.modal = true;
    },
    closeModal: (state) => {
      state.index = null;
      state.modal = false;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
