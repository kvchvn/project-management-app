import React from 'react';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common-constants';
import { Board } from '../../interfaces/board';
import { classnames, StyledListItem } from './styles';

interface BoardCardProps extends Board {}

function BoardCard({ id, title }: BoardCardProps) {
  return (
    <StyledListItem>
      <Link to={`${routerPaths.board}${id}`} className={classnames.link}>
        <h4 className={classnames.title}>{title}</h4>
      </Link>
    </StyledListItem>
  );
}

export default BoardCard;
