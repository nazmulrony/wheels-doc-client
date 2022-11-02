import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Header from '../pages/Shared/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <ScrollRestoration />
            <Footer />

        </div>
    );
};

export default Main;