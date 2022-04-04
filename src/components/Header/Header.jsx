import React from 'react';
import './header.css'
import Navigation from "../../pages/Navigation/Navigation";

const Header = () => {
    return (
        <div className="wr">
            <div className="header">
                <h1>Todo App</h1>
                <Navigation/>
            </div>
            <ul className="bg-bubbles">
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
            </ul>

        </div>

    );
};

export default Header;
