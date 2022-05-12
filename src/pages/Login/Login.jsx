import React, { useContext } from 'react';
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
import useValidate from '../../components/Hooks/useValidate';

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
  const validateForm = useValidate();
  const { setIsAuth } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userNotification = () => {
    enqueueSnackbar('User not registered', {
      variant: 'error',
    });
  };
  const LoginFormHandler = async (e) => {
    e.preventDefault();
    await dispatch(LoginInServer(validateForm.userLoginDetails));
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
        <Box
          sx={{ marginLeft: '35px', position: 'relative', zIndex: '2' }}
          component='form'
          onSubmit={LoginFormHandler}
        >
          <Box
            sx={{
              '& > :not(style)': { m: 1, width: '26ch', display: 'flex' },
            }}
            noValidate
            autoComplete='off'
          >
            {(validateForm.userNameDirty && validateForm.validateError.userNameError)
              && <Typography sx={{ fontSize: '12px' }} color='error'>{validateForm.validateError.userNameError}</Typography>}
            <TextField
              label='Username'
              variant='outlined'
              type='text'
              name='username'
              value={validateForm.userLoginDetails.username}
              onChange={validateForm.userNameHandler}
              onBlur={validateForm.blurHandler}
            />
            {(validateForm.emailDirty && validateForm.validateError.emailError)
              && <Typography sx={{ fontSize: '12px' }} color='error'>{validateForm.validateError.emailError}</Typography>}
            <TextField
              label='Email'
              variant='outlined'
              type='text'
              name='email'
              value={validateForm.userLoginDetails.email}
              onChange={validateForm.emailHandler}
              onBlur={validateForm.blurHandler}
            />
            {(validateForm.passwordDirty && validateForm.validateError.passwordError)
              && <Typography sx={{ fontSize: '12px' }} color='error'>{validateForm.validateError.passwordError}</Typography>}
            <TextField
              label='Password'
              variant='outlined'
              type='password'
              name='password'
              value={validateForm.userLoginDetails.password}
              onChange={validateForm.passwordHandler}
              onBlur={validateForm.blurHandler}
            />
          </Box>
          <Stack spacing={2} direction='row'>
            <Button
              disabled={!validateForm.formValid}
              sx={{ marginLeft: '9px', width: '207px' }}
              variant='contained'
              type='submit'
            >
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
