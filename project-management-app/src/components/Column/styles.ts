import styled from 'styled-components';

export const StyledColumn = styled.div<{ isDragging: boolean }>`
  display: flex;
  column-gap: 4px;
  min-width: 200px;
  max-width: 200px;
  height: 200px;
  padding: 5px;
  border: 1px solid black;
  cursor: pointer;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};

  & > button {
    height: fit-content;
  }
`;
