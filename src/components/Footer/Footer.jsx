import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSnackbar } from 'notistack';
import Animation from '../Animation/animation';
import { saveTodoOnServer } from '../../store/asyncAction/fetchTodos';

const StyledBox = styled(Box)`
  cursor: pointer;
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
  const { enqueueSnackbar } = useSnackbar();
  const handleClick = () => {
    enqueueSnackbar('Save Todos', {
      variant: 'success',
    });
  };
  const dispatch = useDispatch();
  return (
    <Box sx={{ marginTop: '20px' }} onClick={handleClick}>
      <StyledBox onClick={() => dispatch(saveTodoOnServer())}>
        <Box>
          <Typography variant='h5'>Save Todos</Typography>
        </Box>
        <Animation />
      </StyledBox>
    </Box>

  );
}

export default Footer;
