import React, { memo } from 'react';

import { useColumnDragAndDrop } from '../../hooks';
import { Column as IColumn } from '../../interfaces/column';

import { StyledColumn } from './styles';

interface ColumnProps extends IColumn {
  moveColumn: (id: string, to: number) => void;
  findColumn: (id: string) => { index: number };
}

function Column({ id, title, moveColumn, findColumn }: ColumnProps) {
  const { isDragging, drag, drop } = useColumnDragAndDrop({ id, moveColumn, findColumn });

  return (
    <StyledColumn ref={(node) => drag(drop(node))} isDragging={isDragging}>
      <h3>{title}</h3>
    </StyledColumn>
  );
}

export default memo(Column);
