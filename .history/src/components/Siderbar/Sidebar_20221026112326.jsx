import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

const Sidebar = () => {
  const theme = useTheme();

  return (
    <>
      <Link to='/' className={classes.imageLink}>
        
      </Link>
    </>
  )
}

export default Sidebar