import React from 'react';
import { Link } from 'react-router-dom';
export const SignUp = () => {
    return (
        <main>

            <div className="container">
                <div className="row justify-content-center align-items-center ">

                    <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">

                        <div className="card card-body rounded-3 p-4 p-sm-5">
                            <div className="text-center">

                                <h1 className="mb-2">Sign up</h1>
                                <span className="d-block">Already have an account? <Link to="/sign-in">Sign in here</Link></span>
                            </div>

                            <form className="mt-4">

                                <div className="mb-3 input-group-lg">
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                    <small>We'll never share your email with anyone else.</small>
                                </div>

                                <div className="mb-3 position-relative">

                                    <div className="input-group input-group-lg">
                                        <input className="form-control fakepassword" type="password" id="psw-input" placeholder="Enter new password" />
                                        <span className="input-group-text p-0">
                                            <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                                        </span>
                                    </div>

                                    <div id="pswmeter" className="mt-2"></div>
                                    <div className="d-flex mt-1">
                                        <div id="pswmeter-message" className="rounded"></div>

                                        <div className="ms-auto">
                                            <i className="bi bi-info-circle ps-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Include at least one uppercase, one lowercase, one special character, one number and 8 characters long." data-bs-original-title="" title=""></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3 input-group-lg">
                                    <input className="form-control" type="password" placeholder="Confirm password" />
                                </div>

                                <div className="mb-3 text-start">
                                    <input type="checkbox" className="form-check-input me-2" id="keepsingnedCheck" />
                                    <label className="form-check-label" htmlFor="keepsingnedCheck"> Keep me signed in</label>
                                </div>

                                <div className="d-grid"><button type="submit" className="btn btn-lg btn-primary">Sign me up</button></div>

                                <p className="mb-0 mt-3 text-center">©2022 <Link target="_blank" href="https://www.webestica.com/">Webestica.</Link> All rights reserved</p>
                            </form>

                        </div>

                    </div>
                </div>
            </div>


        </main>
    );
}

