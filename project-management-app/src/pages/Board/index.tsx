import React from 'react';
import { useParams } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useColumnsQuery } from '../../hooks';
import ColumnsContainer from '../../components/ColumnsContainer';
import Loading from '../../components/Loading';

import { StyledBoard } from './style';

function Board() {
  const { isLoading } = useColumnsQuery();
  const { title } = useParams();

  return (
    <DndProvider backend={HTML5Backend}>
      <StyledBoard>
        <h2>{title}</h2>
        {isLoading ? <Loading /> : <ColumnsContainer />}
      </StyledBoard>
    </DndProvider>
  );
}

export default Board;
