import React, { useMemo, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import MyRoutes from './components/MyRouters/MyRoutes';
import { AuthContext } from './context/Context';
import Loader from './components/loader/Loader';

function App() {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')));
  const loading = useSelector((state) => state.todos.loading);
  const forEsLint = useMemo(() => ({ isAuth, setIsAuth }), [isAuth, setIsAuth]);
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
