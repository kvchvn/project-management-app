import styled from 'styled-components';

export const StyledColumn = styled.div<{ isDragging: boolean }>`
  display: flex;
  column-gap: 4px;
  min-width: 200px;
  max-width: 200px;
  height: 200px;
  padding: 5px;
  border: 1px solid black;
  cursor: pointer;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};

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
