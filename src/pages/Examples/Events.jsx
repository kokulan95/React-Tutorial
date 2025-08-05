import TextInput, {ClickCounter} from "../../components/EventExamples.jsx";
import TodoList from "../../components/TodoList.jsx";
import { useState } from "react";

function App() {
    const [selectedEvent, setSelectedEvent] = useState("click");

    const handleChange = (e) => {
        setSelectedEvent(e.target.value);
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Events</h1>

            <div className="mb-4">
                <label htmlFor="eventSelect" className="form-label">
                    Wähle ein Event-Beispiel:
                </label>
                <select
                    id="eventSelect"
                    className="form-select"
                    value={selectedEvent}
                    onChange={handleChange}
                >
                    <option value="click">Click Event</option>
                    <option value="change">Change Event</option>
                    <option value="clickwithprop">Click Event mit Prop</option>
                </select>
            </div>

            <div className="mt-4">
                {selectedEvent === "click" && <ClickCounter />}
                {selectedEvent === "change" && <TextInput />}
                {selectedEvent === "clickwithprop" && <TodoList />}
            </div>
        </div>
    );
}

export default App;
