import React, { useEffect, useState } from 'react';
import { FeatchFilm } from 'services/GetTrandingMovie';
import Form from 'components/Form';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const changeQuery = query => {
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

      {movies ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id.toString()}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Movies;
