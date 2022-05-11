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
<<<<<<< HEAD
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiYmU4OTg3Ni05OTY3LTRkYWEtODdmYy0zYWVhZTk5YWMwZWEiLCJsb2dpbiI6ImNvb2wiLCJpYXQiOjE2NTIzMTI4MDZ9.JdflwnZd_gUaZ4Rdfk8J1-OYLIIjrvgukdTiT-snGWo';

export const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
=======
<<<<<<<< HEAD:project-management-app/src/constants/api.ts
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiYmU4OTg3Ni05OTY3LTRkYWEtODdmYy0zYWVhZTk5YWMwZWEiLCJsb2dpbiI6ImNvb2wiLCJpYXQiOjE2NTIzMTI4MDZ9.JdflwnZd_gUaZ4Rdfk8J1-OYLIIjrvgukdTiT-snGWo';
========
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiYmU4OTg3Ni05OTY3LTRkYWEtODdmYy0zYWVhZTk5YWMwZWEiLCJsb2dpbiI6ImNvb2wiLCJpYXQiOjE2NTE5MTM3MDR9.s4ktuPn9RrygfHsNUZXstBVnzWF2t_azSQ-7R8KjNuk';
>>>>>>>> d8a801b (refactor: move api-constants into another folder):project-management-app/src/utils/common-api.ts

>>>>>>> d8a801b (refactor: move api-constants into another folder)
