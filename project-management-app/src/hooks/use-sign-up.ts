import { useMutation } from 'react-query';
import { URLS } from '../constants/api';
import { AuthorizedUser, UnauthorizedUser } from '../interfaces/user';
import { create } from '../utils/api';
import { setToLocalStorage } from '../utils/common';

const useSignUp = () => {
  const signUp = useMutation(
    async (user: UnauthorizedUser) => {
      const newUser = create<UnauthorizedUser, Omit<AuthorizedUser, 'token'>>(URLS.signup, user);
      return newUser;
    },
    {
      onSuccess: (newUser) => setToLocalStorage('user', newUser),
    }
  );

  return signUp;
};

export default useSignUp;
