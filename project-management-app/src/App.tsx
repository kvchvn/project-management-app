import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout/Layout';
import { routerPaths } from './constants/common-constants';
import Authorization from './pages/Authorization/Authorization';
import Board from './pages/Board/Board';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import Welcome from './pages/Welcome/Welcome';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
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
  );
}

export default App;
