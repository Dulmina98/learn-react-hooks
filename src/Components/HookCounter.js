import React, {useState} from "react";

function HookCounter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <div> {count} </div>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )
}

export default HookCounter;