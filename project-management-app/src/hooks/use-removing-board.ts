import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../constants/api';
import { useUserSelector } from '../store/selectors';
import { deleteBoard } from '../utils/boards-api';

const useRemovingBoard = () => {
  const queryClient = useQueryClient();
  const user = useUserSelector();
  const token = user?.token;

  return useMutation(async (id: string) => {
    await deleteBoard(id, token);
    await queryClient.refetchQueries(QUERY_KEYS.allBoards);
  });
};

export default useRemovingBoard;
