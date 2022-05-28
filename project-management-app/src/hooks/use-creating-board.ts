import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../constants/api';
import { createNewBoard } from '../utils/boards-api';

const useCreatingBoard = () => {
  const queryClient = useQueryClient();

  return useMutation(async (boardName: string) => {
    await createNewBoard(boardName);
    await queryClient.refetchQueries(QUERY_KEYS.allBoards);
  });
};

export default useCreatingBoard;
