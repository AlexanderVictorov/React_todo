import React from 'react';
import { Grid } from '@mui/material';
import TodoItem from './TodoItem';

function List({ list, deleteTodo, updateTodo }) {
  return (
    <Grid container>
      {list.map((todo) => (
        <TodoItem deleteTodo={deleteTodo} updateTodo={updateTodo} key={todo.id} todo={todo} />))}
    </Grid>
  );
}

export default List;
