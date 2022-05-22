import axios, { AxiosRequestConfig } from 'axios';

export const getAll = async <T>(url: string, config: AxiosRequestConfig = {}) => {
  const response = await axios.get<T[]>(url, config);
  return response.data;
};

export const create = async <T, P>(url: string, body: T, config: AxiosRequestConfig = {}) => {
  const response = await axios.post<P>(url, body, config);
  return response.data;
};

export const update = async <T, P>(url: string, body: T, config: AxiosRequestConfig = {}) => {
  const response = await axios.put<P>(url, body, config);
  return response.data;
};

export const remove = async (url: string, config: AxiosRequestConfig = {}) => {
  await axios.delete(url, config);
};

export const signIn = async <T, P>(url: string, user: T) => {
  const response = await axios.post<P>(url, user);
  return response.data;
};
