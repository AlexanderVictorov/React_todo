import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { TodoService } from '../../services/TodoService';

export const saveTodoOnServer = createAsyncThunk('todoSlice/saveTodoOnServer', async (_, { getState }) => {
  const { todos } = getState().todos;
  await TodoService.postTodos(todos);
});
