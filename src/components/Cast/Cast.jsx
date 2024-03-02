import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FeatchCredits } from 'services/GetTrandingMovie';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();
  useEffect(() => {
    FeatchCredits(movieId)
      .then(data => setCast(data))
      .catch(error => console.log(error));
  }, [movieId]);

  console.log(cast);
  //   if (!cast) {
  //     return <p>Loading cast...</p>;
  //   }
  return (
    <div>
      <h3>Cast:</h3>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
