import axios from 'axios';
import api from './api';

const API_URL = `${process.env.REACT_APP_API_URL || 'http://localhost:5000/api'}/auth`;

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data) {
    localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
    localStorage.setItem('refreshToken', JSON.stringify(response.data.refreshToken));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data) {
    localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
    localStorage.setItem('refreshToken', JSON.stringify(response.data.refreshToken));
  }
  return response.data;
};

const logout = async () => {
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
    await api.post('/auth/logout', { token: refreshToken });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
};

const refreshToken = async () => {
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
    const response = await axios.post(`${API_URL}/refresh-token`, { token: refreshToken });
    if (response.data) {
        localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
    }
    return response.data;
};


const authService = {
  register,
  login,
  logout,
  refreshToken,
};

export default authService;
