import axios from 'axios';

const BASE_URL = 'https://gentle-fortress-75399.herokuapp.com';


export const URLS = {
  base: BASE_URL,
  signup: `${BASE_URL}/signup`,
  signin: `${BASE_URL}/signin`,
  boards: `${BASE_URL}/boards`,
  users: `${BASE_URL}/users`,
};

export const mockUser = {
  id: 'bbe89876-9967-4daa-87fc-3aeae99ac0ea',
  name: 'cool',
  login: 'cool',
};

export const QUERY_KEYS = {
  users: 'users',
};

export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiYmU4OTg3Ni05OTY3LTRkYWEtODdmYy0zYWVhZTk5YWMwZWEiLCJsb2dpbiI6ImNvb2wiLCJpYXQiOjE2NTIzMTI4MDZ9.JdflwnZd_gUaZ4Rdfk8J1-OYLIIjrvgukdTiT-snGWo';

export const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
