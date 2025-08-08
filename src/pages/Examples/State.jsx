import { useState } from 'react';
import { sculptureList } from '../../data/data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex(index + 1);
    }

    let sculpture = sculptureList[index];

    return (
        <div className="container mt-5">
            <h1 className="mb-4">State</h1>

            <div className="card shadow-lg">
                <img
                    src={sculpture.url}
                    alt={sculpture.alt}
                    className="card-img-top"
                    style={{maxHeight: "400px", objectFit: "cover"}}
                />
                <div className="card-body">
                    <h2 className="card-title">
                        <i>{sculpture.name}</i> by {sculpture.artist}
                    </h2>
                    <h5 className="card-subtitle mb-3 text-muted">
                        ({index + 1} of {sculptureList.length})
                    </h5>
                    <p className="card-text">{sculpture.description}</p>
                    <button className="btn btn-primary mt-3" onClick={handleClick}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export function GalleryWithoutState() {
    let index = 0;

    function handleClick() {
        index = index + 1;
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}
