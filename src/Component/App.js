import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './navbar.css';


//Hooks------->
import UseState from '../Hook/UseState';
import UseEffect from '../Hook/UseEffect';
import UseRef from '../Hook/UseRef';
import UseMemo from '../Hook/UseMemo';
import UseCallback from '../Hook/UseCallback';
import Usereducer from '../Hook/Usereducer';
import UseCustomHook from '../Hook/UseCustomHook';
import UseLayoutEffect from '../Hook/UseLayoutEffect';
import UseTransition from '../Hook/UseTransition';


import HigerOrderCounter from '../Hoc/Hoc';
import Dependency from './Dependency';
import Context from './Context';


export const ContextApi = createContext();

export default function App() {
  const [color, setColor] = useState("red");
  const [day, setday] = useState("Monday");
  const getDay = (value) => {
    setday(value);
  }
  return (

    <>
      <ContextApi.Provider value={{ appColor: color, getDay: getDay }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<h1>This is Home page </h1>} />
            <Route path="/useState" element={<UseState />} />
            <Route path="/useEffect" element={<UseEffect />} />
            <Route path="/hoc" element={<HigerOrderCounter />} />
            <Route path="/ref" element={<UseRef />} />
            <Route path="/memo" element={<UseMemo />} />
            <Route path="/callback" element={<UseCallback />} />
            <Route path="/dependency" element={<Dependency />} />
            <Route path="/context" element={<Context />} />
            <Route path="/reducer" element={<Usereducer />} />
            <Route path="/customhook" element={<UseCustomHook />} />
            <Route path="/UseLayoutEffect" element={<UseLayoutEffect />} />
            <Route path="/UseTransition" element={<UseTransition />} />

          </Routes> 

        </BrowserRouter>
      </ContextApi.Provider>
      {/* <h1>Hello {day}</h1> /////use for Context Api.... */}
    </>
  )
}
