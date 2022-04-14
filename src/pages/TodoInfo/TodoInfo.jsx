import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Button, Paper, Typography,
} from '@mui/material';
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
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}
    >
      <Paper
        elevation={2}
        sx={styles.Paper}
      >
        <Typography>
          Info:
          {todoInfo.name}
        </Typography>
      </Paper>
      <Box sx={{
        marginTop: '20px', display: 'flex', justifyContent: 'space-between', width: '150px',
      }}
      >
        <Button sx={{ height: '30px' }} variant='contained'>back</Button>
        <Button sx={{ height: '30px' }} variant='contained'>next</Button>
      </Box>

    </Box>
  );
}

export default ShowTodoInfo;
