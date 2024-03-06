import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FeatchCredits } from 'services/GetTrandingMovie';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();
  useEffect(() => {
    FeatchCredits(movieId)
      .then(data => {
        console.log(data);
        return setCast(data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  console.log(cast);

  return (
    <>
      <>
        {cast ? (
          <div>
            <h3>Cast: {cast.title}</h3>
            <ul>
              {cast.map(actor => (
                <li key={actor.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    alt="actor"
                  />
                  <p>{actor.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading ... </p>
        )}
      </>
    </>
  );
};

export default Cast;
