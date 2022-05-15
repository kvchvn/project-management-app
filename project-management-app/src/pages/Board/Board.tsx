import React from 'react';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { MOCKED_BOARD } from '../../constants/api';
import { useColumnsQuery, useCreateColumn } from '../../hooks';
import { TStore } from '../../store';

import ColumnsContainer from '../../components/ColumnsContainer';

function Board() {
  const { user } = useSelector((store: TStore) => store.userReducer);
  const { id: boardId } = MOCKED_BOARD;

  const { data: columns, ...columnsQueryResult } = useColumnsQuery({
    token: user?.token,
    boardId,
  });
  const createColumn = useCreateColumn({ token: user?.token, boardId });

  const handleNewColumnCreate = async (title: string) => {
    if (columnsQueryResult.isSuccess && columns) {
      await createColumn.mutateAsync({ title, order: columns.length + 1 });
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
