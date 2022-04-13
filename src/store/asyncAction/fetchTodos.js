import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { TodoService } from '../../services/TodoService';

/* export const fetchTodos = createAsyncThunk('todoSlice/fetchTodos', async () => {
  const response = await TodoService.getTodos();
  return response.data;
}); */

export const saveTodoOnServer = createAsyncThunk('todoSlice/saveTodoOnServer', async (_, { getState }) => {
  const { todos } = getState().todos;
  await TodoService.postTodos(todos);
});
