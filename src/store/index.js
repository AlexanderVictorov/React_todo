import { combineReducers, configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import todoSlice from './slices/todos';
// eslint-disable-next-line import/no-cycle
import authSlice from './slices/auth';

const appReducer = combineReducers({
  auth: authSlice,
  todos: todoSlice,
});
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
