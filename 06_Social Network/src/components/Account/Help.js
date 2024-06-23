import React from 'react';
import { Link } from 'react-router-dom';
export const Help = () => {
    return (
        <div>
            <main>
                <div className="container">
                    <div className="row align-items-center pt-5 pb-5 pb-lg-3">
                        <div className="col-md-3">

                            <figure className="m-0 d-none d-md-block">
                                <img src='assets/images/help/help2.svg' alt='' />
                            </figure>
                        </div>

                        <div className="col-md-6 text-center">

                            <h1>Hi Sam, we're here to help.</h1>
                            <p className="mb-4">Search here to get answers to your questions.</p>

                            <form className="rounded position-relative">
                                <input className="form-control ps-5" type="search" placeholder="Search..." aria-label="Search" />
                                <button className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y" type="submit"><i className="bi bi-search fs-5 ps-1"> </i></button>
                            </form>

                        </div>
                        <div className="col-md-3">

                            <figure className="m-0 d-none d-md-block">
                                <img src='assets/images/help/help1.svg' alt='' />
                            </figure>

                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="card card-body p-4">
                                <div className="text-center mb-4">
                                    <h4>Popular questions</h4>
                                </div>

                                <div className="list-group list-group-horizontal gap-2 flex-wrap justify-content-center mb-0 border-0">
                                    <Link className="btn btn-light btn-sm fw-light" to="/help-details"> How can we help?</Link>
                                    <Link className="btn btn-light btn-sm fw-light" to="/help-details"> How to edit my Profile?</Link>
                                    <Link className="btn btn-light btn-sm fw-light" to="/help-details"> How much should I offer the sellers? </Link>
                                    <Link className="btn btn-light btn-sm fw-light" to="/help-details"> Installation Guide? </Link>
                                    <Link className="btn btn-light btn-sm fw-light" to="/help-details"> Additional Options and Services? </Link>
                                    <Link className="btn btn-light btn-sm fw-light" to="/help-details"> What's are the difference between a social?</Link>
                                    <Link className="btn btn-primary-soft btn-sm fw-light" to="#!">View all question</Link>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="py-5">

                        <h4 className="text-center mb-4">Recommended topics</h4>

                        <div className="row g-4">

                            <div className="col-md-4">

                                <div className="card h-100">

                                    <div className="card-header pb-0 border-0">
                                        <i className="bi bi-emoji-smile fs-1 text-success"></i>
                                        <h5 className="card-title mb-0 mt-2">Get started </h5>
                                    </div>

                                    <div className="card-body">
                                        <ul className="nav flex-column">
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Gulp and Customization</Link></li>
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Color Scheme and Logo Settings</Link></li>
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Dark mode, RTL Version and Lazy Load</Link></li>
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Sources, Credits and Changelog</Link></li>
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Updates and Support</Link></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="card h-100">

                                    <div className="card-header pb-0 border-0">
                                        <i className="bi bi-layers fs-1 text-warning"></i>
                                        <h5 className="card-title mb-0 mt-2">Account Setup:</h5>
                                    </div>

                                    <div className="card-body">
                                        <ul className="nav flex-column">
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Connecting to your Account</Link></li>
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Edit your profile information</Link></li>
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Connecting to other Social Media Accounts</Link></li>
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Adding your profile picture</Link></li>
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Describing your store</Link></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="card h-100">

                                    <div className="card-header pb-0 border-0">
                                        <i className="bi bi-info-circle fs-1 text-primary"></i>
                                        <h5 className="card-title mb-0 mt-2">Other Topics </h5>
                                    </div>

                                    <div className="card-body">
                                        <ul className="nav flex-column">
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Security & Privacy</Link></li>
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Author, Publisher & Admin Guides</Link></li>
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Pricing plans</Link></li>
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Sales Tax & Regulatory Fees</Link></li>
                                            <li className="nav-item"><Link className="nav-link d-flex" to="/help-details"><i className="fa-solid fa-angle-right text-primary pt-1 fa-fw me-2"></i>Promotions & Deals</Link></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="pb-5">

                        <h4 className="text-center mb-4">Popular articles</h4>

                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="vstack gap-4">

                                    <div className="card card-body">
                                        <div className="d-md-flex justify-content-between align-items-start">

                                            <div className="mb-2 mb-md-0">
                                                <h5 className="mb-1"> <Link to="#!">Get started with node.js</Link></h5>
                                                <p className="small mb-0">Satisfied conveying a dependent contented he gentleman agreeable do be.</p>
                                            </div>

                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">

                                                <input type="radio" className="btn-check" name="article1" id="articleup1" />
                                                <label className="btn btn-outline-light btn-sm mb-0" htmlFor="articleup1"><i className="fa-solid fa-thumbs-up me-1"></i> 457</label>

                                                <input type="radio" className="btn-check" name="article1" id="articledown1" />
                                                <label className="btn btn-outline-light btn-sm mb-0" htmlFor="articledown1"> 01 <i className="fa-solid fa-thumbs-down ms-1"></i></label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card card-body">
                                        <div className="d-md-flex justify-content-between align-items-start">

                                            <div className="mb-2 mb-md-0">
                                                <h5 className="mb-1"> <Link to="#!">Upgrade Gulp 3 to Gulp 4 the gulpfile.js workflow</Link></h5>
                                                <p className="small mb-0">Required his you put the outlived answered position. </p>
                                            </div>

                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">

                                                <input type="radio" className="btn-check" name="article2" id="articleup2" />
                                                <label className="btn btn-outline-light btn-sm mb-0" htmlFor="articleup2"><i className="fa-solid fa-thumbs-up me-1"></i> 256</label>

                                                <input type="radio" className="btn-check" name="article2" id="articledown2" />
                                                <label className="btn btn-outline-light btn-sm mb-0" htmlFor="articledown2"> 02 <i className="fa-solid fa-thumbs-down ms-1"></i></label>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="card card-body">
                                        <div className="d-md-flex justify-content-between align-items-start">

                                            <div className="mb-2 mb-md-0">
                                                <h5 className="mb-1"> <Link to="#!">6 Reasons to use Bootstrap 5 for better UI development</Link></h5>
                                                <p className="small mb-0">As it so contrasted oh estimating instrument. Size like body some one had. </p>
                                            </div>

                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" >

                                                <input type="radio" className="btn-check" name="article3" id="articleup3" />
                                                <label className="btn btn-outline-light btn-sm mb-0" htmlFor="articleup3"><i className="fa-solid fa-thumbs-up me-1"></i> 675</label>

                                                <input type="radio" className="btn-check" name="article3" id="articledown3" />
                                                <label className="btn btn-outline-light btn-sm mb-0" htmlFor="articledown3"> 10 <i className="fa-solid fa-thumbs-down ms-1"></i></label>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="card card-body">
                                        <div className="d-md-flex justify-content-between align-items-start">

                                            <div className="mb-3 mb-md-0">
                                                <h5 className="mb-1"> <Link to="#!">A beginner's guide to browser-sync</Link></h5>
                                                <p className="small mb-0">Started several mistake joy say painful removed reached end.  </p>
                                            </div>

                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">

                                                <input type="radio" className="btn-check" name="article4" id="articleup4" />
                                                <label className="btn btn-outline-light btn-sm mb-0" htmlFor="articleup4"><i className="fa-solid fa-thumbs-up me-1"></i> 325</label>

                                                <input type="radio" className="btn-check" name="article4" id="articledown4" />
                                                <label className="btn btn-outline-light btn-sm mb-0" htmlFor="articledown4"> 06 <i className="fa-solid fa-thumbs-down ms-1"></i></label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <Link to="#!" role="button" className="btn btn-loader btn-primary-soft mb-0" data-bs-toggle="button" aria-pressed="true">
                                            <span className="load-text"> Load more </span>
                                            <div className="load-icon">
                                                <div className="spinner-grow spinner-grow-sm" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </main>
         {/*    <footer className="bg-mode py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <ul className="nav justify-content-center justify-content-md-start lh-1">
                                <li className="nav-item">
                                    <Link className="nav-link" to="my-profile-about.html">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" target="_blank" to="https://support.webestica.com/login">Support </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" target="_blank" to="docs/index.html">Docs </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="privacy-and-terms.html">Privacy & terms</Link>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-6">

                            <p className="text-center text-md-end mb-0">©2023 <Link className="text-body" target="_blank" to="https://www.webestica.com"> Webestica </Link>All rights reserved.</p>

                        </div>
                    </div>
                </div>
            </footer> */}
        </div>
    );
}

