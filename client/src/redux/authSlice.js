import { createSlice } from '@reduxjs/toolkit';
import API from '../utils/API';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    user: '',
    errors: '',
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = '';
    },
    setErrors: (state, action) => {
      console.log('state, action', { state, action });
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      state.errors = '';
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = '';
    },
  },
});

export const {
  setToken,
  clearToken,
  setErrors,
  clearErrors,
  setUser,
  clearUser,
} = authSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const loginUser = (creds) => async (dispatch) => {
  const res = await API.loginUser(creds);
  console.log('res', res);
};
export const createUser = (creds, history) => async (dispatch) => {
  try {
    await API.createUser(creds);
    history.push('/');
  } catch (e) {
    dispatch(setErrors(e.response.data));
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;
export const selectUser = (state) => state.auth.user;
export const selectErrors = (state) => state.auth.errors;

export default authSlice.reducer;
