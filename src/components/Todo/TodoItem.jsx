import React from 'react';
import Todo from './Todo';

const TodoItem = ({todo, deleteTodo, updateTodo}) => {
  // vladComment создать функцию, которая будет запускаться в render, а не превратить весь компонент в switch
  return (
    <Todo
      id={todo.id}
      name={todo.name}
      deleteTodo={deleteTodo}
      updateTodo={updateTodo}
    />
  );
};

export default TodoItem;

