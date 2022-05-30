import styled, { keyframes } from 'styled-components';

const scaleIncreasing = keyframes`
  from {
    opacity: 0;
    transform: scale(0.6);
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
  animation: ${scaleIncreasing} 0.3s ease-out;
  border-radius: 6px;
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
