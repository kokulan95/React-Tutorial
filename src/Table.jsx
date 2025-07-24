import React, { useEffect, useState } from "react";

function DataTable() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://wiwa.uni-trier.de/personenapi/personen")
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch data");
                return response.json();
            })
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="d-flex justify-content-center">
            <div className="table-responsive w-100" style={{maxWidth: '1000px'}}>
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Vorname</th>
                        <th>Nachname</th>
                        <th>Firma</th>
                        <th>Abteilung</th>
                        <th>Aktionen</th>


                    </tr>
                    </thead>
                    <tbody>
                    {data.map((person) => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.vorname}</td>
                            <td>{person.name}</td>
                            <td>{person.firma}</td>
                            <td>{person.abteilung}</td>
                            <td>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-secondary btn-sm dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Aktionen
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <button className="dropdown-item">
                                                <i className="fas fa-edit me-2"></i>Editieren
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item text-danger">
                                                <i className="fas fa-trash-alt me-2"></i>Löschen
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </td>


                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default DataTable;
