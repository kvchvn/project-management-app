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

export const StyledConfirmationModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.bg};

  div {
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin: 10px auto 0;
  }
`;
