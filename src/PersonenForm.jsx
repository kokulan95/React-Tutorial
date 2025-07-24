import React, { useState } from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function PersonForm() {
    const [formData, setFormData] = useState({
        forename: '',
        name: '',
        street: '',
        zip: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Formular abgesendet:\n
Vorname: ${formData.forename}
Nachname: ${formData.name}
Straße: ${formData.street}
PLZ: ${formData.zip}`);
    };

    return (

        <div className="container-fluid min-vh-100 d-flex flex-column">
            <main className="flex-grow-1 d-flex justify-content-center align-items-start py-5">
                <div className="container" style={{maxWidth: '600px'}}>
                    <h2 className="mb-4">Person Formular</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="forename" className="form-label">Vorname</label>
                            <input
                                type="text"
                                className="form-control"
                                id="forename"
                                name="forename"
                                value={formData.forename}
                                onChange={handleChange}
                                placeholder="Max"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nachname</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Mustermann"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="street" className="form-label">Straße</label>
                            <input
                                type="text"
                                className="form-control"
                                id="street"
                                name="street"
                                value={formData.street}
                                onChange={handleChange}
                                placeholder="Musterstraße 1"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="zip" className="form-label">PLZ</label>
                            <input
                                type="text"
                                className="form-control"
                                id="zip"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                placeholder="12345"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Absenden</button>
                    </form>
                </div>
            </main>
        </div>


    );
}

export default PersonForm;
