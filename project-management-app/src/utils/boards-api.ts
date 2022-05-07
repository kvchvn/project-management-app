import { AxiosResponse } from 'axios';
import { Board, Boards } from '../pages/Main/types';
import { API_PATHS, authAxios } from './common-api';

export const getAllBoards = () =>
  authAxios.get<Boards>(API_PATHS.boards).then((boards) => {
    console.log(boards.data);
    return boards.data;
  });

export const createNewBoard = (title: string) => {
  authAxios.post<Board, string>(API_PATHS.boards, { title });
};

export const deleteBoard = (id: string) => {
  authAxios.delete(`${API_PATHS.boards}/${id}`);
};

export const updateBoard = (id: string, title: string) =>
  authAxios
    .patch<Board, AxiosResponse<Board>, Partial<Board>>(`${API_PATHS.boards}/${id}`, { title })
    .then((board) => board.data);
