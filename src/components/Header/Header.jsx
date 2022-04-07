import React from 'react';
import './header.css'
import Navigation from "../../pages/Navigation/Navigation";
import Animation from '../Animation/animation';

const Header = () => {
    return (
        // vladComment писать стили не в css файле, а по доке Material UI. Этот класс не относится к анимации.
        <div className="wr">
            <div className="header">
                <h1>Todo App</h1>
                <Navigation/>
            </div>
            {/*vladComment повторение кода. Вставить сюда выделенный в компоненту код*/}
          <Animation/>
        </div>

    );
};

export default Header;
