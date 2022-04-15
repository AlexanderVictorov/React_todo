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
      <Box sx={{
        display: 'flex', marginTop: '10px', justifyContent: 'space-between', width: '270px', alignItems: 'center',
      }}
      >
        <Button variant='contained' size='small' onClick={() => done()}>Done</Button>
        <Button variant='contained' size='small' onClick={() => all()}>All</Button>
        <Button variant='contained' size='small' onClick={() => active()}>In Progress</Button>
      </Box>
    </Box>
  );
}

export default AddTodo;
