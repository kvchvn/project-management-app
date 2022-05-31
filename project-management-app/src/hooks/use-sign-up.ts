import { useMutation, UseMutationOptions } from 'react-query';
import { URLS } from '../constants/api';
import { AuthorizedUser, UnauthorizedUser } from '../interfaces/user';
import { create } from '../utils/api';

const useSignUp = (
  options?: UseMutationOptions<Omit<AuthorizedUser, 'token'>, unknown, UnauthorizedUser, unknown>
) => {
  const signUp = useMutation(async (user: UnauthorizedUser) => {
    const newUser = create<UnauthorizedUser, Omit<AuthorizedUser, 'token'>>(URLS.signup, user);
    return newUser;
  }, options);

  return signUp;
};

export default useSignUp;
