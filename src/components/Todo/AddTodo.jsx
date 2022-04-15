import React, { useState } from 'react';
import {
  Box, Button, Input, Typography,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { saveTodoOnServer } from '../../store/asyncAction/fetchTodos';

function AddTodo({
  addToList, active, all, done,
}) {
  const [newTodo, setNewTodo] = useState('');
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo === '') {
      setIsError(true);
      return;
    }
    setIsError(false);
    addToList(newTodo);
    setNewTodo('');
  };
  const onChange = (event) => {
    setNewTodo(() => event.target.value);
  };
  const { enqueueSnackbar } = useSnackbar();
  const saveTodos = () => {
    enqueueSnackbar('Save Todos', {
      variant: 'success',
    });
    dispatch(saveTodoOnServer());
  };
  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
      component='form'
      onSubmit={handleSubmit}
    >
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Input
          placeholder='Todo'
          inputProps={{
            'aria-label': 'Description',
          }}
          onChange={onChange}
          value={newTodo}
          sx={{ width: '90%' }}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='small'
        >
          Add
        </Button>

        {isError && (
          <Typography variant='caption' color='error'>
            Error, must enter a value!
          </Typography>
        )}
      </Box>
      <Box />
      <Box sx={{
        display: 'flex', marginTop: '10px', justifyContent: 'space-between', width: '400px', alignItems: 'center',
      }}
      >
        <Button sx={{ fontFamily: 'serif', fontSize: '12px', textTransform: 'capitalize' }} variant='contained' size='small' onClick={() => all()}>All</Button>
        <Button sx={{ fontFamily: 'serif', fontSize: '12px', textTransform: 'capitalize' }} variant='contained' size='small' onClick={() => done()}>Completed</Button>
        <Button sx={{ fontFamily: 'serif', fontSize: '12px', textTransform: 'capitalize' }} variant='contained' size='small' onClick={() => active()}>Not Completed</Button>
        <Button
          sx={{
            backgroundColor: 'green',
            fontFamily: 'serif',
            fontSize: '14px',
            textTransform: 'capitalize',
          }}
          variant='contained'
          size='small'
          onClick={saveTodos}
        >
          Save Todos
        </Button>
      </Box>
    </Box>
  );
}

export default AddTodo;
