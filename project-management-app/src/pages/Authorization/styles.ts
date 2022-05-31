import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
  font-size: 18px;

  & > button {
    padding: 0 5px;
    padding-bottom: 3px;
    background-color: transparent;
    font-weight: bold;
    border: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid black;
    }
  }
`;
