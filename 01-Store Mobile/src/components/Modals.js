import React from 'react';
import { Link } from 'react-router-dom';

export const Modals = () => {
    return (
        <div>
            {/* Navbar */}
            <div className=" position-fixed bottom-0 w-100  z-1 shadow-lg d-block d-lg-none text-center">
                <div className="d-flex align-items-center ">

                    <div className="w-25 icon-hover py-4">
                        <button className="navbar-toggler collapsed d-lg-none" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                className="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                                <path
                                    d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>
                    </div>


                    <div className=" w-25 ms-2 py-4  icon-hover">
                        <Link to="#" className="text-inherit" /* onClick={checkMode} */>
                            <div className="text-center">
                                <div className="position-relative d-inline-block">
                                    <i className="bi bi-moon fs-4"></i>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="w-25 ms-2 py-4  icon-hover">
                        <Link className="text-inherit" data-bs-toggle="modal" data-bs-target="#userModal">
                            <div className="text-center">
                                <div className="">
                                    <i className="bi bi-person-circle fs-4"></i>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div className="w-25 ms-2 py-4  icon-hover">
                        <Link className="text-inherit">
                            <div className="text-center">
                                <div className="">
                                    <i className="bi bi-archive fs-4"></i>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div className="w-25 ms-2 py-4  icon-hover">
                        <Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" to="#offcanvasExample" role="button"
                            aria-controls="offcanvasRight" className="text-inherit">
                            <div className="text-center">
                                <div className="">
                                    <i className="bi bi-cart2 fs-4"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-25 ms-2 py-4 icon-hover">
                        <Link className="text-inherit" >
                            <i className="bi bi-bookmark-heart fs-4"></i>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

