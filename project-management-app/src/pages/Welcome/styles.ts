import styled from 'styled-components';
import { device } from '../../constants/common-constants';
import { baseTheme } from '../../styles/theme';

export const StyledAbout = styled.div`
  max-width: 30%;
  min-width: 320px;
  background: #ebecf0;
  padding: 1rem;
`;
export const StyledWrapper = styled.div`
  background: #ebecf0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;
`;
export const StyledDescription = styled.p`
  padding: 30px 0;
`;

export const StyledButton = styled.button<{ variant: keyof typeof baseTheme.colors.button }>`
  min-width: 100px;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  margin-right: 10px;
  box-shadow: 0 0 0 1px ${baseTheme.colors.bgHover};
  background: ${(props) => baseTheme.colors.button[props.variant].bg};
  color: ${baseTheme.colors.button.primary.font}};
  font-size: 14px;
  cursor: pointer;
  &: hover {
    background: ${baseTheme.colors.bgHover};
    color: ${baseTheme.colors.button.primary.font};
  }
  &: focus {
    outline: none;
    box-shadow: 0 0 0 3px ${baseTheme.colors.bgHover};
  }
  @media ${device.mobile} {
    font-size: 12px;
    min-width: 70px;
    padding: 5px 0;
    margin-right: 5px;
  }
`;
