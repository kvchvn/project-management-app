import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { QUERY_KEYS, URLS } from '../constants/api';
import { Task } from '../interfaces/task';
import { TStore } from '../store';
import { create } from '../utils/api';

const useCreateTask = ({ columnId }: { columnId: string }) => {
  const { user } = useSelector((store: TStore) => store.userReducer);
  const { id: boardId } = useParams();

  const queryClient = useQueryClient();

  const createTask = useMutation(
    async (task: Omit<Task, 'id' | 'userId'>) => {
      if (user && boardId) {
        const url = `${URLS.boards}/${boardId}/columns/${columnId}/tasks`;
        const config = { headers: { Authorization: `Bearer ${user.token}` } };

        return create<Omit<Task, 'id'>, Task>(url, { ...task, userId: user.id }, config);
      }
    },
    {
      onSuccess: () => queryClient.refetchQueries(`${QUERY_KEYS.tasks}/${columnId}`),
    }
  );

  return createTask;
};

export default useCreateTask;
