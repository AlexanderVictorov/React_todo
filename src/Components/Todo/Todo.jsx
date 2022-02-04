import React, {useState} from 'react';
import {Grid, IconButton, Paper, TextareaAutosize} from "@mui/material";
import {Build, Delete} from "@material-ui/icons";


const styles = {
    Icon: {
        marginLeft: "auto"
    },
    Paper: {
        margin: "auto",
        padding: 10,
        display: "flex",
        alignItems: "center",
        marginTop: 10,
        width: 500
    },
    Textarea: {
        resize: 'none',
        width: '100%',
    }
};

const Todo = ({name, deleteTodo, id, updateTodo}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [todoText, setTodoText] = useState(name)
    const onChangeTodoText = event => setTodoText(event.target.value)
    const onBlur = () => {
        setIsEditing(false)
        setTodoText(name)
    }
    const blurInput = (e) => {
        if (e.key === 'Escape') {
            setTodoText(name)
            e.target.blur()
        }
    }
    const changeInput = (e) => {
        if (e.key === 'Enter') {
            updateTodo(id, todoText)
            e.target.blur()
        }
    }
    return (
        <Grid
            xs={12}
            className={``}
            item
            key={id}
        >
            <Paper elevation={2} style={styles.Paper}>
                {isEditing ? (
                    <TextareaAutosize onKeyDown={changeInput} onKeyUp={blurInput} value={todoText} onChange={onChangeTodoText} onBlur={onBlur}
                                      style={styles.Textarea} autoFocus/>
                ) : (
                    <span style={styles.todo}>{}{name}</span>
                )}
                <IconButton
                    color="primary"
                    aria-label="Edit"
                    style={styles.Icon}
                    onClick={() => setIsEditing(true)}
                >
                    <Build fontSize="small"/>
                </IconButton>
                <IconButton
                    color="secondary"
                    aria-label="Delete"
                    onClick={() => deleteTodo(id)}
                >
                    <Delete fontSize="small"/>
                </IconButton>
            </Paper>
        </Grid>
    );
};

export default Todo;