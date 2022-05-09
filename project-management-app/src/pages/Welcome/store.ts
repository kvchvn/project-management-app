import { configureStore } from '@reduxjs/toolkit';
import authReduser from './reduser';

export const store = configureStore({
  reducer: {
    auth: authReduser,
  },
});