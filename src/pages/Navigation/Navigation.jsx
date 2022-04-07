import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Context';
import useStyles from './Navigation.styles';

function Navigation() {
  const styles = ({ isActive }) => ({
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
        <nav className={nav}>
          <NavLink to='/todo' style={styles}>Todos </NavLink>
          <Link to='/login' onClick={onClickSignOut}>SignOut </Link>
        </nav>
      )
      : (
        <nav className={nav}>
          <NavLink to='/login' style={styles}>LogIn </NavLink>
          <NavLink to='/registration' style={styles}>SignUp </NavLink>
        </nav>
      )
  );
}

export default Navigation;
