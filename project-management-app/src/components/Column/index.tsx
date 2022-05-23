import React, { memo, useRef, useState } from 'react';

import ColumnTitle from '../ColumnTitle';
import Modal from '../Modal';
import TasksContainer from '../TasksContainer';
import { useDragAndDrop, useRemoveColumn, useSortByOrder, useTasksQuery } from '../../hooks';
import { Column as IColumn } from '../../interfaces/column';
import { DND_ITEM_TYPES } from '../../constants/common-constants';

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

  const { data } = useTasksQuery({ columnId: id });
  const { mutateAsync: removeColumn } = useRemoveColumn();

  const tasks = useSortByOrder(data);

  const { isDragging, drag, drop, dragPreview } = useDragAndDrop({
    id,
    itemType: DND_ITEM_TYPES.column,
    moveColumn,
    findColumn,
    updateColumn,
  });

  const handleDeleteColumn = () => setIsGoingToRemove(true);

  const handleConfirmDeletion = () => removeColumn({ id });

  const handleCancelDeletion = () => setIsGoingToRemove(false);

  return (
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
      {!!tasks.length && <TasksContainer items={tasks} columnId={id} />}
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
