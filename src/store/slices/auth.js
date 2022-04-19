/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthService } from '../../services/AuthService';

const initialState = {
  isLogin: true,
};
export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});
export const RegistrationInServer = createAsyncThunk('todoSlice/RegistrationInServer', async (action) => {
  await AuthService.registration(action);
});
export const LoginInServer = createAsyncThunk('auth/LoginInServer', async (action) => {
  try {
    const response = await AuthService.login(action);
    const { token } = response.data;
    localStorage.setItem('token', JSON.stringify(token));
    if (response.status === 200) {
      localStorage.setItem('isAuth', 'true');
    }
  } catch (error) {
    console.log('Пользователь не зарегестрирован');
  }
});
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeLogout(state, action) {
      state.isLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginInServer.pending, () => {
    }).addCase(LoginInServer.rejected, () => {
      console.log('logout/rejected');
    })
      .addCase(LoginInServer.fulfilled, () => {
      });
  },
});
const { reducer } = authSlice;
export const { changeLogout } = authSlice.actions;
export default reducer;
