import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { QUERY_KEYS, URLS } from '../constants/api';
import { TaskDetailed } from '../interfaces/task';
import { TStore } from '../store';
import { update } from '../utils/api';

const useUpdateTask = ({ columnId }: { columnId: string }) => {
  const { user } = useSelector((store: TStore) => store.userReducer);

  const queryClient = useQueryClient();

  const updateTask = useMutation(
    async (task: TaskDetailed) => {
      if (user) {
        const { id: taskId, ...updatedTask } = task;
        const url = `${URLS.boards}/${task.boardId}/columns/${columnId}/tasks/${taskId}`;
        const config = { headers: { Authorization: `Bearer ${user.token}` } };

        return update<Omit<TaskDetailed, 'id'>, TaskDetailed>(url, updatedTask, config);
      }
    },
    {
      onSuccess: () => queryClient.refetchQueries(`${QUERY_KEYS.tasks}/${columnId}`),
    }
  );

  return updateTask;
};

export default useUpdateTask;
