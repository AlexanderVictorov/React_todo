import React, { useState } from 'react';
import {
  Box, Button, Input, Typography,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { saveTodoOnServer } from '../../store/asyncAction/fetchTodos';
import SortTodo from '../SortTodo/SortTodo';

const StyledBox = styled(Box)`
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //position: absolute;
  //top: 20px;
  //left: 0;
  //width: 400px;
  //z-index: 100;
  position: absolute;
  top: 15px;
  left: 5px;
  z-index: 100;
`;

function AddTodo({
  addToList,
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
      <Box sx={{ display: 'flex', width: '100%', height: '30px' }}>
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
          sx={{
            lineHeight: '13px',
            marginRight: '5px',
            fontFamily: 'serif',
            fontSize: '14px',
            textTransform: 'capitalize',
          }}
          type='submit'
          variant='contained'
          color='primary'
          size='small'
        >
          Add Todos
        </Button>
        <Button
          sx={{
            backgroundColor: 'green',
            marginRight: '-5px',
            fontFamily: 'serif',
            fontSize: '14px',
            lineHeight: '13px',
            letterSpacing: '0px',
            textTransform: 'capitalize',
          }}
          variant='contained'
          size='small'
          onClick={saveTodos}
        >
          Save Todos
        </Button>
        {isError && (
          <Typography sx={{ marginLeft: '10px' }} variant='caption' color='error'>
            Error, must enter a value!
          </Typography>
        )}
      </Box>
      <Box />
      <StyledBox>
        <SortTodo />
        {/* <Button */}
        {/* sx={{ */}
        {/*   fontFamily: 'serif', fontSize: '12px', textTransform: 'capitalize', */}
        {/*   marginRight: '10px', */}
        {/* }} */}
        {/* variant='contained' */}
        {/* size='small' */}
        {/* onClick={() => all()} */}
        {/* > */}
        {/* All todos */}
        {/* </Button> */}
        {/* <Button */}
        {/* sx={{ */}
        {/*   fontFamily: 'serif', fontSize: '12px', textTransform: 'capitalize', */}
        {/*   marginRight: '10px', */}
        {/* }} */}
        {/* variant='contained' */}
        {/* size='small' */}
        {/* onClick={() => done()} */}
        {/* > */}
        {/* Completed Todos */}
        {/* </Button> */}
        {/* <Button */}
        {/* sx={{ fontFamily: 'serif', fontSize: '12px', textTransform: 'capitalize' }} */}
        {/* variant='contained' */}
        {/* size='small' */}
        {/* onClick={() => active()} */}
        {/* > */}
        {/* Not Completed Todos */}
        {/* </Button> */}
      </StyledBox>
    </Box>
  );
}

export default AddTodo;
