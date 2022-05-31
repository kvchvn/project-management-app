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
  tasks: 'tasks',
};

export const DEFAULT_SERVER_ERROR = {
  data: {
    message: 'Something went wrong. Try again',
  },
};

export const UNAUTHORIZED_STATUS = 401;
export const STATUS_BAD_REQUEST = 400;
