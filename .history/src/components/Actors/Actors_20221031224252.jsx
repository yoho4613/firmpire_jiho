import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

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
    <div>Actors</div>
  )
}

export default Actors