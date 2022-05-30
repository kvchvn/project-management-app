import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../../components/ProfileForm';
import { routerPaths } from '../../constants/common';
import { useUserSelector } from '../../store/selectors';
import StyledPageTitle from '../../styles/components/StyledPageTitle';

function Profile() {
  const navigate = useNavigate();
  const { user } = useUserSelector();
  const { t } = useTranslation();

  useEffect(() => {
    if (!user) {
      navigate(`/${routerPaths.welcome}`, { replace: true });
    }
  }, [user, navigate]);

  return (
    <>
      <StyledPageTitle>{t('profilePage.title')}</StyledPageTitle>
      <ProfileForm />
    </>
  );
}

export default Profile;
