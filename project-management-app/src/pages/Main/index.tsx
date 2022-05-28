import React from 'react';
import BoardCard from '../../components/BoardCard';
import Loading from '../../components/Loading';
import useAllBoards from '../../hooks/use-all-boards';
import { StyledWrapper } from '../../layouts/containers';
import { StyledList } from './styles';

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
      <Loading />
      <StyledWrapper>
        <h2>My boards</h2>
        <StyledList>
          {boards && boards.length
            ? boards.map((board) => <BoardCard key={board.id} id={board.id} title={board.title} />)
            : 'You haven`t got any board'}
        </StyledList>
      </StyledWrapper>
    </main>
  );
}

export default Main;
