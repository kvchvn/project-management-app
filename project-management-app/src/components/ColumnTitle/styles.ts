import styled from 'styled-components';

export const StyledTitle = styled.div<{ isEditing: boolean }>`
  display: flex;
  column-gap: 4px;
  height: fit-content;

  button {
    display: ${({ isEditing }) => (isEditing ? 'initial' : 'none')};
  }
`;

export const StyledTextArea = styled.div<{ isEditing: boolean }>`
  position: relative;

  div {
    display: ${({ isEditing }) => (isEditing ? 'none' : 'initial')};
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
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
`;
