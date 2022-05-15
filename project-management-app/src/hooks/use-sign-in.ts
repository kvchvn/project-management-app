import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../constants/api';
import { routerPaths } from '../constants/common-constants';
import { AuthorizedUser, UnauthorizedUser } from '../interfaces/user';
import { signIn as userSignIn } from '../utils/api';
import { setToLocalStorage } from '../utils/common';

type UserSignIn = Pick<UnauthorizedUser, 'login' | 'password'>;

const useSignIn = () => {
  const navigate = useNavigate();

  const signIn = useMutation(
    async (user: UserSignIn) => {
      const { token } = await userSignIn<UserSignIn, Pick<AuthorizedUser, 'token'>>(
        URLS.signin,
        user
      );
      return token;
    },
    {
      onSuccess: (token) => {
        setToLocalStorage('token', token);
        navigate(routerPaths.main);
      },
    }
  );

  return signIn;
};

export default useSignIn;
