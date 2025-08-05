import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Fortgeschrittene Webentwicklung</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/table">Tabelle</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/personenform">Personen</Link>
                        </li>

                        {/* Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="datenDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Beispiele
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="datenDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/state">State</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/todos">Formular</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/conditionalrendering">Conditional Rendering</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/komponenten">Komponente</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/galerie">Galerie</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/events">Events</Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
