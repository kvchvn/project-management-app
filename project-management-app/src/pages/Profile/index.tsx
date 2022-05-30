import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../../components/ProfileForm';
import { routerPaths } from '../../constants/common';
import { useUserSelector } from '../../store/selectors';

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
      <h2>{t('profilePage.title')}</h2>
      <ProfileForm />
    </>
  );
}

export default Profile;
