import React, { useContext } from 'react';
import { ContextApi } from '../Component/App.js';


export default function Context2() {
    const { appColor, getDay } = useContext(ContextApi);
    const day = "Sunday";
    return (
        <>
            <h1 style={{ color: appColor }}>Context2</h1>
            <button onClick={() => getDay(day)}>DATE</button>
        </>
    )
}
