import React, { memo, useCallback, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';

import Column from '../Column';
import ColumnCreator from '../ColumnCreator';
import { useUpdateColumn } from '../../hooks';
import { Column as IColumn } from '../../interfaces/column';
import { DND_ITEM_TYPES } from '../../constants/common';
import { calculateUpdatedOrder } from '../../utils/common';

import { StyledColumnsContainer } from './styles';

function ColumnsContainer({ items }: { items: IColumn[] }) {
  const [columns, setColumns] = useState(items);

  const { mutateAsync: update } = useUpdateColumn();

  useEffect(() => setColumns(items), [items]);

  const findColumn = useCallback(
    (id: string) => {
      const index = columns.findIndex((c) => c.id === id);
      return { column: columns[index], index };
    },
    [columns]
  );

  const moveColumn = useCallback(
    (droppedId: string, hoverIndex: number) => {
      const droppedIndex = findColumn(droppedId).index;
      const columnsCopy = [...columns];
      const droppedColumn = columnsCopy.splice(droppedIndex, 1)[0];
      columnsCopy.splice(hoverIndex, 0, droppedColumn);

      setColumns(columnsCopy);
    },
    [findColumn, columns, setColumns]
  );

  const updateColumnOrder = useCallback(
    async (droppedId: string, hoverIndex: number) => {
      const { index: droppedIndex, column: droppedColumn } = findColumn(droppedId);
      if (droppedIndex === hoverIndex) return;

      const direction = droppedIndex > hoverIndex ? 'forward' : 'backward';
      const hoverColumn = columns[hoverIndex];
      const nextToDroppedColumn =
        columns[droppedIndex > hoverIndex ? droppedIndex + 1 : droppedIndex - 1];

      await update({
        id: droppedId,
        title: droppedColumn.title,
        order: calculateUpdatedOrder(hoverColumn.order, nextToDroppedColumn?.order, direction),
      });
    },
    [findColumn, columns, update]
  );

  const [, drop] = useDrop(() => ({ accept: DND_ITEM_TYPES.column }));

  return (
    <StyledColumnsContainer ref={drop}>
      {columns.map((column) => (
        <Column
          key={column.id}
          {...column}
          moveColumn={moveColumn}
          findColumn={findColumn}
          updateColumn={updateColumnOrder}
        />
      ))}
      <ColumnCreator lastColumnOrder={columns[columns.length - 1]?.order} />
    </StyledColumnsContainer>
  );
}

export default memo(ColumnsContainer);
