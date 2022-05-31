import { LanguageOption } from '../interfaces/common';

export const routerPaths = {
  main: '/',
  welcome: 'welcome',
  profile: 'profile',
  auth: 'auth',
  board: 'board',
  boardById: 'board/:id/:title',
  default: '*',
};

export const LOCAL_STORAGE_KEYS = {
  user: 'user',
};

export const NAME_VALIDATOR = /^[a-zA-Z -]{2,30}$/;
export const MIN_PASSWORD_LENGTH = 6;
export const AUTO_CLOSE_DELAY = 2000;
export const COUNT_SHOW = 1;

export const AVAILABLE_LANGUAGES: LanguageOption[] = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'ru',
    label: 'Русский',
  },
];

export const DEFAULT_LANGUAGE = AVAILABLE_LANGUAGES[0];

export const DND_ITEM_TYPES = {
  column: 'column',
  task: 'task',
};

export const TITLE_ROWS = 1;

const SIZE = {
  MOBILE: '320px',
  TABLET: '768px',
  LAPTOP: '1024px',
};

export const device = {
  MOBILE: `(max-width: ${SIZE.MOBILE})`,
  TABLET: `(max-width: ${SIZE.TABLET})`,
  LAPTOP: `(max-width: ${SIZE.LAPTOP})`,
};
