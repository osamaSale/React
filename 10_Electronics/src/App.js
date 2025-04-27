import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {Navber} from "./components/Navber"
import {Home} from "./components/Home"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navber/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about"  />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
