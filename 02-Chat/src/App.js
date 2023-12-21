import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { NavbarVertical } from './components/NavbarVertical';
import { CreateChat } from './components/CreateChat';

function App() {
  const update = () => {

  }
  return (
    <div className="App">
      <ToastContainer />
      <div className="layout overflow-hidden">

        <NavbarVertical />

        <aside className="sidebar bg-light">
          <div className="tab-content h-100" role="tablist">
            <Routes>
              <Route path='/' element={<CreateChat update={update} />} />
            </Routes>


            <div className="tab-pane fade h-100" id="tab-content-friends" role="tabpanel">
              <div className="d-flex flex-column h-100">
                <div className="hide-scrollbar">
                  <div className="container py-8">


                    <div className="mb-8">
                      <h2 className="fw-bold m-0">Friends</h2>
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


                      <div className="mt-5">
                        <Link to="#" className="btn btn-lg btn-primary w-100 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-invite">
                          Find Friends

                          <span className="icon ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                          </span>
                        </Link>
                      </div>
                    </div>


                    <div className="card-list">
                      <div className="my-5">
                        <small className="text-uppercase text-muted">B</small>
                      </div>


                      <div className="card border-0">
                        <div className="card-body">

                          <div className="row align-items-center gx-5">
                            <div className="col-auto">
                              <Link to="#" className="avatar ">

                                <img className="avatar-img" src="./assets/images/6.jpg" alt="" />


                              </Link>
                            </div>

                            <div className="col">
                              <h5><Link to="#">Bill Marrow</Link></h5>
                              <p>last seen 3 days ago</p>
                            </div>

                            <div className="col-auto">

                              <div className="dropdown">
                                <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                </Link>

                                <ul className="dropdown-menu">
                                  <li><Link className="dropdown-item" to="#">New message</Link></li>
                                  <li><Link className="dropdown-item" to="#">Edit contact</Link>
                                  </li>
                                  <li>
                                    <hr className="dropdown-divider" />
                                  </li>
                                  <li>
                                    <Link className="dropdown-item text-danger" to="#">Block user</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>


                      <div className="my-5">
                        <small className="text-uppercase text-muted">D</small>
                      </div>


                      <div className="card border-0">
                        <div className="card-body">

                          <div className="row align-items-center gx-5">
                            <div className="col-auto">
                              <Link to="#" className="avatar ">

                                <img className="avatar-img" src="./assets/images/5.jpg" alt="" />


                              </Link>
                            </div>

                            <div className="col">
                              <h5><Link to="#">Damian Binder</Link></h5>
                              <p>last seen within a week</p>
                            </div>

                            <div className="col-auto">

                              <div className="dropdown">
                                <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                </Link>

                                <ul className="dropdown-menu">
                                  <li><Link className="dropdown-item" to="#">New message</Link></li>
                                  <li><Link className="dropdown-item" to="#">Edit contact</Link>
                                  </li>
                                  <li>
                                    <hr className="dropdown-divider" />
                                  </li>
                                  <li>
                                    <Link className="dropdown-item text-danger" to="#">Block user</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>

                      <div className="card border-0">
                        <div className="card-body">

                          <div className="row align-items-center gx-5">
                            <div className="col-auto">
                              <Link to="#" className="avatar avatar-online">


                                <span className="avatar-text">D</span>

                              </Link>
                            </div>

                            <div className="col">
                              <h5><Link to="#">Don Knight</Link></h5>
                              <p>online</p>
                            </div>

                            <div className="col-auto">

                              <div className="dropdown">
                                <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                </Link>

                                <ul className="dropdown-menu">
                                  <li><Link className="dropdown-item" to="#">New message</Link></li>
                                  <li><Link className="dropdown-item" to="#">Edit contact</Link>
                                  </li>
                                  <li>
                                    <hr className="dropdown-divider" />
                                  </li>
                                  <li>
                                    <Link className="dropdown-item text-danger" to="#">Block user</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>


                      <div className="my-5">
                        <small className="text-uppercase text-muted">E</small>
                      </div>


                      <div className="card border-0">
                        <div className="card-body">

                          <div className="row align-items-center gx-5">
                            <div className="col-auto">
                              <Link to="#" className="avatar avatar-online">

                                <img className="avatar-img" src="./assets/images/8.jpg" alt="" />


                              </Link>
                            </div>

                            <div className="col">
                              <h5><Link to="#">Elise Dennis</Link></h5>
                              <p>online</p>
                            </div>

                            <div className="col-auto">

                              <div className="dropdown">
                                <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                </Link>

                                <ul className="dropdown-menu">
                                  <li><Link className="dropdown-item" to="#">New message</Link></li>
                                  <li><Link className="dropdown-item" to="#">Edit contact</Link>
                                  </li>
                                  <li>
                                    <hr className="dropdown-divider" />
                                  </li>
                                  <li>
                                    <Link className="dropdown-item text-danger" to="#">Block user</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>


                      <div className="my-5">
                        <small className="text-uppercase text-muted">M</small>
                      </div>


                      <div className="card border-0">
                        <div className="card-body">

                          <div className="row align-items-center gx-5">
                            <div className="col-auto">
                              <Link to="#" className="avatar ">


                                <span className="avatar-text">M</span>

                              </Link>
                            </div>

                            <div className="col">
                              <h5><Link to="#">Marshall Wallaker</Link></h5>
                              <p>last seen within a month</p>
                            </div>

                            <div className="col-auto">

                              <div className="dropdown">
                                <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                </Link>

                                <ul className="dropdown-menu">
                                  <li><Link className="dropdown-item" to="#">New message</Link></li>
                                  <li><Link className="dropdown-item" to="#">Edit contact</Link>
                                  </li>
                                  <li>
                                    <hr className="dropdown-divider" />
                                  </li>
                                  <li>
                                    <Link className="dropdown-item text-danger" to="#">Block user</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>

                      <div className="card border-0">
                        <div className="card-body">

                          <div className="row align-items-center gx-5">
                            <div className="col-auto">
                              <Link to="#" className="avatar ">

                                <img className="avatar-img" src="./assets/images/11.jpg" alt="" />


                              </Link>
                            </div>

                            <div className="col">
                              <h5><Link to="#">Mila White</Link></h5>
                              <p>last seen a long time ago</p>
                            </div>

                            <div className="col-auto">

                              <div className="dropdown">
                                <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                </Link>

                                <ul className="dropdown-menu">
                                  <li><Link className="dropdown-item" to="#">New message</Link></li>
                                  <li><Link className="dropdown-item" to="#">Edit contact</Link>
                                  </li>
                                  <li>
                                    <hr className="dropdown-divider" />
                                  </li>
                                  <li>
                                    <Link className="dropdown-item text-danger" to="#">Block user</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>


                      <div className="my-5">
                        <small className="text-uppercase text-muted">O</small>
                      </div>


                      <div className="card border-0">
                        <div className="card-body">

                          <div className="row align-items-center gx-5">
                            <div className="col-auto">
                              <Link to="#" className="avatar avatar-online">


                                <span className="avatar-text">O</span>

                              </Link>
                            </div>

                            <div className="col">
                              <h5><Link to="#">Ollie Chandler</Link></h5>
                              <p>online</p>
                            </div>

                            <div className="col-auto">

                              <div className="dropdown">
                                <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                </Link>

                                <ul className="dropdown-menu">
                                  <li><Link className="dropdown-item" to="#">New message</Link></li>
                                  <li><Link className="dropdown-item" to="#">Edit contact</Link>
                                  </li>
                                  <li>
                                    <hr className="dropdown-divider" />
                                  </li>
                                  <li>
                                    <Link className="dropdown-item text-danger" to="#">Block user</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>


                      <div className="my-5">
                        <small className="text-uppercase text-muted">W</small>
                      </div>


                      <div className="card border-0">
                        <div className="card-body">

                          <div className="row align-items-center gx-5">
                            <div className="col-auto">
                              <Link to="#" className="avatar ">

                                <img className="avatar-img" src="./assets/images/4.jpg" alt="" />


                              </Link>
                            </div>

                            <div className="col">
                              <h5><Link to="#">Warren White</Link></h5>
                              <p>last seen recently</p>
                            </div>

                            <div className="col-auto">

                              <div className="dropdown">
                                <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                </Link>

                                <ul className="dropdown-menu">
                                  <li><Link className="dropdown-item" to="#">New message</Link></li>
                                  <li><Link className="dropdown-item" to="#">Edit contact</Link>
                                  </li>
                                  <li>
                                    <hr className="dropdown-divider" />
                                  </li>
                                  <li>
                                    <Link className="dropdown-item text-danger" to="#">Block user</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>

                      <div className="card border-0">
                        <div className="card-body">

                          <div className="row align-items-center gx-5">
                            <div className="col-auto">
                              <Link to="#" className="avatar avatar-online">

                                <img className="avatar-img" src="./assets/images/7.jpg" alt="" />


                              </Link>
                            </div>

                            <div className="col">
                              <h5><Link to="#">William Wright</Link></h5>
                              <p>online</p>
                            </div>

                            <div className="col-auto">

                              <div className="dropdown">
                                <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                </Link>

                                <ul className="dropdown-menu">
                                  <li><Link className="dropdown-item" to="#">New message</Link></li>
                                  <li><Link className="dropdown-item" to="#">Edit contact</Link>
                                  </li>
                                  <li>
                                    <hr className="dropdown-divider" />
                                  </li>
                                  <li>
                                    <Link className="dropdown-item text-danger" to="#">Block user</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>


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

                      <Link to="chat-group.html" className="card border-0 text-reset">
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

            <div className="tab-pane fade h-100" id="tab-content-notifications" role="tabpanel">
              <div className="d-flex flex-column h-100">
                <div className="hide-scrollbar">
                  <div className="container py-8">


                    <div className="mb-8">
                      <h2 className="fw-bold m-0">Notifications</h2>
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

                      <div className="d-flex align-items-center my-4 px-6">
                        <small className="text-muted me-auto">Today</small>

                        <Link to="#" className="text-muted small">Clear all</Link>
                      </div>



                      <div className="card border-0 mb-5">
                        <div className="card-body">

                          <div className="row gx-5">
                            <div className="col-auto">

                              <Link to="#" className="avatar">
                                <img className="avatar-img" src="./assets/images/4.jpg" alt="" />

                                <div className="badge badge-circle bg-primary border-outline position-absolute bottom-0 end-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                              </Link>
                            </div>

                            <div className="col">
                              <div className="d-flex align-items-center mb-2">
                                <h5 className="me-auto mb-0">
                                  <Link to="#">Mila White</Link>
                                </h5>
                                <span className="extra-small text-muted ms-2">08:45 PM</span>
                              </div>

                              <div className="d-flex">
                                <div className="me-auto">Send you a friend request.</div>

                                <div className="dropdown ms-5">
                                  <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                  </Link>
                                  <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Show less often</Link></li>
                                    <li><Link className="dropdown-item" to="#">Hide</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card-footer">
                          <div className="row gx-4">
                            <div className="col">
                              <Link to="#" className="btn btn-sm btn-soft-primary w-100">Hide</Link>
                            </div>
                            <div className="col">
                              <Link to="#" className="btn btn-sm btn-primary w-100">Confirm</Link>
                            </div>
                          </div>
                        </div>
                      </div>



                      <div className="card border-0 mb-5">
                        <div className="card-body">

                          <div className="row gx-5">
                            <div className="col-auto">

                              <Link to="#" className="avatar">
                                <span className="avatar-text bg-warning">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                </span>

                                <div className="badge badge-circle bg-warning border-outline position-absolute bottom-0 end-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-gift"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                                </div>
                              </Link>
                            </div>

                            <div className="col">
                              <div className="d-flex align-items-center mb-2">
                                <h5 className="me-auto mb-0">
                                  <Link to="#">Congratulations!</Link>
                                </h5>
                                <span className="extra-small text-muted ms-2">08:45 PM</span>
                              </div>

                              <div className="d-flex">
                                <div className="me-auto">You win 5GB free disk space.</div>

                                <div className="dropdown ms-5">
                                  <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                  </Link>
                                  <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Show less often</Link></li>
                                    <li><Link className="dropdown-item" to="#">Hide</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>

                    <div className="card-list mt-8">

                      <div className="d-flex align-items-center my-4 px-6">
                        <small className="text-muted me-auto">Yesterday</small>

                        <Link to="#" className="text-muted small">Clear all</Link>
                      </div>



                      <div className="card border-0 mb-5">
                        <div className="card-body">

                          <div className="row gx-5">
                            <div className="col-auto">

                              <div className="avatar">
                                <span className="avatar-text bg-success">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                </span>

                                <div className="badge badge-circle bg-success border-outline position-absolute bottom-0 end-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-refresh-ccw"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
                                </div>
                              </div>
                            </div>

                            <div className="col">
                              <div className="d-flex align-items-center mb-2">
                                <h5 className="me-auto mb-0">Password Changed</h5>
                                <span className="extra-small text-muted ms-2">08:45 PM</span>
                              </div>

                              <div className="d-flex">
                                <div className="me-auto">Your password has been <br /> updated successfully.</div>

                                <div className="dropdown ms-5">
                                  <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                  </Link>
                                  <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Show less often</Link></li>
                                    <li><Link className="dropdown-item" to="#">Hide</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>

                    <div className="card-list mt-8">


                      <div className="d-flex align-items-center my-4 px-6">
                        <small className="text-muted me-auto">Previous</small>

                        <Link to="#" className="text-muted small">Clear all</Link>
                      </div>



                      <div className="card border-0">
                        <div className="card-body">

                          <div className="row gx-5">
                            <div className="col-auto">

                              <Link to="#" className="avatar">
                                <img className="avatar-img" src="./assets/images/7.jpg" alt="" />

                                <div className="badge badge-circle bg-primary border-outline position-absolute bottom-0 end-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                </div>
                              </Link>
                            </div>

                            <div className="col">
                              <div className="d-flex align-items-center mb-2">
                                <h5 className="me-auto mb-0">
                                  <Link to="#">William Wright</Link>
                                </h5>
                                <span className="extra-small text-muted ms-2">08:45 PM</span>
                              </div>

                              <div className="d-flex">
                                <div className="me-auto">Updated profile picture.</div>

                                <div className="dropdown ms-5">
                                  <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                  </Link>
                                  <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Show less often</Link></li>
                                    <li><Link className="dropdown-item" to="#">Hide</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>



                      <div className="card border-0">
                        <div className="card-body">

                          <div className="row gx-5">
                            <div className="col-auto">

                              <Link to="#" className="avatar">
                                <img className="avatar-img" src="./assets/images/7.jpg" alt="" />

                                <div className="badge badge-circle bg-primary border-outline position-absolute bottom-0 end-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                </div>
                              </Link>
                            </div>

                            <div className="col">
                              <div className="d-flex align-items-center mb-2">
                                <h5 className="me-auto mb-0">
                                  <Link to="#">Don Knight</Link>
                                </h5>
                                <span className="extra-small text-muted ms-2">08:45 PM</span>
                              </div>

                              <div className="d-flex">
                                <div className="me-auto">Removed you from the chat <Link to="#" className="text-reset">Bootstrap Community</Link>.</div>
                                <div className="me-auto">Send you a private message.</div>

                                <div className="dropdown ms-5">
                                  <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                  </Link>
                                  <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Show less often</Link></li>
                                    <li><Link className="dropdown-item" to="#">Hide</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>



                      <div className="card border-0">
                        <div className="card-body">

                          <div className="row gx-5">
                            <div className="col-auto">

                              <Link to="#tab-settings" className="avatar avatar-badged" data-theme-toggle="tab">
                                <span className="avatar-text bg-danger">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                </span>

                                <div className="badge badge-circle bg-danger border-outline position-absolute bottom-0 end-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-power"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
                                </div>
                              </Link>
                            </div>

                            <div className="col">
                              <div className="d-flex align-items-center mb-2">
                                <h5 className="me-auto mb-0">
                                  <Link to="#tab-settings" data-theme-toggle="tab">
                                    Notifications
                                  </Link>
                                </h5>
                                <span className="extra-small text-muted ms-2">08:45 PM</span>
                              </div>

                              <div className="d-flex">
                                <div className="me-auto">Please turn on notifications.</div>

                                <div className="dropdown ms-5">
                                  <Link className="icon text-muted" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                  </Link>
                                  <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Show less often</Link></li>
                                    <li><Link className="dropdown-item" to="#">Hide</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade h-100" id="tab-content-support" role="tabpanel">
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
                              <Link to="signin.html" className="btn btn-sm btn-icon btn-primary rounded-circle">
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
                              <Link to="signup.html" className="btn btn-sm btn-icon btn-primary rounded-circle">
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
                              <Link to="password-reset.html" className="btn btn-sm btn-icon btn-primary rounded-circle">
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

            <div className="tab-pane fade h-100" id="tab-content-settings" role="tabpanel">
              <div className="d-flex flex-column h-100">
                <div className="hide-scrollbar">
                  <div className="container py-8">

                    <div className="mb-8">
                      <h2 className="fw-bold m-0">Settings</h2>
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
                          <div className="col-auto">
                            <div className="avatar">
                              <img src="./assets/images/1.jpg" alt="#" className="avatar-img" />

                              <div className="badge badge-circle bg-secondary border-outline position-absolute bottom-0 end-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                              </div>
                              <input id="upload-profile-photo" className="d-none" type="file" />
                              <label className="stretched-label mb-0" htmlFor="upload-profile-photo"></label>
                            </div>
                          </div>
                          <div className="col">
                            <h5>William Pearson</h5>
                            <p>wright@studio.com</p>
                          </div>
                          <div className="col-auto">
                            <Link to="#" className="text-muted">
                              <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="d-flex align-items-center mb-4 px-6">
                        <small className="text-muted me-auto">Account</small>
                      </div>

                      <div className="card border-0">
                        <div className="card-body py-2">

                          <div className="accordion accordion-flush" id="accordion-profile">
                            <div className="accordion-item">
                              <div className="accordion-header" id="accordion-profile-1">
                                <Link to="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-profile-body-1" aria-expanded="false" aria-controls="accordion-profile-body-1">
                                  <div>
                                    <h5>Profile settings</h5>
                                    <p>Change your profile settings</p>
                                  </div>
                                </Link>
                              </div>

                              <div id="accordion-profile-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-profile-1" data-parent="#accordion-profile">
                                <div className="accordion-body">
                                  <div className="form-floating mb-6">
                                    <input type="text" className="form-control" id="profile-name" placeholder="Name" />
                                    <label htmlFor="profile-name">Name</label>
                                  </div>

                                  <div className="form-floating mb-6">
                                    <input type="email" className="form-control" id="profile-email" placeholder="Email address" />
                                    <label htmlFor="profile-email">Email</label>
                                  </div>

                                  <div className="form-floating mb-6">
                                    <input type="text" className="form-control" id="profile-phone" placeholder="Phone" />
                                    <label htmlFor="profile-phone">Phone</label>
                                  </div>

                                  <div className="form-floating mb-6">
                                    <textarea className="form-control" placeholder="Bio" id="profile-bio" data-autosize="true" style={{ minHeight: "120px" }}></textarea>
                                    <label htmlFor="profile-bio">Bio</label>
                                  </div>

                                  <button type="button" className="btn btn-block btn-lg btn-primary w-100">Save</button>
                                </div>
                              </div>
                            </div>

                            <div className="accordion-item">
                              <div className="accordion-header" id="accordion-profile-2">
                                <Link to="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-profile-body-2" aria-expanded="false" aria-controls="accordion-profile-body-2">
                                  <div>
                                    <h5>Connected accounts</h5>
                                    <p>Connect with your accounts</p>
                                  </div>
                                </Link>
                              </div>

                              <div id="accordion-profile-body-2" className="accordion-collapse collapse" aria-labelledby="accordion-profile-2" data-parent="#accordion-profile">
                                <div className="accordion-body">
                                  <div className="form-floating mb-6">
                                    <input type="text" className="form-control" id="profile-twitter" placeholder="Twitter" />
                                    <label htmlFor="profile-twitter">Twitter</label>
                                  </div>

                                  <div className="form-floating mb-6">
                                    <input type="text" className="form-control" id="profile-facebook" placeholder="Facebook" />
                                    <label htmlFor="profile-facebook">Facebook</label>
                                  </div>

                                  <div className="form-floating mb-6">
                                    <input type="text" className="form-control" id="profile-instagram" placeholder="Instagram" />
                                    <label htmlFor="profile-instagram">Instagram</label>
                                  </div>

                                  <button type="button" className="btn btn-block btn-lg btn-primary w-100">Save</button>
                                </div>
                              </div>
                            </div>


                            <div className="accordion-item">
                              <div className="accordion-header">
                                <div className="row align-items-center">
                                  <div className="col">
                                    <h5>Appearance</h5>
                                    <p>Choose light or dark theme</p>
                                  </div>
                                  <div className="col-auto">
                                    <Link className="switcher-btn text-reset" to="#!" title="Themes">
                                      <div className="switcher-icon switcher-icon-dark icon icon-lg d-none" data-theme-mode="dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                      </div>
                                      <div className="switcher-icon switcher-icon-light icon icon-lg d-none" data-theme-mode="light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="d-flex align-items-center my-4 px-6">
                        <small className="text-muted me-auto">Security</small>
                      </div>

                      <div className="card border-0">
                        <div className="card-body py-2">

                          <div className="accordion accordion-flush" id="accordion-security">
                            <div className="accordion-item">
                              <div className="accordion-header" id="accordion-security-1">
                                <Link to="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-security-body-1" aria-expanded="false" aria-controls="accordion-security-body-1">
                                  <div>
                                    <h5>Password</h5>
                                    <p>Change your password</p>
                                  </div>
                                </Link>
                              </div>

                              <div id="accordion-security-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-security-1" data-parent="#accordion-security">
                                <div className="accordion-body">
                                  <form action="#" autoComplete="on">
                                    <div className="form-floating mb-6">
                                      <input type="password" className="form-control" id="profile-current-password" placeholder="Current Password" autoComplete="" />
                                      <label htmlFor="profile-current-password">Current Password</label>
                                    </div>

                                    <div className="form-floating mb-6">
                                      <input type="password" className="form-control" id="profile-new-password" placeholder="New password" autoComplete="" />
                                      <label htmlFor="profile-new-password">New password</label>
                                    </div>

                                    <div className="form-floating mb-6">
                                      <input type="password" className="form-control" id="profile-verify-password" placeholder="Verify Password" autoComplete="" />
                                      <label htmlFor="profile-verify-password">Verify Password</label>
                                    </div>
                                  </form>
                                  <button type="button" className="btn btn-block btn-lg btn-primary w-100">Save</button>
                                </div>
                              </div>
                            </div>


                            <div className="accordion-item">
                              <div className="accordion-header">
                                <div className="row align-items-center">
                                  <div className="col">
                                    <h5>Two-step verifications</h5>
                                    <p>Enable two-step verifications</p>
                                  </div>
                                  <div className="col-auto">
                                    <div className="form-check form-switch">
                                      <input className="form-check-input" type="checkbox" id="accordion-security-check-1" />
                                      <label className="form-check-label" htmlFor="accordion-security-check-1"></label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="d-flex align-items-center my-4 px-6">
                        <small className="text-muted me-auto">Storage</small>

                        <div className="flex align-items-center text-muted">
                          <Link to="#" className="text-muted small">Clear storage</Link>

                          <div className="icon icon-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                          </div>
                        </div>
                      </div>

                      <div className="card border-0">
                        <div className="card-body py-2">

                          <div className="accordion accordion-flush" id="accordion-storage">
                            <div className="accordion-item">
                              <div className="accordion-header" id="accordion-storage-1">
                                <Link to="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-storage-body-1" aria-expanded="false" aria-controls="accordion-storage-body-1">
                                  <div>
                                    <h5>Cache</h5>
                                    <p>Maximum cache size</p>
                                  </div>
                                </Link>
                              </div>

                              <div id="accordion-storage-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-storage-1" data-parent="#accordion-storage">
                                <div className="accordion-body">
                                  <div className="row justify-content-between mb-4">
                                    <div className="col-auto">
                                      <small>2 GB</small>
                                    </div>
                                    <div className="col-auto">
                                      <small>4 GB</small>
                                    </div>
                                    <div className="col-auto">
                                      <small>6 GB</small>
                                    </div>
                                    <div className="col-auto">
                                      <small>8 GB</small>
                                    </div>
                                  </div>
                                  <input type="range" className="form-range" min="1" max="4" step="1" id="custom-range-1" />
                                </div>
                              </div>
                            </div>

                            <div className="accordion-item">
                              <div className="accordion-header">
                                <div className="row align-items-center">
                                  <div className="col">
                                    <h5>Keep media</h5>
                                    <p>Photos, videos and other files</p>
                                  </div>
                                  <div className="col-auto">
                                    <div className="form-check form-switch">
                                      <input className="form-check-input" type="checkbox" id="accordion-storage-check-1" />
                                      <label className="form-check-label" htmlFor="accordion-storage-check-1"></label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="d-flex align-items-center my-4 px-6">
                        <small className="text-muted me-auto">Notifications</small>
                      </div>


                      <div className="card border-0">
                        <div className="card-body py-2">
                          <div className="accordion accordion-flush" id="accordion-notifications">
                            <div className="accordion-item">
                              <div className="accordion-header" id="accordion-notifications-1">
                                <Link to="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-notifications-body-1" aria-expanded="false" aria-controls="accordion-notifications-body-1">
                                  <div>
                                    <h5>Message</h5>
                                    <p>Set custom notifications for users</p>
                                  </div>
                                </Link>
                              </div>

                              <div id="accordion-notifications-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-notifications-1" data-parent="#accordion-notifications">
                                <div className="accordion-body">
                                  <div className="row align-items-center">
                                    <div className="col">
                                      <h5>Text</h5>
                                      <p>Show text in notifications</p>
                                    </div>

                                    <div className="col-auto">
                                      <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="accordion-notifications-check-1" />
                                        <label className="form-check-label" htmlFor="accordion-notifications-check-1"></label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="accordion-item">
                              <div className="accordion-header">
                                <div className="row align-items-center">
                                  <div className="col">
                                    <h5>Sound</h5>
                                    <p>Enable sound notifications</p>
                                  </div>
                                  <div className="col-auto">
                                    <div className="form-check form-switch">
                                      <input className="form-check-input" type="checkbox" id="accordion-notifications-check-3" />
                                      <label className="form-check-label" htmlFor="accordion-notifications-check-3"></label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="accordion-item">
                              <div className="accordion-header">
                                <div className="row align-items-center">
                                  <div className="col">
                                    <h5>Browser notifications</h5>
                                    <p>Enable browser notifications</p>
                                  </div>
                                  <div className="col-auto">
                                    <div className="form-check form-switch">
                                      <input className="form-check-input" type="checkbox" id="accordion-notifications-check-2" />
                                      <label className="form-check-label" htmlFor="accordion-notifications-check-2"></label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="d-flex align-items-center my-4 px-6">
                        <small className="text-muted me-auto">Devices</small>

                        <div className="flex align-items-center text-muted">
                          <Link to="#" className="text-muted small">End all sessions</Link>

                          <div className="icon icon-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                          </div>
                        </div>
                      </div>

                      <div className="card border-0">
                        <div className="card-body py-3">

                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                              <div className="row align-items-center">
                                <div className="col">
                                  <h5>Windows ⋅ USA, Houston</h5>
                                  <p>Today at 2:48 pm ⋅ Browser: Chrome</p>
                                </div>
                                <div className="col-auto">
                                  <span className="text-primary extra-small">active</span>
                                </div>
                              </div>
                            </li>

                            <li className="list-group-item">
                              <div className="row align-items-center">
                                <div className="col">
                                  <h5>iPhone ⋅ USA, Houston</h5>
                                  <p>Yesterday at 2:48 pm ⋅ Browser: Chrome</p>
                                </div>
                              </div>
                            </li>
                          </ul>

                        </div>
                      </div>

                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>



        <main className="main">
          <div className="container h-100">

            <div className="d-flex flex-column h-100 justify-content-center text-center">
              <div className="mb-6">
                <span className="icon icon-xl text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </span>
              </div>

              <p className="text-muted">Pick a person from left menu, <br /> and start your conversation.</p>
            </div>

          </div>
        </main>


      </div>
    </div>
  );
}

export default App;
