import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { getAll } from '../utils/api';
import { QUERY_KEYS, URLS } from '../constants/api';

const useUsersQuery = <T>({
  token,
  ...options
}: { token?: string } & UseQueryOptions<T[] | undefined, unknown, T[] | undefined, QueryKey>) => {
  const queryResult = useQuery<T[] | undefined, unknown, T[] | undefined>(
    [QUERY_KEYS.users, token],
    async () => {
      if (token) {
        const users = await getAll<T>(URLS.users, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return users;
      }
    },
    {
      ...options,
      enabled: !!token,
    }
  );

  return queryResult;
};

export default useUsersQuery;
