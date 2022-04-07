import React, { useState } from 'react';
import { Button, Input } from '@mui/material';

const AddTodo = ({ addToList }) => {
  // vladComment убрать рефы и сделать контролируемые инпуты с помощью useState. Рефы используются для прямого контроля элемента DOM, а не для получения его value.
  const [newTodo, setNewTodo] = useState('');
  const [isError, setIsError] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (newTodo === '') {
      setIsError(true);
      return;
    }
    setIsError(false);
    addToList(newTodo);
    setNewTodo('');
  };
  const onChange = event => {
    setNewTodo(() => event.target.value);
  };

  return (
    // vladComment уверен в Material UI есть альтернатива <form />
    <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
      <Input
        placeholder="Todo"
        inputProps={{
          'aria-label': 'Description',
        }}
        onChange={onChange}
        value={newTodo}
        // vladComment убрать style из элементов Material UI, для этого есть sx/makeStyles/styled
        style={{ width: '90%' }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        // vladComment убрать style из элементов Material UI, для этого есть sx/makeStyles/styled
        style={{ width: '10%' }}
      >
        Add
      </Button>
      {/*vladComment убрать <p /> в Material UI есть Typography, стили задавать по доке material UI */}
      {isError && <p className="error">
        Error, must enter a value!
      </p>}
    </form>
    );
};

export default AddTodo;
