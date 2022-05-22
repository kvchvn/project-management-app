import { authAxios, URLS } from '../constants/api';
import { AuthorizedUser, UnauthorizedUser } from '../interfaces/user';

export const updateUser = async (userId: string, newUserData: UnauthorizedUser) => {
  const response = await authAxios
    .put<Omit<AuthorizedUser, 'token'>>(`${URLS.users}/${userId}`, newUserData)
    .catch((error) => error.response);
  return response.data;
};
