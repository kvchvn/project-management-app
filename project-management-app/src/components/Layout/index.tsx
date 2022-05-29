import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import Footer from '../Footer';
import Header from '../Header';
import StyledMain from '../../styles/components/StyledMain';
import StyledWrapper from '../../styles/components/StyledWrapper';

function Layout() {
  const location = useLocation();

  return (
    <div id="page">
      {location.pathname !== '/' + routerPaths.welcome ? <Header /> : null}
      <StyledMain>
        <StyledWrapper>
          <Outlet />
        </StyledWrapper>
      </StyledMain>
      <Footer />
    </div>
  );
}

export default Layout;
