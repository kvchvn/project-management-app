import { useMutation, useQueryClient } from 'react-query';
import { queryKeys } from '../constants/queries';
import { deleteBoard } from '../utils/boards-api';

const useRemovingBoard = () => {
  const queryClient = useQueryClient();

  return useMutation(async (id: string) => {
    await deleteBoard(id);
    await queryClient.refetchQueries(queryKeys.allBoards);
  });
};

export default useRemovingBoard;
