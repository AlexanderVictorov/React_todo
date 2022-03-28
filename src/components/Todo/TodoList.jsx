import React, {useEffect, useState} from 'react';
import AddTodo from "./AddTodo";
import {Grid, Paper} from "@mui/material";
import List from "./List";
import instance from "../../http";
import {useNavigate} from "react-router-dom";

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
    const navigate = useNavigate()
    const todoFromServer = async () => {
        const response = await instance.get('/todos')
        const todo = response.data
        setState(todo)
    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            todoFromServer()
        }else {
            console.log('!!!!!!!!!!!!!')
            navigate('/login')
        }
    }, [])
    const [state, setState] = useState([])
        const todoListFromServer = async (list) => {
            const response = await instance.post('/todos', {
                "todos": list,
            })
        }

    const addToList = (todo) => {
        let list = [...state];
        list.push({
            id: Date.now(),
            name: todo,
            status: "active"
        })
        setState(list)
        todoListFromServer(list)
    };
    const deleteTodo = id => {
        let list = [...state];
        setState(list.filter(item => item.id !== id));
    };
    const updateTodo = (id, newText) => {
        let list = [...state];
        setState(list.map(item => {
            if (item.id === id) {
                item.name = newText
            }
            return item
        }));
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
                        list={state}
                        updateTodo={updateTodo}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default TodoList;
