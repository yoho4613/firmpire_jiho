import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CircularProgress, Box, Grid, Typography, Button } from '@mui/material';

import { useGetActorDetailQuery } from '../../services/TMDB';


const Actors = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetActorDetailQuery(id);

  console.log("Actors")
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
      <img src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`} />
      <Grid item>
        <Typography variant='h3' gutterBottom>{data.also_known_as[0]}</Typography>
      </Grid>
    </Grid>
  )
}

export default Actors