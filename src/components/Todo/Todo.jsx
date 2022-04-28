/* eslint-disable jsx-a11y/click-events-have-key-events,
jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Grid, Paper, TextField, Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { changeStatus } from '../../store/slices/todos';
import DateTimePickers from '../DateTimePicker/DateTimePicker';

const styles = {
  Card: {
    textDecoration: 'none',
    width: '430px',
  },
  Paper: {
    lineHeight: '1rem',
    position: 'relative',
    margin: 'auto',
    marginTop: '10px',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '500px',
    textDecoration: 'none',
    cursor: 'grabbing',
  },
  DoneTodos: {
    textDecoration: 'line-through',
    color: '#808080',
    position: 'relative',
    margin: 'auto',
    marginTop: '10px',
    padding: '5px',
    display: 'flex',
    width: '500px',
    cursor: 'grabbing',
  },
  Textarea: {
    width: '87%',
    height: 'auto',
  },
  ControlButtons: {
    paddingLeft: '5px',
    width: 'auto',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function Todo({
  status, name, id, updateTodo, index, onDragEnd,
  onDragLeave, onDragOver, onDragStart, onDrop, todo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(name);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const handleClickChangeTodo = () => {
    enqueueSnackbar('Change Todos', {
      variant: 'success',
    });
  };
  const handleClickDeleteTodo = () => {
    enqueueSnackbar('Delete Todos', {
      variant: 'info',
    });
  };
  const changeStatusTodo = () => {
    if (status === 'active') {
      const statusTodoDone = 'done';
      dispatch(changeStatus({ id, statusTodoDone }));
    }
    if (status === 'done') {
      const statusTodoActive = 'active';
      dispatch(changeStatus({ id, statusTodoActive }));
    }
  };
  const addTodoInTrash = () => {
    const statusTodoTrash = 'trash';
    dispatch(changeStatus({ id, statusTodoTrash }));
    handleClickDeleteTodo();
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
      handleClickChangeTodo();
    }
  };
  // const preventDef = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  // };
  const informationAboutTodo = () => {
    if (!isEditing) {
      navigate(`${id}`);
    }
  };
  const editTodo = () => setIsEditing(true);

  return (
    <Grid
      xs={12}
      item
    >
      <Paper
        onDragStart={(e) => onDragStart(e, todo)}
        onDragLeave={(e) => onDragLeave(e)}
        onDragEnd={(e) => onDragEnd(e, todo)}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, todo)}
        draggable
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
          <Typography
            sx={styles.Card}
            onClick={informationAboutTodo}
          >
            {`${index}.${name}`}
          </Typography>
        )}

        <Box
          sx={styles.ControlButtons}
          className='icon_change_todo'
          aria-hidden='true'
        >
          <DateTimePickers id={id} />
          <EditIcon
            role='button'
            color='primary'
            aria-label='Edit'
            onClick={editTodo}
          />
          <CheckCircleIcon
            role='button'
            color='primary'
            aria-label='done'
            onClick={changeStatusTodo}
          />
          <DeleteIcon
            color='secondary'
            aria-label='Delete'
            onClick={addTodoInTrash}
          />
        </Box>

      </Paper>
    </Grid>
  );
}

export default Todo;
