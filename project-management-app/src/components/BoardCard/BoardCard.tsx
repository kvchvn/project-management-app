import React from 'react';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common-constants';
import useRemovingBoard from '../../hooks/use-removing-board';
import { Board } from '../../interfaces/board';
import { classnames, StyledListItem } from './styles';

interface BoardCardProps extends Board {}

function BoardCard({ id, title }: BoardCardProps) {
  const removeBoard = useRemovingBoard();

  const deleteBoard = async () => {
    await removeBoard.mutateAsync(id);
  };

  return (
    <StyledListItem>
      <button onClick={deleteBoard}>x</button>
      <Link to={`${routerPaths.board}${id}`} className={classnames.link}>
        <h4 className={classnames.title}>{title}</h4>
      </Link>
    </StyledListItem>
  );
}

export default BoardCard;
