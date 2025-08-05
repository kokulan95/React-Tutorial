// Gallery.jsx
import { sculptureList } from "../../data/data.js";

function Gallerie() {
    const filteredList = sculptureList.filter(sculpture =>
        sculpture.artist !== 'Unknown Artist'
    );

    return (
        <div className="container mt-4">
            <h2>Skulpturen von "Unknown Artist"</h2>
            <div className="row g-4">
                {filteredList.map((sculpture) => (
                    <div className="col-md-4" key={sculpture.name}>
                        <div className="card h-100">
                            <img src={sculpture.url} className="card-img-top" alt={sculpture.alt} />
                            <div className="card-body">
                                <h5 className="card-title">{sculpture.name}</h5>
                                <p className="card-text">{sculpture.description}</p>
                                <p className="card-text">
                                    <small className="text-muted">Künstler: {sculpture.artist}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallerie;
