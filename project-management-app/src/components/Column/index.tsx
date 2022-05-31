import React, { memo, useState } from 'react';

import ColumnTitle from '../ColumnTitle';
import ConfirmationModal from '../ConfirmationModal';
import TasksContainer from '../TasksContainer';
import TaskCreator from '../TaskCreator';
import {
  useColumnDragAndDrop,
  useRemoveColumn,
  useTaskDragAndDrop,
  useTasksQuery,
} from '../../hooks';
import { Column as IColumn } from '../../interfaces/column';

import { StyledColumn, StyledColumnHeader, StyledColumnWrapper } from './styles';
import StyledIconButton from '../../styles/components/StyledIconButton';
import { CloseIcon } from '../../assets/icons';
import { useTranslation } from 'react-i18next';

function Column({ id, title, order }: IColumn) {
  const { t } = useTranslation();
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isGoingToRemove, setIsGoingToRemove] = useState(false);

  useTasksQuery({ columnId: id }, { refetchOnWindowFocus: false });
  const { mutateAsync: removeColumn } = useRemoveColumn();

  const { isDragging, drag, drop, dragPreview } = useColumnDragAndDrop({ id });

  const { drop: taskDrop } = useTaskDragAndDrop({ columnId: id, dropTarget: 'column' });

  const handleDeleteColumn = () => setIsGoingToRemove(true);

  const handleConfirmDeletion = () => removeColumn({ id });

  return (
    <StyledColumnWrapper ref={(node) => drop(taskDrop(node))}>
      <StyledColumn ref={(node) => dragPreview(node)} isDragging={isDragging}>
        <StyledColumnHeader ref={(node) => !isEditingTitle && drag(node)}>
          <ColumnTitle
            id={id}
            title={title}
            order={order}
            isEditingTitle={isEditingTitle}
            setIsEditingTitle={setIsEditingTitle}
          />
          <StyledIconButton variant="primary" onClick={handleDeleteColumn}>
            <CloseIcon />
          </StyledIconButton>
        </StyledColumnHeader>
        <TasksContainer columnId={id} />
        <TaskCreator columnId={id} />
        {isGoingToRemove && (
          <ConfirmationModal onConfirm={handleConfirmDeletion} setIsOpen={setIsGoingToRemove}>
            <p>{t('boardPage.removingColumn.part1')}</p>
            <p>{t('boardPage.removingColumn.part2')}</p>
          </ConfirmationModal>
        )}
      </StyledColumn>
    </StyledColumnWrapper>
  );
}

export default memo(Column);
