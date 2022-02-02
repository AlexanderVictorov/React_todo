import React, {useState} from 'react';
import {Grid, IconButton, Paper} from "@mui/material";
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
    }
};

const Todo = ({name, deleteTodo, id, updateTodo}) => {
    const gridRef = React.createRef();
    // const gridClass = setState(true) ? "fade-out" : "";
    return (
        <Grid
            xs={12}
            className={``}
            item
            key={id}
            ref={gridRef}
        >
            <Paper elevation={2} style={styles.Paper}>
                <span style={styles.todo}>{}{name}</span>
                <IconButton
                    color="primary"
                    aria-label="Edit"
                    style={styles.Icon}
                    onClick={() => updateTodo(id)}
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