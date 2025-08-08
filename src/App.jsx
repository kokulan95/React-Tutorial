import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import MainPage from "./MainPage";
import PersonenForm from "./pages/Examples/PersonenForm.jsx";
import Galery from "./pages/Examples/State.jsx";
import Gallery, { GalleryWithoutState } from './pages/Examples/State.jsx';
import Layout from "./Layout.jsx";
import NotFound from './pages/NotFound.jsx';
import Personen from "./pages/Personen.jsx";
import Komponenten from "./pages/Examples/Komponenten.jsx";
import Gallerie from "./pages/Examples/Gallerie.jsx";
import Events from "./pages/Examples/Events.jsx";
import ConditionalRendering from "./pages/Examples/ConditionalRendering.jsx";

function App() {

    return (
        <Routes>
            {/* No layout for login */}
            <Route path="login" element={<Login />} />

            {/* All routes below will share the same layout */}
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="table" element={<MainPage />} />
                <Route path="personenform" element={<PersonenForm />} />
                <Route path="state" element={<Galery />} />
                <Route path="gallerywithoutstate" element={<GalleryWithoutState />} />
                <Route path="/personen" element={<Personen />} />
                <Route path="/state" element={<Galery />} />
                <Route path="/komponenten" element={<Komponenten />} />
                <Route path="/galerie" element={<Gallerie />} />
                <Route path="/events" element={<Events />} />
                <Route path="test/conditionalrendering" element={<ConditionalRendering />} />

                {/* Fallback */}
                <Route path="*" element={<NotFound />}
                />

            </Route>
        </Routes>
    );
}

export default App;
