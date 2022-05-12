import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

function ErrorRegistration() {
  return (
    <Typography variant='h5' className='message'>
      Not registered?
      <NavLink to='/registration'> Create an account</NavLink>
    </Typography>
  );
}

export default ErrorRegistration;
