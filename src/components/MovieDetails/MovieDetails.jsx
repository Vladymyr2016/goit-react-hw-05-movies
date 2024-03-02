import React, { useEffect, useState } from 'react';
import Cast from 'components/Cast/Cast';
import { useNavigate, useParams } from 'react-router-dom';
import { FeatchDetailsFilm } from 'services/GetTrandingMovie';
import Reviews from 'components/Reviews/Reviews';

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
    <div>
      <button onClick={() => navigate('/')}>Go back</button>

      <>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <h2>{movie.title}</h2>
        <p>overview</p>
        <p>{movie.overview}</p>
      </>
      <Cast movieId={movieId} />

      <Reviews movieId={movieId} />
    </div>
  );
};

export default MovieDetails;
