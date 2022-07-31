import {useState} from "react";

function HookCounter2() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const increaseFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (

        <div>
            Count : {count}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease</button>
            <button onClick={increaseFive}>Increase 5</button>
        </div>
    )
}

export default HookCounter2;