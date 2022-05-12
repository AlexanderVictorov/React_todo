import React from 'react';
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';

function SortTodo({ filter, setFilter }) {
  const handleChangeFilter = (event) => setFilter(event.target.value);
  return (
    <FormControl size='small' fullWidth sx={{ minWidth: 80 }}>
      <InputLabel id='demo-simple-select-label'>Sort Todos</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={filter}
        label='Todo'
        onChange={handleChangeFilter}
      >
        <MenuItem value='all'>All todos</MenuItem>
        <MenuItem value='done'>Completed Todos</MenuItem>
        <MenuItem value='active'>Not Completed Todos</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortTodo;
