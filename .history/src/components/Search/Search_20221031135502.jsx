import React, { useState, useEffect} from 'react';
import { TextField, InputAdornmnet } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Search = () => {
  console.log('Search')
  return (
    <div className={classes.searchContainer}>Search</div>
  )
}

export default Search