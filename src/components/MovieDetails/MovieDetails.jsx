import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { FeatchDetailsFilm } from 'services/GetTrandingMovie';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    FeatchDetailsFilm(movieId)
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [movieId]);

  console.log(movie);

  if (!movie) {
    return <p> Loading ...</p>;
  }
  return (
    <div className={s.container}>
      <div className={s.image}>
        <>
          <img
            className={s.img}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </>
        <nav>
          <ul className={s.items}>
            <li className={s.item}>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </nav>
        <button className={s.btn} onClick={() => navigate('/')}>
          Go back
        </button>
      </div>
      <div className={s.details}>
        <h2>{movie.title}</h2>
        <p>overview</p>
        <p>{movie.overview}</p>
      </div>
      <div className={s.cast}>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
