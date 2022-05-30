import styled from 'styled-components';

export const StyledForm = styled.form`
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 80vw;
  max-width: 400px;
  height: 30vh;
  max-height: 300px;
`;

export const StyledInput = styled.input`
  /* padding: 10px; */
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.secondary + 'b3'};
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;
