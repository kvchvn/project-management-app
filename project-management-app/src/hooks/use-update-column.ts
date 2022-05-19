import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { QUERY_KEYS, URLS } from '../constants/api';
import { Column } from '../interfaces/column';
import { TStore } from '../store';
import { update } from '../utils/api';

const useUpdateColumn = () => {
  const { user } = useSelector((store: TStore) => store.userReducer);
  const { id: boardId } = useParams();
  const token = user?.token;

  const queryClient = useQueryClient();

  const updateColumn = useMutation(
    async ({ id, title, order }: Column) => {
      if (token && boardId) {
        const url = `${URLS.boards}/${boardId}/columns`;
        const config = { headers: { Authorization: `Bearer ${token}` } };

        return update<Omit<Column, 'id'>, Column>(`${url}/${id}`, { title, order }, config);
      }
    },
    {
      onSuccess: () => queryClient.refetchQueries(QUERY_KEYS.columns),
    }
  );

  return updateColumn;
};

export default useUpdateColumn;
