import React from 'react';
import Select from 'react-select';

function Dropdown() {
  const options = ['ru', 'eng'];

  return <Select options={options} />;
}

export default Dropdown;
