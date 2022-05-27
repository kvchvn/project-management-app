import { Theme } from '../interfaces/common';

export const baseTheme: Theme = {
  fontFamily: {
    primary: 'GoogleSans',
  },

  colors: {
    bg: 'ffffff',
    font: '000000',
    bgHover: '#637cdf',

    button: {
      primary: {
        bg: '#83badb',
        font: 'ffffff',
      },

      success: {
        bg: '34603c',
        font: 'ffffff',
      },

      warning: {
        bg: '#bb514f',
        font: 'ffffff',
      },
    },
  },
};
