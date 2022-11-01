import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const FeaturedMovie = ({ movie }) => {
  const classes = useStyles();

  if(!movie) return null;

  return (
    <Box component={Link} to={`/movie/${movie.id}`} className={classes.featuredCardContainer}>
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        <CardMedia
          media="picture"
          alt={movie.title}
          image={`https://`}
         />        
      </Card>
    </Box>
  )
}

export default FeaturedMovie