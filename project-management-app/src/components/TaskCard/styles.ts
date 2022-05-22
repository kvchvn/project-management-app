import styled from 'styled-components';

export const StyledTaskCard = styled.div<{ isDragging: boolean }>`
  height: 30px;
  border: 1px solid black;
  margin-bottom: 4px;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
`;
