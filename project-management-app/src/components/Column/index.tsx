import React, { memo, useState } from 'react';

import ColumnTitle from '../ColumnTitle';
import { useColumnDragAndDrop, useColumnMutation } from '../../hooks';
import { Column as IColumn } from '../../interfaces/column';

import { StyledColumn } from './styles';

interface ColumnProps extends IColumn {
  moveColumn: (id: string, to: number) => void;
  findColumn: (id: string) => { index: number };
}

function Column({ id, title, order, moveColumn, findColumn }: ColumnProps) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const { isDragging, drag, drop } = useColumnDragAndDrop({ id, moveColumn, findColumn });

  const { mutateAsync: update } = useColumnMutation({ method: 'update', columnId: id });
  const { mutateAsync: remove } = useColumnMutation({ method: 'delete', columnId: id });

  const handleDeleteColumn = async () => {
    await remove({ title, order });
  };

  return (
    <StyledColumn ref={(node) => !isEditingTitle && drag(drop(node))} isDragging={isDragging}>
      <button onClick={handleDeleteColumn}>x</button>
      <ColumnTitle
        title={title}
        order={order}
        isEditingTitle={isEditingTitle}
        setIsEditingTitle={setIsEditingTitle}
        update={update}
      />
    </StyledColumn>
  );
}

export default memo(Column);
