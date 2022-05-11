import { useMutation } from 'react-query';
import { URLS } from '../constants/api';
import { AuthorizedUser, UnauthorizedUser } from '../interfaces/user';
import { create } from '../utils/api';

const useSignUp = () => {
  const signUp = useMutation(async (user: UnauthorizedUser) => {
    const newUser = create<UnauthorizedUser, Omit<AuthorizedUser, 'token'>>(URLS.signup, user);
    return newUser;
  });

  return signUp;
};

export default useSignUp;
