import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FeatchReviews } from 'services/GetTrandingMovie';

const Reviews = () => {
  const { movieId } = useParams();
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    FeatchReviews(movieId)
      .then(data => setMovie(data.results))
      .catch(error => console.log(error));
  }, [movieId]);
  console.log(movies);
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <p>{movie.author}</p>
            <p>{movie.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
