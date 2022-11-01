import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { CircularProgress, Box, Grid, Typography, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import { MovieList } from '..';
import { useGetActorDetailQuery, getMovieCredits } from '../../services/TMDB';


const Actors = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetActorDetailQuery(id);
  const history = useHistory()

  const { data: credits, isFetching: isCreditsFetching } = getMovieCredits(id);

  console.log(data)
  console.log(credits)
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
        <Button target='_blank' href={`https://www.imdb.com/name/${data?.imdb_id}`}>IMDB</Button>
        <Button href='#'>BACK</Button>
      </Grid>
      <Grid container>

      <Typography variant='h3' align='center'>Movies</Typography>
      {/* {credits ? (
          <MovieList movies={credits} numberOfMovies={12} />
        ) : (
          <Box>Sorry, nothing was found.</Box>
        )} */}
      </Grid>
    </Grid>
  )
}

export default Actors