import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginSocialGoogle } from 'reactjs-social-login'
import { useDispatch } from 'react-redux';
import { register } from "../redux/api/users"
export const Register = () => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [image, setImage] = useState(null)
  const [phone, setPhone] = useState("")
  const [authorization, setAuthorization] = useState("")
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const loginGoogle = async ({ provider, data }) => {

    let data1 = {
      name: data.name,
      email: data.email,
      image: data.picture,
      password: "12345",
      phone: "null",
      authorization: "user"
    }
    dispatch(register(data1)).then((res) => {
      const { status } = res.payload
      if (status === 200) {
        navigate('/chat')
      }
      setLoading(false)
    })
  }
  return (
    <div className="wrapper">
      <div className="main">
        <div className='container' id='register'>
          <div className='card p-4 text-light'>
            <div className="mb-3">
              <h3 className='text-center'>Register</h3>
            </div>
            <div className="mb-3">
              <LoginSocialGoogle
                client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                onResolve={loginGoogle}
                onReject={(err) => {
                  console.log(err)
                }}>
                <div className="d-grid gap-2 mt-3 md-3">
                  <button className="btn btn-outline-secondary text-light">
                    <img alt="Logo" src={'https://mobile-store1234.netlify.app/static/media/google.e12914ad8afda3f6f2e8.png'} className="h-15px me-3" width={30} height={25} />
                    Sign in Google
                  </button>
                </div>
              </LoginSocialGoogle>
            </div>
            <div className="hstack gap-3 mb-3">
              <div className='mb-3'>
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
              </div>
              <div className='mb-3'>
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
              </div>
            </div>
            <div className="hstack gap-3 mb-3">
              <div className='mb-3'>
                <label className="form-label">Password</label>
                <div className='input-group'>
                  <input type={passwordShown ? "text" : "password"} name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' />
                  <button className='btn btn-outline-primary' onClick={() => { passwordShown === true ? setPasswordShown(false) : setPasswordShown(true) }}>
                    {passwordShown === true ? <i className="fa fa-eye"></i> : <i className="fa fa-eye-slash" ></i>}
                  </button>
                </div>
              </div>
              <div className='mb-3'>
                <label className="form-label">Phone</label>
                <input type="tel" name="phone" className="form-control" onChange={(e) => setPhone(e.target.value)} placeholder='Enter Your Phone' />
              </div>
            </div>
            <div className="hstack gap-3 mb-3">
              <div className='mb-3'>
                <label className="form-label">Image</label>
                <input type="file" name="image" className="form-control text-light"
                  onChange={(e) => setImage(e.target.files[0])} accept="image/*" />
              </div>
              <div className='mb-3'>
                <label className="form-label">Authorization</label>
                <select
                  name="authorization"
                  className="form-control text-light"
                  onChange={(e) => setAuthorization(e.target.value)}
                >
                  <option value="" className='text-dark'>Select Authorization</option>
                  <option value="user" className='text-dark'>user</option>
                  <option value="admin" className='text-dark'>admin</option>
                </select>
              </div>
            </div>
            <div className="d-grid gap-2 mt-3 md-3">
              <button type="submit" className="btn btn-primary "
                onClick={(e) => {
                  setLoading(true)
                  const fromData = new FormData();
                  fromData.append("name", name);
                  fromData.append("email", email);
                  fromData.append("password", password);
                  fromData.append("phone", phone);
                  fromData.append("authorization", authorization);
                  if (image !== null) {
                    fromData.append("image", image, image?.name);
                  } else {
                    fromData.append("image", image);
                  }
                  dispatch(register(fromData)).then((res) => {
                    const { status } = res.payload
                    if (status === 200) {
                      navigate('/chat')
                    }
                    setLoading(false)
                  })

                }}>
                {!loading && <span className="indicator-label">Send</span>}
                {loading && <span className="indicator-progress">Please wait...
                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>}
              </button>
            </div>
            <div className="mt-3">
              <div className="text-gray-500  fw-semibold fs-6">Not a Member yet ?
                <Link to="/" className="link-primary text-decoration-none"> Login</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
