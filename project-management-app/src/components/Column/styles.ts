import styled from 'styled-components';

export const StyledColumn = styled.div<{ isDragging: boolean }>`
  width: 200px;
  height: 200px;
  padding: 5px;
  border: 1px solid black;
  cursor: pointer;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
`;
