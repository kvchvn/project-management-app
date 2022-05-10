import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizedUser } from '../../interfaces/user';
import { getFromLocalStorage } from '../../utils/common';

const token = getFromLocalStorage<string>('token');

const initialState: { user?: Omit<AuthorizedUser, 'token'>; token?: string } = {
  user: token ? getFromLocalStorage('user') : undefined,
  token,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onSignUp: (state, { payload }: PayloadAction<Omit<AuthorizedUser, 'token'>>) => {
      state.user = payload;
    },

    onSignIn: (state, { payload }: PayloadAction<{ token: string }>) => {
      state.token = payload.token;
    },

    onSignOut: (state) => {
      state.user = undefined;
      state.token = undefined;
    },
  },
});

export const userReducer = userSlice.reducer;

export const { onSignIn, onSignOut, onSignUp } = userSlice.actions;
