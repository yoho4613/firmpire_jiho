import React, { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import { ColorModeContext } from '../utils/ToggleColorMode'


const useAlan = () => {
  const { setMode } = useContext(ColorModeContext)

  useEffect(() => {
    alanBtn({
        key: '97186192f07ffeb8f2bc358a7062641e2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: ({ command, mode }) => {
          if (command === 'changeMode') {
            if(mode === 'light') {
              setMode('light')
            } else {
              setMode('dark')
            }
          }
          if (command === 'login') {
            fetchToken();
            
          }
          if (command === 'logout') {
            localStorage.clear();
            window.location.href = "/";
          }
        }
    });
  }, []); 

  return (
    <div>Alan</div>
  )
}

export default useAlan