import styled from 'styled-components';

export const StyledColumnWrapper = styled.div`
  width: 270px;
  min-width: 270px;
  height: 100%;
`;

export const StyledColumn = styled.div<{ isDragging: boolean }>`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
  background-color: rgba(0, 0, 0, 0.2);
  max-height: 100%;
`;

export const StyledColumnHeader = styled.div`
  display: flex;
  column-gap: 4px;
  cursor: pointer;

  & > button {
    height: fit-content;
  }
`;
