/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { AuthService } from '../../services/AuthService';

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});
const initialState = {
  isLogin: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeLogout(state, action) {
      state.isLogin = action.payload;
    },
  },
  extraReducers: {
    [logout.fulfilled]: (state) => {
      console.log(state);
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});
const { reducer } = authSlice;
export const { changeLogout } = authSlice.actions;
export default reducer;
