import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./components/Navbar"
import { Dashboard } from "./components/Dashboard/Dashboard"
import { getAllUsers, singleUser } from './redux/api/users';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    update()
  }, [])
  const update = () => {
    dispatch(getAllUsers())
    dispatch(singleUser())
  }
  return (
    <div className="App" >
      <Navbar />
      <main>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
