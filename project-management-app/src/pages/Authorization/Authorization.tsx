import React from 'react';

import AuthForm from '../../components/AuthForm';
import { useAuthorization } from '../../hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Authorization() {
  const { isSignUpForm, handlePageMode, handleSubmit, signUp, signIn, isLoading } =
    useAuthorization();

  return (
    <>
      <h2>Authorization page</h2>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <AuthForm isSignUpForm={isSignUpForm} onSubmit={handleSubmit} />
          <div>
            {signUp.isError && <span>It seems like user already exists. Try to sign in</span> && toast.error('bad user')}
            {signIn.isError && <span>Login and password do not match</span>}
            <div>
              {isSignUpForm && <span>Have an account?</span>}
              <button onClick={handlePageMode}>{isSignUpForm ? 'Sign in' : 'Sign up'}</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Authorization;
