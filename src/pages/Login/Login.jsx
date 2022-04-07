import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { AuthContext } from '../../context/Context';
import { APIService } from '../../services/APIService';
import Animation from '../../components/Animation/animation';

const StyledBox = styled(Box)`
  background: #50a3a2;
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
  position: absolute;
  top: 30%;
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
        <Box component='form' onSubmit={login}>
          <input
            type='text'
            name='username'
            value={myLogin.username}
            onChange={onChange}
            placeholder='Username'
          />
          <input type='text' name='email' value={myLogin.email} onChange={onChange} placeholder='Email' />
          <input
            type='password'
            name='password'
            value={myLogin.password}
            onChange={onChange}
            placeholder='Password'
          />
          <button type='submit' id='login-button'>Login</button>
          <Typography sx={{ marginTop: '10px' }} variant='body1' className='message'>
            Not registered?
            <NavLink to='/registration'> Create an account </NavLink>
          </Typography>
        </Box>
      </Box>
      <Animation />
    </StyledBox>
  );
}

export default Login;
