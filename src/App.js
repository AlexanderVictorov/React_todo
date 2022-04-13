import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MyRoutes from './components/MyRouters/MyRoutes';
import { changeLogout, logout } from './store/slices/auth';
import { AuthContext } from './context/Context';
import ROUTE_LINKS from './components/MyRouters/routeLink';

function App() {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')));
  const forEsLint = useMemo(() => ({ isAuth, setIsAuth }), [isAuth, setIsAuth]);
  const isLogout = useSelector((state) => state.auth.logout);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogout) return;
    dispatch(changeLogout(false));
    dispatch(logout());
    navigate(ROUTE_LINKS.login);
    // todos clear store
  }, [isLogout]);

  return (
    <div className='App'>
      <AuthContext.Provider value={forEsLint}>
        <MyRoutes />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
