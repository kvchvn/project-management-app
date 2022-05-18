import React from 'react';
import { ToastContainer } from 'react-toastify';

function ToastyContainer() {
  return (
    <ToastContainer
      limit={1}
      position="top-center"
      autoClose={2000}
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
