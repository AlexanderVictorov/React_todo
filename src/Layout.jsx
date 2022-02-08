import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {

    return (
        <nav>
            <Header/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </nav>
    )
}

export default Layout
