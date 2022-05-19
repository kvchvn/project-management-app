import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TStore } from '..';
import { DEFAULT_LANGUAGE } from '../../constants/common';
import { DropdownOption } from '../../interfaces/common';

const initialState: { lang: DropdownOption } = {
  lang: DEFAULT_LANGUAGE,
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<DropdownOption>) => {
      state.lang = action.payload;
    },
  },
});

export const useLangSelector = () => useSelector((state: TStore) => state.langReducer.lang);

export const langReducer = langSlice.reducer;

export const { setLanguage } = langSlice.actions;
