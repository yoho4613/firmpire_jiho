import React from 'react';
import { Typography, Button } from '@mui/material';

import useStyles from './styles'

const Pagination = () => {
  const classes = useStyles();
  const currentPage = 1;

  const handlePrev = () => {

  }
  
  const handleNext = () => {

  }

  return (
    <div className={classes.container}>
      <Button onClick={handlePrev} className={classes.button} variant="contained" color="primary" type="button">Prev</Button>
      <Typography variant='h5' className={classes.pageNumber}>{currentPage}</Typography>
      <Button onClick={handleNext} className={classes.button} variant="contained" color="primary" type="button">Next</Button>

    </div>
  )
}

export default Pagination