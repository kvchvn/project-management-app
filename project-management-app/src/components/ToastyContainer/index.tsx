import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AUTO_CLOSE_DELAY, COUNT_SHOW } from '../../constants/common';

function ToastyContainer() {
  return (
    <ToastContainer
      limit={COUNT_SHOW}
      position="top-center"
      autoClose={AUTO_CLOSE_DELAY}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}

export default ToastyContainer;
