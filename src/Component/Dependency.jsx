import React, { useEffect, useState } from 'react'

export default function Dependency() {

    const [count, setcount] = useState(0);

    useEffect(() => {
        if (count >= 1) {
            document.title = ` Messaages (${count})`
        } else {
            document.title = `Messaages`
        }
    }, [count]);

    // useEffect(() => {
    //     console.log('Counter has value: ', count);
    //   }, [ count ]);
    return (
        <>
            <h1>Dependency</h1>
            <h2>{count}</h2>
            <button onClick={() => { setcount(count + 1) }}>Click</button>
        </>
    )
}
