/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthService } from '../../services/AuthService';

const initialState = {
  isLogin: false,
};
export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});
export const RegistrationInServer = createAsyncThunk('auth/RegistrationInServer', async (action) => {
  await AuthService.registration(action);
});
export const LoginInServer = createAsyncThunk('auth/LoginInServer', async (action, getState) => {
  try {
    const response = await AuthService.login(action);
    const { token } = response.data;
    localStorage.setItem('token', token);
    if (response.status === 200) {
      localStorage.setItem('isAuth', 'true');
      // eslint-disable-next-line no-use-before-define
      getState.dispatch(userIsAuthorized(true));
    }
  } catch (error) {
    console.log('Пользователь не зарегестрирован');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userIsAuthorized(state, action) {
      state.isLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginInServer.pending)
      .addCase(LoginInServer.rejected, () => console.log('logout/rejected'))
      .addCase(LoginInServer.fulfilled);
  },
});
const { reducer } = authSlice;
export const { userIsAuthorized } = authSlice.actions;
export default reducer;
