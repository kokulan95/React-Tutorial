// NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f8f9fa',
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            padding: '2rem',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '5rem', margin: '0' }}>404</h1>
            <p style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>
                Die Seite wurde nicht gefunden.
            </p>
            <p style={{ maxWidth: '400px', marginTop: '1rem' }}>
                Entweder existiert diese Seite nicht mehr, oder der Link war falsch.
            </p>
            <Link
                to="/"
                style={{
                    marginTop: '2rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                }}
            >
                Zur Startseite
            </Link>
        </div>
    );
}
