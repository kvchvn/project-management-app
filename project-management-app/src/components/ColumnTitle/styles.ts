import styled from 'styled-components';

export const StyledTitle = styled.div<{ isEditing: boolean }>`
  display: flex;
  column-gap: 4px;
  align-items: center;
  height: 50px;

  button {
    display: ${({ isEditing }) => (isEditing ? 'initial' : 'none')};
  }
`;

export const StyledTextArea = styled.div<{ isEditing: boolean }>`
  position: relative;
  display: flex;
  align-items: center;

  div {
    display: ${({ isEditing }) => (isEditing ? 'none' : 'initial')};
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 28px;
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
    padding: 0.25em;
    border-radius: 4px;
    outline: none;

    ${({ isEditing, theme }) =>
      isEditing
        ? `&:focus { cursor: initial; border: 1px solid ${theme.colors.border.secondary}; background: ${theme.colors.bg.primary} }`
        : '&:focus { caret-color: transparent }'};
  }
`;
