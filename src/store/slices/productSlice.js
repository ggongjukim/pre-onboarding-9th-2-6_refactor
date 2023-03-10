import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductData: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { fetchProductData } = productSlice.actions;

export default productSlice.reducer;
