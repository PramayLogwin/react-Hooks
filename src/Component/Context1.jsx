import React, { useContext } from 'react';
import { ContextApi } from '../Component/App.js';
export default function Context1() {
  const { appColor } = useContext(ContextApi);
  return (
    <>
      <h1 style={{ color: appColor }}>Context1</h1>
    </>
  )
}
