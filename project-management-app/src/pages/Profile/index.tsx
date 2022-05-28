import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../../components/ProfileForm';
import { routerPaths } from '../../constants/common';
import { useUserSelector } from '../../store/slices/user';

function Profile() {
  const navigate = useNavigate();
  const user = useUserSelector();

  useEffect(() => {
    if (!user) {
      navigate(`/${routerPaths.welcome}`, { replace: true });
    }
  }, [user, navigate]);

  return (
    <>
      <h2>Edit profile</h2>
      <ProfileForm />
    </>
  );
}

export default Profile;
