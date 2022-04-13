/* eslint-disable jsx-a11y/click-events-have-key-events,
jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Grid, IconButton, Paper, TextField, Typography,
} from '@mui/material';
import { Build, Delete } from '@material-ui/icons';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../store/slices/todos';

const styles = {
  Card: {
    textDecoration: 'none',
    width: '430px',
  },
  Icon: {
    marginLeft: 'auto',
    zIndex: '99',
    width: '25px',
    paddingTop: '6px',
  },
  Paper: {
    color: 'black',
    position: 'relative',
    margin: 'auto',
    marginTop: '10px',
    padding: '5px',
    display: 'flex',
    width: '500px',
    textDecoration: 'none',
    zIndex: 1,
    cursor: 'pointer',
  },
  DoneTodos: {
    color: 'red',
    position: 'relative',
    margin: 'auto',
    marginTop: '10px',
    padding: '5px',
    display: 'flex',
    width: '500px',
    textDecoration: 'none',
    zIndex: 1,
    cursor: 'pointer',
  },
  Textarea: {
    width: '87%',
    height: 'auto',
  },
  BoxStyle: {
    zIndex: '99',
    position: 'absolute',
    right: '-2px',
    top: '0',
  },
};

function Todo({
  status, name, deleteTodo, id, updateTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const doneTodos = () => {
    if (status === 'active') {
      const statusTodoDone = 'done';
      dispatch(changeStatus({ id, statusTodoDone }));
    }
    if (status === 'done') {
      const statusTodoActive = 'active';
      dispatch(changeStatus({ id, statusTodoActive }));
    }
  };
  const onBlur = () => {
    setIsEditing(false);
    setTodoText(name);
  };
  const blurInput = (e) => {
    if (e.key === 'Escape') {
      setTodoText(name);
      e.target.blur();
    }
  };
  const changeInput = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      updateTodo(id, todoText);
    }
  };
  const preventDef = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const todoInfoCard = () => {
    if (!isEditing) {
      navigate(`${id}`);
    }
  };

  return (
    <Grid
      xs={12}
      item
    >
      <Paper
        onClick={todoInfoCard}
        elevation={2}
        sx={status === 'active' ? styles.Paper : styles.DoneTodos}
      >
        {isEditing ? (
          <TextField
            id='standard-basic'
            label='Todo'
            variant='standard'
            multiline
            onKeyDown={changeInput}
            onKeyUp={blurInput}
            value={todoText}
            onChange={onChangeTodoText}
            onBlur={onBlur}
            sx={styles.Textarea}
            autoFocus
          />
        ) : (
          <Typography sx={styles.Card}>
            {name}
          </Typography>
        )}
        <Box
          sx={styles.BoxStyle}
          onClick={preventDef}
          className='icon_change_todo'
          aria-hidden='true'
        >
          <IconButton
            role='button'
            color='primary'
            aria-label='Edit'
            sx={styles.Icon}
            onClick={() => setIsEditing(true)}
          >
            <Build fontSize='small' />
          </IconButton>
          <CheckCircleIcon
            role='button'
            color='primary'
            aria-label='done'
            sx={styles.Icon}
            onClick={doneTodos}
          >
            <Build fontSize='small' />
          </CheckCircleIcon>
          <IconButton
            sx={styles.Icon}
            color='secondary'
            aria-label='Delete'
            onClick={() => deleteTodo(id)}
          >
            <Delete fontSize='small' />
          </IconButton>
        </Box>
      </Paper>
    </Grid>
  );
}

export default Todo;
