import React from 'react';
import { Link } from 'react-router-dom';
export const Chats = () => {
    return (
    
            <aside className="sidebar bg-light">
                <div className="tab-pane fade h-100 show active" id="tab-content-chats" role="tabpanel">
                    <div className="d-flex flex-column h-100 position-relative">
                        <div className="hide-scrollbar">

                            <div className="container py-8">

                                <div className="mb-8">
                                    <h2 className="fw-bold m-0">Chats</h2>
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


                                <div className="card-list">

                                    <Link to="/chatGroup" className="card border-0 text-reset">
                                        <div className="card-body">
                                            <div className="row gx-5">
                                                <div className="col-auto">
                                                    <div className="avatar avatar-online">
                                                        <img src="./assets/images/7.jpg" alt="#" className="avatar-img" />
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <h5 className="me-auto mb-0">William Wright</h5>
                                                        <span className="text-muted extra-small ms-2">12:45 PM</span>
                                                    </div>

                                                    <div className="d-flex align-items-center">
                                                        <div className="line-clamp me-auto">
                                                            Hello! Yeah, I'm going to meet my friend of mine at the departments stores now.
                                                        </div>

                                                        <div className="badge badge-circle bg-primary ms-5">
                                                            <span>3</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <div className="row align-items-center gx-4">
                                                <div className="col-auto">
                                                    <div className="avatar avatar-xs">
                                                        <img className="avatar-img" src="./assets/images/bootstrap.svg" alt="Bootstrap Community" />
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <h6 className="mb-0">Bootstrap Community</h6>
                                                </div>

                                                <div className="col-auto">
                                                    <div className="avatar-group">
                                                        <div className="avatar avatar-xs">
                                                            <img src="./assets/images/11.jpg" alt="#" className="avatar-img" />
                                                        </div>

                                                        <div className="avatar avatar-xs">
                                                            <img src="./assets/images/9.jpg" alt="#" className="avatar-img" />
                                                        </div>

                                                        <div className="avatar avatar-xs">
                                                            <img src="./assets/images/9.jpg" alt="#" className="avatar-img" />
                                                        </div>

                                                        <div className="avatar avatar-xs">
                                                            <span className="avatar-text">+5</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>



                                    <Link to="chat-direct.html" className="card border-0 text-reset">
                                        <div className="card-body">
                                            <div className="row gx-5">
                                                <div className="col-auto">
                                                    <div className="avatar avatar-online">
                                                        <img src="./assets/images/6.jpg" alt="#" className="avatar-img" />
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <h5 className="me-auto mb-0">Ollie Chandler</h5>
                                                        <span className="text-muted extra-small ms-2">08:45 PM</span>
                                                    </div>

                                                    <div className="d-flex align-items-center">
                                                        <div className="line-clamp me-auto">
                                                            Hello! Yeah, I'm going to meet friend of mine at the departments stores now.
                                                        </div>

                                                        <div className="badge badge-circle bg-primary ms-5">
                                                            <span>3</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>



                                    <Link to="chat-empty.html" className="card border-0 text-reset">
                                        <div className="card-body">
                                            <div className="row gx-5">
                                                <div className="col-auto">
                                                    <div className="avatar avatar-online">
                                                        <img src="./assets/images/8.jpg" alt="#" className="avatar-img" />
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <h5 className="me-auto mb-0">Elise Dennis</h5>
                                                        <span className="text-muted extra-small ms-2">08:35 PM</span>
                                                    </div>

                                                    <div className="d-flex align-items-center">
                                                        <div className="line-clamp me-auto">
                                                            is typing<span className='typing-dots'><span>.</span><span>.</span><span>.</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>



                                    <Link to="chat-direct.html" className="card border-0 text-reset">
                                        <div className="card-body">
                                            <div className="row gx-5">
                                                <div className="col-auto">
                                                    <div className="avatar-group-trigon avatar-group-trigon-sm">
                                                        <div className="avatar avatar-sm">
                                                            <img className="avatar-img" src="./assets/images/8.jpg" alt="#" />
                                                        </div>

                                                        <div className="avatar avatar-sm">
                                                            <img className="avatar-img" src="./assets/images/9.jpg" alt="#" />
                                                        </div>

                                                        <div className="avatar avatar-sm">
                                                            <span className="avatar-text bg-primary">D</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <h5 className="me-auto mb-0">Don Knight</h5>
                                                        <span className="text-muted extra-small ms-2">08:35 PM</span>
                                                    </div>

                                                    <div className="d-flex align-items-center">
                                                        <div className="line-clamp me-auto">
                                                            I'm going to meet my friend of mine at the departments stores as soon as possible.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>



                                    <Link to="chat-direct.html" className="card border-0 text-reset">
                                        <div className="card-body">
                                            <div className="row gx-5">
                                                <div className="col-auto">
                                                    <div className="avatar">
                                                        <img src="./assets/images/4.jpg" alt="#" className="avatar-img" />
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <h5 className="me-auto mb-0">Warren White</h5>
                                                        <span className="text-muted extra-small ms-2">06:20 PM</span>
                                                    </div>

                                                    <div className="d-flex align-items-center">
                                                        <div className="line-clamp me-auto">
                                                            Hello! Yeah, I'm going to meet my friend of mine at the departments stores as soon as possible.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>



                                    <Link to="chat-direct.html" className="card border-0 text-reset">
                                        <div className="card-body">
                                            <div className="row gx-5">
                                                <div className="col-auto">
                                                    <div className="avatar">
                                                        <img src="./assets/images/11.jpg" alt="#" className="avatar-img" />
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <h5 className="me-auto mb-0">Mila White</h5>
                                                        <span className="text-muted extra-small ms-2">04:40 PM</span>
                                                    </div>

                                                    <div className="d-flex align-items-center">
                                                        <div className="line-clamp me-auto">
                                                            Hello! Yeah, I'm going to meet my friend of mine at the departments stores as soon as possible.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>



                                    <Link to="chat-direct.html" className="card border-0 text-reset">
                                        <div className="card-body">
                                            <div className="row gx-5">
                                                <div className="col-auto">
                                                    <div className="avatar avatar-online">
                                                        <img src="./assets/images/5.jpg" alt="#" className="avatar-img" />
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <h5 className="me-auto mb-0">Damian Binder</h5>
                                                        <span className="text-muted extra-small ms-2">02:45 PM</span>
                                                    </div>

                                                    <div className="d-flex align-items-center">
                                                        <div className="line-clamp me-auto">
                                                            Hello! Yeah, I'm going to meet my friend of mine at the departments stores as soon as possible.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>



                                    <Link to="chat-direct.html" className="card border-0 text-reset">
                                        <div className="card-body">
                                            <div className="row gx-5">
                                                <div className="col-auto">
                                                    <div className="avatar avatar-online">
                                                        <span className="avatar-text">B</span>
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <h5 className="me-auto mb-0">Bill Marrow</h5>
                                                        <span className="text-muted extra-small ms-2">12:20 PM</span>
                                                    </div>

                                                    <div className="d-flex align-items-center">
                                                        <div className="line-clamp me-auto">
                                                            Hello! Yeah, I'm going to meet my friend of mine at the departments stores as soon as possible.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>



                                    <Link to="#" className="card border-0 text-reset">
                                        <div className="card-body">
                                            <div className="row gx-5">
                                                <div className="col-auto">
                                                    <div className="avatar avatar-online">
                                                        <span className="avatar-text">M</span>
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <h5 className="me-auto mb-0">Marshall Wallaker</h5>
                                                        <span className="text-muted extra-small ms-2">12:18 PM</span>
                                                    </div>

                                                    <div className="d-flex align-items-center">
                                                        <div className="line-clamp me-auto">
                                                            Hello! Yeah, I'm going to meet my friend of mine at the departments stores as soon as possible.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>



                                    <Link to="chat-direct.html" className="card border-0 text-reset">
                                        <div className="card-body">
                                            <div className="row gx-5">
                                                <div className="col-auto">
                                                    <div className="avatar">
                                                        <svg className="avatar-img placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                            <title>Placeholder</title>
                                                            <rect width="100%" height="100%" fill="#868e96"></rect>
                                                        </svg>
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <h5 className="placeholder-glow w-100 mb-0">
                                                            <span className="placeholder col-5"></span>
                                                        </h5>
                                                    </div>

                                                    <div className="placeholder-glow">
                                                        <span className="placeholder col-12"></span>
                                                        <span className="placeholder col-8"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>



                                    <Link to="chat-direct.html" className="card border-0 text-reset">
                                        <div className="card-body">
                                            <div className="row gx-5">
                                                <div className="col-auto">
                                                    <div className="avatar">
                                                        <svg className="avatar-img placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                            <title>Placeholder</title>
                                                            <rect width="100%" height="100%" fill="#868e96"></rect>
                                                        </svg>
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <h5 className="placeholder-glow  w-100  mb-0">
                                                            <span className="placeholder col-5"></span>
                                                        </h5>
                                                    </div>

                                                    <div className="placeholder-glow">
                                                        <span className="placeholder col-12"></span>
                                                        <span className="placeholder col-8"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </aside>

    );
}
