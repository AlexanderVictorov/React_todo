import React from "react";
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import TodoList from "./Components/Todo/TodoList";
import Header from "./Components/Header/Header";
import Registration from "./Pages/Registration/Registration";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="login" element={<Login/>}/>
                <Route path="registration" element={<Registration/>}/>
                <Route path="todo" element={<TodoList/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
