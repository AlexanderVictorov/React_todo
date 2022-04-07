import React, { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { APIService } from '../../services/APIService';
import Animation from '../../components/Animation/animation';
import ROUTE_LINKS from '../../components/MyRouters/routeLink';

const StyledBox = styled(Box)`
  background: #50a3a2;
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
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
      <Box sx={{ marginTop: '50px' }}>
        <Typography variant='body1'>Create a new user </Typography>
        <Box component='form' onSubmit={addUser}>
          <input
            type='text'
            name='username'
            value={newUser.username}
            onChange={onChange}
            placeholder='Username'
          />
          <input type='text' name='email' value={newUser.email} onChange={onChange} placeholder='Email' />
          <input
            type='password'
            name='password'
            value={newUser.password}
            onChange={onChange}
            placeholder='Password'
          />
          <button type='submit' id='login-button'>
            Create New Account
          </button>
          <Typography variant='inherit'><NavLink to={ROUTE_LINKS.login}>Back To Login</NavLink></Typography>
        </Box>
      </Box>
      <Animation />
    </StyledBox>

  );
}

export default Registration;
