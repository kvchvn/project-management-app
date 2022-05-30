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
  min-width: 300px;
  text-align: center;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  overflow: hidden;
  animation: ${comingFromLeft} 0.4s ease-out;
  border-radius: 6px;
`;
