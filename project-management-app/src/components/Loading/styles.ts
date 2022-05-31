import styled, { keyframes } from 'styled-components';

import { spinnerIcon } from '../../assets/icons';

export const StyledBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;

const spin = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
    transform: rotate(180deg) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.span`
  display: block;
  width: 50px;
  height: 50px;
  background: no-repeat url(${spinnerIcon}) 50% 50% / contain;
  animation: ${spin} linear 2s infinite;
`;
