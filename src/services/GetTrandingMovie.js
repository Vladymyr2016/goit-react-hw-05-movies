import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'cab39ac6588bb4b72e7fd8c3a37c0650';

export const FeatchTrendingDay = async () => {
  const { data } = await axios.get('trending/movie/day', {
    params: {
      page: 1,
      api_key: API_KEY,
    },
  });
  return data.results;
};

export const FeatchDetailsFilm = async id => {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      // query,
      movie_id: id,
      page: 1,
      api_key: API_KEY,
    },
  });
  return data;
};

export const FeatchFilm = async query => {
  const { data } = await axios.get('search/movie', {
    params: {
      query,
      page: 1,
      api_key: API_KEY,
    },
  });
  return data.results;
};

export const FeatchCredits = async id => {
  const { data } = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      movie_id: id,
    },
  });
  console.log(data);
  return data.results;
};

export const FeatchReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, {
    params: {
      page: 1,
      api_key: API_KEY,
      movie_id: id,
    },
  });
  console.log(data);
  return data.results;
};
