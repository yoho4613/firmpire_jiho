import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { CircularProgress, Box, Grid, Typography, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import { MovieList } from '..';
import { useGetActorDetailQuery } from '../../services/TMDB';
import useStyles from './styles';


const Actors = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorDetailQuery(id);
  const history = useHistory()

  console.log(data)
  
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} onClick={() => history.goBack} color="primary">Go Back</Button>
      </Box>
    );
  }

  return (
  <>
    <Grid container>
      <Grid item lg={5} xl={4}>
        <img className={classes.image} src={`https://image.tmdb.org/t/p/w780/${data.profile_path}`} />
        <Grid item xs={12} md={8} lg={2}>
          <Typography variant='h4' gutterBottom>{data.name}</Typography>
          <Typography variant='h5'>Born: {data.birthday}</Typography>
          <Typography color="subtitle" variant='p' gutterBottom>{data.biography}</Typography>
        </Grid>
      </Grid>
      <Grid>
        <Button target='_blank' href={`https://www.imdb.com/name/${data?.imdb_id}`}>IMDB</Button>
        <Button startIcon={<ArrowBack />} onClick={() => history.goBack}>Back</Button>
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
  </>
  )
}

export default Actors