import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie';
const API_KEY = 'cab39ac6588bb4b72e7fd8c3a37c0650';

const FeatchInfo = async (query, page) => {
  const { data } = await axios.get('', {
    params: {
      query,
      page,
      key: API_KEY,
      include_adult: 'adult',

      primary_release_year: '',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return data;
};

export default FeatchInfo;
