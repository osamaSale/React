import React from 'react';
import { Link } from 'react-router-dom';
export const SignIn = () => {
    return (
        <main>

            <div className="container">
                <div className="row justify-content-center align-items-center  py-5">
                    <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">

                        <div className="card card-body text-center p-4 p-sm-5">

                            <h1 className="mb-2">Sign in</h1>
                            <p className="mb-0">Don't have an account?<Link to="/sign-up"> Click here to sign up</Link></p>

                            <form className="mt-sm-4">

                                <div className="mb-3 input-group-lg">
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="mb-3 position-relative">

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
                                    <Link to="/forgot-password">Forgot password?</Link>
                                </div>

                                <div className="d-grid"><button type="submit" className="btn btn-lg btn-primary">Login</button></div>

                                <p className="mb-0 mt-3">©2023 <Link target="_blank" to="https://www.webestica.com/">Webestica.</Link> All rights reserved</p>
                            </form>

                        </div>

                    </div>
                </div>
            </div>


        </main>
    );
}

