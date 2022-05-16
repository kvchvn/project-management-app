import React from 'react';
import Select from 'react-select';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '../../constants/common';
import { customStyles } from './styles';

function Dropdown() {
  const options = AVAILABLE_LANGUAGES;

  return (
    <Select
      options={options}
      isSearchable={false}
      defaultValue={DEFAULT_LANGUAGE}
      styles={customStyles}
    />
  );
}

export default Dropdown;
