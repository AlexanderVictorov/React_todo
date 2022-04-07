import React from 'react';
import './footer.css'
import {saveTodoOnServer} from "../../store/asyncAction/fetchTodos";
import {useDispatch} from "react-redux";
import Animation from '../Animation/animation';

const Footer = () => {
    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(saveTodoOnServer())} className="wrapp">
            <div className="contant">
                <h3>Save Todos</h3>
            </div>
            {/* vladComment выделить в отдельную компоненту */}
            <Animation/>
        </div>
    );
};

export default Footer;
