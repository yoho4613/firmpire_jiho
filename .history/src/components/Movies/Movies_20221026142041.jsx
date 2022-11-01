import React, { useState, useEffect } from "react";
import { Box, CircularProgress, useMediaQuery, Typography } from "@mui/styles";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "..";

const Movies = () => {
  const { data } = useGetMoviesQuery();


  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
