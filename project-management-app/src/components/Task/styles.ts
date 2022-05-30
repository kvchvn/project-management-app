import styled from 'styled-components';

export const StyledForm = styled.form`
  border: 1px solid red;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 90vw;
  max-width: 400px;
  height: 40vh;
  max-height: 300px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  width: 140px;
  height: 40px;
  border: none;
  text-align: center;
  border-radius: 10px;
  transition: background-color 0.25s;

  &:hover {
    background-color: lightgray;
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
    background-color: lightgray;
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid gray;
`;

export const StyledButtonSubmit = styled(StyledButton).attrs({
  type: 'submit',
})`
  background-color: gray;
`;
