// components/Counter.jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Du hast {count} Mal geklickt.</p>
            <button onClick={handleClick}>Klick mich</button>
        </div>
    );
}

export default Counter;
