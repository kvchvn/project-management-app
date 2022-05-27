import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../constants/api';
import { useUserSelector } from '../store/selectors';
import { createNewBoard } from '../utils/boards-api';

const useCreatingBoard = () => {
  const queryClient = useQueryClient();
  const user = useUserSelector();
  const token = user?.token;

  return useMutation(async (boardTitle: string) => {
    await createNewBoard(boardTitle, token);
    await queryClient.refetchQueries(QUERY_KEYS.allBoards);
  });
};

export default useCreatingBoard;
