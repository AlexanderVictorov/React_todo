import React from 'react';
import './footer.css'
import {saveTodoOnServer} from "../../store/asyncAction/fetchTodos";
import {useDispatch} from "react-redux";

const Footer = () => {
    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(saveTodoOnServer())} className="wrapp">
            <div className="contant">
                <h3>Save Todos</h3>
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

export default Footer;
