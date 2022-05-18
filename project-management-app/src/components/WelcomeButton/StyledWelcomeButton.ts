import styled from 'styled-components';

export const StyledWelcomeButton = styled.button`
  min-width: 100px;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin-right: 10px;
  background: #4676d7;
  font-size: 18px;
  cursor: pointer;
  &: hover {
    background: #1d49aa;
  }
  &: focus {
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
  }
`;
