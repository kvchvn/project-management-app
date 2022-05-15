import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { QUERY_KEYS, URLS } from '../constants/api';
import { Column } from '../interfaces/column';
import { TStore } from '../store';
=======
import { QUERY_KEYS, URLS } from '../constants/api';
import { Column } from '../interfaces/column';
>>>>>>> afd0949 (feat: add useColumnsQuery custom hook for columns fetching)
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

<<<<<<< HEAD
const useColumnsQuery = (
  options: UseQueryOptions<Column[] | undefined, unknown, Column[] | undefined, QueryKey> = {}
) => {
  const { user } = useSelector((store: TStore) => store.userReducer);
  const { id: boardId } = useParams();
  const token = user?.token;

=======
const useColumnsQuery = ({
  token,
  boardId,
  ...options
}: { token?: string; boardId?: string } & UseQueryOptions<
  Column[] | undefined,
  unknown,
  Column[] | undefined,
  QueryKey
>) => {
>>>>>>> afd0949 (feat: add useColumnsQuery custom hook for columns fetching)
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
