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
