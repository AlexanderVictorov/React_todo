import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/Context";
import {NavLink, useNavigate} from "react-router-dom";
import {APIService} from "../../services/APIService";
import Animation from '../../components/Animation/animation';

const Login = () => {

    const {setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const [myLogin, setMyLogin] = useState({
        username: '',
        email: '',
        password: '',
    })
    const onChange = event => {
        setMyLogin({
            ...myLogin,
            [event.target.name]: event.target.value,
        })
    }
    const login = async e => {
        e.preventDefault()
        try {
            const response = await APIService.login(myLogin)
            const token = response.data.token
            localStorage.setItem('token', JSON.stringify(token))
            setMyLogin(myLogin)
            setMyLogin({
                username: '',
                email: '',
                password: '',
            })
            if (response.status === 200) {
                localStorage.setItem('isAuth', 'true');
                setIsAuth(true)
                navigate('/todo')
            }
        } catch (error) {
            console.log('Пользователь не зарегестрирован')
            // window.confirm('Пользователь не зарегестрирован')
            setMyLogin({
                username: '',
                email: '',
                password: '',
            })
        }
    }
    return (
        <div className="wrapper">
            <div className="container">
                <h1>Welcome</h1>
                <form onSubmit={login} className="form">
                    <input type="text" name="username" value={myLogin.username} onChange={onChange}
                           placeholder="Username"/>
                    <input type="text" name="email" value={myLogin.email} onChange={onChange} placeholder="Email"/>
                    <input type="password" name="password" value={myLogin.password} onChange={onChange}
                           placeholder="Password"/>
                    <button type="submit" id="login-button">Login</button>
                    <p className="message">Not registered? <NavLink to='/registration'> Create an account</NavLink></p>
                </form>
            </div>
            <Animation/>
        </div>
    );
};

export default Login;
