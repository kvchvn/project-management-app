import axios from 'axios';
import { getFromLocalStorage } from '../utils/common';
import { AuthorizedUser } from '../interfaces/user';

const BASE_URL = 'https://gentle-fortress-75399.herokuapp.com';

export const URLS = {
  base: BASE_URL,
  signup: `${BASE_URL}/signup`,
  signin: `${BASE_URL}/signin`,
  boards: `${BASE_URL}/boards`,
  users: `${BASE_URL}/users`,
};

export const QUERY_KEYS = {
  users: 'users',
  columns: 'columns',
  allBoards: 'all-boards',
};

const USER: AuthorizedUser | undefined = getFromLocalStorage('user');
const TOKEN = USER ? USER.token : '';

export const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const DEFAULT_SERVER_ERROR = {
  data: {
    message: 'Something went wrong. Try again',
  },
};
