import { StylesConfig } from 'react-select';
import { DropdownOption } from '../../interfaces';

export const customStyles: StylesConfig<DropdownOption> = {
  control: (base) => ({
    ...base,
    width: '120px',
    height: '50px',
    lineHeight: '50px',
    border: '0',
    boxShadow: 'none',
    borderRadius: 'none',
    cursor: 'pointer',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (base, { isSelected, isFocused }) => ({
    ...base,
    backgroundColor: isSelected ? 'gray' : isFocused ? '#f1f2f4' : 'white',
    cursor: 'pointer',
  }),
};
