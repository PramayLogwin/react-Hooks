import React, { useReducer, useState } from 'react'


const reducer = (state, action) => {
  
  if (action.type === "Increment") {
    return state + 1;
  }
  else if (action.type === "Decrement") {
    return state - 1;
  }
  return state;
}



function Usereducer() {
  // const [count, newcount] = useState(0); 

  const [state, dispacth] = useReducer(reducer, 0);
  return (
    <>
      <h1>Usereducer</h1>
      {/* <h2>counter:- {count}</h2> //use state */}

      <h2>counter:- {state}</h2>

      {/* <button onClick={() => { newcount(count + 1) }}>Increment +</button>
      <button onClick={() => { newcount(count - 1) }}>Decrement -</button>              ////use state */}

      <button onClick={() => dispacth({ type: "Increment" })}>Increment +</button>
      <button onClick={() => dispacth({ type: "Decrement" })}>Decrement -</button>
    </>
  )
}
export default Usereducer;