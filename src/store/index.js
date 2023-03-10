import { configureStore } from '@reduxjs/toolkit';

import {
  productReducer,
  categoriesReducer,
  modalReducer,
  reserveReducer,
} from './slices';

const store = configureStore({
  reducer: {
    product: productReducer,
    categories: categoriesReducer,
    modal: modalReducer,
    reserve: reserveReducer,
  },
});

export default store;
