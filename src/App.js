import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import O from "./components/O";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
 <div>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/o" element={<O/>}/>
  <Route path="/contact" element={<Contact/>}/>
 </Routes>
 </div>
  );
}

export default App;
