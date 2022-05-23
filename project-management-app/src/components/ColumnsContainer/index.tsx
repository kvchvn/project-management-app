import React, { memo } from 'react';
import { useDrop } from 'react-dnd';

import Column from '../Column';
import ColumnCreator from '../ColumnCreator';
import { useMoveItems, useUpdateColumn } from '../../hooks';
import { Column as IColumn } from '../../interfaces/column';
import { DND_ITEM_TYPES } from '../../constants/common';

import { StyledColumnsContainer } from './styles';

function ColumnsContainer({ items }: { items: IColumn[] }) {
  const { mutateAsync: update } = useUpdateColumn();

  const {
    items: columns,
    findItem,
    moveItem,
    updateItemOrder,
  } = useMoveItems({
    items,
    update,
  });

  const [, drop] = useDrop(() => ({ accept: DND_ITEM_TYPES.column }));

  return (
    <StyledColumnsContainer ref={drop}>
      {columns.map((column) => (
        <Column
          key={column.id}
          {...column}
          moveColumn={moveItem}
          findColumn={findItem}
          updateColumn={updateItemOrder}
        />
      ))}
      <ColumnCreator lastColumnOrder={columns[columns.length - 1]?.order} />
    </StyledColumnsContainer>
  );
}

export default memo(ColumnsContainer);
