// src/App.js
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { fetchUsers } from './redux/api/users';
import { useDispatch } from 'react-redux';
const App = () => {
  const dispatch = useDispatch();
  const [editingUser, setEditingUser] = useState(null);
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

  return (
    <div >
      <Navbar />
      <div className="container mt-5">

        <div className="row">
          <div className="col-md-4">

            <UserForm userToEdit={editingUser} />
          </div>
          <div className="col-md-8">
            <UserList setEditingUser={setEditingUser} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;

