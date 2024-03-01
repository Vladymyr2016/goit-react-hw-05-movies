import React, { useEffect, useState } from 'react';
import { FeatchFilm } from 'services/GetTrandingMovie';
import Form from 'components/Form';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState();
  const [error, setError] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const changeQuery = query => {
    console.log(query);
    setSearchParams({ query });
  };
  useEffect(() => {
    FeatchFilm(query)
      .then(data => setMovies(data))
      .catch(error => setError(error));
  }, [query]);

  return (
    <div>
      <Form changeQuery={changeQuery} />
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id.toString()}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
