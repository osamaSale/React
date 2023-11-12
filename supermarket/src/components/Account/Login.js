import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginSocialGoogle } from 'reactjs-social-login'
export const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    return (
        <section className="my-lg-15 my-8">
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                        <img src="./assets/images/svg-graphics/signin-g.svg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                        <div className="mb-lg-9 mb-5">
                            <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
                            <p>Welcome back to FreshCart! Enter your email to get started.</p>
                        </div>
                        <div className="row g-4">
                        <div className="col-12">
                                <LoginSocialGoogle
                                    client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                               /*      onResolve={loginGoogle} */
                                    onReject={(err) => {
                                        console.log(err)
                                    }}>
                                    <div className="d-grid">
                                        <Link className="btn border">
                                            <img alt="Logo" src={'https://mobile-store1234.netlify.app/static/media/google.e12914ad8afda3f6f2e8.png'} className="h-15px me-3" width={30} height={25} />
                                            Sign in Google
                                        </Link>
                                    </div>
                                </LoginSocialGoogle>
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control border" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div className="col-12">
                                <div className="password-field position-relative">
                                    <input type={passwordShown ? "text" : "password"} placeholder="Enter Password" className="form-control border" />
                                  
                                    <span onClick={() => { passwordShown === true ? setPasswordShown(false) : setPasswordShown(true) }}>
                                        {
                                            passwordShown === true ?<i id="passwordToggler"  className="bi bi-eye"></i> 
                                                : <i id="passwordToggler" className="bi bi-eye-slash"></i>
                                        }
                                    </span>
                                </div>

                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Remember me
                                    </label>
                                </div>
                                <div> Forgot password? <Link to="../pages/forgot-password.html">Reset It</Link></div>
                            </div>
                            <div className="col-12 d-grid"> <button type="submit" className="btn btn-primary">Sign In</button>
                            </div>
                            <div>Don’t have an account? <Link to="/Register"> Sign Up</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

