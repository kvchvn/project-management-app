import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { routerPaths } from './constants/common';
import Authorization from './pages/Authorization';
import Board from './pages/Board';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';
import ToastyContainer from './components/ToastyContainer/ToastyContainer';
import 'react-toastify/dist/ReactToastify.css';

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
