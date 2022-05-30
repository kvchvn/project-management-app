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

function Column({ id, title, order }: IColumn) {
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
          <button onClick={handleDeleteColumn}>x</button>
          <ColumnTitle
            id={id}
            title={title}
            order={order}
            isEditingTitle={isEditingTitle}
            setIsEditingTitle={setIsEditingTitle}
          />
        </StyledColumnHeader>
        <TasksContainer columnId={id} />
        <TaskCreator columnId={id} />
        {isGoingToRemove && (
          <ConfirmationModal onConfirm={handleConfirmDeletion} setIsOpen={setIsGoingToRemove}>
            <p>Do you really want to delete the list?</p>
            <p>You will lose all the tasks on the list</p>
          </ConfirmationModal>
        )}
      </StyledColumn>
    </StyledColumnWrapper>
  );
}

export default memo(Column);
