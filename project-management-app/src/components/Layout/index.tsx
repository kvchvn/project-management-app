import React from 'react';
import { matchPath, Outlet, useLocation } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import Footer from '../Footer';
import Header from '../Header';

function Layout() {
  const { pathname } = useLocation();
  const routesWithHeader = [routerPaths.main, routerPaths.boardById, routerPaths.profile];

  const showHeader = routesWithHeader.some((route) => matchPath({ path: `/${route}` }, pathname));

  return (
    <>
      {showHeader && <Header />}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
