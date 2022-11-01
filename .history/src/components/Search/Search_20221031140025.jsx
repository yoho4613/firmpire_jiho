import React, { useState, useEffect} from 'react';
import { TextField, InputAdornmnet } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import useStyles from './styles'

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  
  const handleKeyPress = () => {

  }

  return (
    <div className={classes.searchContainer}>
      <TextField 
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornmnet position="start">
              <SearchIcon />
            </InputAdornmnet>
          )
        }}
      />
    </div>
  )
}

export default Search