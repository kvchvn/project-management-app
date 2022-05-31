import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  max-width: 400px;
  height: 30vh;
  max-height: 300px;

  & > span {
    color: ${({ theme }) => theme.colors.button.warning.bg};
  }
`;

export const StyledInput = styled.input`
  width: 140px;
  height: 40px;
  border: none;
  text-align: center;
  border-radius: 10px;
  transition: background-color 0.25s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.secondary + 'b3'};
  }
`;

export const StyledTextarea = styled.textarea`
  padding: 10px;
  width: 70%;
  height: 100px;
  text-align: center;
  border: none;
  border-radius: 10px;
  resize: none;
  cursor: pointer;
  transition: background-color 0.25s;
  margin-top: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.secondary + 'b3'};
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
