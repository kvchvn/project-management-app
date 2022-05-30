import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useSignIn from './use-sign-in';
import useSignUp from './use-sign-up';

import { UnauthorizedUser } from '../interfaces/user';
import { TStore } from '../store';
import { routerPaths } from '../constants/common';

export type AuthMode = 'signIn' | 'signUp';

const useAuthorization = (mode: AuthMode) => {
  const navigate = useNavigate();

  const [isSignUpForm, setIsSignUpForm] = useState(() => mode === 'signUp');

  const { user } = useSelector((store: TStore) => store.userReducer);

  useEffect(() => {
    if (user) navigate(routerPaths.main);
  }, [user, navigate]);

  const signUp = useSignUp();
  const { signIn, usersQueryResult } = useSignIn();

  const handleSubmit = async (values: UnauthorizedUser) => {
    if (isSignUpForm) await signUp.mutateAsync(values);

    await signIn.mutateAsync(values);
  };

  const handlePageMode = () => {
    setIsSignUpForm(!isSignUpForm);
    signUp.reset();
    signIn.reset();
  };

  return {
    isSignUpForm,
    handleSubmit,
    handlePageMode,
    isLoading: usersQueryResult.isLoading || signUp.isLoading || signIn.isLoading,
    signUp,
    signIn,
  };
};

export default useAuthorization;
