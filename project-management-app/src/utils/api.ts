import axios from 'axios';

export const create = async <T, P>(url: string, body: T) => {
  const response = await axios.post(url, body);
  return response.data as P;
};

export const signIn = async <T, P>(url: string, user: T) => {
  const response = await axios.post(url, user);
  return response.data as P;
};
