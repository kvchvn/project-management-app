export const routerPaths = {
  main: '/',
  welcome: 'welcome',
  profile: 'profile',
  auth: 'auth',
  board: 'board/',
  boardById: 'board/:id/:title',
  default: '*',
};

export const LOCAL_STORAGE_KEYS = {
  user: 'user',
};

export const NAME_VALIDATOR = /^[a-zA-Z -]{2,30}$/;
export const MIN_PASSWORD_LENGTH = 6;
