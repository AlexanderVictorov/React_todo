import React from 'react';
import './style.css'
const Login = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <h1>Welcome</h1>

                <form className="form">
                    <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                            <button type="submit" id="login-button">Login</button>
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
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