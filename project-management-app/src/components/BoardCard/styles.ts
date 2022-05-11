import styled from 'styled-components';

export const classnames = {
  link: 'board-card__link',
  title: 'board-card__title',
};

export const StyledListItem = styled.li`
  width: 200px;
  height: 100px;
  border: 2px solid black;

  & > .${classnames.link} {
    border: 1px solid red;
    padding: 20px;
    height: 100%;
  }

  & .${classnames.title} {
    margin: auto 0;
    text-align: center;
  }
`;
