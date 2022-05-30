import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { routerPaths } from '../../constants/common';
import { StyledAbout, StyledWelcomeWrapper, StyledDescription } from './styles';
import StyledButton from '../../styles/components/StyledButton';
import { useUserSelector } from '../../store/selectors';

function Welcome() {
  const { user } = useUserSelector();
  const { t } = useTranslation();
  return (
    <>
      <Navbar>
        {!user ? (
          <div>
            <Link to={`/${routerPaths.auth}`} state={'signIn'}>
              <StyledButton variant="primary">{t('authPage.signIn')}</StyledButton>
            </Link>
            <Link to={`/${routerPaths.auth}`} state={'signUp'}>
              <StyledButton variant="primary">{t('authPage.signUp')}</StyledButton>
            </Link>
          </div>
        ) : (
          <Link to={routerPaths.main}>
            <StyledButton variant="primary">{t('welcomePage.toMainPage')}</StyledButton>
          </Link>
        )}
      </Navbar>
      <StyledWelcomeWrapper>
        <StyledAbout>
          <h2>{t('welcomePage.about.titles.project')}</h2>
          <StyledDescription>{t('welcomePage.about.descriptions.project')}</StyledDescription>
        </StyledAbout>
        <StyledAbout>
          <h2>{t('welcomePage.about.titles.course')}</h2>
          <StyledDescription>{t('welcomePage.about.descriptions.course')}</StyledDescription>
        </StyledAbout>
        <StyledAbout>
          <h2>{t('welcomePage.about.titles.team')}</h2>
          <StyledDescription>{t('welcomePage.about.descriptions.team')}</StyledDescription>
        </StyledAbout>
      </StyledWelcomeWrapper>
    </>
  );
}

export default Welcome;
