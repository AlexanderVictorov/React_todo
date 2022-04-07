import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from '../asyncAction/fetchTodos';

const initialState = {
  todos: [],
};

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
    builder.addCase(fetchTodos.pending, () => {
      console.log('fetchTodos/pending');
    }).addCase(fetchTodos.rejected, () => {
      console.log('fetchTodos/rejected');
    })
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.todos = payload;
      });
  },
});
export const { addTodo, deleteTodo, changeTodos } = todoSlice.actions;
export default todoSlice.reducer;
