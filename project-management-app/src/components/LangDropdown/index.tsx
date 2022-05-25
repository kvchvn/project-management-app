import React from 'react';
import { useDispatch } from 'react-redux';
import Select, { MultiValue, SingleValue } from 'react-select';
import { AVAILABLE_LANGUAGES } from '../../constants/common';
import { LanguageOption } from '../../interfaces/common';
import { setLanguage, useLangSelector } from '../../store/slices/lang';
import { customStyles } from './styles';

function LangDropdown() {
  const currentLang = useLangSelector();
  const options = AVAILABLE_LANGUAGES;
  const dispatch = useDispatch();

  const handleChange = (option: MultiValue<LanguageOption> | SingleValue<LanguageOption>) =>
    dispatch(setLanguage(option as LanguageOption));

  return (
    <Select
      options={options}
      isSearchable={false}
      defaultValue={currentLang}
      styles={customStyles}
      onChange={handleChange}
    />
  );
}

export default LangDropdown;
