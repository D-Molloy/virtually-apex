import axios from 'axios';

export default {
  // Gets books from the Google API
  createUser: (newUserCreds) => {
    return axios.post('/api/auth/create', newUserCreds);
  },
  // Gets all saved books
  loginUser: function (loginCreds) {
    return axios.post('/api/auth/login', loginCreds);
  },
  // Deletes the saved book with the given id
  getUser: function (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios.get('/api/auth/user');
  },
  // Saves an book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
