import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import MainPage from "./MainPage";
import Kontakt from "./pages/Examples/Kontakt.jsx";
import Table from "./pages/Examples/Table.jsx";
import PersonenForm from "./pages/Examples/PersonenForm.jsx";
import Galery from "./pages/Examples/State.jsx";
import Gallery, { GalleryWithoutState } from './pages/Examples/State.jsx';
import Layout from "./Layout.jsx";
import NotFound from './pages/NotFound.jsx';
import TodoList from "./components/TodoList.jsx";
import Todos from "./pages/Todos.jsx";
import Personen from "./pages/Personen.jsx";
import Komponenten from "./pages/Examples/Komponenten.jsx";
import Gallerie from "./pages/Examples/Gallerie.jsx";
import Events from "./pages/Examples/Events.jsx";
import ConditionalRendering from "./pages/Examples/ConditionalRendering.jsx";

function App() {

    return (
        <Routes>
            {/* No layout for login */}
            <Route path="/" element={<Login />} />

            {/* All routes below will share the same layout */}
            <Route path="/" element={<Layout />}>
                <Route path="main" element={<MainPage />} />
                <Route path="kontakt" element={<Kontakt />} />
                <Route path="table" element={<MainPage />} />
                <Route path="personenform" element={<PersonenForm />} />
                <Route path="state" element={<Galery />} />
                <Route path="gallerywithoutstate" element={<GalleryWithoutState />} />
                <Route path="todolist" element={<TodoList />} />
                <Route path="/personen" element={<Personen />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/state" element={<Galery />} />
                <Route path="/komponenten" element={<Komponenten />} />
                <Route path="/galerie" element={<Gallerie />} />
                <Route path="/events" element={<Events />} />
                <Route path="/conditionalrendering" element={<ConditionalRendering />} />

                {/*  This is a catch-all route.
                 If the user goes to a path that doesn’t exist (e.g. /banana), this route will show a 404 Not Found page.
                <Route path="*" element={<NotFound />} />*/}

            </Route>
        </Routes>
    );
}

export default App;
