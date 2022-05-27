import { useEffect } from 'react';
import AuthForm from '../../components/AuthForm';
import Loading from '../../components/Loading';
import { useAuthorization } from '../../hooks';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import { AuthMode } from '../../hooks/use-authorization';

function Authorization() {
  const location = useLocation();
  const authMode = location.state as AuthMode;
  const { isSignUpForm, handlePageMode, handleSubmit, signUp, signIn, isLoading } =
    useAuthorization(authMode);
  useEffect(() => {
    if (signUp.isError) toast.error('It seems like user already exists. Try to sign in');
    if (signIn.isError) toast.error('Login and password do not match');
  });

  return (
    <>
      <h2>Authorization page</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AuthForm isSignUpForm={isSignUpForm} onSubmit={handleSubmit} />
          <div>
            {signUp.isError && <span>It seems like user already exists. Try to sign in</span>}
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
