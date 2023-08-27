import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import Cards from "./Components/Cards";
import  Test from "./Components/Test";
function App() {



  return (
    <>
      <NavBar></NavBar>
       <Routes>
      
          <Route path="/" element={ <div><Hero></Hero> <Cards></Cards></div>} />
          <Route path="/test" element={<Test />} />

        </Routes>
    </>
  );
}

export default App;