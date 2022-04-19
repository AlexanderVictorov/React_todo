import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MyRoutes from './components/MyRouters/MyRoutes';
import { changeLogout, logout } from './store/slices/auth';
import { AuthContext } from './context/Context';
import ROUTE_LINKS from './components/MyRouters/routeLink';
import Loader from './components/loader/Loader';

function App() {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')));
  const isLogin = useSelector((state) => state.auth.isLogin);
  const loading = useSelector((state) => state.todos.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const forEsLint = useMemo(() => ({ isAuth, setIsAuth }), [isAuth, setIsAuth]);

  useEffect(() => {
    if (isLogin) return;
    dispatch(changeLogout(true));
    dispatch(logout());
    navigate(ROUTE_LINKS.login);
  }, [isLogin]);
  return (
    <div className='App'>
      {loading && <Loader />}
      <AuthContext.Provider value={forEsLint}>
        <MyRoutes />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
