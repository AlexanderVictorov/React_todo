import React, {useEffect} from 'react';
import AddTodo from "./AddTodo";
import {Grid, Paper} from "@mui/material";
import {useNavigate} from "react-router-dom";
import List from '../../components/Todo/List'
import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "../../store/asyncAction/fetchTodos";
import {addTodo, changeTodos, deleteTodo} from "../../store/slice/todos";

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
    const dispatch = useDispatch()
    const select = useSelector((state) => state.todos.todos)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            dispatch(fetchTodos())
        } else {
            navigate('/login')
        }
    }, [])

    const addToList = (todo) => {
        dispatch(addTodo({
            id: Date.now(),
            name: todo,
            status: "active"
        }))

    };
    const removeTodo = id => {
        dispatch(deleteTodo(id))
    };
    const updateTodo = (id, newText) => {
        dispatch(changeTodos({id, newText}))

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
                        deleteTodo={removeTodo}
                        updateTodo={updateTodo}
                        list={select}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default TodoList;
