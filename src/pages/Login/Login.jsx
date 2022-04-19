import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Box, Button, Stack, TextField, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { AuthContext } from '../../context/Context';
import Animation from '../../components/Animation/animation';
import ROUTE_LINKS from '../../components/MyRouters/routeLink';
import { LoginInServer } from '../../store/slices/auth';

const styles = {
  Login: {
    display: 'flex',
    justifyContent: 'center',
    background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
    paddingBottom: '15px',
    position: 'absolute',
    top: '25%',
    left: '0px',
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
  },
};

function Login() {
  const [userLoginDetails, setUserLoginDetails] = useState({ username: '', email: '', password: '' });
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [userNameError, setUserNameError] = useState('Enter values for the username field');
  const [emailError, setEmailError] = useState('Enter values for the email field');
  const [passwordError, setPasswordError] = useState('Enter values for the password field');
  const [formValid, setFormValid] = useState(false);
  const { setIsAuth } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userNameError || emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userNameError, emailError, passwordError]);

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
        console.log('default');
    }
  };
  const emailHandler = (e) => {
    setUserLoginDetails({
      ...userLoginDetails,
      [e.target.name]: e.target.value,
    });
    const regularExpression = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!regularExpression.test(String(e.target.value).toLowerCase())) {
      setEmailError('Not correct email');
    } else {
      setEmailError('');
    }
  };
  const passwordHandler = (e) => {
    setUserLoginDetails({
      ...userLoginDetails,
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
    setUserLoginDetails({
      ...userLoginDetails,
      [e.target.name]: e.target.value,
    });
    if (!e.target.value) {
      setUserNameError('Enter values for the username field');
    } else {
      setUserNameError('');
    }
  };
  const userNotification = () => {
    enqueueSnackbar('User not registered', {
      variant: 'error',
    });
  };
  const LoginFormHandler = async (e) => {
    e.preventDefault();
    await dispatch(LoginInServer(userLoginDetails));
    setUserLoginDetails(userLoginDetails);
    setUserLoginDetails({ username: '', email: '', password: '' });
    if (localStorage.getItem('isAuth')) {
      setIsAuth(true);
      navigate(ROUTE_LINKS.todo);
    } else {
      userNotification();
    }
  };
  return (
    <Box sx={styles.Login}>
      <Box>
        <Typography sx={{ marginTop: '20px' }} variant='h2'>Welcome</Typography>
        <Box sx={{ marginLeft: '35px', position: 'relative', zIndex: '2' }} component='form' onSubmit={LoginFormHandler}>
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
              value={userLoginDetails.username}
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
              value={userLoginDetails.email}
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
              value={userLoginDetails.password}
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
    </Box>
  );
}

export default Login;
