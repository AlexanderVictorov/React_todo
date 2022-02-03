import React, {useEffect, useState} from "react";
import './App.css';
import {AuthContext} from "./Context/Context";
import MyRoutes from "./Components/MyRouters/MyRoutes";

function App() {
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem('isAuth'))
    useEffect(() => {
        if (localStorage.getItem('isAuth')) {
            setIsAuth(true)
        }
        setIsAuth(false)
    })
    return (
        <div className="App">
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
            }}>
                <MyRoutes/>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
