import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizedUser } from '../../interfaces/user';
import { getFromLocalStorage } from '../../utils/common';

const initialState: { user: AuthorizedUser | null } = {
  user: getFromLocalStorage('user'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onSignIn: (state, { payload }: PayloadAction<AuthorizedUser>) => {
      state.user = payload;
    },

    onSignOut: (state) => {
      state.user = null;
    },
  },
});

export const userReducer = userSlice.reducer;

export const { onSignIn, onSignOut } = userSlice.actions;
