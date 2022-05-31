import axios, { AxiosError } from 'axios';
import { DEFAULT_SERVER_ERROR, URLS } from '../constants/api';
import { AuthorizedUser, UnauthorizedUser } from '../interfaces/user';
import { ServerError } from '../interfaces/common';

export const checkPassword = async (userData: Omit<UnauthorizedUser, 'name'>) => {
  const response = await axios
    .post<Pick<AuthorizedUser, 'token'>>(URLS.signin, userData)
    .catch(() => ({ data: { token: '' } }));
  return response.data;
};

export const updateUser = async (userId: string, newUserData: UnauthorizedUser, token: string) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const response = await axios
    .put<Omit<AuthorizedUser, 'token'>>(`${URLS.users}/${userId}`, newUserData, config)
    .catch((error: AxiosError<ServerError>) => {
      if (error.response) {
        return error.response;
      }
      return DEFAULT_SERVER_ERROR;
    });
  return response.data;
};

export const removeUser = async (userId: string, token: string) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const response = await axios
    .delete<void>(`${URLS.users}/${userId}`, config)
    .catch((error: AxiosError<ServerError>) => {
      if (error.response) {
        return error.response;
      }
      return DEFAULT_SERVER_ERROR;
    });

  return response.data;
};
