import { createSlice } from '@reduxjs/toolkit';
import API from '../utils/API';

const initialState = {
  token: '',
  user: '',
  errors: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      state.errors = '';
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.token = '';
      state.user = '';
      state.errors = '';
    },
  },
});

export const {
  setToken,
  setErrors,
  clearErrors,
  setUser,
  logout,
} = authSlice.actions;

export const loginUser = (creds, history) => async (dispatch) => {
  dispatch(clearErrors());
  try {
    const {
      data: { token },
    } = await API.loginUser(creds);
    dispatch(setToken(token));
    history.push('/dashboard');
  } catch (e) {
    dispatch(setErrors(e.response.data));
  }
};
export const createUser = (creds, history) => async (dispatch) => {
  dispatch(clearErrors());
  try {
    await API.createUser(creds);
    history.push('/');
  } catch (e) {
    dispatch(setErrors(e.response.data));
  }
};

export const getUser = (token, history) => async (dispatch) => {
  try {
    const { data: user } = await API.getUser(token);
    dispatch(setUser(user));
  } catch (e) {
    history.push('/');
  }
};

export const selectUser = (state) => state.auth.user;
export const selectErrors = (state) => state.auth.errors;
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
