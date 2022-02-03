import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

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
