import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { QUERY_KEYS, URLS } from '../constants/api';
import { Column } from '../interfaces/column';
import { TStore } from '../store';
import { create } from '../utils/api';

const useCreateColumn = () => {
  const { user } = useSelector((store: TStore) => store.userReducer);
  const { id: boardId } = useParams();
  const token = user?.token;

  const queryClient = useQueryClient();

  const createColumn = useMutation(
    async (column: Omit<Column, 'id'>) => {
      if (token && boardId) {
        const url = `${URLS.boards}/${boardId}/columns`;
        const config = { headers: { Authorization: `Bearer ${token}` } };

        return create<Omit<Column, 'id'>, Column>(url, column, config);
      }
    },
    {
      onSuccess: () => queryClient.refetchQueries(QUERY_KEYS.columns),
    }
  );

  return createColumn;
};

export default useCreateColumn;
