import React, { useEffect, useState } from 'react';
import { FeatchCredits } from 'services/GetTrandingMovie';

const Cast = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    FeatchCredits()
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [setMovie]);

  console.log(movie);
  return (
    <div>
      <li>
        <p>{}</p>
      </li>
    </div>
  );
};

export default Cast;
