import axios from 'axios';
import Constants from "../constants/Constants";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.post(`${Constants.BASE_URL}/api/v1/auth/refresh`, 
          { refreshToken },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );

        if (response.status === 200) {
          const { accessToken, refreshToken } = response.data;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        if (refreshError.response && refreshError.response.status === 500) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/';
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
