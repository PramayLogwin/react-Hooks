import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function UseLayoutEffect() {

    const [text, newText] = useState("UseLayoutEffect");
    const [loading] = useState(false);

    // useEffect(() => {
    //     // console.log("Use Effect Hook Running.....!")
    //     if (!loading) {
    //         newText("Error 404...!!");
    //     } else {
    //         newText("Yes");
    //     }
    // })


    useLayoutEffect(()=>{
        // console.log("Use Layout Effect Hook Running.....! ")
        if(!loading){
            newText("Error 404...!!");
        }else{
            newText("Yes");
        }
    })
    return (
        <>
            <h1>Use Layout Effect</h1>
            <h2>{text}</h2>
        </>
    )
}
