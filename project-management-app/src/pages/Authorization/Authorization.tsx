import React, { useState } from 'react';
import { useSignIn, useSignOut, useSignUp } from '../../hooks';
import { getFromLocalStorage } from '../../utils/common';

function Authorization() {
  const name = 'John';
  const login = 'john6112';
  const password = '123456';
  const [token, setToken] = useState(getFromLocalStorage<string>('token'));

  const signUp = useSignUp();
  const signIn = useSignIn();
  const signOut = useSignOut();

  const handleSignUp = async () => {
    await signUp.mutateAsync({ name, login, password });
    await handleSignIn();
  };

  const handleSignIn = async () => {
    const token = await signIn.mutateAsync({ login, password });
    setToken(token);
  };

  const handleSignOut = () => {
    signOut();
    setToken('');
  };

  return (
    <>
      <h2>Authorization page</h2>
      {token ? (
        <>
          <p>Your token: {token}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <>
          <p>
            <strong>Name: </strong>
            <span>{name}</span>
          </p>
          <p>
            <strong>Login: </strong>
            <span>{login}</span>
          </p>
          <p>
            <strong>Password: </strong>
            <span>{password}</span>
          </p>
          {signUp.isError ? (
            <>
              <span>It seems like you&apos;ve been already signed up. Try to sign in.</span>
              <button onClick={handleSignIn}>Sign In</button>
            </>
          ) : (
            <button onClick={handleSignUp}>Sign Up</button>
          )}
        </>
      )}
    </>
  );
}

export default Authorization;
