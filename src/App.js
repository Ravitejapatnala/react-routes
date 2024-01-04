import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navigation from "./Pages/Navigation";
import "./App.css";


function App() {
  const[count, setCount]= useState(0);
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About setCount={setCount} count={count}/>}/>
        <Route path="/blog" element={<Blog count={count}/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App;
