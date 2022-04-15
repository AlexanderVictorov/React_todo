import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navigation from '../../pages/Navigation/Navigation';
import Animation from '../Animation/animation';

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
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
