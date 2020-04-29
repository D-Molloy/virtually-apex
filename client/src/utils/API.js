import axios from 'axios';

export default {
  // Signin - create new account
  createUser: (newUserCreds) => {
    return axios.post('/api/auth/create', newUserCreds);
  },
  // Login - login existing user
  loginUser: function (loginCreds) {
    return axios.post('/api/auth/login', loginCreds);
  },
  // Dashboard - get private details of logged-in user
  getUser: function (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios.get('/api/auth/user');
  },
  // Dashboard - get all staff (private)
  getStaff: function (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios.get('/api/data');
  },
};
