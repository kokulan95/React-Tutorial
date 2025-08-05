import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

export default function Layout() {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>

        </div>
    );
}
