import axios from 'axios';

const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
});
const apiService = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL_AXIOS,
});
$api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && !config.url.includes('auth')) {
    // eslint-disable-next-line no-param-reassign
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});
$api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const code = error.response.status;
    if (code === 401) {
      try {
        const res = await apiService.get('refresh');
        const newToken = res.data.token;
        localStorage.setItem('token', newToken);
        // eslint-disable-next-line no-param-reassign
        error.config.headers.authorization = `Bearer ${newToken}`;
        return $api(error.config);
      } catch (e) {
        if (e.response.status === 401) {
          // store.dispatch(userIsAuthorized(false));
          localStorage.removeItem('token');
          localStorage.removeItem('isAuth');
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }
      }
    }
    return Promise.reject(error);
  },
);
export default $api;
