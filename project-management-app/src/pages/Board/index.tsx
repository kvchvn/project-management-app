import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useColumnsQuery } from '../../hooks';

import ColumnsContainer from '../../components/ColumnsContainer';
import Loading from '../../components/Loading';

function Board() {
  const { isLoading } = useColumnsQuery();

  return (
    <DndProvider backend={HTML5Backend}>
      <h2>Board page</h2>
      {isLoading ? <Loading /> : <ColumnsContainer />}
    </DndProvider>
  );
}

export default Board;
