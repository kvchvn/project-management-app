import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthForm from '../../components/AuthForm';
import { useSignIn, useSignUp } from '../../hooks';
import { routerPaths } from '../../constants/common-constants';
import { UnauthorizedUser } from '../../interfaces/user';
import { TStore } from '../../store';

function Authorization() {
  const navigate = useNavigate();

  const [isSignUpForm, setIsSignUpForm] = useState(true);

  const { user } = useSelector((store: TStore) => store.userReducer);

  useEffect(() => {
    if (user) navigate(routerPaths.main);
  }, [user, navigate]);

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
