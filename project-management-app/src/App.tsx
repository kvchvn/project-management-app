import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { routerPaths } from './constants/common';
import ToastyContainer from './components/ToastyContainer';
import 'react-toastify/dist/ReactToastify.css';

const Main = React.lazy(() => import('./pages/Main'));
const Welcome = React.lazy(() => import('./pages/Welcome'));
const Authorization = React.lazy(() => import('./pages/Authorization'));
const Board = React.lazy(() => import('./pages/Board'));
const Profile = React.lazy(() => import('./pages/Profile'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <>
      <Routes>
        <Route path={routerPaths.main} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={routerPaths.welcome} element={<Welcome />} />
          <Route path={routerPaths.auth} element={<Authorization />} />
          <Route path={routerPaths.boardById} element={<Board />} />
          <Route path={routerPaths.profile} element={<Profile />} />
          <Route path={routerPaths.default} element={<NotFound />} />
        </Route>
      </Routes>
      <ToastyContainer />
    </>
  );
}

export default App;
