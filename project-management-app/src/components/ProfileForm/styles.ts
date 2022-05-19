import styled from 'styled-components';
import { StyledInputContainer } from '../AuthForm/styles';

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
  width: 60vw;
  max-width: 600px;
`;

export const StyledForm = styled.form`
  width: 100%;
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
`;

export const StyledButtonDelete = styled.button`
  width: 150px;
  height: 40px;
  border: 2px solid darkred;
  border-radius: 5px;
`;

export { StyledInputContainer };
