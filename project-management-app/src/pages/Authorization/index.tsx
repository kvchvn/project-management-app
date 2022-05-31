import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import AuthForm from '../../components/AuthForm';
import Loading from '../../components/Loading';
import { useAuthorization } from '../../hooks';
import { AuthMode } from '../../hooks/use-authorization';
import StyledPageTitle from '../../styles/components/StyledPageTitle';
import StyledWrapper from '../../styles/components/StyledWrapper';

function Authorization() {
  const location = useLocation();
  const authMode = location.state as AuthMode;
  const { isSignUpForm, handlePageMode, handleSubmit, isLoading } = useAuthorization(authMode);
  useAuthorization(authMode);
  const { t } = useTranslation();

  return (
    <>
      <StyledPageTitle>{t('authPage.title')}</StyledPageTitle>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledWrapper>
          <AuthForm isSignUpForm={isSignUpForm} onSubmit={handleSubmit} />
          <div>
            <div>
              {isSignUpForm && <span>{t('authPage.hasAccount')}</span>}
              <button onClick={handlePageMode}>
                {isSignUpForm ? t('authPage.signIn') : t('authPage.signUp')}
              </button>
            </div>
          </div>
        </StyledWrapper>
      )}
    </>
  );
}

export default Authorization;
