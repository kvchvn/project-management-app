import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useColumnsQuery } from '../../hooks';

import ColumnsContainer from '../../components/ColumnsContainer';

function Board() {
  const columnsQueryResult = useColumnsQuery({ refetchOnWindowFocus: false });

  return (
    <DndProvider backend={HTML5Backend}>
      <h2>Board page</h2>
      {columnsQueryResult.isLoading ? <span>Loading...</span> : <ColumnsContainer />}
    </DndProvider>
  );
}

export default Board;
