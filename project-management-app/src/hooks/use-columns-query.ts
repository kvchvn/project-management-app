import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { useSelector } from 'react-redux';
import { MOCKED_BOARD, QUERY_KEYS, URLS } from '../constants/api';
import { Column } from '../interfaces/column';
import { TStore } from '../store';
import { getAll } from '../utils/api';

const getAllColumns = async (token?: string, boardId?: string) => {
  if (token && boardId) {
    const url = `${URLS.boards}/${boardId}/columns`;

    const columns = await getAll<Column>(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return columns;
  }
};

const useColumnsQuery = (
  options: UseQueryOptions<Column[] | undefined, unknown, Column[] | undefined, QueryKey> = {}
) => {
  const { user } = useSelector((store: TStore) => store.userReducer);
  const { id: boardId } = MOCKED_BOARD;
  const token = user?.token;

  const queryResult = useQuery<Column[] | undefined, unknown, Column[] | undefined>(
    [QUERY_KEYS.columns, token, boardId],
    async () => {
      const columns = await getAllColumns(token, boardId);
      return columns;
    },
    {
      ...options,
      enabled: !!token || !!boardId,
    }
  );

  return queryResult;
};

export default useColumnsQuery;
