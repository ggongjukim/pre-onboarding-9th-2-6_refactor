// store.js
import { configureStore } from '@reduxjs/toolkit';

import { productReducer, categoriesReducer, modalReducer } from './slices';

const store = configureStore({
  reducer: {
    product: productReducer,
    categories: categoriesReducer,
    modal: modalReducer,
  },
});

export default store;
