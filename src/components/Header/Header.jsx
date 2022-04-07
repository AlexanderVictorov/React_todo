import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navigation from '../../pages/Navigation/Navigation';
import Animation from '../Animation/animation';

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #50a3a2;
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  overflow: hidden;
`;

function Header() {
  return (
    <StyledBox>
      <Box>
        <Typography variant='h5'>Todos App</Typography>
        <Navigation />
      </Box>
      <Animation />
    </StyledBox>

  );
}

export default Header;
