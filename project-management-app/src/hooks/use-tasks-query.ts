import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { QUERY_KEYS, URLS } from '../constants/api';
import { TaskDetailed } from '../interfaces/task';
import { TStore } from '../store';
import { getAll } from '../utils/api';

const getAllTasks = async (token: string, boardId: string, columnId: string) => {
  const url = `${URLS.boards}/${boardId}/columns/${columnId}/tasks`;

  const tasks = await getAll<TaskDetailed>(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return tasks;
};

const useTasksQuery = (
  { columnId }: { columnId: string },
  options: UseQueryOptions<
    TaskDetailed[] | undefined,
    unknown,
    TaskDetailed[] | undefined,
    QueryKey
  > = {}
) => {
  const { user } = useSelector((store: TStore) => store.userReducer);
  const { id: boardId } = useParams();
  const token = user?.token;

  const queryResult = useQuery<TaskDetailed[] | undefined, unknown, TaskDetailed[] | undefined>(
    [`${QUERY_KEYS.tasks}/${columnId}`, token, boardId],
    async () => {
      if (token && boardId) {
        const tasks = await getAllTasks(token, boardId, columnId);
        return tasks;
      }
    },
    {
      ...options,
      enabled: !!token || !!boardId,
    }
  );

  return queryResult;
};

export default useTasksQuery;
