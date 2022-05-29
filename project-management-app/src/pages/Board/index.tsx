import React, { useCallback, useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useColumnsQuery } from '../../hooks';

import ColumnsContainer from '../../components/ColumnsContainer';
import { Column } from '../../interfaces/column';
import Loading from '../../components/Loading';

function Board() {
  const [columns, setColumns] = useState<Column[]>([]);
  const { data, ...columnsQueryResult } = useColumnsQuery();

  const sortColumns = useCallback(() => {
    if (data) setColumns(data.sort((a, b) => a.order - b.order));
  }, [data]);

  useEffect(() => {
    sortColumns();
  }, [sortColumns]);

  return (
    <DndProvider backend={HTML5Backend}>
      <h2>Board page</h2>
      {columnsQueryResult.isLoading ? <Loading /> : columns && <ColumnsContainer items={columns} />}
    </DndProvider>
  );
}

export default Board;
