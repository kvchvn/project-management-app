import React, { memo } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { DND_ITEM_TYPES } from '../../constants/common-constants';
import { Column as IColumn } from '../../interfaces/column';

import { StyledColumn } from './styles';

interface ColumnProps extends IColumn {
  moveColumn: (id: string, to: number) => void;
  findColumn: (id: string) => { index: number };
}

function Column({ id, title, moveColumn, findColumn }: ColumnProps) {
  const originalIndex = findColumn(id).index;

  // REFERENCE: https://react-dnd.github.io/react-dnd/examples/sortable/cancel-on-drop-outside
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: DND_ITEM_TYPES.column,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        if (!monitor.didDrop()) moveColumn(droppedId, originalIndex);
      },
    }),
    [id, originalIndex, moveColumn]
  );

  const [, drop] = useDrop(
    () => ({
      accept: DND_ITEM_TYPES.column,
      hover: ({ id: draggedId }: { id: string }) => {
        if (draggedId !== id) {
          const { index: overIndex } = findColumn(id);
          moveColumn(draggedId, overIndex);
        }
      },
    }),
    [findColumn, moveColumn]
  );

  const opacity = isDragging ? 0 : 1;
  return (
    <StyledColumn ref={(node) => drag(drop(node))} style={{ opacity }}>
      <h3>{title}</h3>
    </StyledColumn>
  );
}

export default memo(Column);
