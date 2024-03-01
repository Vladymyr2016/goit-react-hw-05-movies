import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import NotFound from './NotFound/NotFound';
import Layout from './Layout/Layout';
import MovieId from './Movies/MovieId';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieId />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
