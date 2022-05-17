import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { MOCKED_BOARD, QUERY_KEYS, URLS } from '../constants/api';
import { Column } from '../interfaces/column';
import { TStore } from '../store';
import { create, remove, update } from '../utils/api';

const useColumnMutation = ({
  method,
  columnId,
}: {
  method: 'create' | 'update' | 'delete';
  columnId?: string;
}) => {
  const { user } = useSelector((store: TStore) => store.userReducer);
  const { id: boardId } = MOCKED_BOARD;
  const token = user?.token;

  const queryClient = useQueryClient();

  const createColumn = useMutation(
    async (column: Omit<Column, 'id'>) => {
      if (token && boardId) {
        const url = `${URLS.boards}/${boardId}/columns`;
        const config = { headers: { Authorization: `Bearer ${token}` } };

        if (method === 'create') {
          return create<Omit<Column, 'id'>, Column>(url, column, config);
        }
        if (method === 'update' && columnId) {
          return update<Omit<Column, 'id'>, Column>(`${url}/${columnId}`, column, config);
        }
        if (method === 'delete' && columnId) {
          return remove(`${url}/${columnId}`, config);
        }
      }
    },
    {
      onSuccess: () => queryClient.refetchQueries(QUERY_KEYS.columns),
    }
  );

  return createColumn;
};

export default useColumnMutation;
