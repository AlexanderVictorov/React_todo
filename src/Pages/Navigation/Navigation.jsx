import React, {useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import './navigat.css'
import {AuthContext} from "../../Context/Context";

const Navigation = () => {
    const styles = ({isActive}) => ({
        fontWeight: isActive ? 'bold' : 'normal',
    });
    const {isAuth} = useContext(AuthContext)
    const navigate=useNavigate()

    const onClickSignOut=()=>{
        localStorage.removeItem('isAuth')
        navigate('/login')

    }

    return (
        isAuth
            ?
        <nav className='nav'>
            <NavLink to='/todo' style={styles}>Todo </NavLink>
            <a href='http://localhost:3000/login' onClick={onClickSignOut} >SignOut </a>
        </nav>
            :
            <nav className='nav'>
                <NavLink to='/login' style={styles}>LogIn </NavLink>
                <NavLink to='/registration' style={styles}>SignUp </NavLink>



            </nav>
    );
};

export default Navigation;