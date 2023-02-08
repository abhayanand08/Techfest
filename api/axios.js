import axios from 'axios';

let token;

if (window !== undefined) {
  token = localStorage.getItem('JWTTOKEN');
} else {
  token = '';
}
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

axiosInstance.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default axiosInstance;
