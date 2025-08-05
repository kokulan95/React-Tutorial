// components/HelloWorld.jsx
// HelloWorld.jsx
function HelloWorld({ name, imageUrl, message }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt={`Foto von ${name}`} />
            <div className="card-body">
                <h5 className="card-title">Bild: {name}!</h5>
                <p className="card-text">{message}</p>
            </div>
        </div>
    );
}

export function Message({ message }) {
    return <h2>{message}</h2>;
}

export default HelloWorld;

