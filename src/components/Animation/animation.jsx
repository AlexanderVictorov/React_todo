import React from 'react';
import './animation.css';
import { Box } from '@mui/material';

function Animation() {
  return (
    <Box>
      <ul className='bg-bubbles'>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </Box>
  );
}

export default React.memo(Animation);
