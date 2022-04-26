import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Box, Button, Stack, TextField, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import Animation from '../../components/Animation/animation';
import ROUTE_LINKS from '../../components/MyRouters/routeLink';
import { RegistrationInServer } from '../../store/slices/auth';

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: auto;
  margin-top: -200px;
  overflow: hidden;
  padding-bottom: 15px;
`;

function Registration() {
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  // todo тут как-то намудрил с переменными ошибок. как-то симпатичнее бы.
  const [userNameError, setUserNameError] = useState('Enter values for the username field');
  const [emailError, setEmailError] = useState('Enter values for the email field');
  const [passwordError, setPasswordError] = useState('Enter values for the password field');
  const [formValid, setFormValid] = useState(false);
  const [newUser, setNewUser] = useState({ username: '', email: '', password: '' });
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

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
        console.log('blurHandler/default');
    }
  };
  const userNameHandler = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
    if (!e.target.value) {
      setUserNameError('Enter values for the username field');
    } else {
      setUserNameError('');
    }
  };
  const emailHandler = (e) => {
    setNewUser({
      ...newUser,
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
    setNewUser({
      ...newUser,
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
  const addUser = async (event) => {
    event.preventDefault();
    await dispatch(RegistrationInServer(newUser));
    setNewUser(newUser);
    setNewUser({ username: '', email: '', password: '' });
  };
  const userRegistrationNotification = () => {
    enqueueSnackbar('User registered', {
      variant: 'success',
    });
  };

  return (
    <StyledBox>
      <Box sx={{ marginTop: '30px' }}>
        <Typography variant='h5'>Create a new user </Typography>
        <Box sx={{ paddingTop: '10px', position: 'relative', zIndex: '2' }} component='form' onSubmit={addUser}>
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
              value={newUser.username}
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
              value={newUser.email}
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
              value={newUser.password}
              onChange={passwordHandler}
              onBlur={blurHandler}
            />
          </Box>
          <Stack spacing={2} direction='row'>
            <Button onClick={userRegistrationNotification} disabled={!formValid} sx={{ marginLeft: '10px' }} variant='contained' type='submit'>
              Create New
              Account
            </Button>
          </Stack>
          <Typography sx={{ marginTop: '20px' }} variant='body1'><NavLink to={ROUTE_LINKS.login}>Back To Login</NavLink></Typography>
        </Box>
      </Box>
      <Animation />
    </StyledBox>

  );
}

export default Registration;
