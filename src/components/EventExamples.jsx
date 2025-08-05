import { useState } from 'react';

export function EventExamples({event}) {
    const [name, setName] = useState('');

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <label>
                Event: {event} <input type="text" value={name} onChange={handleChange} />
            </label>
            <p>Hallo, {name || 'Unbekannt'}!</p>
        </div>
    );
}

export function ClickCounter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Du hast {count} Mal geklickt.</h2>
            <button onClick={handleClick}>Klick mich</button>
        </div>
    );
}

export default EventExamples;