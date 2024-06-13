import axios from 'axios';
import { API } from '../../urlConfig';
import store from '@/store';
import { authConstants } from '@/action/constants';

let token = '';
if (typeof window !== 'undefined') {
  token = localStorage.getItem('evileye-token');
}

const axiosInstance = axios.create({
  baseURL: API,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});

axiosInstance.interceptors.request.use((req) => {
  const { auth } = store.getState();
  if (auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
});

axiosInstance.interceptors.response.use(
  (response) => {
    const newToken = response.headers['authorization'];
    if (newToken) {
      const tokenPart = newToken.split(' ')[1];
      localStorage.setItem('evileye-token', tokenPart);
      store.dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token: tokenPart,
        },
      });
    }
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : 500;
    if (status === 401 || status === 404) {
      localStorage.clear();
      store.dispatch({
        type: authConstants.LOGOUT_SUCCESS,
        payload: {
          logout: true,
        },
      });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
