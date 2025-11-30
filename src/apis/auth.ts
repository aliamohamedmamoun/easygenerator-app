import api from '../utils/api';

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export const signUp = async (data: SignUpData) => {
  const response = await api.post('/auth/signup', data);
  return response.data;
};

interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get('/users/userProfile');
  return response.data;
};
