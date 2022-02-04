import React, {useContext} from 'react';
import {AuthContext} from "../../Context/Context";
import {Route, Routes} from "react-router-dom";
import Layout from "../../Layout";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import TodoList from "../Todo/TodoList";
import NoMatch from "../../Pages/NoMatch/NoMatch";
import ErrorRegistration from "../../Pages/NoMatch/ErrorRegistration";

const MyRoutes = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        isAuth
            ?
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<Login/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="todo" element={<TodoList/>}/>
                    <Route path="exit" element={<Login/>}/>
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
            :
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<Login/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="todo" element={<ErrorRegistration/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
    );
};

export default MyRoutes;