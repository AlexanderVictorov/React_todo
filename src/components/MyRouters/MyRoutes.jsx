import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context/Context';
import Layout from '../../Layout';
import TodoList from '../Todo/TodoList';
import ErrorRegistration from '../../pages/NoMatch/ErrorRegistration';
import ROUTE_LINKS from './routeLink';
import Login from '../../pages/Login/Login';
import Registration from '../../pages/Registration/Registration';
import TodoInfo from '../../pages/TodoInfo/TodoInfo';
import NoMatch from '../../pages/NoMatch/NoMatch';
import Trashcan from '../../pages/Trash/Trashcan';

function MyRoutes() {
  const { isAuth } = useContext(AuthContext);
  return (
    isAuth
      ? (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Login />} />
            <Route path={ROUTE_LINKS.login} element={<Login />} />
            <Route path={ROUTE_LINKS.registration} element={<Registration />} />
            <Route path={ROUTE_LINKS.todo} element={<TodoList />} />
            <Route path={ROUTE_LINKS.todoId} element={<TodoInfo />} />
            <Route path={ROUTE_LINKS.exit} element={<Login />} />
            <Route path={ROUTE_LINKS.otherRoutes} element={<NoMatch />} />
            <Route path={ROUTE_LINKS.trash} element={<Trashcan />} />
          </Route>
        </Routes>
      )
      : (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Login />} />
            <Route path={ROUTE_LINKS.login} element={<Login />} />
            <Route path={ROUTE_LINKS.todo} element={<ErrorRegistration />} />
            <Route path={ROUTE_LINKS.registration} element={<Registration />} />
            <Route path={ROUTE_LINKS.otherRoutes} element={<NoMatch />} />
          </Route>
        </Routes>
      )
  );
}

export default MyRoutes;
