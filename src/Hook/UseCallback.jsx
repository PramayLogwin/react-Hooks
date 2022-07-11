import React, { useState, useEffect, useCallback } from 'react'

export default function UseCallback() {
  const [name, setName] = useState(' ');


  const displayName = useCallback((Hello) => {
    return `${Hello} ${name}`;
  }, [name]);
  // console.log("useCallback : ", displayName)

  return (
    <div>
      <h1>useCallback</h1>
      Name :- 
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <DisplayName displayName={displayName} />
    </div>
  )
}

const DisplayName = ({ displayName }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(displayName("Hello"))
    console.log("Component rendered");
  }, [displayName])
  return <h4 className='my-2'>My name is {value}</h4>
}