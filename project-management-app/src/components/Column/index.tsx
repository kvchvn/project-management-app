import React, { memo, useRef, useState } from 'react';

import ColumnTitle from '../ColumnTitle';
import Modal from '../Modal';
import TasksContainer from '../TasksContainer';
import { useColumnDragAndDrop, useRemoveColumn, useTasksQuery } from '../../hooks';
import { Column as IColumn } from '../../interfaces/column';

import {
  StyledColumn,
  StyledColumnHeader,
  StyledColumnWrapper,
  StyledConfirmationModal,
} from './styles';
import TaskCreator from '../TaskCreator';

function Column({ id, title, order }: IColumn) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isGoingToRemove, setIsGoingToRemove] = useState(false);

  useTasksQuery({ columnId: id }, { refetchOnWindowFocus: false });
  const { mutateAsync: removeColumn } = useRemoveColumn();

  const { isDragging, drag, drop, dragPreview } = useColumnDragAndDrop({ id });

  const handleDeleteColumn = () => setIsGoingToRemove(true);

  const handleConfirmDeletion = () => removeColumn({ id });

  const handleCancelDeletion = () => setIsGoingToRemove(false);

  return (
    <StyledColumnWrapper>
      <StyledColumn ref={(node) => dragPreview(node)} isDragging={isDragging}>
        <StyledColumnHeader ref={(node) => !isEditingTitle && drag(drop(node))}>
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
          <Modal onClose={handleCancelDeletion}>
            <StyledConfirmationModal ref={modalRef}>
              <p>Do you really want to delete the list?</p>
              <p>You will lose all the tasks on the list</p>
              <div>
                <button onClick={handleConfirmDeletion}>Yes</button>
                <button onClick={handleCancelDeletion}>No</button>
              </div>
            </StyledConfirmationModal>
          </Modal>
        )}
      </StyledColumn>
    </StyledColumnWrapper>
  );
}

export default memo(Column);
