import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./Footer.jsx";
import Header from "./components/Header.jsx";

export default function Layout() {
    return (
        <div className="container-fluid min-vh-100 d-flex flex-column">
            <Header />
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
