import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Box, Button, Stack, TextField, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../context/Context';
import Animation from '../../components/Animation/animation';
import ROUTE_LINKS from '../../components/MyRouters/routeLink';
import { fetchLogin } from '../../store/slices/todos';

const StyledBox = styled(Box)`
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  position: absolute;
  top: 25%;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [userNameError, setUserNameError] = useState('Enter values for the username field');
  const [emailError, setEmailError] = useState('Enter values for the email field');
  const [passwordError, setPasswordError] = useState('Enter values for the password field');
  const [formValid, setFormValid] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userNameError || emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userNameError, emailError, passwordError]);

  const [myLogin, setMyLogin] = useState({
    username: '',
    email: '',
    password: '',
  });
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'username':
        setUserNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        console.log('lol');
    }
  };
  const emailHandler = (e) => {
    setMyLogin({
      ...myLogin,
      [e.target.name]: e.target.value,
    });
    const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Not correct email');
    } else {
      setEmailError('');
    }
  };
  const passwordHandler = (e) => {
    setMyLogin({
      ...myLogin,
      [e.target.name]: e.target.value,
    });
    if (!e.target.value) {
      setPasswordError('Enter values for the password field');
    }
    if (e.target.value.length < 3) {
      setPasswordError('password must be longer than 3 characters');
    } else {
      setPasswordError('');
    }
  };
  const userNameHandler = (e) => {
    setMyLogin({
      ...myLogin,
      [e.target.name]: e.target.value,
    });
    if (!e.target.value) {
      setUserNameError('Enter values for the username field');
    } else {
      setUserNameError('');
    }
  };
  const login = async (e) => {
    e.preventDefault();
    await dispatch(fetchLogin(myLogin));
    setMyLogin(myLogin);
    setMyLogin({
      username: '',
      email: '',
      password: '',
    });
    if (localStorage.getItem('isAuth')) {
      setIsAuth(true);
      navigate(ROUTE_LINKS.todo);
    }
  };
  return (
    <StyledBox>
      <Box>
        <Typography sx={{ marginTop: '20px' }} variant='h2'>Welcome</Typography>
        <Box sx={{ marginLeft: '35px', position: 'relative', zIndex: '2' }} component='form' onSubmit={login}>
          <Box
            sx={{
              '& > :not(style)': { m: 1, width: '26ch', display: 'flex' },
            }}
            noValidate
            autoComplete='off'
          >
            {(userNameDirty && userNameError)
              && <Typography sx={{ fontSize: '12px' }} color='error'>{userNameError}</Typography>}
            <TextField
              label='Username'
              variant='outlined'
              type='text'
              name='username'
              value={myLogin.username}
              onChange={userNameHandler}
              onBlur={blurHandler}
            />
            {(emailDirty && emailError)
              && <Typography sx={{ fontSize: '12px' }} color='error'>{emailError}</Typography>}
            <TextField
              label='Email'
              variant='outlined'
              type='text'
              name='email'
              value={myLogin.email}
              onChange={emailHandler}
              onBlur={blurHandler}
            />
            {(passwordDirty && passwordError)
              && <Typography sx={{ fontSize: '12px' }} color='error'>{passwordError}</Typography>}
            <TextField
              label='Password'
              variant='outlined'
              type='password'
              name='password'
              value={myLogin.password}
              onChange={passwordHandler}
              onBlur={blurHandler}
            />
          </Box>
          <Stack spacing={2} direction='row'>
            <Button disabled={!formValid} sx={{ marginLeft: '9px', width: '207px' }} variant='contained' type='submit'>
              Log
              In
            </Button>
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
