import styled from 'styled-components';

export const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100px;
  margin: 1rem auto 0;
  text-align: center;

  & > button {
    padding: 0.5em 0.75em;
  }
`;
