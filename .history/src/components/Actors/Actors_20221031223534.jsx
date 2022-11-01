import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Actors = () => {
  const { id } = useParams();
  console.log("Actors")
  console.log(id)
  
  return (
    <div>Actors</div>
  )
}

export default Actors