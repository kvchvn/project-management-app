import React from 'react';
import { matchPath, Outlet, useLocation } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import Footer from '../Footer';
import Header from '../Header';
<<<<<<< HEAD
import StyledMain from '../../styles/components/StyledMain';
=======
>>>>>>> 29e3438 (feat: create StyledWrapper and wrap with it Outlet)
import StyledWrapper from '../../styles/components/StyledWrapper';

function Layout() {
  const { pathname } = useLocation();
  const routesWithHeader = [routerPaths.main, routerPaths.boardById, routerPaths.profile];

  const showHeader = routesWithHeader.some((route) => matchPath({ path: `/${route}` }, pathname));

  return (
    <>
<<<<<<< HEAD
      {showHeader && <Header />}
      <StyledMain>
        <StyledWrapper>
          <Outlet />
        </StyledWrapper>
      </StyledMain>
=======
      {location.pathname !== '/' + routerPaths.welcome ? <Header /> : null}
      <StyledWrapper>
        <Outlet />
      </StyledWrapper>
>>>>>>> 29e3438 (feat: create StyledWrapper and wrap with it Outlet)
      <Footer />
    </>
  );
}

export default Layout;
