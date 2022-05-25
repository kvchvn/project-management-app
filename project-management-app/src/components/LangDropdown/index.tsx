import React from 'react';
import { useTranslation } from 'react-i18next';
import Select, { MultiValue, SingleValue } from 'react-select';
import { AVAILABLE_LANGUAGES } from '../../constants/common';
import { LanguageOption } from '../../interfaces/common';
import { customStyles } from './styles';

function LangDropdown() {
  const options = AVAILABLE_LANGUAGES;
  const { i18n } = useTranslation();

  const handleChange = (option: MultiValue<LanguageOption> | SingleValue<LanguageOption>) =>
    i18n.changeLanguage((option as LanguageOption).value);

  return (
    <Select
      options={options}
      isSearchable={false}
      defaultValue={options.find((lang) => lang.value === i18n.language)}
      styles={customStyles}
      onChange={handleChange}
    />
  );
}

export default LangDropdown;
