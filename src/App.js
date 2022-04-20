import React, { useMemo, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import MyRoutes from './components/MyRouters/MyRoutes';
import { AuthContext } from './context/Context';
import Loader from './components/loader/Loader';

function App() {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')));
  // const isLogin = useSelector((state) => state.auth.isLogin);
  const loading = useSelector((state) => state.todos.loading);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const forEsLint = useMemo(() => ({ isAuth, setIsAuth }), [isAuth, setIsAuth]);

  // useEffect(() => {
  //   if (isLogin) return;
  //   // dispatch(userIsAuthorized(true));
  //   dispatch(logout());
  //   navigate(ROUTE_LINKS.login);
  // }, [isLogin]);
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
