import axios from 'axios';
import { authAxios, URLS } from '../constants/api';
import { AuthorizedUser, UnauthorizedUser } from '../interfaces/user';

export const checkPassword = async (userData: Omit<UnauthorizedUser, 'name'>) => {
  const response = await axios
    .post<Pick<AuthorizedUser, 'token'>>(URLS.signin, userData)
    .catch(() => ({ data: { token: '' } }));
  return response.data;
};

export const updateUser = async (userId: string, newUserData: UnauthorizedUser) => {
  const response = await authAxios
    .put<Omit<AuthorizedUser, 'token'>>(`${URLS.users}/${userId}`, newUserData)
    .catch((error) => error.response);
  return response.data;
};
