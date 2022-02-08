import React, {useState} from "react";
import './App.css';
import {AuthContext} from "./context/Context";
import MyRoutes from "./components/MyRouters";

function App() {
    // todo rename folders to lowercase
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')))

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
