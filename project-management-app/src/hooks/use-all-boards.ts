import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { queryKeys } from '../constants/queries';
import { getAllBoards } from '../utils/boards-api';

const useAllBoards = () =>
  useQuery(queryKeys.allBoards, getAllBoards, {
    onError: (error: AxiosError) => error,
  });

export default useAllBoards;
