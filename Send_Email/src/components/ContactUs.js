import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'
export const ContactUs = () => {
  const [name, setName] = useState(false)
  const [email, setEmail] = useState(false)
  const [message, setMassage] = useState(false)
  const [loading, setLoading] = useState(false)

  const form = useRef();
  console.log(process.env.REACT_APP_YOUR_API_KEY)
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(() => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (name === "") {
        toast.error("Enter To Name")
        setLoading(false)
      } else if (!emailRegex.test(email)) {
        toast.error("Enter To Email")
        setLoading(false)
      } else if (message === "") {
        toast.error("Enter To Email")
        setLoading(false)
      } else {
        emailjs.sendForm('service_pyguoec', 'template_airpmzr', form.current, process.env.REACT_APP_NOT_SECRET_CODE)
          .then((result) => {
            toast(result.text)
            setLoading(false)
          }, (error) => {
            console.log(error.text);
            toast.error(error.text)
            setLoading(false)
          });
      }
    }, 1000)
  };



  return (
    <div className="container" style={{ marginTop: "10%", width: "50%" }}>
      <div className='card p-4'>
        <h5 className='text-center'>Contact US</h5>
        <form ref={form} >
          <div className="mb-3">
            <label className='pb-3'>Name</label>
            <input type="text" name="user_name" className="form-control" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className='pb-3'>Email</label>
            <input type="email" name="user_email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className='pb-3'>Message</label>
            <textarea name="message" className="form-control" onChange={(e) => setMassage(e.target.value)} />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary" onClick={sendEmail}>
              {!loading && <span className="indicator-label">Send</span>}
              {loading && <span className="indicator-progress">Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};