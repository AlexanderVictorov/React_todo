import React, { useState } from 'react';
import {
  Box, Button, Input, Typography,
} from '@mui/material';

function AddTodo({
  addToList, active, all, done,
}) {
  const [newTodo, setNewTodo] = useState('');
  const [isError, setIsError] = useState(false);
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

  return (
    <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex' }}>
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
        sx={{ width: '10%' }}
      >
        Add
      </Button>
      <Box sx={{ display: 'flex', flexDirection: 'role', width: '180px' }}>
        <Button onClick={() => done()}>Done</Button>
        <Button onClick={() => all()}>All</Button>
        <Button onClick={() => active()}>Other</Button>
      </Box>
      {isError && (
        <Typography variant='caption' color='error'>
          Error, must enter a value!
        </Typography>
      )}
    </Box>
  );
}

export default AddTodo;
