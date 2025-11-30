import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

export default api;
