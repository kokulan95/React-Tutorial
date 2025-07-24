import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import MainPage from "./MainPage";
import Kontakt from "./Kontakt";
import News from "./News";
import MeinProfil from "./MeinProfil";
import Table from "./Table";
import PersonenForm from "./PersonenForm.jsx";
import Galery from "./State.jsx";
import Gallery, { GalleryWithoutState } from './State.jsx';
import Layout from "./Layout.jsx";
import NotFound from './NotFound';
import TodoList from "./pages/TodoList.jsx";

function App() {

    return (
        <Routes>
            {/* No layout for login */}
            <Route path="/" element={<Login />} />

            {/* All routes below will share the same layout */}
            <Route path="/" element={<Layout />}>
                <Route path="main" element={<MainPage />} />
                <Route path="kontakt" element={<Kontakt />} />
                <Route path="news" element={<News />} />
                <Route path="profil" element={<MeinProfil />} />
                <Route path="table" element={<MainPage />} />
                <Route path="personenform" element={<PersonenForm />} />
                <Route path="state" element={<Galery />} />
                <Route path="gallerywithoutstate" element={<GalleryWithoutState />} />
                <Route path="todolist" element={<TodoList />} />

                {/*  This is a catch-all route.
                 If the user goes to a path that doesn’t exist (e.g. /banana), this route will show a 404 Not Found page.
                <Route path="*" element={<NotFound />} />*/}

            </Route>
        </Routes>
    );
}

export default App;
