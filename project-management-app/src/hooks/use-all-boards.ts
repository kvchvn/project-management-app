import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../constants/api';
import { getAllBoards } from '../utils/boards-api';

const useAllBoards = () =>
  useQuery(QUERY_KEYS.allBoards, getAllBoards, {
    onError: (error: AxiosError) => error,
  });

export default useAllBoards;
