import React, {useState, useEffect} from 'react';
import AddTodo from "./AddTodo";
import {Grid, Paper} from "@mui/material";
import List from "./List";


const styles = {
    Paper: {
        padding: 20,
        margin: "auto",
        textAlign: "center",
        width: 500
    }
};

const TodoList = () => {
    const todoListFromLocalStorage = localStorage.getItem('todoList')
    const [state, setState] = useState(todoListFromLocalStorage ? JSON.parse(todoListFromLocalStorage) : [])

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(state))
    }, [state])

    const addToList = (todo) => {
        let list = [...state];
        list.push({
            id: Date.now(),
            name: todo,
            status: "active"
        })

        setState(list);
    };
    const deleteTodo = id => {
        let list = [...state];
        setState(list.filter(item => item.id !== id));
    };
    const updateTodo = key => {
        let list = [...state];
        list[key]["status"] = "editing";

        setState(list);
    };
    const saveTodo = (key, todo) => {
        let list = [...state];
        list.push({
            id: Date.now(),
            name: todo,
            status: "active"
        })

        setState(list);
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
                        saveTodo={saveTodo}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default TodoList;