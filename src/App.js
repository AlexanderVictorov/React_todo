import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import TodoList from "./Components/Todo/TodoList";
import Footer from "./Components/Footer/Footer";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<TodoList/>*/}
            <Login/>
            {/*<Registration/>*/}
            <Footer/>
        </div>
    );
}

export default App;
