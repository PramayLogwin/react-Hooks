import React,{useRef} from 'react'

export default function UseRef() {

    let update = useRef();

    const click=()=>{
    console.log("work");
    update.current.focus();
    update.current.style.color="red";

    }
   
  return (
    <>
        <h1>UseRef</h1>

        Name :-
        <input type="text" ref={update} ></input>
        <button onClick={click}>Update</button>
    </>
  )
}