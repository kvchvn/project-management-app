import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useColumnsQuery, useSortByOrder } from '../../hooks';

import ColumnsContainer from '../../components/ColumnsContainer';

function Board() {
  const { data, ...columnsQueryResult } = useColumnsQuery();

  const columns = useSortByOrder(data);

  return (
    <DndProvider backend={HTML5Backend}>
      <h2>Board page</h2>
      {columnsQueryResult.isLoading ? (
        <span>Loading...</span>
      ) : (
        !!columns.length && <ColumnsContainer items={columns} />
      )}
    </DndProvider>
  );
}

export default Board;
