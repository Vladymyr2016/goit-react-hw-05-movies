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
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </>
        <button className={s.btn} onClick={() => navigate('/')}>
          Go back
        </button>
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>overview</p>
        <p>{movie.overview}</p>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
