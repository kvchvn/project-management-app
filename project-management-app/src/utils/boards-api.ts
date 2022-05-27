import axios, { AxiosResponse } from 'axios';
import { Boards } from '../interfaces/board';
import { URLS } from '../constants/api';
import { Board } from '../pages/Main/types';

export const getAllBoards = async (token?: string) => {
  if (!token) {
    return;
  }

  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response: AxiosResponse<Boards> = await axios.get(URLS.boards, config);
  return response.data;
};

export const createNewBoard = async (title: string, token?: string) => {
  if (!title || !token) {
    return;
  }

  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response: AxiosResponse<Board> = await axios.post(URLS.boards, { title }, config);
  return response.data;
};

export const deleteBoard = async (boardId: string, token?: string) => {
  if (!boardId || !token) {
    return;
  }

  const config = { headers: { Authorization: `Bearer ${token}` } };
  await axios.delete(`${URLS.boards}/${boardId}`, config);
};

/* export const updateBoard = async (id: string, title: string) =>
  await authAxios.put(`${URLS.boards}/${id}`, { title }); */
