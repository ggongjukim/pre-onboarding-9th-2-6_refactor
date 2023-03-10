// store.js
import { configureStore } from '@reduxjs/toolkit';

import { productReducer } from './slices';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
