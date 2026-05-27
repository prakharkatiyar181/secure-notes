import axios from 'axios';
import { store } from '../redux/store';
import authService from './authService';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.accessToken;
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await authService.refreshToken();
          const { accessToken } = rs;
          store.dispatch({ type: 'auth/refreshToken', payload: { accessToken } });
          api.defaults.headers.common['x-auth-token'] = accessToken;
          return api(originalConfig);
        } catch (_error) {
          store.dispatch({ type: 'auth/logout' });
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default api;
