import React, {useState} from 'react';
import './style.css'
import {NavLink} from "react-router-dom";
import $api from "../../http";


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
    const addUser = async (event) => {
        event.preventDefault()
        const response = await $api.post('/auth/registration', {
            ...newUser
        })
        const data = await response
        setNewUser(newUser)
        setNewUser({
            username: '',
            email: '',
            password: '',
        })
    }
    return (
        <div className="wrapper">
            <div className="container">
                <h1>Create a new user</h1>
                <form className="form" onSubmit={addUser}>
                    <input type="text" name="username" value={newUser.username} onChange={onChange}
                           placeholder="Username"/>
                    <input type="text" name="email" value={newUser.email} onChange={onChange} placeholder="Email"/>
                    <input type="password" name="password" value={newUser.password} onChange={onChange}
                           placeholder="Password"/>
                    <button type="submit" id="login-button">
                        Create New Account
                    </button>
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
