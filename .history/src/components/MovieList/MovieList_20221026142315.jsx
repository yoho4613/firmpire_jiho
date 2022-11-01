import React from 'react'
import { Grid } from '@mui/material';
import useStyles from './styles'

const MovieList = ({ movies }) => {
  const classes = useStyles();
  console.log('movie list')

  return (
    <Grid container className={classes.moviesContainer}>
    
    </Grid>
  )
}

export default MovieList