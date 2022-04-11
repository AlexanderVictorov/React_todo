import React from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const styles = {
  Paper: {
    position: 'relative',
    margin: 'auto',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    width: '500px',
    textDecoration: 'none',
    zIndex: 1,
  },
};

function ShowTodoInfo() {
  const params = useParams();
  const todo = useSelector((state) => state.todos.todos);
  const todoInfo = todo.find((user) => user.id === +params.id);

  return (
    <Paper
      elevation={2}
      sx={styles.Paper}
    >
      <Typography>
        Info:
        {todoInfo.name}
      </Typography>
    </Paper>
  );
}

export default ShowTodoInfo;
