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
import { ROUTE_LINKS } from './routeLink';

const MyRoutes = () => {
    // todo map routes
    // vladComment вынести текст роутов (login/registration/exit и т.п.) в отдельный файл с объектом с константами и вставлять константы
    const {isAuth} = useContext(AuthContext)
    return (
        isAuth
            ?
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<Login/>}/>
                    <Route path={ROUTE_LINKS.login} element={<Login/>}/>
                    <Route path={ROUTE_LINKS.registration} element={<Registration/>}/>
                    <Route path={ROUTE_LINKS.todo} element={<TodoList/>}/>
                    <Route path={ROUTE_LINKS.todoId} element={<TodoInfo/>}/>
                    <Route path={ROUTE_LINKS.exit} element={<Login/>}/>
                    <Route path={ROUTE_LINKS.otherRoutes} element={<NoMatch/>}/>
                </Route>
            </Routes>
            :
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<Login/>}/>
                    <Route path={ROUTE_LINKS.login} element={<Login/>}/>
                    <Route path={ROUTE_LINKS.todo} element={<ErrorRegistration/>}/>
                    <Route path={ROUTE_LINKS.registration} element={<Registration/>}/>
                    <Route path={ROUTE_LINKS.otherRoutes} element={<NoMatch/>}/>
                </Route>
            </Routes>
    );
};

export default MyRoutes;
