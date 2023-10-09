import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Login } from "./components/Login"
import { Chat } from './components/Chat';
import { Register } from './components/Register';

function App() {

  return (
    <BrowserRouter>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
