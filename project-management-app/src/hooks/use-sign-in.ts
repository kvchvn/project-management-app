import { useState } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import { onSignIn } from '../store/slices/user';
import { URLS } from '../constants/api';
import { AuthorizedUser, UnauthorizedUser } from '../interfaces/user';
import { signIn as userSignIn } from '../utils/api';
import { setToLocalStorage } from '../utils/common';
import useUsersQuery from './use-users-query';

type UserSignIn = Pick<UnauthorizedUser, 'login' | 'password'>;

const useSignIn = () => {
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  const usersQueryResult = useUsersQuery<Omit<AuthorizedUser, 'token'>>({
    token,
    onSuccess: (users) => {
      const signedUser = users?.find((u) => u.login === signIn.variables?.login);
      if (!signedUser) return;
      setToLocalStorage('user', { ...signedUser, token });
      dispatch(onSignIn({ ...signedUser, token }));
    },
  });

  const signIn = useMutation(
    async ({ login, password }: UnauthorizedUser) => {
      const { token } = await userSignIn<UserSignIn, Pick<AuthorizedUser, 'token'>>(URLS.signin, {
        login,
        password,
      });
      return token;
    },
    {
      onSuccess: (token) => {
        setToken(token);
        usersQueryResult.refetch();
      },
    }
  );

  return { signIn, usersQueryResult };
};

export default useSignIn;
