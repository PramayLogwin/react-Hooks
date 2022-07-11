import React, { useContext } from 'react'
import { globalinfo } from "./App";

export default function Superchild() {
    const { Appcolor } = useContext(globalinfo);
    
    
   
    return (
        <div>
            <h1 style={{ color: Appcolor }}>Superchild </h1>
        </div>
    )
}
