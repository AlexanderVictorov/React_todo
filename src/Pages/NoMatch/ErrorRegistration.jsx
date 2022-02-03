import React from 'react';
import {NavLink} from "react-router-dom";

const ErrorRegistration = () => {
    return (
        <h2 className="message">Not registered? <NavLink to='/registration'> Create an account</NavLink></h2>
    );
};

export default ErrorRegistration;