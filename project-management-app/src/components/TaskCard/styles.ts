import styled from 'styled-components';

export const StyledTaskCard = styled.div<{ isDragging: boolean }>`
  height: 40px;
  line-height: 38px;
  padding: 0 4px;
  border: 1px solid ${({ isDragging }) => (isDragging ? 'gray' : 'black')};
  background-color: ${({ isDragging, theme }) => (isDragging ? 'gray' : theme.colors.bg.primary)};
  color: ${({ isDragging }) => (isDragging ? 'gray' : 'inherit')};
  cursor: pointer;
  border-radius: 4px;
  vertical-align: middle;

  & + & {
    margin-top: 4px;
  }
`;
