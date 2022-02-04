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
    const gridRef = React.createRef();
    const onChangeTodoText = event => setTodoText(event.target.value)
    return (
        <Grid
            xs={12}
            className={``}
            item
            key={id}
            ref={gridRef}
        >
            <Paper elevation={2} style={styles.Paper}>
                {isEditing ? (
                    <TextareaAutosize value={todoText} onChange={onChangeTodoText} size={25} style={styles.Textarea}/>
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