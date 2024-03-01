import React, { useEffect, useState } from 'react';
import { FeatchTrendingDay } from 'services/GetTrandingMovie';
// import FeatchTrendingDay from '../../services/GetTrandingMovie.js';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    console.log(1);
    const fetchData = async () => {
      try {
        const data = await FeatchTrendingDay();
        setMovies(data);
      } catch (error) {
        console.log('error');
      }
    };

    fetchData();
  }, []);
  console.log(movies);
  return (
    <div>
      <h1>Trending today</h1>

      {movies ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id.toString()}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
