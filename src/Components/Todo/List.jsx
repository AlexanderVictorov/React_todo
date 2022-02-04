import React from 'react';
import {Grid} from "@mui/material";
import ChangeTodo from "./ChangeTodo";
import Todo from "./Todo";

const List = ({list, deleteTodo, saveTodo, updateTodo}) => {
    const CreateTodo = ({todo}) => {
        if (todo.status === "active") {
            return (
                <Todo
                    id={todo.id}
                    name={todo.name}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            );
        } else if (todo.status === "editing") {
            return (
                <ChangeTodo
                    key={todo}
                    index={todo}
                    todo={todo.todo}
                    // saveTodo={saveTodo}
                />
            );
        }
    };
    return (
        <Grid container>
            {list.map(todo=>(<CreateTodo key={todo.id} todo={todo}/>))}
        </Grid>
    );
}


export default List;