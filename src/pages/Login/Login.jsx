import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Box, Button, Stack, TextField, Typography,
} from '@mui/material';
import { AuthContext } from '../../context/Context';
import { APIService } from '../../services/APIService';
import Animation from '../../components/Animation/animation';
import ROUTE_LINKS from '../../components/MyRouters/routeLink';

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  position: absolute;
  top: 25%;
  left: 0;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [myLogin, setMyLogin] = useState({
    username: '',
    email: '',
    password: '',
  });
  const onChange = (event) => {
    setMyLogin({
      ...myLogin,
      [event.target.name]: event.target.value,
    });
  };
  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await APIService.login(myLogin);
      const { token } = response.data;
      localStorage.setItem('token', JSON.stringify(token));
      setMyLogin(myLogin);
      setMyLogin({
        username: '',
        email: '',
        password: '',
      });
      if (response.status === 200) {
        localStorage.setItem('isAuth', 'true');
        setIsAuth(true);
        navigate('/todo');
      }
    } catch (error) {
      console.log('Пользователь не зарегестрирован');
      // window.confirm('Пользователь не зарегестрирован')
      setMyLogin({
        username: '',
        email: '',
        password: '',
      });
    }
  };
  return (
    <StyledBox>
      <Box>
        <Typography sx={{ marginTop: '20px' }} variant='h2'>Welcome</Typography>
        <Box sx={{ marginLeft: '35px', position: 'relative', zIndex: '2' }} component='form' onSubmit={login}>
          <Box
            sx={{
              '& > :not(style)': { m: 1, width: '25ch', display: 'flex' },
            }}
            noValidate
            autoComplete='off'
          >
            <TextField
              label='Username'
              variant='outlined'
              type='text'
              name='username'
              value={myLogin.username}
              onChange={onChange}
            />
            <TextField
              label='Email'
              variant='outlined'
              type='text'
              name='email'
              value={myLogin.email}
              onChange={onChange}
            />
            <TextField
              label='Password'
              variant='outlined'
              type='password'
              name='password'
              value={myLogin.password}
              onChange={onChange}
            />
          </Box>
          <Stack spacing={2} direction='row'>
            <Button sx={{ marginLeft: '9px', width: '200px' }} variant='contained' type='submit'>Log In</Button>
          </Stack>
          <Typography sx={{ marginTop: '10px' }} variant='body1' className='message'>
            Not registered?
            <NavLink to={ROUTE_LINKS.registration}> Create an account </NavLink>
          </Typography>
        </Box>
      </Box>
      <Animation />
    </StyledBox>
  );
}

export default Login;
