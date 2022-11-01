import axios from "axios";

const moviesApi = axios.create({
  baseUrl: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get("/authentication/token/new");
    const token = data.request_token;

    if (data.success) {
      localStorage.setItem("request_token", token);

      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.redirect}/approved`
    }
  } catch (error) {
    console.log("Sorry, Your token could not be created");
  }
};
