import React from 'react';
import { Grid } from '@mui/material';
import Todo from './Todo';
// import Loader from '../loader/Loader';

function List({
  list, deleteTodo, updateTodo,
}) {
  // if (!list) return <Loader />;
  return (
    <Grid container>
      {/* {!list && <Loader />} */}
      {list.map((todo) => (
        <Todo
          id={todo.id}
          name={todo.name}
          deleteTodo={deleteTodo}
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
