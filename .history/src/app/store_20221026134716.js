import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";

export default configureStore({
  reducers: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
});
