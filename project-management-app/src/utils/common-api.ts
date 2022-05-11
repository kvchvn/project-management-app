import axios from 'axios';

export const API_URL = 'https://gentle-fortress-75399.herokuapp.com/';

export const API_PATHS = {
  boards: 'board',
};

export const mockUser = {
  id: 'bbe89876-9967-4daa-87fc-3aeae99ac0ea',
  name: 'cool',
  login: 'cool',
};

export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiYmU4OTg3Ni05OTY3LTRkYWEtODdmYy0zYWVhZTk5YWMwZWEiLCJsb2dpbiI6ImNvb2wiLCJpYXQiOjE2NTIyNjQwMDJ9.QYNzQQ3pjxXZziPgKbSRONwTtBMKY76gXPpqvTlPa3s';

export const authAxios = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
