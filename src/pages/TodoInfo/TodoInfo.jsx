import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Paper} from "@mui/material";
import {TodoService} from "../../services/TodoService";

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
const ShowTodoInfo = () => {
    const [todo, setTodo] = useState([])
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await TodoService.getTodos()
                const todo = response.data
                const title = todo.find(user => user.id === +params.id)
                setTodo(title)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, []);
    return (
        <Paper className='card_todo'
               elevation={2} style={styles.Paper}>
            <span style={styles.todo}>Info: {todo.name}</span>
        </Paper>
    );
}

export default ShowTodoInfo;
