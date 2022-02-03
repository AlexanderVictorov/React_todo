import React from 'react';
import {NavLink} from 'react-router-dom'
import './navigat.css'

const Navigation = () => {
    const styles = ({isActive}) => ({
        fontWeight: isActive ? 'bold' : 'normal',
    });
    return (
        <nav className='nav'>
            <NavLink to='/login' style={styles}>LogIn </NavLink>
            <NavLink to='/registration' style={styles}>SignUp </NavLink>
            <NavLink to='/todo' style={styles}>Todo </NavLink>
            <NavLink to='/exit' >SignOut </NavLink>
        </nav>
    );
};

export default Navigation;