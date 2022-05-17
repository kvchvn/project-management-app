import styled from 'styled-components';

export const StyledColumn = styled.div<{ isDragging: boolean }>`
  min-width: 200px;
  height: 200px;
  padding: 5px;
  border: 1px solid black;
  cursor: pointer;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
`;

export const StyledTitle = styled.div<{ isEditing: boolean }>`
  display: flex;
  column-gap: 4px;

  h2 {
    display: none;
  }

  textarea {
    overflow: hidden;
    overflow-wrap: break-word;
    width: 100%;
    resize: none;
    border: none;
    background: transparent;
    cursor: pointer;
    font-weight: bold;
    padding: 0.1em 0.25em;
    border-radius: 4px;

    ${({ isEditing }) =>
      isEditing
        ? '&:focus { cursor: initial; }'
        : '&:focus { outline: none; caret-color: transparent }'}
  }

  button {
    display: ${({ isEditing }) => (isEditing ? 'initial' : 'none')};
  }
`;
