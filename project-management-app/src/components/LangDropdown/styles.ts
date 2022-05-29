import { StylesConfig } from 'react-select';
import { device } from '../../constants/common';
import { LanguageOption } from '../../interfaces/common';
import { baseTheme } from '../../styles/theme';

const getCustomStyles = (sticky: boolean) => {
  const customStyles: StylesConfig<LanguageOption> = {
    singleValue: (base) => ({
      ...base,
      width: '100%',
      textAlign: 'center',
      color: sticky ? `${baseTheme.colors.fontHover}` : `${baseTheme.colors.font}`,
      ':hover': {
        color: sticky ? `${baseTheme.colors.fontHover}` : `black`,
      },
      [`@media ${device.TABLET}`]: {
        marginLeft: '5px',
        color: 'inherit',
      },
    }),
    valueContainer: (base) => ({
      ...base,
      height: '100%',
      width: '100%',
    }),
    control: (base) => ({
      ...base,
      width: '90px',
      lineHeight: sticky ? '20px' : '30px',
      height: sticky ? '20px' : '30px',
      border: 'none',
      borderBottom: '2px solid transparent',
      boxShadow: 'none',
      borderRadius: '0',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      fontSize: '16px',
      color: `${baseTheme.colors.font}`,
      [`@media ${device.TABLET}`]: {
        borderBottom: 'none',
        fontSize: '18px',
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
        ? sticky
          ? `${baseTheme.colors.bg.quaternary}`
          : `${baseTheme.colors.bg.secondary}`
        : isFocused
        ? 'lightgray'
        : 'white',
      color: isSelected
        ? sticky
          ? `${baseTheme.colors.fontHover}`
          : `${baseTheme.colors.font}`
        : `${baseTheme.colors.font}`,
      cursor: 'pointer',
      transition: 'all 0.5s',
    }),
    menu: (base) => ({
      ...base,
      border: `2px solid ${baseTheme.colors.font}`,
      [`@media ${device.TABLET}`]: {
        top: '-30px',
        right: '110px',
        padding: '5px 0',
        width: 'auto',
        borderWidth: '3px',
      },
    }),
    dropdownIndicator: () => ({
      display: 'none',
    }),
  };

  return customStyles;
};

export default getCustomStyles;
