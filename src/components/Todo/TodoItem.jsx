import React from 'react';
import Todo from './Todo';

function TodoItem({ todo, deleteTodo, updateTodo }) {
  return (
    <Todo
      id={todo.id}
      name={todo.name}
      deleteTodo={deleteTodo}
      updateTodo={updateTodo}
    />
  );
}

export default TodoItem;
