import styled from 'styled-components';

export const StyledListItem = styled.li`
  position: relative;
  width: 200px;
  height: 100px;
  border: 2px solid black;
  cursor: pointer;

  &:hover {
    background-color: grey;
  }

  & > a {
    border: 1px solid red;
    padding: 20px;
    height: 100%;
  }

  & h4 {
    margin: auto 0;
    text-align: center;
  }

  & button {
    position: absolute;
    width: 30px;
    height: 30px;
  }
`;
