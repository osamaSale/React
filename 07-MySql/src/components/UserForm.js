// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUser } from '../redux/api/users';

const UserForm = ({ userToEdit }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.users);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordShown, setPasswordShown] = useState(false);
  const [phone, setPhone] = useState("")
  const [image, setImage] = useState(null)
  const [authorization, setAuthorization] = useState("")
  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name)
      setEmail(userToEdit.email)
      setPassword(userToEdit.password)
      setPhone(userToEdit.phone)
      setImage(userToEdit.image)
      setAuthorization(userToEdit.authorization)
    } else {
      setName("")
      setEmail("")
      setPassword("")
      setPhone("")
      setImage(null)
      setAuthorization("")
    }
  }, [userToEdit]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fromData = new FormData();
    fromData.append("name", name);
    fromData.append("email", email);
    fromData.append("password", password);
    fromData.append("phone", phone);
    fromData.append('authorization', authorization);
    fromData.append('image', image);
    if (userToEdit) {
      dispatch(updateUser({ id: userToEdit.id, user: fromData }));
    } else {
      dispatch(createUser(fromData));
    }
  }


  return (
    <div className="card p-3 mb-3">
      <h3 className="mb-4 fs">{userToEdit ? 'Edit User' : 'Add User'}</h3>
      <div className="form-group">
        <label htmlFor="name" className='pb-2 pt-2'>Name</label>
        <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group" >
        <label htmlFor="email" className='pb-2 pt-2'>Email</label>
        <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">

        <label htmlFor="password" className='pb-2 pt-2'>Password</label>
        <div className="input-group mb-3">
          <span className="input-group-text" onClick={() => { passwordShown === true ? setPasswordShown(false) : setPasswordShown(true) }}>
            {
              passwordShown === true ? <i id="passwordToggler" className="bi bi-eye"></i>
                : <i id="passwordToggler" className="bi bi-eye-slash"></i>
            }
          </span>
          <input type={passwordShown ? "text" : "password"} className="form-control" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="form-group ">
        <label htmlFor="phone">Phone</label>
        <input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="authorization">Authorization</label>
        <input type="text" className="form-control " id="authorization" name="authorization" value={authorization} onChange={(e) => setAuthorization(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input type="file" className="form-control" name="image" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      
      <button type="submit" className="btn btn-primary mt-3"  onClick={handleSubmit}>
        {loading ? (
          <div className="spinner-border spinner-border-sm text-light" role="status">
       
          </div>
        ) : (
          userToEdit ? (
            <><i className="bi bi-pencil-fill"></i> Update</>
          ) : (
            <><i className="bi bi-plus-circle-fill"></i> Create</>
          )
        )}
      </button>
    </div>
  );
};

export default UserForm;
