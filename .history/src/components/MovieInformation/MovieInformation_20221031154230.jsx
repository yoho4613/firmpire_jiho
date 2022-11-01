import React from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { useGetMovieQuery } from '../../services/TMDB';
import { useStyles } from './styles'

const MovieInformation = () => {
  const {id} = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const classes = useStyles();

  if(isFetching) {
    return <Box display='flex' justifyContent='center' alignItems="center"><CircularProgress size="8rem" /></Box>
  }

  if(error) {
    return <Box display='flex' justifyContent='center' alianItems="center"><Link to='/'>Something has gone wrong - Go Back</Link></Box>
  }

  return (
    <Grid container className={classes.containerSpaceAround}>
      Test Here
    </Grid>
  )
}

export default MovieInformation