import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import {Grid, IconButton, Paper, TextareaAutosize} from "@mui/material";
import {Build, Delete} from "@material-ui/icons";


const styles = {
    Card: {
        textDecoration: 'none',
        width:'430px',
    },
    Icon: {
        marginLeft: "auto"
    },
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
            item
            key={id}
        >
            <Paper className='card_todo'
                as={NavLink}
                to={`/todo/${id}`}
                elevation={2} style={styles.Paper}>
                {isEditing ? (
                    <TextareaAutosize onKeyDown={changeInput} onKeyUp={blurInput} value={todoText}
                                      onChange={onChangeTodoText} onBlur={onBlur}
                                      style={styles.Textarea} autoFocus/>
                ) : (
                    <span style={styles.Card}>{}{name}</span>
                )}
                <div className='icon_change_todo'>
                    <IconButton className='icon_change_todo'
                                color="primary"
                                aria-label="Edit"
                                style={styles.Icon}
                                onClick={() => setIsEditing(true)}
                    >
                        <Build fontSize="small"/>
                    </IconButton>
                    <IconButton
                        className='icon_change_todo'
                        color="secondary"
                        aria-label="Delete"
                        onClick={() => deleteTodo(id)}
                    >
                        <Delete fontSize="small"/>
                    </IconButton>
                </div>

            </Paper>

        </Grid>
    );
};

export default Todo;