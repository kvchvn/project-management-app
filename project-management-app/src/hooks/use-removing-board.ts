import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../constants/api';
import { deleteBoard } from '../utils/boards-api';

const useRemovingBoard = () => {
  const queryClient = useQueryClient();

  return useMutation(async (id: string) => {
    await deleteBoard(id);
    await queryClient.refetchQueries(QUERY_KEYS.allBoards);
  });
};

export default useRemovingBoard;
