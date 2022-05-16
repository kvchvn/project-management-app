import styled, { keyframes } from 'styled-components';

const appearing = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleUpAppearing = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const StyledModalOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.93);
  z-index: 1000;
  overflow-y: hidden;
  animation: ${appearing} 0.5s ease-out;
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
