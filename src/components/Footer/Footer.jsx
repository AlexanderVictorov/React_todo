import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Animation from '../Animation/animation';

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  overflow: hidden;
  z-index: 1;
`;

function Footer() {
  return (
    <StyledBox>
      <Box>
        <Typography variant='h5'>Footer</Typography>
      </Box>
      <Animation />
    </StyledBox>

  );
}

export default Footer;
