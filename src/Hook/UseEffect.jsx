import React, { useEffect, useState } from 'react'

export default function UseEffect() {


  //mounting
  const [count, newcount] = useState(0);
  const [count1, newcount1] = useState(50);


  //updating

  const setcount = () => {
    newcount(count + 1);
  }
  const setcount1 = () => {
    newcount1(count1 - 1);
  }

  //use previous sate and loops
  const increemented = () => {
    for (let i = 0; i < 10; i++);
    newcount(count => count + 10);
  }

  //component didupdate methos use:--
  useEffect(() => {
    console.log("Working");
  
  });

  return (
    <>
      <p>Counter :- {count}</p>
       
      <button onClick={setcount}>Increment</button>

      <p>Counter :- {count1}</p>
      <button onClick={setcount1}>Decrement</button>


      <p>Using Previos state(loop)</p>
      <button onClick={increemented}>increment by 10</button>
    </>
  )
}
