import { useLocation } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';
import Loading from '../../components/Loading';
import { useAuthorization } from '../../hooks';
import { AuthMode } from '../../hooks/use-authorization';

function Authorization() {
  const location = useLocation();
  const authMode = location.state as AuthMode;
  const { isSignUpForm, handlePageMode, handleSubmit, isLoading } = useAuthorization(authMode);

  return (
    <>
      <h2>Authorization page</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AuthForm isSignUpForm={isSignUpForm} onSubmit={handleSubmit} />
          <div>
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
