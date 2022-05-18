import styled from 'styled-components';

export const StyledModalContainer = styled.div`
  position: relative;
  padding: 30px;
  background-color: #ffffff;
  overflow: hidden;
`;

export const StyledButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: lightgray;
  transition: background-color 0.25s;

  &:hover {
    background-color: gray;
  }
`;

export const StyledModalContent = styled.section`
  width: 100%;
  height: 100%;
`;
