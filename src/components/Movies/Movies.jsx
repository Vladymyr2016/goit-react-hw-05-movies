import React, { useEffect, useState } from 'react';
import { FeatchFilm } from 'services/GetTrandingMovie';

const Movies = () => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    FeatchFilm()
      .then(data => setMovie(data))
      .catch(error => setError(error));
  }, []);

  return (
    <div>
      <h2>Movies</h2>
    </div>
  );
};

export default Movies;
