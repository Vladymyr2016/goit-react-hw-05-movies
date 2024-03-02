import React, { useEffect, useState } from 'react';
import { FeatchFilm } from 'services/GetTrandingMovie';
import Form from 'components/Form';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const changeQuery = query => {
    console.log(query);
    setSearchParams({ query });
  };
  useEffect(() => {
    FeatchFilm(query)
      .then(data => setMovies(data))
      .catch(error => console.log(error));
  }, [query]);

  return (
    <div>
      <Form changeQuery={changeQuery} />
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id.toString()}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
              <p>overview</p>
              <p>{movie.overview}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
