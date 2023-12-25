import React from 'react';
import { Link } from 'react-router-dom';
export const Support = () => {
    return (

        <aside className="sidebar bg-light">
            <div className="tab-pane fade h-100 show active" >
                <div className="d-flex flex-column h-100">
                    <div className="hide-scrollbar">
                        <div className="container py-8">


                            <div className="mb-8">
                                <h2 className="fw-bold m-0">Support</h2>
                            </div>




                            <div className="card-list mt-8">
                                <div className="d-flex align-items-center mb-4 px-6">
                                    <small className="text-muted me-auto">Pages</small>
                                </div>

                                <div className="card border-0">
                                    <div className="card-body">
                                        <div className="row align-items-center gx-0">
                                            <div className="col">
                                                <h4 className="mb-1">Sign In</h4>
                                                <p>Sign in Page</p>
                                            </div>
                                            <div className="col-auto">
                                                <Link to="/" className="btn btn-sm btn-icon btn-primary rounded-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="card-body">
                                        <div className="row align-items-center gx-0">
                                            <div className="col">
                                                <h4 className="mb-1">Sign Up</h4>
                                                <p>Sign Up Page</p>
                                            </div>
                                            <div className="col-auto">
                                                <Link to="/signup" className="btn btn-sm btn-icon btn-primary rounded-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="card-body">
                                        <div className="row align-items-center gx-0">
                                            <div className="col">
                                                <h4 className="mb-1">Password Reset</h4>
                                                <p>Password Reset Page</p>
                                            </div>
                                            <div className="col-auto">
                                                <Link to="/passwordReset" className="btn btn-sm btn-icon btn-primary rounded-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>

    );
}

