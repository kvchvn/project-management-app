import styled, { keyframes } from 'styled-components';

const comingFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100vw);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

export const StyledModalContainer = styled.div`
  position: relative;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  animation: ${comingFromLeft} 0.5s ease-out;
  font-size: 18px;

  &:hover > button {
    transform: none;
  }
`;

export const StyledButtonClose = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
  transform: translateY(-200px);
  transition: all 0.25s;

  &:hover {
    background-color: gray;
  }
`;

export const StyledModalContent = styled.section`
  width: 100%;
  height: 100%;
`;
