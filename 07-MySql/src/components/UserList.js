// src/components/UserList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  deleteUser } from '../redux/api/users';


const UserList = ({ setEditingUser }) => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);


  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='card p-3'>

      <div className="table-responsive">
        <h1>User List</h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Authorization</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user) => {
              return <tr key={user.id} >
                <td><img src={user.image} width="30" height="30" className="d-inline-block align-top rounded-circle" alt="Avatar" /></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.authorization}</td>

                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => setEditingUser(user)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            })}


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
