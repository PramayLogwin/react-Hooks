import React, { useEffect } from 'react'

export default function Usecustomeffecthook(count) {
    
    useEffect(() => {
        if (count >= 1) {
            document.title = `React App Message (${count})`;
        } else {
            document.title = `React App`
        }
    }, [count]);

    return (
        <></>

    )
}
