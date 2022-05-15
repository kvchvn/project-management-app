import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS, URLS } from '../constants/api';
import { Column } from '../interfaces/column';
import { create } from '../utils/api';

const useCreateColumn = ({ token, boardId }: { token?: string; boardId?: string }) => {
  const queryClient = useQueryClient();

  const createColumn = useMutation(
    async (column: Omit<Column, 'id'>) => {
      if (token && boardId) {
        const url = `${URLS.boards}/${boardId}/columns`;
        const newColumn = create<Omit<Column, 'id'>, Column>(url, column, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return newColumn;
      }
    },
    {
      onSuccess: () => queryClient.refetchQueries(QUERY_KEYS.columns),
    }
  );

  return createColumn;
};

export default useCreateColumn;
