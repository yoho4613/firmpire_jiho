import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import useStyles from './styles'

const redLogo =
const blueLogo =

const Sidebar = () => {
  const theme = useTheme();
  const classes = useStyles()

  return (
    <>
      <Link to='/' className={classes.imageLink}>
        <img 
          className={classes.image}
          src={theme.palette.mode === 'light'}
         />
      </Link>
    </>
  )
}

export default Sidebar