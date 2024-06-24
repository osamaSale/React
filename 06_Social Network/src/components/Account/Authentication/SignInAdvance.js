import React from 'react';
import { Link } from 'react-router-dom';

export const SignInAdvance = () => {
    return (
     

            <div className="bg-primary pt-5  position-relative">

                <figure className="m-0 position-absolute top-50 start-50 translate-middle w-100 h-100 opacity-1 overflow-hidden">
                    <img src='assets/images/signInAdvance/signAdvance.svg' alt='' />
                </figure>

                <div className="container ">
                    <div className="row justify-content-center text-center">
                        <div className="col-12">

                            <h2 className="display-4 text-white mb-2 position-relative">Welcome back!</h2>

                            <figure className="m-0 position-relative z-index-9">
                                <img src='assets/images/signInAdvance/signAdvance1.svg' alt='' />
                            </figure>

                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-6 position-relative z-index-1">

                            <div className="card card-body p-4 p-sm-5 mt-sm-n5 mb-n5">

                                <h2 className="h1 mb-2">Sign in</h2>
                                <p>Don't have an account?<Link to="/sign-up"> Click here to sign up</Link></p>

                                <form className="mt-4">

                                    <div className="mb-3 position-relative input-group-lg">
                                        <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>

                                    <div className="mb-3">

                                        <div className="input-group input-group-lg">
                                            <input className="form-control fakepassword" type="password" id="psw-input" placeholder="Enter new password" />
                                            <span className="input-group-text p-0">
                                                <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mb-3 d-sm-flex justify-content-between">
                                        <div>
                                            <input type="checkbox" className="form-check-input me-2" id="rememberCheck" />
                                            <label className="form-check-label" htmlFor="rememberCheck">Remember me?</label>
                                        </div>
                                        <Link to="forgot-password.html">Forgot password?</Link>
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-lg btn-primary-soft">Login</button>
                                    </div>

                                    <p className="mb-0 mt-3">©2023 <Link target="_blank" to="https://www.webestica.com/">Webestica.</Link> All rights reserved</p>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
     
    );
}

