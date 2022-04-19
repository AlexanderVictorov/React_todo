import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { AuthContext } from '../../context/Context';
import ROUTE_LINKS from '../../components/MyRouters/routeLink';

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
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const onClickSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuth');
    navigate(ROUTE_LINKS.login);
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    isAuth
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
