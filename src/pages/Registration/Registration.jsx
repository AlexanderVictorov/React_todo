import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Box, Button, Stack, TextField, Typography,
} from '@mui/material';
import { APIService } from '../../services/APIService';
import Animation from '../../components/Animation/animation';
import ROUTE_LINKS from '../../components/MyRouters/routeLink';

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 400px;
  margin-top: -200px;
  overflow: hidden;
`;

function Registration() {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const onChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };
  const addUser = async (event) => {
    event.preventDefault();
    await APIService.registration(newUser);
    setNewUser(newUser);
    setNewUser({
      username: '',
      email: '',
      password: '',
    });
  };
  return (
    <StyledBox>
      <Box sx={{ marginTop: '30px' }}>
        <Typography variant='h5'>Create a new user </Typography>
        <Box sx={{ paddingTop: '10px', position: 'relative', zIndex: '2' }} component='form' onSubmit={addUser}>
          <Box
            sx={{
              '& > :not(style)': { m: 1, width: '25ch', display: 'flex' },
            }}
            noValidate
            autoComplete='off'
          >
            <TextField
              // id='outlined-basic'
              label='Username'
              variant='outlined'
              type='text'
              name='username'
              value={newUser.username}
              onChange={onChange}
            />
            <TextField
              // id='outlined-basic'
              label='Email'
              variant='outlined'
              type='text'
              name='email'
              value={newUser.email}
              onChange={onChange}
            />
            <TextField
              // id='outlined-basic'
              label='Password'
              variant='outlined'
              type='password'
              name='password'
              value={newUser.password}
              onChange={onChange}
            />
          </Box>
          <Stack spacing={2} direction='row'>
            <Button sx={{ marginLeft: '6px' }} variant='contained' type='submit'>Create New Account</Button>
          </Stack>
          <Typography sx={{ marginTop: '20px' }} variant='body1'><NavLink to={ROUTE_LINKS.login}>Back To Login</NavLink></Typography>
        </Box>
      </Box>
      <Animation />
    </StyledBox>

  );
}

export default Registration;
