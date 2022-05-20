import styled from 'styled-components';

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
  width: 60vw;
  max-width: 600px;
`;

export const StyledForm = styled.form`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px solid black;
  border-radius: 10px;

  & > h4 {
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & > input {
    padding: 0 10px;
    height: 30px;
  }
`;

export const StyledButton = styled.button`
  width: 150px;
  height: 40px;
  border: 2px solid black;
  border-radius: 5px;
`;

export const StyledDangerBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  border: 2px solid darkred;
  border-radius: 10px;
  font-size: 0.9rem;

  & span {
    display: block;
    font-weight: 700;
  }
`;

export const StyledButtonDelete = styled(StyledButton)`
  border: 2px solid darkred;
`;
