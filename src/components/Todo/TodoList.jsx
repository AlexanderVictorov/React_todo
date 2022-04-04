import React, {useEffect, useState} from 'react';
import AddTodo from "./AddTodo";
import {Grid, Paper} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {TodoService} from "../../services/TodoService";
import List from '../../components/Todo/List'

const styles = {
    Paper: {
        padding: 20,
        margin: "auto",
        textAlign: "center",
        width: 500,
        zIndex: 1
    }
};

const TodoList = () => {
    const [state, setState] = useState([]);

    const todoFromServer = async () => {
        const response = await TodoService.getTodos()
        const todo = response.data
        setState(todo);
    }

    const todoListOnServer = async (list) => {
        await TodoService.postTodos(list)
    }
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            todoFromServer()
        } else {
            navigate('/login')
        }
    }, [])
    const addToList = (todo) => {
        let list = [...state];
        list.push({
            id: Date.now(),
            name: todo,
            status: "active"
        })
        setState(list)
        todoListOnServer(list)
    };
    const deleteTodo = id => {
        let list = [...state];
        const todo = list.filter(item => item.id !== id)
        setState(todo);
        todoListOnServer(todo)

    };
    const updateTodo = (id, newText) => {
        let list = [...state];
        const todo = list.map(item => {
            if (item.id === id) {
                item.name = newText
            }

            return item
        })
        setState(todo);
        todoListOnServer(todo)

    };
    return (
        <React.Fragment>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper style={styles.Paper}>
                        <AddTodo addToList={addToList}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} style={styles.Paper}>
                    <List
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                        list={state}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default TodoList;
