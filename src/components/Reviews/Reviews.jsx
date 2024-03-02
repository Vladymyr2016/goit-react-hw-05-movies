import React, { useEffect, useState } from 'react';
import { FeatchReviews } from 'services/GetTrandingMovie';

const Reviews = ({ movieId }) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    FeatchReviews(movieId)
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <div>
      <li>
        <p>{movie.title}</p>
      </li>
    </div>
  );
};

export default Reviews;
