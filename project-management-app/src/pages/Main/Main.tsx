import React from 'react';
import BoardCard from '../../components/BoardCard/BoardCard';
import useAllBoards from '../../hooks/use-all-boards';
import { Wrapper } from '../../layouts/containers';
import './main-page.scss';

function Main() {
  const { isLoading, isError, data: boards, error } = useAllBoards();

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <main>
      <Wrapper>
        <h2>My boards</h2>
        <ul>
          {boards && boards.length
            ? boards.map((board) => <BoardCard key={board.id} id={board.id} title={board.title} />)
            : null}
        </ul>
      </Wrapper>
    </main>
  );
}

export default Main;
