import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import Footer from '../Footer';
import Header from '../Header';

function Layout() {
  const location = useLocation();
  const locationsWithoutHeader = [`/${routerPaths.welcome}`, `/${routerPaths.auth}`];

  return (
    <>
      {locationsWithoutHeader.includes(location.pathname) ? null : <Header />}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
