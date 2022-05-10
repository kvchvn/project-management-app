import React from 'react';

import AuthForm from '../../components/AuthForm';
import { useAuthorization } from '../../hooks';

function Authorization() {
  const { isSignUpForm, handlePageMode, handleSubmit } = useAuthorization();

  return (
    <>
      <h2>Authorization page</h2>
      <AuthForm isSignUpForm={isSignUpForm} onSubmit={handleSubmit} />
      <div>
        {isSignUpForm && <span>Have an account?</span>}
        <button onClick={handlePageMode}>{isSignUpForm ? 'Sign in' : 'Sign up'}</button>
      </div>
    </>
  );
}

export default Authorization;
