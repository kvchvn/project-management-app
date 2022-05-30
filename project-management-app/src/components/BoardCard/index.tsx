import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import useRemovingBoard from '../../hooks/use-removing-board';
import { Board } from '../../interfaces/board';
import ConfirmationModal from '../ConfirmationModal';
import { StyledListItem } from './styles';

interface BoardCardProps extends Board {}

function BoardCard({ id, title }: BoardCardProps) {
  const [isGoingToRemove, setIsGoingToRemove] = useState(false);
  const { t } = useTranslation();
  const { mutateAsync: removeBoard } = useRemovingBoard();

  const handleDeleteColumn = () => setIsGoingToRemove(true);

  const handleConfirmDeletion = () => removeBoard(id);

  return (
    <StyledListItem>
      <button onClick={handleDeleteColumn}>x</button>
      <Link to={`${routerPaths.board}/${id}/${title}`}>
        <h4>{title}</h4>
      </Link>
      {isGoingToRemove && (
        <ConfirmationModal onConfirm={handleConfirmDeletion} setIsOpen={setIsGoingToRemove}>
          <p>{t('mainPage.removingWarning.part1')}</p>
          <p>{t('mainPage.removingWarning.part2')}</p>
        </ConfirmationModal>
      )}
    </StyledListItem>
  );
}

export default BoardCard;
