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
