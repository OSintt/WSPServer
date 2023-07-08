import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/v1',
  headers: {
    'api-key': localStorage.getItem('api-key'),
  },
});
