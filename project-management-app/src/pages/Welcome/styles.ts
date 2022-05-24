import styled from 'styled-components';

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

interface ButtonProps {
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
}
export const Button = styled.button<ButtonProps>`
  min-width: 100px;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  margin-right: 10px;
  box-shadow: 0 0 0 1px #039be5;
  background: ${(props) => (props.primary ? '#4676d7' : '#ffffff')};
  color: ${(props) => (props.primary ? '#ffffff' : '#039be5')};
  font-size: 14px;
  cursor: pointer;
  &: hover {
    background: #1d49aa;
    color: #ffffff;
  }
  &: focus {
    outline: none;
    box-shadow: 0 0 0 3px #1d49aa;
  }
`;
