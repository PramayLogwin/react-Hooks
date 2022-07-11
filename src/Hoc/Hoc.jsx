import React, { useState } from 'react'

export default function HigerOrderCounter() {
    return (
        <>
            <h2>Higer Order Counter</h2>
            <Hocorange cmp={Counter} />
            <Hocblue cmp={Counter} />

        </>
    )
}

function Hocorange(props) {
    return <h3 style={{ color: 'red' }}><props.cmp /></h3>
}
function Hocblue(props) {
    return <h3 style={{ color: 'blue' }}><props.cmp /></h3>
}
function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <p>{number}</p>
            <button onClick={() => setNumber(number + 1)}>Click</button>

        </>
    )
}