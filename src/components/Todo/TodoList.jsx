import React, { useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from './AddTodo';
import List from './List';
import {
  addTodo, changeTodos, deleteTodo, fetchTodos,
} from '../../store/slices/todos';

const styles = {
  Paper: {
    padding: '20px',
    margin: 'auto',
    textAlign: 'center',
    width: '500px',
    zIndex: 1,
  },
};

function TodoList() {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const addToList = (todo) => {
    dispatch(addTodo({
      id: Date.now(),
      name: todo,
      status: 'active',
    }));
  };
  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const updateTodo = (id, newText) => {
    dispatch(changeTodos({ id, newText }));
  };
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper sx={styles.Paper}>
          <AddTodo addToList={addToList} />
        </Paper>
      </Grid>
      <Grid item xs={12} sx={styles.Paper}>
        <List
          deleteTodo={removeTodo}
          updateTodo={updateTodo}
          list={select}
        />
      </Grid>
    </Grid>
  );
}

export default TodoList;
