import React, { useEffect, useState } from 'react';
import { FeatchTrendingDay } from 'services/GetTrandingMovie';
// import FeatchTrendingDay from '../../services/GetTrandingMovie.js';
import { Link } from 'react-router-dom';
import s from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
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
  return (
    <div className={s.container}>
      <h1 className={s.title}>Trending today</h1>

      {movies ? (
        <ul className={s.items}>
          {movies.map(movie => (
            <li className={s.item} key={movie.id}>
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
