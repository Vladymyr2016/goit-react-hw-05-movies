import React, { useEffect, useState } from 'react';
import { FeatchReviews } from 'services/GetTrandingMovie';

const Reviews = ({ movieId }) => {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    FeatchReviews(movieId)
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [movieId]);
  console.log(movies);
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
