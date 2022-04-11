import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { AuthContext } from '../../context/Context';
import useStyles from './Navigation.styles';

function Navigation() {
  const isActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });
  const { nav } = useStyles();
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const onClickSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuth');
    navigate('/login');
  };

  return (
    isAuth
      ? (
        <Typography className={nav}>
          <NavLink to='/todo' style={isActiveStyle}>Todos </NavLink>
          <Link to='/login' onClick={onClickSignOut}> SignOut </Link>
        </Typography>
      )
      : (
        <Typography className={nav}>
          <NavLink to='/login' style={isActiveStyle}>LogIn </NavLink>
          <NavLink to='/registration' style={isActiveStyle}>SignUp </NavLink>
        </Typography>
      )
  );
}

export default Navigation;
