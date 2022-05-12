import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useDispatch } from 'react-redux';
import { leadTimeTodo } from '../../store/slices/todos';

function DateTimePickers({ id }) {
  const [value, setValue] = useState(new Date('2022-04-27T00:00:00'));
  const [closeDatePicker, setCloseDatePicker] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!closeDatePicker) {
      const newTime = Date.parse(value);
      dispatch(leadTimeTodo({ id, newTime }));
    }
  }, [value, closeDatePicker]);

  const addTimeTodo = () => {
    setCloseDatePicker(false);
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const inputRender = ({ InputProps, inputRef, inputProps }) => (
    <Box
      sx={{
        '& .MuiInputAdornment-root .MuiButtonBase-root': {
          margin: '0',
          padding: '0',
          color: '#1976d2',
        },
      }}
      ref={inputRef}
    // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputProps}
    >
      {InputProps?.endAdornment}
    </Box>
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        label='Custom'
        value={value}
        onClose={addTimeTodo}
        onChange={handleChange}
        renderInput={inputRender}
      />
    </LocalizationProvider>
  );
}

export default DateTimePickers;
