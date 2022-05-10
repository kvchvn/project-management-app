import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { URLS } from '../constants/api';
import { AuthorizedUser, UnauthorizedUser } from '../interfaces/user';
import { onSignUp } from '../store/slices/user';
import { create } from '../utils/api';
import { setToLocalStorage } from '../utils/common';

const useSignUp = () => {
  const dispatch = useDispatch();

  const signUp = useMutation(
    async (user: UnauthorizedUser) => {
      const newUser = create<UnauthorizedUser, Omit<AuthorizedUser, 'token'>>(URLS.signup, user);
      return newUser;
    },
    {
      onSuccess: (newUser) => {
        setToLocalStorage('user', newUser);
        dispatch(onSignUp(newUser));
      },
    }
  );

  return signUp;
};

export default useSignUp;
