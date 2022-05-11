import { AxiosResponse } from 'axios';
import { BoardDetailed, Boards } from '../interfaces/board';
import { API_PATHS, authAxios } from '../constants/api';

export const getAllBoards = async () => {
  const response: AxiosResponse<Boards> = await authAxios.get(API_PATHS.boards);
  return response.data;
};

export const getBoardById = async (id: string) => {
  const response: AxiosResponse<BoardDetailed> = await authAxios.get(`${API_PATHS.boards}/${id}`);
  return response.data;
};

export const createNewBoard = async (title: string) =>
  await authAxios.post(API_PATHS.boards, { title });

export const deleteBoard = async (id: string) =>
  await authAxios.delete(`${API_PATHS.boards}/${id}`);

export const updateBoard = async (id: string, title: string) =>
  await authAxios.put(`${API_PATHS.boards}/${id}`, { title });
