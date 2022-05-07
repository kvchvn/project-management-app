import { AxiosResponse } from 'axios';
import { Board, Boards } from '../pages/Main/types';
import { API_PATHS, authAxios } from './common-api';

export const getAllBoards = () => {
  authAxios
    .get<Promise<AxiosResponse<Boards, never>>>(API_PATHS.boards)
    .then((boards) => console.log(boards));
  console.log('get boards');
};

export const createNewBoard = (title: string) => {
  authAxios.post<Promise<AxiosResponse<Board, string>>>(API_PATHS.boards, { title });
  console.log('post board');
};
