import axios, { AxiosError } from 'axios';
import { authAxios, DEFAULT_SERVER_ERROR, URLS } from '../constants/api';
import { AuthorizedUser, UnauthorizedUser } from '../interfaces/user';
import { ServerError } from '../interfaces/common';

export const checkPassword = async (userData: Omit<UnauthorizedUser, 'name'>) => {
  const response = await axios
    .post<Pick<AuthorizedUser, 'token'>>(URLS.signin, userData)
    .catch(() => ({ data: { token: '' } }));
  return response.data;
};

export const updateUser = async (userId: string, newUserData: UnauthorizedUser) => {
  const response = await authAxios
    .put<Omit<AuthorizedUser, 'token'>>(`${URLS.users}/${userId}`, newUserData)
    .catch((error: AxiosError<ServerError>) => {
      alert(JSON.stringify(error.response));
      if (error.response) {
        return error.response;
      }
      return DEFAULT_SERVER_ERROR;
    });
  return response.data;
};

export const removeUser = async (userId: string) => {
  const response = await authAxios
    .delete(`${URLS.users}/${userId}1`)
    .catch((error: AxiosError<ServerError>) => {
      alert(JSON.stringify(error.response));
      if (error.response) {
        return error.response;
      }
      return DEFAULT_SERVER_ERROR;
    });

  return response.data;
};
