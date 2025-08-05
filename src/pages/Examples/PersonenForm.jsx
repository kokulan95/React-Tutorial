// App.jsx


import HelloWorld , {Message} from "../../components/HelloWorld.jsx";
import Counter from "../../components/Counter.jsx";
import PersonForm from "../../components/FormPersonen.jsx";

function App() {
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Formular</h1>
            <PersonForm />
        </div>

    );
}

export default App;