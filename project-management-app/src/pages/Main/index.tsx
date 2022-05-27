import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BoardCard from '../../components/BoardCard';
import { UNAUTHORIZED_STATUS } from '../../constants/api';
import { routerPaths } from '../../constants/common';
import { useSignOut } from '../../hooks';
import useAllBoards from '../../hooks/use-all-boards';
import Loading from '../../components/Loading';
import { ServerError } from '../../interfaces/common';
import { StyledWrapper } from '../../layouts/containers';
import { useUserSelector } from '../../store/selectors';
import { StyledList } from './styles';

function Main() {
  const user = useUserSelector();
  const navigate = useNavigate();
  const signOut = useSignOut();
  const { isLoading, isError, data: boards, error } = useAllBoards();

  useEffect(() => {
    if (!user) {
      navigate(`/${routerPaths.welcome}`);
    }
  }, [user, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    if (error.response) {
      if (error.response.status === UNAUTHORIZED_STATUS) {
        signOut();
      }
      toast.error((error.response.data as ServerError).message);
    }
    toast.error('Something went wrong');
  }

  return (
    <main>
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
