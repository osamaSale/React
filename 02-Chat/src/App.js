import React, { useEffect ,useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Signin } from "./components/Signin"
import { Chats } from './components/Chats';
import { Signup } from './components/Signup';
import './App.css';
import { CreateChat } from './components/CreateChat';
import { Friends } from './components/Friends';
import { Notifications } from './components/Notifications';
import { Support } from './components/Support';
import { PasswordReset } from './components/PasswordReset';
import { Settings } from './components/Settings';
import { Modals } from './components/Modals';
import { ChatGroup } from './components/ChatGroup';
import { NavbarVertical } from './components/NavbarVertical';
import { useDispatch } from 'react-redux';
import { getAllUsers } from './redux/api/users';
function App() {
  const [mode, setTheme] = useState('light')
  const dispatch = useDispatch()
  useEffect(() => {
    update()
  
  }, [])
  const update = () => {
    dispatch(getAllUsers())
  }

  return (
    <div className="App">
      <ToastContainer />
      <Modals />
      <div className="layout overflow-hidden">
        <NavbarVertical />
        <Routes>
          <Route path='/chats' element={<Chats update={update} />} />
          <Route path='/support' element={<Support update={update} />} />
          <Route path='/notifications' element={<Notifications update={update} />} />
          <Route path='/createChat' element={<CreateChat update={update} />} />
          <Route path='/friends' element={<Friends update={update} />} />
          <Route path='/' element={<Signin update={update} />} />
          <Route path='/signup' element={<Signup update={update} />} />
          <Route path='/passwordReset' element={<PasswordReset update={update} />} />
          <Route path='/settings' element={<Settings update={update} />} />
          <Route path='/chatGroup' element={<ChatGroup update={update} />} />
        </Routes>
        <Modals />
      </div>
    </div>
  );
}

export default App;
