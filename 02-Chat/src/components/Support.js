import React from 'react';
import { NavbarVertical } from './NavbarVertical';
import { Link } from 'react-router-dom';
export const Support = () => {
    return (
        <div className="layout overflow-hidden">
            <NavbarVertical />
            <aside className="sidebar bg-light">
                <div className="tab-pane fade h-100 show active" >
                    <div className="d-flex flex-column h-100">
                        <div className="hide-scrollbar">
                            <div className="container py-8">


                                <div className="mb-8">
                                    <h2 className="fw-bold m-0">Support</h2>
                                </div>


                                <div className="mb-6">
                                    <form action="#">
                                        <div className="input-group">
                                            <div className="input-group-text">
                                                <div className="icon icon-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                </div>
                                            </div>

                                            <input type="text" className="form-control form-control-lg ps-0" placeholder="Search messages or users" aria-label="Search for messages or users..." />
                                        </div>
                                    </form>
                                </div>

                                <div className="card border-0">
                                    <div className="card-body">

                                        <div className="row align-items-center gx-5">


                                            <div className="col">
                                                <h4 className="mb-1">Documentation</h4>
                                                <p>Setup and build tools</p>
                                            </div>

                                            <div className="col-auto">
                                                <Link to="docs/index.html" className="btn btn-sm btn-icon btn-primary rounded-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
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
                                                    <Link to="/signin" className="btn btn-sm btn-icon btn-primary rounded-circle">
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

                                    <div className="card border-0">
                                        <div className="card-body">
                                            <div className="row align-items-center gx-0">
                                                <div className="col">
                                                    <h4 className="mb-1">Lock screen</h4>
                                                    <p>Lock screen Page</p>
                                                </div>
                                                <div className="col-auto">
                                                    <Link to="lockscreen.html" className="btn btn-sm btn-icon btn-primary rounded-circle">
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
        </div>
    );
}

