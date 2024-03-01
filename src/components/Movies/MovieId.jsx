import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FeatchDetailsFilm } from 'services/GetTrandingMovie';

const MovieId = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    FeatchDetailsFilm(movieId)
      .then(data => setMovie(data))
      .catch(error => setError(error));
  }, [movieId]);

  console.log(movie);

  //   const { title, overview, poster_path } = movie;

  if (!movie) {
    return <p> Loading ...</p>;
  }
  return (
    <div>
      <button onClick={() => navigate('/')}>Go back</button>

      <>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <h2>{movie.title}</h2>
        <p>overview</p>
        <p>{movie.overview}</p>
      </>
    </div>
  );
};

export default MovieId;
