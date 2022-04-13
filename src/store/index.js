import { combineReducers, configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import todoSlice from './slices/todos';
// eslint-disable-next-line import/no-cycle
import authSlice from './slices/auth';

const rootReducer = combineReducers({
  auth: authSlice,
  todos: todoSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
