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
        <img className={classes.image} src={`https://image.tmdb.org/t/p/w780/${data.profile_path}`} alt={data.name} />
      </Grid>
      <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <Typography variant='h2' gutterBottom>{data?.name}</Typography>
        <Typography variant='h5' gutterBottom>Born: {new Date(data?.birthday).toDateString()}</Typography>
        <Typography variant='body1' align='justify' paragraph>{data?.biography || 'Sorry, no biography yet ...'}</Typography>
        <Box marginTop="2rem" display="flex" justifyContent="space-around">
          <Button variant='contained' target='_blank' color="primary" href={`https://www.imdb.com/name/${data?.imdb_id}`}>IMDB</Button>
          <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color="primary">Back</Button>
        </Box>
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