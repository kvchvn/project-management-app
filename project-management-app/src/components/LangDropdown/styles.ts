import { StylesConfig } from 'react-select';
import { device } from '../../constants/common';
import { LanguageOption } from '../../interfaces/common';
import { baseTheme } from '../../styles/theme';

export const customStyles: StylesConfig<LanguageOption> = {
  singleValue: (base) => ({
    ...base,
    margin: '0',
    height: '28px',
    width: '100%',
    textAlign: 'center',
    color: `${baseTheme.colors.font}`,
    ':hover': {
      color: `black`,
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0',
  }),
  control: (base) => ({
    ...base,
    width: '80px',
    lineHeight: '30px',
    border: 'none',
    borderBottom: '2px solid transparent',
    boxShadow: 'none',
    borderRadius: '0',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    fontSize: '16px',
    color: `${baseTheme.colors.font}`,
    [`@media ${device.LAPTOP}`]: {
      borderBottom: 'none',
    },
    ':hover': {
      borderBottom: '2px solid black',
      [`@media ${device.LAPTOP}`]: {
        borderBottom: 'none',
      },
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (base, { isSelected, isFocused }) => ({
    ...base,
    backgroundColor: isSelected
      ? `${baseTheme.colors.bg.secondary}`
      : isFocused
      ? '#f1f2f4'
      : 'white',
    color: `${baseTheme.colors.font}`,
    cursor: 'pointer',
  }),
  menu: (base) => ({
    ...base,
    border: `2px solid ${baseTheme.colors.font}`,
    [`@media ${device.LAPTOP}`]: {
      top: '0',
      right: '90px',
      padding: '5px 0',
      width: 'auto',
      borderWidth: '3px',
    },
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
};
