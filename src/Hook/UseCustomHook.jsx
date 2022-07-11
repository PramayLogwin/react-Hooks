import React, { useState } from 'react'
import Usecustomeffecthook from './Usecustomeffecthook'

export default function UseCustomHook() {
    const [count, setCount] = useState(0);

    Usecustomeffecthook(count);
    return (
        <>
            <h1>UseCustomHook</h1>
            <h2>Counter :- {count}  </h2>
            <button onClick={() => setCount(count + 1)}>Update</button>
        </>
    )
}
