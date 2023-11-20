import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginSocialGoogle } from 'reactjs-social-login'
import { login } from "../../redux/api/users"
export const Register = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    return (
        <section className="my-lg-15 my-8">
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                        <img src="./assets/images/svg-graphics/signup-g.svg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                        <div className="mb-lg-9 mb-5">
                            <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
                            <p>Welcome to Store Mobile! Enter your email to get started.</p>
                        </div>

                        <div className="row g-4">
                            <div className="col-12">
                                <LoginSocialGoogle
                                    client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                    /* onResolve={loginGoogle} */
                                    onReject={(err) => {
                                        console.log(err)
                                    }}>
                                    <div className="d-grid">
                                        <Link className="btn  border">
                                            <img alt="Logo" src={'https://mobile-store1234.netlify.app/static/media/google.e12914ad8afda3f6f2e8.png'} className="h-15px me-3" width={30} height={25} />
                                            Sign in Google
                                        </Link>
                                    </div>
                                </LoginSocialGoogle>
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control border" placeholder="Enter Name" />
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control border" placeholder="Enter Email" />
                            </div>
                            <div className="col-12">
                                <div className="password-field position-relative">
                                    <input type={passwordShown ? "text" : "password"} placeholder="Enter Password" className="form-control border" />

                                    <span onClick={() => { passwordShown === true ? setPasswordShown(false) : setPasswordShown(true) }}>
                                        {
                                            passwordShown === true ? <i id="passwordToggler" className="bi bi-eye"></i>
                                                : <i id="passwordToggler" className="bi bi-eye-slash"></i>
                                        }
                                    </span>
                                </div>

                            </div>
                            <div className="col-12">
                                <input type="tel" className="form-control border" placeholder="Enter Phone" />
                            </div>
                            <div className="col-12">
                                <input type="file" className="form-control border" />
                            </div>
                            <div className="col-12 d-grid"> <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                            </div>
                            <span>
                                Already have an account? <Link to="/login">Sign in</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

