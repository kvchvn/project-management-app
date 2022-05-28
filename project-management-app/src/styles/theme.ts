import { Theme } from '../interfaces/common';

export const baseTheme: Theme = {
  fontFamily: {
    primary: 'GoogleSans',
  },

  colors: {
    bg: {
      primary: '#fffffe',
      secondary: '#b4e197',
    },

    border: {
      primary: '#323232',
      secondary: '#4e944f',
    },

    font: '#323232',

    button: {
      primary: {
        bg: '#4e944f',
        font: '#fffffe',
        hover: '#4e944fb3',
      },

      success: {
        bg: '#b4e197',
        font: '#fffffe',
        hover: '#b4e197b3',
      },

      warning: {
        bg: '#ffd36e',
        font: '#fffffe',
        hover: '#ffd36eb3',
      },
    },
  },
};
