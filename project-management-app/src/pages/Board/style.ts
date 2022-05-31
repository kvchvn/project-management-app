import styled from 'styled-components';

export const StyledBoard = styled.div`
  height: calc(100vh - 196px);
  overflow-x: auto;
  overflow-y: hidden;

  & > h2 {
    margin: 1rem 0;
  }

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.bg.primary};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
  }
`;
