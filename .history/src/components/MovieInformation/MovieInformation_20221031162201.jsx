import React from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";

import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { useGetMovieQuery } from '../../services/TMDB';
import useStyles from './styles'
import genreIcons from '../../assets/genres'

const MovieInformation = () => {
  const dispatch = useDispatch();
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
      <Grid item sm={12} lg={4}>
        <img 
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
         />
      </Grid>
      <Grid item container direction='column' lg={7}>
        <Typography variant='h3' align='center' gutterBottom>
          {data?.title} {data.release_date.split('-')[0]}
        </Typography>
        <Typography variant='h5' align='center' gutterBottom>
          {data?.tagline}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display='flex' align="center">
            <Rating readOnly value={data.vote_average / 2} />
            <Typography variant='subtitle1' gutterBottom style={{marginLeft: '10px'}}>
              {data?.vote_average} / 10
            </Typography>
          </Box>
          <Typography variant='h6' align='center' gutterBottom>
            {data?.runtime}min {data?.spoken_languages.length > 0 ? ` / ${data?.spoken_languages[0].name}` : ''}
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre, i) => (
            <Link key={genre.name} className={classes.links} to='/' onClick={() => dispatch(selectGenreOrCategory(value))}>
            <img
                src={genreIcons[genre.name.toLowerCase()]}
                alt="logo"
                className={classes.genreImage}
                height={30}
            />
            <Typography color='textPrimary' variant='subtitle1'>
              {genre?.name}
            </Typography>
            </Link>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MovieInformation