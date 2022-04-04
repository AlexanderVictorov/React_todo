import React from 'react';
import Todo from "./Todo";
import ChangeTodo from "./ChangeTodo";

const TodoItem = ({todo, deleteTodo, updateTodo}) => {
    switch (todo?.status) {
        case "active":
            return (
                <Todo
                    id={todo.id}
                    name={todo.name}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            );
        case "editing":
            return (
                <ChangeTodo
                    key={todo}
                    index={todo}
                    todo={todo.todo}
                />
            );
        default:
            return null
    }
};

export default TodoItem;

