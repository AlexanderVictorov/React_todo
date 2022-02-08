import React, {useContext} from 'react';
import {AuthContext} from "../../context/Context";
import {Route, Routes} from "react-router-dom";
import Layout from "../../Layout";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import TodoList from "../Todo/TodoList";
import NoMatch from "../../pages/NoMatch";
import ErrorRegistration from "../../pages/NoMatch/ErrorRegistration";
import TodoInfo from "../../pages/TodoInfo";

const MyRoutes = () => {
    // todo map routes
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
                    <Route path="todo/:id" element={<TodoInfo/>}/>
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