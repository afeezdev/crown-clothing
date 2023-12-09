import { createSlice} from '@reduxjs/toolkit';



type CategoriesSliceProps = {
  categories: [];
}

type PayloadProps = {
  payload: [];

}

export const CATEGORIES_INITIAL_STATE: CategoriesSliceProps= {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action: PayloadProps) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
