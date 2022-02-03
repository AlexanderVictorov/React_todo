import React from 'react';
import './style.css'
import {NavLink} from "react-router-dom";

const Registration = () => {
    return (
            <div className="wrapper">
                <div className="container">
                    <h1>Сreate a new user</h1>
                    <form className="form">
                        <input type="text" placeholder="Username"/>
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
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