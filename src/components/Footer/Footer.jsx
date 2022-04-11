import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Animation from '../Animation/animation';
import { saveTodoOnServer } from '../../store/asyncAction/fetchTodos';

const StyledBox = styled(Box)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #50a3a2;
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  overflow: hidden;
  z-index: 9999;
`;

function Footer() {
  const dispatch = useDispatch();
  return (
    <StyledBox onClick={() => dispatch(saveTodoOnServer())}>
      <Box>
        <Typography variant='h5'>Save Todos</Typography>
      </Box>
      <Animation />
    </StyledBox>
  );
}

export default Footer;
