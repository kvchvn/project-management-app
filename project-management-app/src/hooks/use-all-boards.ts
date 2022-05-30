import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../constants/api';
import { useUserSelector } from '../store/selectors';
import { getAllBoards } from '../utils/boards-api';

const useAllBoards = () => {
  const user = useUserSelector();
  const token = user?.token;

  return useQuery(
    [QUERY_KEYS.allBoards, token],
    async () => {
      const boards = getAllBoards(token);
      return boards;
    },
    {
      enabled: !!token,
      onError: (error: AxiosError) => error,
    }
  );
};

export default useAllBoards;
