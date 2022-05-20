import React, { memo, useRef, useState } from 'react';

import ColumnTitle from '../ColumnTitle';
import Modal from '../Modal';
import TaskCreator from '../TaskCreator';
import { useColumnDragAndDrop, useRemoveColumn, useTasksQuery } from '../../hooks';
import { Column as IColumn } from '../../interfaces/column';

import { StyledColumn, StyledColumnHeader, StyledConfirmationModal } from './styles';

interface ColumnProps extends IColumn {
  moveColumn: (id: string, to: number) => void;
  findColumn: (id: string) => { index: number };
  updateColumn: (id: string, to: number) => void;
}

function Column({ id, title, order, moveColumn, findColumn, updateColumn }: ColumnProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isGoingToRemove, setIsGoingToRemove] = useState(false);

  const { data: tasks } = useTasksQuery({ columnId: id });
  const { mutateAsync: removeColumn } = useRemoveColumn();

  const { isDragging, drag, drop } = useColumnDragAndDrop({
    id,
    moveColumn,
    findColumn,
    updateColumn,
  });

  const handleDeleteColumn = () => setIsGoingToRemove(true);

  const handleConfirmDeletion = () => removeColumn({ id });

  const handleCancelDeletion = () => setIsGoingToRemove(false);

  return (
    <StyledColumn ref={(node) => !isEditingTitle && drag(drop(node))} isDragging={isDragging}>
      <StyledColumnHeader>
        <button onClick={handleDeleteColumn}>x</button>
        <ColumnTitle
          id={id}
          title={title}
          order={order}
          isEditingTitle={isEditingTitle}
          setIsEditingTitle={setIsEditingTitle}
        />
      </StyledColumnHeader>
      {tasks?.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
      <TaskCreator columnId={id} lastTaskOrder={tasks && tasks[tasks.length - 1]?.order} />
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
  );
}

export default memo(Column);
