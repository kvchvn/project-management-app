import styled from 'styled-components';

export const StyledListItem = styled.li`
  position: relative;
  height: 100px;
  border: 3px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: #8080801a;
  }

  & > a {
    padding: 20px 10px;
    height: 100%;
  }

  & h4 {
    margin: auto 0;
    text-align: center;
    font-size: 20px;
  }

  & button {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translateX(100px);
    background-color: black;
    transition: all 0.25s;

    &:hover {
      color: white;
    }
  }

  &:hover > button {
    transform: none;
  }
`;
