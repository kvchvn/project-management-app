import React, { memo, useCallback, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';

import Column from '../Column';
import { Column as IColumn } from '../../interfaces/column';
import { DND_ITEM_TYPES } from '../../constants/common-constants';

import { StyledColumnsContainer } from './styles';
import ColumnCreatorModal from '../ColumnCreator';

function ColumnsContainer({
  items,
  onNewColumnCreate,
}: {
  items: IColumn[];
  onNewColumnCreate: (title: string) => Promise<void>;
}) {
  const [columns, setColumns] = useState(items);

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
      setColumns((prevColumns) => {
        const copy = prevColumns.slice();
        [copy[droppedIndex], copy[hoverIndex]] = [copy[hoverIndex], copy[droppedIndex]];
        return copy;
      });
    },
    [findColumn, setColumns]
  );

  const [, drop] = useDrop(() => ({ accept: DND_ITEM_TYPES.column }));

  return (
    <StyledColumnsContainer ref={drop}>
      {columns.map((column) => (
        <Column key={column.id} {...column} moveColumn={moveColumn} findColumn={findColumn} />
      ))}
      <ColumnCreatorModal hasColumn={!!columns.length} onNewColumnCreate={onNewColumnCreate} />
    </StyledColumnsContainer>
  );
}

export default memo(ColumnsContainer);
