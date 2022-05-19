import React, { memo, useState } from 'react';

import ColumnTitle from '../ColumnTitle';
import { useColumnDragAndDrop, useRemoveColumn } from '../../hooks';
import { Column as IColumn } from '../../interfaces/column';

import { StyledColumn } from './styles';

interface ColumnProps extends IColumn {
  moveColumn: (id: string, to: number) => void;
  findColumn: (id: string) => { index: number };
  updateColumn: (id: string, to: number) => void;
}

function Column({ id, title, order, moveColumn, findColumn, updateColumn }: ColumnProps) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const { mutateAsync: removeColumn } = useRemoveColumn();

  const { isDragging, drag, drop } = useColumnDragAndDrop({
    id,
    moveColumn,
    findColumn,
    updateColumn,
  });

  const handleDeleteColumn = async () => {
    await removeColumn({ id });
  };

  return (
    <StyledColumn ref={(node) => !isEditingTitle && drag(drop(node))} isDragging={isDragging}>
      <button onClick={handleDeleteColumn}>x</button>
      <ColumnTitle
        id={id}
        title={title}
        order={order}
        isEditingTitle={isEditingTitle}
        setIsEditingTitle={setIsEditingTitle}
      />
    </StyledColumn>
  );
}

export default memo(Column);
