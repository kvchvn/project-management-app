import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { QUERY_KEYS, URLS } from '../constants/api';
import { Column } from '../interfaces/column';
import { TStore } from '../store';
import { remove } from '../utils/api';

const useRemoveColumn = () => {
  const { user } = useSelector((store: TStore) => store.userReducer);
  const { id: boardId } = useParams();
  const token = user?.token;

  const queryClient = useQueryClient();

  const removeColumn = useMutation(
    async (id: Pick<Column, 'id'>) => {
      if (token && boardId) {
        const url = `${URLS.boards}/${boardId}/columns/${id}`;
        const config = { headers: { Authorization: `Bearer ${token}` } };

        return remove(url, config);
      }
    },
    {
      onSuccess: () => queryClient.refetchQueries(QUERY_KEYS.columns),
    }
  );

  return removeColumn;
};

export default useRemoveColumn;
