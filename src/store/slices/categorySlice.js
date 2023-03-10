import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  defaultSpace: ['서울', '강원', '부산', '대구', '제주'],
  defaultPrice: [0, 30000],

  spaceCategories: ['서울', '강원', '부산', '대구', '제주'],
  priceCategories: [0, 30000],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    spaceUpdate(state, action) {
      const { category } = action.payload;

      if (state.spaceCategories.includes(category)) {
        state.spaceCategories = state.spaceCategories.filter(
          (checkedCategory) => checkedCategory !== category,
        );
      } else {
        state.spaceCategories = [...state.spaceCategories, category];
      }
    },
    priceUpdate(state, action) {
      const { range } = action.payload;
      state.priceCategories = range;
    },

    spaceRest(state) {
      state.spaceCategories = state.defaultSpace;
    },

    priceReset(state) {
      state.priceCategories = state.defaultPrice;
    },
  },
});

export const { spaceUpdate, priceUpdate, spaceRest, priceReset } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
