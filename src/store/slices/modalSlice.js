import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  key: '',
  content: null,
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open(state, action) {
      state.key = action.payload.modalKey;
      state.isOpen = true;
      state.content = action.payload.modalContent;
    },
    close() {
      return initialState;
    },
  },
});

const { actions, reducer: modalReducer } = modalSlice;

export default modalReducer;
export const { open, close } = actions;
