import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 0 auto;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 50vw;
  min-width: 300px;
  max-width: 500px;
  height: 40vh;
  max-height: 300px;
`;

export const StyledInput = styled.input`
  padding: 0 10px;
  width: 80%;
  height: 40px;
  font-size: 1.1rem;
`;

export const StyledButtonCreate = styled.button`
  width: 120px;
  height: 50px;
`;
