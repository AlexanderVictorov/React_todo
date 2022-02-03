import React, {useContext, useState} from 'react';
import {AuthContext} from "../../Context/Context";
import {NavLink, useNavigate} from "react-router-dom";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [myLogin, setMyLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()

    const login = e => {
        e.preventDefault()
        let userList = localStorage.getItem('userList')
        if (!userList) return // нет пользователей вообще
        userList = JSON.parse(userList)
        const user = userList.find(user => user.username === myLogin)
        if (!user) return // нет юзера с таким имейлом
        if (user.password !== password) return // юзер есть, но пароль неверный
        // все ок
        
        if (myLogin === 'test@test.com' && password === '123') {
            setIsAuth(true)
            localStorage.setItem('isAuth', 'true');
            setIsAuth(true)
            navigate('/todo')

            return
        }
        setMyLogin('');
        setPassword('');
    }
    return (
        <div className="wrapper">
            <div className="container">
                <h1>Welcome</h1>
                <form onSubmit={login} className="form">
                    <input
                        value={myLogin}
                        onChange={(e) => setMyLogin((e.target.value))}
                        type="text"
                        placeholder="Username"/>
                    <input
                        value={password}
                        onChange={(e) => setPassword((e.target.value))}
                        type="password"
                        placeholder="Password"/>
                    <button type="submit" id="login-button">Login</button>
                    <p className="message">Not registered? <NavLink to='/registration'> Create an account</NavLink></p>
                </form>
            </div>
            <ul className="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Login;
