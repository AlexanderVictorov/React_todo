import React from 'react';
import { Link } from 'react-router-dom'
import './navigat.css'

const Navigation = () => {
    return (
        <nav className='nav'>
            <Link to='/login' >Login </Link>
            <Link to='/registration' >SingIn </Link>
            <Link to='/todo' >Todo </Link>
        </nav>
    );
};

export default Navigation;