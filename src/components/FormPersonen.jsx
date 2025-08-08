import React, { useState } from 'react';

function PersonForm() {
    const [formData, setFormData] = useState({
        vorname: '',
        name: '',
        abteilung: '',
        firma: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await fetch('https://wiwa.uni-trier.de/personenapi/createperson', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Person erfolgreich gespeichert!');
                setFormData({
                    vorname: '',
                    name: '',
                    abteilung: '',
                    firma: '',
                });
            } else {
                console.error(result);
                alert(`Fehler: ${result.message || 'Unbekannter Fehler'}`);
            }
        } catch (error) {
            console.error(error);
            alert('Netzwerkfehler beim Senden des Formulars.');
        }
    };

    return (
        <div className="container-fluid min-vh-100 d-flex flex-column">
            <main className="flex-grow-1 d-flex justify-content-center align-items-start py-5">
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 className="mb-4">Formular</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="vorname" className="form-label">Vorname</label>
                            <input
                                type="text"
                                className="form-control"
                                id="vorname"
                                name="vorname"
                                value={formData.vorname}
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
                            <label htmlFor="abteilung" className="form-label">Abteilung</label>
                            <input
                                type="text"
                                className="form-control"
                                id="abteilung"
                                name="abteilung"
                                value={formData.abteilung}
                                onChange={handleChange}
                                placeholder="Marketing"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="firma" className="form-label">Firma</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firma"
                                name="firma"
                                value={formData.firma}
                                onChange={handleChange}
                                placeholder="Moselglider"
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
