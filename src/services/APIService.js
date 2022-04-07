import $api from '../http/api';

export const APIService = {
  login({ username, email, password }) {
    return $api.post('/auth/login', { username, email, password });
  },
  registration({ username, email, password }) {
    return $api.post('/auth/registration', { username, email, password });
  },
  logout() {
    return $api.post('/auth/logout');
  },
};
