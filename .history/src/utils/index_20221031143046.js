import axios from "axios";

const moviesApi = axios.create({
  baseUrl: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY
  }
})

export const fetchToken = async () => {

}