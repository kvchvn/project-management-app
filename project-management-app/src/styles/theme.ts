import { Theme } from '../interfaces/common';

export const baseTheme: Theme = {
  fontFamily: {
    primary: 'GoogleSans',
  },

  colors: {
    bg: '#fffffe',
    font: '#323232',
    bgHover: '#b4e197',

    button: {
      primary: {
        bg: '#4e944f',
        font: '#fffffe',
      },

      success: {
        bg: '#b4e197',
        font: '#fffffe',
      },

      warning: {
        bg: '#ffd36e',
        font: '#fffffe',
      },
    },
  },
};
