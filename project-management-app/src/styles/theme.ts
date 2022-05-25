import { Theme } from '../interfaces/common';

export const baseTheme: Theme = {
  fontFamily: {
    primary: 'GoogleSans',
  },

  colors: {
    bg: 'white',
    font: 'black',

    button: {
      primary: {
        bg: 'blue',
        font: 'white',
      },

      success: {
        bg: 'green',
        font: 'white',
      },

      warning: {
        bg: 'red',
        font: 'white',
      },
    },
  },
};
