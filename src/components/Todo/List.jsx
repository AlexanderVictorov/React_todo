import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Todo from './Todo';

function List({
  list, updateTodo,
}) {
  const [todoList, setTodoList] = useState(list);
  const [currentTodo, setCurrentTodo] = useState(null);
  useEffect(() => {
    setTodoList(list);
  }, [list]);
  const dragStartHandler = (e, todo) => {
    e.target.style.opacity = '0.5';
    setCurrentTodo(todo);
  };

  const dragLeaveHandler = (e) => {
    e.target.style.opacity = '1';
  };

  const dragEndHandler = (e) => {
    e.target.style.opacity = '1';
  };

  const dragOvertHandler = (e) => {
    e.preventDefault();
    e.target.style.opacity = '0.5';
  };

  const dropHandler = (e, todo) => {
    e.preventDefault();
    setTodoList((prev) => prev.map((item) => {
      if (item.id === currentTodo.id) {
        return todo;
      }
      if (item.id === todo.id) {
        return currentTodo;
      }
      return item;
    }));

    e.target.style.opacity = '1';
  };
  return (
    <Grid container>
      {todoList.map((todo, index) => (
        <Todo
          onDragStart={dragStartHandler}
          onDragLeave={dragLeaveHandler}
          onDragEnd={dragEndHandler}
          onDragOver={dragOvertHandler}
          onDrop={dropHandler}
          index={index + 1}
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
