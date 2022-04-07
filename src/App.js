import React, { useMemo, useState } from 'react';
import './App.css';
import { AuthContext } from './context/Context';
import MyRoutes from './components/MyRouters/MyRoutes';

function App() {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')));
  const forEsLint = useMemo(() => ({ isAuth, setIsAuth }), [isAuth, setIsAuth]);
  return (
    <div className='App'>
      <AuthContext.Provider value={forEsLint}>
        <MyRoutes />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
