import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';


const Alan = () => {
  useEffect(() => {
    alanBtn({
        key: '97186192f07ffeb8f2bc358a7062641e2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'go:back') {
            // Call the client code that will react to the received command
          }
        }
    });
  }, []); 
  
  return (
    <div>Alan</div>
  )
}

export default Alan