import { Theme } from '../interfaces/common';

export const baseTheme: Theme = {
  fontFamily: {
    primary: 'GoogleSans',
  },

  colors: {
    bg: {
      primary: '#fffffe',
      secondary: '#b4e197',
      tertiary: '#ffde36',
    },

    border: {
      primary: '#323232',
      secondary: '#4e944f',
      error: '#ffd36e',
    },

    font: '#323232',

    button: {
      primary: {
        bg: '#4e944f',
        font: '#fffffe',
        hover: '#4e944fcc',
      },

      success: {
        bg: '#b4e197',
        font: '#fffffe',
        hover: '#b4e197cc',
      },

      warning: {
        bg: '#ae2012',
        font: '#fffffe',
        hover: '#ae2012cc',
      },
    },
  },
};
