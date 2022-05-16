import styled, { keyframes } from 'styled-components';

const scaleUpAppearing = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100vw);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledModalContainer = styled.div`
  position: relative;
  width: 90vw;
  max-width: 600px;
  min-height: 500px;
  height: 50vh;
  background-color: #ffffff;
  overflow: hidden;
  animation: ${scaleUpAppearing} 0.5s ease-out;
`;

export const StyledButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: lightgray;
`;

export const StyledModalContent = styled.section`
  width: 100%;
  height: 100%;
`;
