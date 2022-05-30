import styled from 'styled-components';

export const StyledColumnWrapper = styled.div`
  width: 270px;
  min-width: 270px;
  height: 100%;
`;

export const StyledColumn = styled.div<{ isDragging: boolean }>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.font};
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
  background-color: ${({ theme }) => theme.colors.bg.tertiary + '80'};
  max-height: calc(100% - 50px);
  padding: 0 8px 8px;
  border-radius: 6px;
`;

export const StyledColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > button {
    background: transparent;
    border: none;
    box-shadow: none;
    width: 24px;

    & > svg {
      fill: ${({ theme }) => theme.colors.button.warning.hover};
    }

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.button.warning.hover};
      box-shadow: none;

      & > svg {
        fill: ${({ theme }) => theme.colors.bg.primary};
      }
    }
  }
`;
