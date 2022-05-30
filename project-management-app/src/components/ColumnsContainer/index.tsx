import React, { memo } from 'react';
import { useDrop } from 'react-dnd';

import Column from '../Column';
import ColumnCreator from '../ColumnCreator';
import { DND_ITEM_TYPES } from '../../constants/common';

import { StyledColumnsContainer } from './styles';
import { useSelector } from 'react-redux';
import { TStore } from '../../store';

function ColumnsContainer() {
  const { columns } = useSelector((store: TStore) => store.columnReducer);

  const [, drop] = useDrop(() => ({ accept: DND_ITEM_TYPES.column }));

  return (
    <StyledColumnsContainer ref={drop}>
      {columns.map((column) => (
        <Column key={column.id} {...column} />
      ))}
      <ColumnCreator lastColumnOrder={columns[columns.length - 1]?.order} />
    </StyledColumnsContainer>
  );
}

export default memo(ColumnsContainer);
