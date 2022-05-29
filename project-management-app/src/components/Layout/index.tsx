import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import Footer from '../Footer';
import Header from '../Header';
import StyledWrapper from '../../styles/components/StyledWrapper';

function Layout() {
  const location = useLocation();

  return (
    <div id="page">
      {location.pathname !== '/' + routerPaths.welcome ? <Header /> : null}
      <StyledWrapper>
        <Outlet />
      </StyledWrapper>
      <Footer />
    </div>
  );
}

export default Layout;
