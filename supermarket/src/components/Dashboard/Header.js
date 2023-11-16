import React from 'react';
import { Link } from 'react-router-dom';
export const Header = () => {
    let element = document.body
    function checkMode() {
        element.dataset.bsTheme = element.dataset.bsTheme === "light" ? "dark" : "light"
        localStorage.setItem("mode", element.dataset.bsTheme)
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-glass border-bottom">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <div className="d-flex align-items-center">
                            <Link className="text-inherit d-block d-xl-none me-4" data-bs-toggle="offcanvas"
                                to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="bi bi-text-indent-right" viewBox="0 0 16 16">
                                    <path
                                        d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </Link>
                            <h4 className='mt-2'>Welcome</h4>
                        </div>
                        <div>
                            <ul className="list-unstyled d-flex align-items-center mb-0 ms-5 ms-lg-0">
                                <li className="dropdown-center">
                                    <Link className="position-relative btn-icon btn-ghost-secondary btn rounded-circle"
                                        onClick={checkMode}>
                                        <i className="bi bi-moon-stars"></i>
                                    </Link>
                                </li>
                                <li className="dropdown-center ">
                                    <Link className="position-relative btn-icon btn-ghost-secondary btn rounded-circle" href="#"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-bell fs-5"></i>
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2 ms-n2">
                                            2
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg p-0 border-0 ">
                                        <div className="border-bottom p-5 d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5 className="mb-1">Notifications</h5>
                                                <p className="mb-0 small">You have 2 unread messages</p>
                                            </div>
                                            <Link href="#!" className="text-muted">
                                            </Link><Link href="#" className="btn btn-ghost-secondary btn-icon rounded-circle"
                                                data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                data-bs-title="Mark all as read">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    fill="currentColor" className="bi bi-check2-all text-success"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z">
                                                    </path>
                                                    <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z">
                                                    </path>
                                                </svg>
                                            </Link>

                                        </div>
                                        <div data-simplebar="init" style={{ height: "250px" }}>
                                            <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                                                <div className="simplebar-height-auto-observer-wrapper">
                                                    <div className="simplebar-height-auto-observer"></div>
                                                </div>
                                                <div className="simplebar-mask">
                                                    <div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                                                        <div className="simplebar-content-wrapper" tabindex="0" role="region"
                                                            aria-label="scrollable content"
                                                            style={{ height: "auto", overflow: "hidden;" }}>
                                                            <div className="simplebar-content" style={{ padding: "0px" }}>

                                                                <ul
                                                                    className="list-group list-group-flush notification-list-scroll fs-6">

                                                                    <li
                                                                        className="list-group-item px-5 py-4 list-group-item-action active">
                                                                        <Link href="#!" className="text-muted">
                                                                            <div className="d-flex">
                                                                                <img src="../assets/images/avatar/avatar-1.jpg"
                                                                                    alt=""
                                                                                    className="avatar avatar-md rounded-circle " />
                                                                                <div className="ms-4">
                                                                                    <p className="mb-1">
                                                                                        <span className="text-dark">Your order
                                                                                            is placed</span> waiting for
                                                                                        shipping
                                                                                    </p>
                                                                                    <span><svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="12" height="12"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-clock text-muted"
                                                                                        viewBox="0 0 16 16">
                                                                                        <path
                                                                                            d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                                                                        </path>
                                                                                        <path
                                                                                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                                                                        </path>
                                                                                    </svg><small className="ms-2">1 minute
                                                                                        ago</small></span>
                                                                                </div>
                                                                            </div>
                                                                        </Link>



                                                                    </li>
                                                                    <li
                                                                        className="list-group-item  px-5 py-4 list-group-item-action">
                                                                        <Link href="#!" className="text-muted">
                                                                            <div className="d-flex">
                                                                                <img src="../assets/images/avatar/avatar-5.jpg"
                                                                                    alt=""
                                                                                    className="avatar avatar-md rounded-circle " />
                                                                                <div className="ms-4">
                                                                                    <p className="mb-1">
                                                                                        <span className="text-dark">Jitu Chauhan
                                                                                        </span> answered to your pending
                                                                                        order list with notes
                                                                                    </p>
                                                                                    <span><svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="12" height="12"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-clock text-muted"
                                                                                        viewBox="0 0 16 16">
                                                                                        <path
                                                                                            d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                                                                        </path>
                                                                                        <path
                                                                                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                                                                        </path>
                                                                                    </svg><small className="ms-2">2 days
                                                                                        ago</small></span>
                                                                                </div>
                                                                            </div>
                                                                        </Link>



                                                                    </li>
                                                                    <li
                                                                        className="list-group-item px-5 py-4 list-group-item-action">
                                                                        <Link href="#!" className="text-muted">
                                                                            <div className="d-flex">
                                                                                <img src="../assets/images/avatar/avatar-2.jpg"
                                                                                    alt=""
                                                                                    className="avatar avatar-md rounded-circle " />
                                                                                <div className="ms-4">
                                                                                    <p className="mb-1">
                                                                                        <span className="text-dark">You have new
                                                                                            messages</span> 2 unread
                                                                                        messages
                                                                                    </p>
                                                                                    <span><svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="12" height="12"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-clock text-muted"
                                                                                        viewBox="0 0 16 16">
                                                                                        <path
                                                                                            d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                                                                        </path>
                                                                                        <path
                                                                                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                                                                        </path>
                                                                                    </svg><small className="ms-2">3 days
                                                                                        ago</small></span>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="simplebar-placeholder" style={{ width: "0px", height: "0px" }}></div>
                                            </div>
                                            <div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden;" }}>
                                                <div className="simplebar-scrollbar" style={{ width: "0px", display: "none" }}></div>
                                            </div>
                                            <div className="simplebar-track simplebar-vertical" style={{ visibility: "hidden;" }}>
                                                <div className="simplebar-scrollbar" style={{ height: "0px", display: "none" }}></div>
                                            </div>
                                        </div>
                                        <div className="border-top px-5 py-4 text-center">
                                            <Link href="#!" className=" ">
                                                View All
                                            </Link>
                                        </div>
                                    </div>

                                </li>
                                <li className="dropdown ms-4">
                                    <Link href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="../assets/images/avatar/avatar-1.jpg" alt=""
                                            className="avatar avatar-md rounded-circle" />
                                    </Link>

                                    <div className="dropdown-menu dropdown-menu-end p-0">
                                        <div className="lh-1 px-5 py-4 border-bottom">
                                            <h5 className="mb-1 h6">FreshCart Admin</h5>
                                            <small>admindemo@email.com</small>
                                        </div>
                                        <ul className="list-unstyled px-2 py-3">
                                            <li>
                                                <Link className="dropdown-item" href="#!">
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="#!">
                                                    Profile
                                                </Link>
                                            </li>


                                            <li>
                                                <Link className="dropdown-item" href="#!">

                                                    Settings
                                                </Link>
                                            </li>

                                        </ul>
                                        <div className="border-top px-5 py-3">

                                            <Link href="#">Log Out  </Link>
                                        </div>
                                    </div>

                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

