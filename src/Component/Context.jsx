import React, { useContext } from 'react';
import { ContextApi } from './App';
import Context1 from './Context1';
import Context2 from './Context2';


export default function Context() {
  const { appColor } = useContext(ContextApi);
  return (
    <>
      <h1 style={{ color: appColor }}>Context</h1>
      <Context1 />
      <Context2 />
    </>
  )
}
