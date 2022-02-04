import React from 'react';
import {useParams} from "react-router-dom";
import {Paper} from "@mui/material";

const styles = {
    Paper: {
        margin: "auto",
        padding: 10,
        display: "flex",
        alignItems: "center",
        marginTop: 10,
        width: 500,
        textDecoration: 'none',
        zIndex: 1
    },

};

const TodoInfo = () => {
    const params = useParams();
    const titleTodo = JSON.parse(localStorage.getItem('todoList'))
    const title = titleTodo.find(user => user.id === +params.id)
    return (
        <Paper className='card_todo'
               elevation={2} style={styles.Paper}>
            <span style={styles.todo}>Info: {title.name}</span>
        </Paper>
    );
};

export default TodoInfo;