import React from 'react';
import { Link } from 'react-router-dom';
export const NavbarVertical = ({toggleState , settoggleState }) => {
    return (
        <div>
            <nav className="navbar-vertical-nav d-none d-xl-block">
                <div className="navbar-vertical border-end">
                    <div className="px-4 py-5">
                        <Link className="navbar-brand">
                            <img src="assets/images/logo/freshcart-logo.svg" alt="" />
                        </Link>
                    </div>
                    <div className="navbar-vertical-content flex-grow-1" data-simplebar="">
                        <ul className="navbar-nav flex-column" id="sideNavbar">
                            <li className="nav-item ">
                                <Link className={toggleState === 1 ? "nav-link active" : "nav-link"} onClick={() => settoggleState(1)}>
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-house"></i></span>
                                        <span className="nav-link-text">Dashboard</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item mt-6 mb-3">
                                <span className="nav-label">Store Managements</span>
                            </li>
                            <li className="nav-item ">
                                <Link className={toggleState === 2 ? "nav-link active" : "nav-link"} onClick={() => settoggleState(2)}>
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-cart"></i></span>
                                        <span className="nav-link-text">Products</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className={toggleState === 3 ? "nav-link active" : "nav-link"} onClick={() => settoggleState(1)}>
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-list-task"></i></span>
                                        <span className="nav-link-text">Categories</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse"
                                    data-bs-target="#navCategoriesOrders" aria-expanded="false"
                                    aria-controls="navCategoriesOrders">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-bag"></i></span>
                                        <span className="nav-link-text">Orders</span>
                                    </div>
                                </Link>
                                <div id="navCategoriesOrders" className="collapse " data-bs-parent="#sideNavbar">
                                    <ul className="nav flex-column">
                                        <li className="nav-item ">
                                            <Link className="nav-link" to="../dashboard/order-list.html">
                                                List
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link" to="../dashboard/order-single.html">
                                                Single
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item ">
                                <Link className="nav-link " to="../dashboard/vendor-grid.html">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-shop"></i></span>
                                        <span className="nav-link-text">Sellers / Vendors</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="../dashboard/customers.html">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-people"></i></span>
                                        <span className="nav-link-text">Customers</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="../dashboard/reviews.html">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-star"></i></span>
                                        <span className="nav-link-text">Reviews</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  collapsed " to="#" data-bs-toggle="collapse"
                                    data-bs-target="#navMenuLevelFirst" aria-expanded="false"
                                    aria-controls="navMenuLevelFirst">
                                    <span className="nav-link-icon"><i className=" bi bi-arrow-90deg-down"></i></span>
                                    <span className="nav-link-text">Menu Level</span>
                                </Link>
                                <div id="navMenuLevelFirst" className="collapse " data-bs-parent="#sideNavbar">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link className="nav-link " to="#" data-bs-toggle="collapse"
                                                data-bs-target="#navMenuLevelSecond1" aria-expanded="false"
                                                aria-controls="navMenuLevelSecond1">
                                                Two Level
                                            </Link>
                                            <div id="navMenuLevelSecond1" className="collapse" data-bs-parent="#navMenuLevel">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <Link className="nav-link " to="#">NavItem 1  </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link " to="#">NavItem 2  </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link  collapsed  " to="#" data-bs-toggle="collapse"
                                                data-bs-target="#navMenuLevelThreeOne1" aria-expanded="false"
                                                aria-controls="navMenuLevelThreeOne1">
                                                Three Level
                                            </Link>
                                            <div id="navMenuLevelThreeOne1" className="collapse "
                                                data-bs-parent="#navMenuLevel">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <Link className="nav-link  collapsed " to="#" data-bs-toggle="collapse"
                                                            data-bs-target="#navMenuLevelThreeTwo" aria-expanded="false"
                                                            aria-controls="navMenuLevelThreeTwo">
                                                            NavItem 1
                                                        </Link>
                                                        <div id="navMenuLevelThreeTwo" className="collapse collapse "
                                                            data-bs-parent="#navMenuLevelThree">
                                                            <ul className="nav flex-column">
                                                                <li className="nav-item">
                                                                    <Link className="nav-link " to="#">
                                                                        NavChild Item 1
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link " to="#">Nav
                                                            Item 2  </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item mt-6 mb-3">
                                <span className="nav-label">Our Apps</span>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link disabled" to="#!">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-apple"></i></span>
                                        <span className="nav-link-text">Apple Store</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link disabled" to="#!">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-google-play"></i></span>
                                        <span className="nav-link-text">Google Play Store</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <nav className="navbar-vertical-nav offcanvas offcanvas-start navbar-offcanvac" tabindex="-1" id="offcanvasExample">
                <div className="navbar-vertical">
                    <div className="px-4 py-5 d-flex justify-content-between align-items-center">
                        <Link to="../index.html" className="navbar-brand">
                            <img src="assets/images/logo/freshcart-logo.svg" alt="" />
                        </Link>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="navbar-vertical-content flex-grow-1" data-simplebar="">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-item ">
                                <Link className={toggleState === 1 ? "nav-link active" : "nav-link"} onClick={() => settoggleState(1)}>
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-house"></i></span>
                                        <span>Dashboard</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item mt-6 mb-3">
                                <span className="nav-label">Store Managements</span>
                            </li>
                            <li className="nav-item ">
                                <Link className={toggleState === 2 ? "nav-link active" : "nav-link"} onClick={() => settoggleState(2)}>
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-cart"></i></span>
                                        <span className="nav-link-text">Products</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="../dashboard/categories.html">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-list-task"></i></span>
                                        <span className="nav-link-text">Categories</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link   collapsed " to="#" data-bs-toggle="collapse"
                                    data-bs-target="#navOrders" aria-expanded="false" aria-controls="navOrders">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-bag"></i></span>
                                        <span className="nav-link-text">Orders</span>
                                    </div>
                                </Link>
                                <div id="navOrders" className="collapse " data-bs-parent="#sideNavbar">
                                    <ul className="nav flex-column">
                                        <li className="nav-item ">
                                            <Link className="nav-link ">
                                                List
                                            </Link>
                                        </li>

                                        <li className="nav-item ">
                                            <Link className="nav-link ">
                                                Single

                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="../dashboard/vendor-grid.html">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-shop"></i></span>
                                        <span className="nav-link-text">Sellers / Vendors</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="../dashboard/customers.html">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-people"></i></span>
                                        <span className="nav-link-text">Customers</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="../dashboard/reviews.html">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-star"></i></span>
                                        <span className="nav-link-text">Reviews</span>
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-item mt-6 mb-3">
                                <span className="nav-label">Our Apps</span>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link disabled" to="#!">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-apple"></i></span>
                                        <span className="nav-link-text">Apple Store</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link disabled" to="#!">
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon"> <i className="bi bi-google-play"></i></span>
                                        <span className="nav-link-text">Google Play Store</span>
                                    </div>
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    );
}

