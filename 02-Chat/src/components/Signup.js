import React from 'react';

export const Signup = () => {
    return (
        <div className="container-fluid mt-8">
            <div className="row align-items-center justify-content-center min-vh-100 gx-0">
                <div className="col-12 col-md-5 col-lg-4">
                    <div className="card card-shadow border-0">
                        <div className="card-body">
                            <div className="row g-6">
                                <div className="col-12">
                                    <div className="text-center">
                                        <h3 className="fw-bold mb-2">Sign Up</h3>
                                        <p>Follow the easy steps</p>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="signup-name" placeholder="Name" />
                                        <label >Name</label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="signup-email" placeholder="Email" />
                                        <label >Email</label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" placeholder="Password" />
                                        <label >Password</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="tel" className="form-control" placeholder="Phone" />
                                        <label >Phone</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="file" className="form-control" placeholder="Image" />
                                        <label >Image</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <select className="form-select form-select-sm" >
                                            <option >Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <label for="floatingSelect">Works with selects</label>
                                    </div>

                                </div>
                                <div className="col-12">
                                    <button className="btn btn-block btn-lg btn-primary w-100" type="submit">Create Account</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <p>Already have an account? <a href="./signin.html">Sign in</a></p>
                    </div>

                </div>
            </div>
        </div>
    );
}

