import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS, URLS } from '../constants/api';
import { useUserSelector } from '../store/selectors';
import { remove } from '../utils/api';

const useRemoveTask = ({ boardId, columnId }: { boardId?: string; columnId: string }) => {
  const { user } = useUserSelector();
  const queryClient = useQueryClient();

  return useMutation(
    async (taskId: string) => {
      if (user && boardId) {
        const url = `${URLS.boards}/${boardId}/columns/${columnId}/tasks/${taskId}`;
        const config = { headers: { Authorization: `Bearer ${user.token}` } };

        await remove(url, config);
      }
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries(`${QUERY_KEYS.tasks}/${columnId}`);
      },
    }
  );
};

export default useRemoveTask;
