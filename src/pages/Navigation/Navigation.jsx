import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ROUTE_LINKS from '../../components/MyRouters/routeLink';
import { logout, userIsAuthorized } from '../../store/slices/auth';

const styles = {
  nav: {
    position: 'absolute',
    paddingLeft: '5px',
    right: '20px',
    top: '20px',
    zIndex: '99',
  },
};
function Navigation() {
  const isActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);

  const onClickSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuth');
    navigate(ROUTE_LINKS.login);
    dispatch(userIsAuthorized(false));
    dispatch(logout());
  };

  return (
    isLogin
      ? (
        <Typography sx={styles.nav}>
          <NavLink to='/todo' style={isActiveStyle}>Todos </NavLink>
          <Link to='/login' onClick={onClickSignOut}> SignOut </Link>
        </Typography>
      )
      : (
        <Typography sx={styles.nav}>
          <NavLink to='/login' style={isActiveStyle}>LogIn </NavLink>
          <NavLink to='/registration' style={isActiveStyle}>SignUp </NavLink>
        </Typography>
      )
  );
}

export default Navigation;
