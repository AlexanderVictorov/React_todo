import React, {useState} from 'react';
import './style.css'
import {NavLink} from "react-router-dom";

const Registration = () => {
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: '',
    })

    const onChange = event => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value,
        })
    }

    const onCreate = () => {
        let userList = localStorage.getItem('userList')
        if (!userList) {
            userList = []
        } else {
            userList = JSON.parse(userList)
        }
        userList.push(newUser)
        localStorage.setItem('userList', JSON.stringify(userList))
    }

    return (
            <div className="wrapper">
                <div className="container">
                    <h1>Сreate a new user</h1>
                    <form className="form" onSubmit={onCreate}>
                        <input type="text" name="username" value={newUser.username} onChange={onChange} placeholder="Username"/>
                        <input type="text" name="email" value={newUser.email} onChange={onChange} placeholder="Email"/>
                        <input type="password" name="password" value={newUser.password} onChange={onChange} placeholder="Password"/>
                        <button type="submit" id="login-button">
                            Create New Account</button>
                        <p className="message"><NavLink to='/login'>Back To Login</NavLink></p>

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

export default Registration;