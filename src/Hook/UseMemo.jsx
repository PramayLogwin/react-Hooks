import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [count, newCount] = useState(0);
    const [item, newItem] = useState(5);

    const multiply = useMemo(function mul() {
        console.log("working");
        return count * 5;
    },[count]); //[count it's condition which time run multiply  ]

    return (
        <>
            <h1>Use Memo</h1>
            <h2>Count:- {count}</h2>
            <h2>Item:- {item}</h2>
            <h2>Multiply * 5 :- {multiply}</h2>
            <button onClick={() => { newCount(count + 1) }}> Counter</button>
            <button onClick={() => { newItem(item * 5) }}> Item</button>
        </>
    )
}
