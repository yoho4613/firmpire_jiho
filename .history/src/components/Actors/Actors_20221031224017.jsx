import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetActorDetailQuery } from '../../services/TMDB';


const Actors = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetActorDetailQuery({id})
  console.log("Actors")
  console.log(data)
  
  return (
    <div>Actors</div>
  )
}

export default Actors