import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getAllBoards } from '../utils/boards-api';

const useAllBoards = () =>
  useQuery('all-boards', getAllBoards, {
    onError: (error: AxiosError) => error.message,
  });

export default useAllBoards;
