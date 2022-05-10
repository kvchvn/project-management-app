import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm';
import { useSignIn, useSignUp } from '../../hooks';
import { UnauthorizedUser } from '../../interfaces/user';

function Authorization() {
  const [isSignUpForm, setIsSignUpForm] = useState(true);

  const signUp = useSignUp();
  const signIn = useSignIn();

  const handleSubmit = async (values: UnauthorizedUser) => {
    if (isSignUpForm) await signUp.mutateAsync(values);

    await signIn.mutateAsync(values);
  };

  const handlePageStatus = () => setIsSignUpForm(!isSignUpForm);

  return (
    <>
      <h2>Authorization page</h2>
      <AuthForm isSignUpForm={isSignUpForm} onSubmit={handleSubmit} />
      <div>
        {isSignUpForm && <span>Have an account?</span>}
        <button onClick={handlePageStatus}>{isSignUpForm ? 'Sign in' : 'Sign up'}</button>
      </div>
    </>
  );
}

export default Authorization;
