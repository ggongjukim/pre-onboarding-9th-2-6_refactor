import { configureStore } from '@reduxjs/toolkit';

import reserveReducer from './slices/reservationSlice';

const store = configureStore({
  reducer: {
    reserve: reserveReducer,
  },
});

export default store;
