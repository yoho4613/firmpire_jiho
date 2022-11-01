import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { CircularProgress, Box, Grid, Typography, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import { MovieList } from '..';
import { useGetActorDetailQuery, useGetRecommendationsQuery } from '../../services/TMDB';


const Actors = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetActorDetailQuery(id);

  const { data: recommendations, isFetching: isRecommendationsFetching } =
  useGetRecommendationsQuery({ list: "recommendations", movie_id: id });

  console.log(data)

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  return (
    <Grid container display='flex'>
      <Grid item container>
        <img style={{ width: '30%'}} src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`} />
        <Grid item xs={12} md={8} lg={2}>
          <Typography variant='h4' gutterBottom>{data.also_known_as[0]}</Typography>
          <Typography variant='h5'>Born: {data.birthday}</Typography>
          <Typography color="subtitle" variant='p' gutterBottom>{data.biography}</Typography>
        </Grid>
      </Grid>
      <Grid>
        <Button target='_blank' href={`https://www.imdb.com/title/${data?.imdb_id}`}>IMDB</Button>
        <Button>BACK</Button>
      </Grid>
      <Typography>You may also like</Typography>
      {recommendations ? (
          <MovieList movies={recommendations} numberOfMovies={12} />
        ) : (
          <Box>Sorry, nothing was found.</Box>
        )}
    </Grid>
  )
}

export default Actors