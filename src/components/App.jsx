import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './Home/Home';
// import Movies from './Movies/Movies';
// import NotFound from './NotFound/NotFound';
// import Layout from './Layout/Layout';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./NotFound/NotFound'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const Layout = lazy(() => import('./Layout/Layout'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="movies" element={<Movies />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
