import axios from 'axios';
import { createRequestTimer } from 'helpers/createRequestTimer';

const axiosInstance = axios.create({
  baseURL: 'https://yourpets-project-backend.onrender.com',
});

export const setAuthHeader = token => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axiosInstance.defaults.headers.common.Authorization = '';
};

let timerId = null;

axiosInstance.interceptors.request.use(
  config => {
    if (!timerId) {
      timerId = createRequestTimer();
    }
    console.log(timerId);
    return config;
  },
  error => {
    clearTimeout(timerId);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    clearTimeout(timerId);
    console.log('sds');
    console.log(timerId);

    return response;
  },
  error => {
    clearTimeout(timerId);
    return Promise.reject(error);
  }
);

export default axiosInstance;
