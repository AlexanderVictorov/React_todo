import React from 'react';
import { Grid } from '@mui/material';
import Todo from './Todo';

function List({
  list, updateTodo,
}) {
  return (
    <Grid container>
      {list.map((todo) => (
        <Todo
          id={todo.id}
          name={todo.name}
          updateTodo={updateTodo}
          key={todo.id}
          todo={todo}
          status={todo.status}
        />
      ))}
    </Grid>
  );
}

export default List;
