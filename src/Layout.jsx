import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function Layout() {
  return (
    <nav>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </nav>
  );
}

export default Layout;
