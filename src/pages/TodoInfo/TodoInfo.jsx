import React from 'react';
import { useParams } from 'react-router-dom';
import { Paper } from '@mui/material';
import { useSelector } from 'react-redux';

const styles = {
    Paper: {
        margin: 'auto',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        marginTop: 10,
        width: 500,
        textDecoration: 'none',
        zIndex: 1,
    },

};
const ShowTodoInfo = () => {
    const params = useParams();
    const todo = useSelector((state) => state.todos.todos);
    const todoInfo = todo.find(user => user.id === +params.id);

    return (
      <Paper className="card_todo"
             elevation={2} style={styles.Paper}>
          <span style={styles.todo}>Info: {todoInfo.name}</span>
      </Paper>
    );
}

export default ShowTodoInfo;
