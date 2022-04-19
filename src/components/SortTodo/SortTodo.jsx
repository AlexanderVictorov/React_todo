import React from 'react';
import {
  Box, FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';

function SortTodo({ setFilter, filter }) {
  const handleChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <Box>
      <FormControl size='small' fullWidth sx={{ minWidth: 80 }}>
        <InputLabel id='demo-simple-select-label'>Sort Todos</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={filter}
          label='Todo'
          onChange={handleChange}
        >
          <MenuItem value='all'>All todos</MenuItem>
          <MenuItem value='done'>Completed Todos</MenuItem>
          <MenuItem value='active'>Not Completed Todos</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SortTodo;
