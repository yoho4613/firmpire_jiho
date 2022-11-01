import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreIdOrCategoryName: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      console.log(action.payload);
      // state.genreIdOrCategoryName = genreOrCategory
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory;

export default genreOrCategory.reducer
