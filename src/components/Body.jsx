// src/components/Body.jsx
import { Outlet } from 'react-router-dom';

function Body() {
    return (
        <main className="container mx-auto px-4 py-8">
            <Outlet />
        </main>
    );
}

export default Body;
