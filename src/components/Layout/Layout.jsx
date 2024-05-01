import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <header>
        <ul className={s.items}>
          <li className={s.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={s.item}>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
