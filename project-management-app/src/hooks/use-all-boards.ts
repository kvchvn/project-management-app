import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { QUERY_KEYS, UNAUTHORIZED_STATUS } from '../constants/api';
import { ServerError } from '../interfaces/common';
import { useUserSelector } from '../store/selectors';
import { getAllBoards } from '../utils/boards-api';
import useSignOut from './use-sign-out';

const useAllBoards = () => {
  const { user } = useUserSelector();
  const signOut = useSignOut();
  const token = user?.token;

  return useQuery(
    [QUERY_KEYS.allBoards, token],
    async () => {
      const boards = getAllBoards(token);
      return boards;
    },
    {
      enabled: !!token,
      onError: (error: AxiosError) => {
        if (error.response) {
          if (error.response.status === UNAUTHORIZED_STATUS) {
            signOut();
          }
          toast.error((error.response.data as ServerError).message);
        }
        toast.error('Something went wrong');
      },
    }
  );
};

export default useAllBoards;
