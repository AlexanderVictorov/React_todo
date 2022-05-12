import React from 'react';
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
import useValidate from '../../components/Hooks/useValidate';

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
  const validateForm = useValidate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const addUser = async (event) => {
    event.preventDefault();
    await dispatch(RegistrationInServer(validateForm.userLoginDetails));
    validateForm.setUserLoginDetails({ username: '', email: '', password: '' });
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
            {(validateForm.userNameDirty && validateForm.validateError.userNameError)
              && (
                <Typography
                  sx={{ fontSize: '12px' }}
                  color='error'
                >
                  {validateForm.validateError.userNameError}
                </Typography>
              )}
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
              && (
                <Typography
                  sx={{ fontSize: '12px' }}
                  color='error'
                >
                  {validateForm.validateError.passwordError}
                </Typography>
              )}
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
              onClick={userRegistrationNotification}
              disabled={!validateForm.formValid}
              sx={{ marginLeft: '10px' }}
              variant='contained'
              type='submit'
            >
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
