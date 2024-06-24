import React from 'react';
import { Link } from 'react-router-dom';
export const ForgotPassword = () => {
    return (
        <main>
            <div className="container">
                <div className="row justify-content-center align-items-center  py-5">
                    <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                        <div className="card card-body rounded-3 text-center p-4 p-sm-5">
                            <h1 className="mb-2">Forgot password?</h1>
                            <p>Enter the email address associated with account.</p>
                            <form className="mt-3">
                                <div className="mb-3">
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

                                <div className="mb-3">
                                    <p>Back to <Link to="/sign-in">Sign in</Link></p>
                                </div>
                               
                                <div className="d-grid"><button type="submit" className="btn btn-lg btn-primary">Reset password</button></div>
                            
                                <p className="mb-0 mt-3">©2023 <Link target="_blank" to="https://www.webestica.com/">Webestica.</Link> All rights reserved</p>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    );
}

