import React, { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectGenreOrCategory, searchMovie } from '../features/currentGenreOrCategory';
import { ColorModeContext } from '../utils/ToggleColorMode'
import { fetchToken } from '../utils';
import { selectGenreOrCategory } from '../features/currentGenreOrCategory';


const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    alanBtn({
        key: '97186192f07ffeb8f2bc358a7062641e2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: ({ command, mode, genres, genre }) => {
          if (command === 'chooseGenre') {
            const foundGenre = genres.find((g) => g.name.toLowerCase() === genre.toLowerCase());

            if(foundGenre) {
              history.push('/');
              dispatch(selectGenreOrCategory(foundGenre.id));
            }
          } else if (command === 'changeMode') {
            if(mode === 'light') {
              setMode('light')
            } else {
              setMode('dark')
            }
          } else if (command === 'login') {
            fetchToken();
          } else if (command === 'logout') {
            localStorage.clear();
            history.push('/')
          }
        }
    });
  }, []); 

  return (
    <div>Alan</div>
  )
}

export default useAlan