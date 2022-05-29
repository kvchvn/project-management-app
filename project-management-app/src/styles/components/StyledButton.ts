import styled from 'styled-components';
import { device } from '../../constants/common';
import { baseTheme } from '../theme';

const StyledButton = styled.button<{ variant: keyof typeof baseTheme.colors.button }>`
  border: none;
  border-radius: 5px;
  padding: 0.75em 1em;
  margin-right: 10px;
  box-shadow: 0 0 0 1px ${({ theme, variant }) => theme.colors.button[variant].hover};
  background: ${({ theme, variant }) => theme.colors.button[variant].bg};
  color: ${({ theme, variant }) => theme.colors.button[variant].font};
  font-size: 16px;
  font-size: inherit;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background: ${({ theme, variant }) => theme.colors.button[variant].hover};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme, variant }) => theme.colors.button[variant].hover};
  }
  @media ${device.MOBILE} {
    font-size: 12px;
    min-width: 70px;
    margin-right: 5px;
  }
`;

export default StyledButton;
