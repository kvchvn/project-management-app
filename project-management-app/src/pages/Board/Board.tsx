import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useColumnsQuery, useColumnMutation } from '../../hooks';

import ColumnsContainer from '../../components/ColumnsContainer';

function Board() {
  const { data: columns, ...columnsQueryResult } = useColumnsQuery();

  const { mutateAsync: create } = useColumnMutation({ method: 'create' });

  const handleNewColumnCreate = async (title: string) => {
    if (columnsQueryResult.isSuccess && columns) {
      await create({ title, order: columns.length + 1 });
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <h2>Board page</h2>
      {columnsQueryResult.isLoading ? (
        <span>Loading...</span>
      ) : (
        columns && <ColumnsContainer items={columns} onNewColumnCreate={handleNewColumnCreate} />
      )}
    </DndProvider>
  );
}

export default Board;
