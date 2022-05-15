import { AxiosResponse } from 'axios';
import { BoardDetailed, Boards } from '../interfaces/board';
import { URLS, authAxios } from '../constants/api';

export const getAllBoards = async () => {
  const response: AxiosResponse<Boards> = await authAxios.get(URLS.boards);
  return response.data;
};

export const getBoardById = async (id: string) => {
  const response: AxiosResponse<BoardDetailed> = await authAxios.get(`${URLS.boards}/${id}`);
  return response.data;
};

export const createNewBoard = async (title: string) => await authAxios.post(URLS.boards, { title });

export const deleteBoard = async (id: string) => await authAxios.delete(`${URLS.boards}/${id}`);

export const updateBoard = async (id: string, title: string) =>
  await authAxios.put(`${URLS.boards}/${id}`, { title });
