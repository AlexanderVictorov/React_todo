/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { TodoService } from '../../services/TodoService';
// eslint-disable-next-line import/no-cycle
import { AuthService } from '../../services/AuthService';

const initialState = {
  todos: null,
  loading: false,
};
export const fetchTodos = createAsyncThunk('todoSlice/fetchTodos', async () => {
  const response = await TodoService.getTodos();
  return response.data;
});
export const fetchLogin = createAsyncThunk('todoSlice/fetchLogin', async (action) => {
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
export const fetchRegistration = createAsyncThunk('todoSlice/fetchLogin', async (action) => {
  await AuthService.registration(action);
});
const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    changeStatus(state, action) {
      state.todos.map((item) => {
        if (item.id !== action.payload.id) return item;
        if (action.payload.statusTodoDone) {
          item.status = action.payload.statusTodoDone;
        }
        if (action.payload.statusTodoActive) {
          item.status = action.payload.statusTodoActive;
        }
        return item;
      });
    },
    changeTodos(state, action) {
      state.todos.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.newText;
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    }).addCase(fetchTodos.rejected, (state) => {
      state.loading = false;
      console.log('fetchTodos/rejected');
    })
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.todos = payload;
        state.loading = false;
      });
  },
});
export const {
  addTodo, deleteTodo, changeTodos, changeStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
