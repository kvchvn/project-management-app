import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { onSignIn } from '../store/slices/user';
import { URLS } from '../constants/api';
import { routerPaths } from '../constants/common-constants';
import { AuthorizedUser, UnauthorizedUser } from '../interfaces/user';
import { signIn as userSignIn } from '../utils/api';
import { setToLocalStorage } from '../utils/common';

type UserSignIn = Pick<UnauthorizedUser, 'login' | 'password'>;

const useSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        setToLocalStorage('token', token);
        dispatch(onSignIn({ token }));
        navigate(routerPaths.main);
      },
    }
  );

  return signIn;
};

export default useSignIn;
