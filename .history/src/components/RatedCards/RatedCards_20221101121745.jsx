import React from 'react'
import { Typography, Box } from '@mui/material'

import useStyles from './styles'

const RatedCards = () => {
  const classes = useStyles()
  return (
    <Box>
      <Typography variant='h5' gutterBottom>Favorites</Typography>
      <Box display='flex' flexWrap="wrpa" className={classes.box}>
        
      </Box>
    </Box>
  )
}

export default RatedCards