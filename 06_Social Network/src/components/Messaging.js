import React from 'react';
import { Link } from 'react-router-dom';
export const Messaging = () => {
    
    return (
        <>
            <main>
                <div className="container">
                    <div className="row gx-0">

                        <div className="col-lg-4 col-xxl-3" id="chatTabs" role="tablist">

                            <div className="d-flex align-items-center mb-4 d-lg-none">
                                <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <span className="btn btn-primary"><i className="fa-solid fa-sliders-h"></i></span>
                                    <span className="h6 mb-0 fw-bold d-lg-none ms-2">Chats</span>
                                </button>
                            </div>
                            <div className="card card-body border-end-0 border-bottom-0 rounded-bottom-0">
                                <div className=" d-flex justify-content-between align-items-center">
                                    <h1 className="h5 mb-0">Active chats <span className="badge bg-success bg-opacity-10 text-success">6</span></h1>

                                    <div className="dropend position-relative">
                                        <div className="nav">
                                            <Link className="icon-md rounded-circle btn btn-sm btn-primary-soft nav-link toast-btn"
                                                data-target="chatToast" to="#"> <i className="bi bi-pencil-square"></i> </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <nav className="navbar navbar-light navbar-expand-lg mx-0">
                                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar">

                                    <div className="offcanvas-header">
                                        <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas"></button>
                                    </div>

                                    <div className="offcanvas-body p-0">
                                        <div className="card card-chat-list rounded-end-lg-0 card-body border-end-lg-0 rounded-top-0">

                                            <form className="position-relative">
                                                <input className="form-control py-2" type="search" placeholder="Search for chats" aria-label="Search" />
                                                <button
                                                    className="btn bg-transparent text-secondary px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                                                    type="submit">
                                                    <i className="bi bi-search fs-5"></i>
                                                </button>
                                            </form>

                                            <div className="mt-4 h-100">
                                                <div className="chat-tab-list custom-scrollbar">
                                                    <ul className="nav flex-column nav-pills nav-pills-soft">
                                                        <li data-bs-dismiss="offcanvas">

                                                            <Link to="#chat-1" className="nav-link active text-start" id="chat-1-tab" data-bs-toggle="pill"
                                                                role="tab">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar avatar-story me-2 status-online">
                                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" />
                                                                    </div>
                                                                    <div className="flex-grow-1 d-block">
                                                                        <h6 className="mb-0 mt-1">Frances Guerrero</h6>
                                                                        <div className="small text-secondary">Frances sent a photo.</div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>

                                                        <li data-bs-dismiss="offcanvas">
                                                            <Link to="#chat-2" className="nav-link text-start" id="chat-2-tab" data-bs-toggle="pill"
                                                                role="tab">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar me-2 status-offline">
                                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="" />
                                                                    </div>
                                                                    <div className="flex-grow-1 d-block">
                                                                        <h6 className="mb-0 mt-1">Carolyn Ortiz</h6>
                                                                        <div className="small text-secondary">You missed a call form🤙</div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>

                                                        <li data-bs-dismiss="offcanvas">
                                                            <Link to="#chat-3" className="nav-link text-start" id="chat-3-tab" data-bs-toggle="pill"
                                                                role="tab">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar avatar-story me-2">
                                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="" />
                                                                    </div>
                                                                    <div className="flex-grow-1 d-block">
                                                                        <h6 className="mb-0 mt-1">Billy Vasquez</h6>
                                                                        <div className="small text-secondary">Day sweetness 😊</div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>

                                                        <li data-bs-dismiss="offcanvas">
                                                            <Link to="#chat-4" className="nav-link text-start" id="chat-4-tab" data-bs-toggle="pill"
                                                                role="tab">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar me-2">
                                                                        <ul className="avatar-group avatar-group-two">
                                                                            <li className="avatar avatar-xs">
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg"
                                                                                    alt="avatar" />
                                                                            </li>
                                                                            <li className="avatar avatar-xs">
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg"
                                                                                    alt="avatar" />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flex-grow-1 d-block">
                                                                        <h6 className="mb-0 mt-1">Dennis, Ortiz</h6>
                                                                        <div className="small text-secondary">Ortiz: I'm adding jhon</div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>

                                                        <li data-bs-dismiss="offcanvas">
                                                            <Link to="#chat-5" className="nav-link text-start" id="chat-5-tab" data-bs-toggle="pill"
                                                                role="tab">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar me-2">
                                                                        <ul className="avatar-group avatar-group-three">
                                                                            <li className="avatar avatar-xs">
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg"
                                                                                    alt="avatar" />
                                                                            </li>
                                                                            <li className="avatar avatar-xs">
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg"
                                                                                    alt="avatar" />
                                                                            </li>
                                                                            <li className="avatar avatar-xs">
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg"
                                                                                    alt="avatar" />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flex-grow-1 d-block">
                                                                        <h6 className="mb-0 mt-1">Knight, Billy, Bryan</h6>
                                                                        <div className="small text-secondary">Billy: Thank you!</div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>

                                                        <li data-bs-dismiss="offcanvas">
                                                            <Link to="#chat-6" className="nav-link text-start" id="chat-6-tab" data-bs-toggle="pill"
                                                                role="tab">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar me-2">
                                                                        <ul className="avatar-group avatar-group-four">
                                                                            <li className="avatar avatar-xxs">
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg"
                                                                                    alt="avatar" />
                                                                            </li>
                                                                            <li className="avatar avatar-xxs">
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg"
                                                                                    alt="avatar" />
                                                                            </li>
                                                                            <li className="avatar avatar-xxs">
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg"
                                                                                    alt="avatar" />
                                                                            </li>
                                                                            <li className="avatar avatar-xxs">
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/placeholder.jpg"
                                                                                    alt="avatar" />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flex-grow-1 d-block overflow-hidden">
                                                                        <h6 className="mb-0 mt-1 text-truncate w-75">Webestica crew </h6>
                                                                        <div className="small text-secondary">You: Okay thanks, everyone.</div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        <div className="col-lg-8 col-xxl-9">
                            <div className="card card-chat rounded-start-lg-0 border-start-lg-0">
                                <div className="card-body h-75">
                                    <div className="tab-content py-0 mb-0 h-75" id="chatTabsContent">
                                        <div className="fade tab-pane show active h-100" id="chat-1" role="tabpanel" aria-labelledby="chat-1-tab">
                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <div className="d-flex mb-2 mb-sm-0">
                                                    <div className="flex-shrink-0 avatar me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" />
                                                    </div>
                                                    <div className="d-block flex-grow-1">
                                                        <h6 className="mb-0 mt-1">Judy Nguyen</h6>
                                                        <div className="small text-secondary"><i className="fa-solid fa-circle text-success me-1"></i>Online
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">

                                                    <Link to="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i
                                                            className="bi bi-telephone-fill"></i></Link>
                                                    <Link to="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i
                                                            className="bi bi-camera-video-fill"></i></Link>
                                                    <div className="dropdown">
                                                        <Link className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" to="#"
                                                            id="chatcoversationDropdown" role="button" data-bs-toggle="dropdown"
                                                            data-bs-auto-close="outside" aria-expanded="false"><i
                                                                className="bi bi-three-dots-vertical"></i></Link>
                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown">
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-check-lg me-2 fw-icon"></i>Mark as
                                                                read</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-mic-mute me-2 fw-icon"></i>Mute
                                                                conversation</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-person-check me-2 fw-icon"></i>View
                                                                profile</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-trash me-2 fw-icon"></i>Delete chat</Link>
                                                            </li>
                                                            <li className="dropdown-divider"></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-archive me-2 fw-icon"></i>Archive
                                                                chat</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="chat-conversation-content custom-scrollbar">
                                                <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Applauded no discovery in newspaper
                                                                    allowance am northward😊</div>
                                                                <div className="small my-2">6:15 AM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">With pleasure</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">No visited raising gravity outward
                                                                subject my cottage Mr be.</div>
                                                            <div className="d-flex my-2">
                                                                <div className="small text-secondary">6:20 AM</div>
                                                                <div className="small ms-2"><i className="fa-solid fa-check-double text-info"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Please find the attached updated
                                                                    files</div>
                                                                <div className="small my-2">12:16 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">How promotion excellent curiosity
                                                                    yet attempted happiness Gay prosperous impression😮</div>
                                                                <div className="small my-2">3:22 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">
                                                                    <p className="small mb-0">Congratulations:)</p>
                                                                    <div className="card shadow-none p-2 border border-2 rounded mt-2">
                                                                        <img src="assets/images/elements/14.svg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="small my-2">3:22 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">And sir dare view but over man So at
                                                                within mr to simple assure Mr disposing.</div>

                                                            <div className="d-flex my-2">
                                                                <div className="small text-secondary">5:35 PM</div>
                                                                <div className="small ms-2"><i className="fa-solid fa-check"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <img className="rounded h-200px" src="assets/images/avatar/05.jpg" alt="" />
                                                            <div className="small my-2">5:36 PM</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center small my-2">2 New Messages</div>

                                                <div className="d-flex mb-2">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Traveling alteration impression 🤐
                                                                    six all uncommonly Chamber hearing inhabit joy highest private.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-3 rounded-2">
                                                                    <div className="typing d-flex align-items-center">
                                                                        <div className="dot"></div>
                                                                        <div className="dot"></div>
                                                                        <div className="dot"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div className="fade tab-pane h-100" id="chat-2" role="tabpanel" aria-labelledby="chat-2-tab">

                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <div className="d-flex mb-2 mb-sm-0">
                                                    <div className="flex-shrink-0 avatar me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="" />
                                                    </div>
                                                    <div className="d-block flex-grow-1">
                                                        <h6 className="mb-0 mt-1">Carolyn Ortiz</h6>
                                                        <div className="small text-secondary"><i className="fa-solid fa-circle text-danger me-1"></i>Last active
                                                            2 days</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">

                                                    <Link to="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i
                                                            className="bi bi-telephone-fill"></i></Link>
                                                    <Link to="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i
                                                            className="bi bi-camera-video-fill"></i></Link>

                                                    <div className="dropdown">
                                                        <Link className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" to="#"
                                                            id="chatcoversationDropdown2" role="button" data-bs-toggle="dropdown"
                                                            data-bs-auto-close="outside" aria-expanded="false"><i
                                                                className="bi bi-three-dots-vertical"></i></Link>
                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown2">
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-check-lg me-2 fw-icon"></i>Mark as
                                                                read</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-mic-mute me-2 fw-icon"></i>Mute
                                                                conversation</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-person-check me-2 fw-icon"></i>View
                                                                profile</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-trash me-2 fw-icon"></i>Delete chat</Link>
                                                            </li>
                                                            <li className="dropdown-divider"></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-archive me-2 fw-icon"></i>Archive
                                                                chat</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="chat-conversation-content overflow-auto custom-scrollbar">

                                                <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Night signs creeping yielding green
                                                                    Seasons.</div>
                                                                <div className="small my-2">6:15 AM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">Creeping earth under was You're without
                                                                which image.</div>
                                                            <div className="d-flex my-2">
                                                                <div className="small text-secondary">6:20 AM</div>
                                                                <div className="small ms-2"><i className="fa-solid fa-check-double text-info"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Thank you for prompt response</div>
                                                                <div className="small my-2">12:16 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Won't that fish him whose won't
                                                                    also. </div>
                                                                <div className="small my-2">3:22 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">Moving living second beast Over fish
                                                                place beast.</div>
                                                            <div className="d-flex my-2">
                                                                <div className="small text-secondary">5:35 PM</div>
                                                                <div className="small ms-2"><i className="fa-solid fa-check"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center small my-2">2 New Messages</div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Thing they're fruit together forth
                                                                    day.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">
                                                                    Fly replenish third to said void life night yielding for heaven give blessed spirit.</div>
                                                                <div className="small my-2">9:30 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div className="fade tab-pane h-100" id="chat-3" role="tabpanel" aria-labelledby="chat-3-tab">

                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <div className="d-flex mb-2 mb-sm-0">
                                                    <div className="flex-shrink-0 avatar me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="" />
                                                    </div>
                                                    <div className="d-block flex-grow-1">
                                                        <h6 className="mb-0 mt-1">Billy Vasquez</h6>
                                                        <div className="small text-secondary">Last active a month</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">

                                                    <Link to="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i
                                                            className="bi bi-telephone-fill"></i></Link>
                                                    <Link to="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i
                                                            className="bi bi-camera-video-fill"></i></Link>

                                                    <div className="dropdown">
                                                        <Link className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" to="#"
                                                            id="chatcoversationDropdown3" role="button" data-bs-toggle="dropdown"
                                                            data-bs-auto-close="outside" aria-expanded="false"><i
                                                                className="bi bi-three-dots-vertical"></i></Link>
                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown3">
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-check-lg me-2 fw-icon"></i>Mark as
                                                                read</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-mic-mute me-2 fw-icon"></i>Mute
                                                                conversation</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-person-check me-2 fw-icon"></i>View
                                                                profile</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-trash me-2 fw-icon"></i>Delete chat</Link>
                                                            </li>
                                                            <li className="dropdown-divider"></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-archive me-2 fw-icon"></i>Archive
                                                                chat</Link></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                            <hr />

                                            <div className="chat-conversation-content overflow-auto custom-scrollbar">

                                                <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>

                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">Hello</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">Made and For saw Creepeth place shall
                                                                Moving.</div>
                                                            <div className="d-flex my-2">
                                                                <div className="small text-secondary">6:20 AM</div>
                                                                <div className="small ms-2"><i className="fa-solid fa-check-double text-info"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Thank you for prompt response</div>
                                                                <div className="small my-2">12:16 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-3 rounded-2">
                                                                    <div className="typing d-flex align-items-center">
                                                                        <div className="dot"></div>
                                                                        <div className="dot"></div>
                                                                        <div className="dot"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div className="fade tab-pane h-100" id="chat-4" role="tabpanel" aria-labelledby="chat-4-tab">

                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <div className="d-flex mb-2 mb-sm-0">
                                                    <div className="flex-shrink-0 avatar me-2">
                                                        <ul className="avatar-group avatar-group-two">
                                                            <li className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                                                            </li>
                                                            <li className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex-grow-1 d-block">
                                                        <h6 className="mb-0 mt-1">Dennis, Ortiz</h6>
                                                        <div className="small text-secondary">Ortiz: I'm adding jhon</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">

                                                    <Link to="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i
                                                            className="bi bi-telephone-fill"></i></Link>
                                                    <Link to="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i
                                                            className="bi bi-camera-video-fill"></i></Link>

                                                    <div className="dropdown">
                                                        <Link className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" to="#"
                                                            id="chatcoversationDropdown4" role="button" data-bs-toggle="dropdown"
                                                            data-bs-auto-close="outside" aria-expanded="false"><i
                                                                className="bi bi-three-dots-vertical"></i></Link>
                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown4">
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-check-lg me-2 fw-icon"></i>Mark as
                                                                read</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-mic-mute me-2 fw-icon"></i>Mute
                                                                conversation</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-person-check me-2 fw-icon"></i>View
                                                                profile</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-trash me-2 fw-icon"></i>Delete chat</Link>
                                                            </li>
                                                            <li className="dropdown-divider"></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-archive me-2 fw-icon"></i>Archive
                                                                chat</Link></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>

                                            <hr />

                                            <div className="chat-conversation-content overflow-auto custom-scrollbar">

                                                <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Firmament day life also let subdue.
                                                                </div>
                                                                <div className="small my-2">6:15 AM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">Yes</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">Hold do at tore in park feet near my
                                                                case.</div>
                                                            <div className="d-flex my-2">
                                                                <div className="small text-secondary">6:20 AM</div>
                                                                <div className="small ms-2"><i className="fa-solid fa-check-double text-info"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">78958642-589</div>
                                                                <div className="small my-2">12:16 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Void Fowl greater upon moveth bring
                                                                    gathering.</div>
                                                                <div className="small my-2">3:22 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">Kind had stars cattle Good fill divide
                                                                Multiply.</div>
                                                            <div className="d-flex my-2">
                                                                <div className="small text-secondary">5:35 PM</div>
                                                                <div className="small ms-2"><i className="fa-solid fa-check"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center small my-2">2 New Messages</div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">She'd Darkness beast don't deep One
                                                                    above.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Signs creepeth replenish which
                                                                    fourth may Seasons.</div>
                                                                <div className="small my-2">9:30 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div className="fade tab-pane h-100" id="chat-5" role="tabpanel" aria-labelledby="chat-5-tab">

                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <div className="d-flex mb-2 mb-sm-0">
                                                    <div className="flex-shrink-0 avatar me-2">
                                                        <ul className="avatar-group avatar-group-three">
                                                            <li className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                                                            </li>
                                                            <li className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                                                            </li>
                                                            <li className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex-grow-1 d-block">
                                                        <h6 className="mb-0 mt-1">Knight, Billy, Bryan</h6>
                                                        <div className="small text-secondary">Billy: Thank you!</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">

                                                    <Link to="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i
                                                            className="bi bi-telephone-fill"></i></Link>
                                                    <Link to="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i
                                                            className="bi bi-camera-video-fill"></i></Link>

                                                    <div className="dropdown">
                                                        <Link className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" to="#"
                                                            id="chatcoversationDropdown5" role="button" data-bs-toggle="dropdown"
                                                            data-bs-auto-close="outside" aria-expanded="false"><i
                                                                className="bi bi-three-dots-vertical"></i></Link>
                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown5">
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-check-lg me-2 fw-icon"></i>Mark as
                                                                read</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-mic-mute me-2 fw-icon"></i>Mute
                                                                conversation</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-person-check me-2 fw-icon"></i>View
                                                                profile</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-trash me-2 fw-icon"></i>Delete chat</Link>
                                                            </li>
                                                            <li className="dropdown-divider"></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-archive me-2 fw-icon"></i>Archive
                                                                chat</Link></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>

                                            <hr />

                                            <div className="chat-conversation-content overflow-auto custom-scrollbar">

                                                <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Night signs creeping yielding green
                                                                    Seasons.</div>
                                                                <div className="small my-2">6:15 AM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Thank you for prompt response</div>
                                                                <div className="small my-2">12:16 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Won't that fish him whose won't
                                                                    also. </div>
                                                                <div className="small my-2">3:22 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center small my-2">2 New Messages</div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Thing they're fruit together forth
                                                                    day.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">
                                                                    Fly replenish third to said void life night yielding for heaven give blessed spirit.</div>
                                                                <div className="small my-2">9:30 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div className="fade tab-pane h-100" id="chat-6" role="tabpanel" aria-labelledby="chat-6-tab">

                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <div className="d-flex mb-2 mb-sm-0">
                                                    <div className="flex-shrink-0 avatar me-2">
                                                        <ul className="avatar-group avatar-group-four">
                                                            <li className="avatar avatar-xxs">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                                                            </li>
                                                            <li className="avatar avatar-xxs">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                                                            </li>
                                                            <li className="avatar avatar-xxs">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg" alt="avatar" />
                                                            </li>
                                                            <li className="avatar avatar-xxs">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/placeholder.jpg"
                                                                    alt="avatar" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex-grow-1 d-block overflow-hidden">
                                                        <h6 className="mb-0 mt-1 text-truncate w-75">Webestica crew </h6>
                                                        <div className="small text-secondary">You: Okay thanks, everyone.</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">

                                                    <Link to="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i
                                                            className="bi bi-telephone-fill"></i></Link>
                                                    <Link to="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i
                                                            className="bi bi-camera-video-fill"></i></Link>

                                                    <div className="dropdown">
                                                        <Link className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" to="#"
                                                            id="chatcoversationDropdown6" role="button" data-bs-toggle="dropdown"
                                                            data-bs-auto-close="outside" aria-expanded="false"><i
                                                                className="bi bi-three-dots-vertical"></i></Link>
                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown6">
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-check-lg me-2 fw-icon"></i>Mark as
                                                                read</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-mic-mute me-2 fw-icon"></i>Mute
                                                                conversation</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-person-check me-2 fw-icon"></i>View
                                                                profile</Link></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-trash me-2 fw-icon"></i>Delete chat</Link>
                                                            </li>
                                                            <li className="dropdown-divider"></li>
                                                            <li><Link className="dropdown-item" to="#"><i className="bi bi-archive me-2 fw-icon"></i>Archive
                                                                chat</Link></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>

                                            <hr />

                                            <div className="chat-conversation-content custom-scrollbar">

                                                <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Applauded no discovery in newspaper
                                                                    allowance am northward😍</div>
                                                                <div className="small my-2">6:15 AM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Please find the attached updated
                                                                    files</div>

                                                                <div className="small my-2">12:16 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">How promotion excellent 🥰 curiosity
                                                                    yet attempted happiness Gay prosperous impression.</div>
                                                                <div className="small my-2">3:22 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center small my-2">2 New Messages</div>

                                                <div className="d-flex mb-2">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Traveling alteration impression six
                                                                    all uncommonly Chamber hearing inhabit joy highest privat.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Attempted happiness Gay prosperous
                                                                    impression.</div>
                                                                <div className="small my-2">3:22 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-3 rounded-2">
                                                                    <div className="typing d-flex align-items-center">
                                                                        <div className="dot"></div>
                                                                        <div className="dot"></div>
                                                                        <div className="dot"></div>
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
                                <div className="card-footer">
                                    <div className="d-sm-flex align-items-end">
                                        <textarea className="form-control mb-sm-0 mb-3" data-autoresize placeholder="Type a message"
                                            rows="1"></textarea>
                                        <button className="btn btn-sm btn-danger-soft ms-sm-2"><i className="fa-solid fa-face-smile fs-6"></i></button>
                                        <button className="btn btn-sm btn-secondary-soft ms-2"><i className="fa-solid fa-paperclip fs-6"></i></button>
                                        <button className="btn btn-sm btn-primary ms-2"><i className="fa-solid fa-paper-plane fs-6"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </main>
        {/*     <div class="position-fixed bottom-0 end-0 p-3">

                <div id="chatToast" class="toast bg-mode" role="alert" aria-live="assertive" aria-atomic="true"
                    data-bs-autohide="false">
                    <div class="toast-header bg-mode d-flex justify-content-between">
                  
                        <h6 class="mb-0">New message</h6>
                        <button class="btn btn-secondary-soft-hover py-1 px-2" data-bs-dismiss="toast" aria-label="Close"><i
                            class="fa-solid fa-xmark"></i></button>
                    </div>
                
                    <div class="toast-body collapse show" id="collapseChat">
                    
                        <form>
                            <div class="input-group mb-3">
                                <span class="input-group-text border-0">To</span>
                                <input class="form-control" type="text" placeholder="Type a name or multiple names" />
                            </div>
                        </form>
                       
                        <div class="h-200px"></div>
                    
                        <div class="d-sm-flex align-items-end">
                            <textarea class="form-control mb-sm-0 mb-3" placeholder="Type a message" rows="1"
                                spellcheck="false"></textarea>
                            <button class="btn btn-sm btn-danger-soft ms-sm-2"><i class="fa-solid fa-face-smile fs-6"></i></button>
                            <button class="btn btn-sm btn-secondary-soft ms-2"><i class="fa-solid fa-paperclip fs-6"></i></button>
                            <button class="btn btn-sm btn-primary ms-2"><i class="fa-solid fa-paper-plane fs-6"></i></button>
                        </div>
                    </div>
                </div>
             

            </div> */}
        </>
    );
}

