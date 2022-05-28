import styled from 'styled-components';

export const StyledTaskCard = styled.div<{ isDragging: boolean }>`
  height: 30px;
  // TODO: colors need to be set later
  border: 1px solid ${({ isDragging }) => (isDragging ? 'grey' : 'black')};
  margin-bottom: 4px;
  background-color: ${({ isDragging }) => (isDragging ? 'grey' : 'inherit')};
  color: ${({ isDragging }) => (isDragging ? 'grey' : 'inherit')};
  cursor: pointer;
`;
