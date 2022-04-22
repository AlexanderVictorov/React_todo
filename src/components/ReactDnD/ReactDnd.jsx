import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

function ReactDnd() {
  const todoArray = useSelector((state) => state.todos.todos);
  const [todoList, setTodoList] = useState(todoArray);
  const [currentTodo, setCurrentTodo] = useState(null);

  function dragStartHandler(e, todo) {
    console.log('dragStartHandler', todo);
    setCurrentTodo(todo);
  }

  function dragLeaveHandler() {
  }

  function dragEndHandler(e) {
    e.target.style.background = 'none';
  }

  function dragOvertHandler(e) {
    e.preventDefault();
    e.target.style.background = 'lightgray';
  }

  function dropHandler(e, todo) {
    console.log('todo', todo);
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

    e.target.style.background = 'none';
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
      {todoList.map((todo) => (
        <Box
          onDragStart={(e) => dragStartHandler(e, todo)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOvertHandler(e)}
          onDrop={(e) => dropHandler(e, todo)}
          draggable
          key={todo.id}
        >
          {todo.name}
        </Box>
      ))}
    </Box>
  );
}

export default ReactDnd;
