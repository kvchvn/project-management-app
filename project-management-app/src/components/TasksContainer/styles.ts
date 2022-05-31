import styled from 'styled-components';

export const StyledTasksContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.bg.primary};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.font};
  }
`;
