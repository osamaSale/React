import React from 'react';
import { Link } from 'react-router-dom';
export const CreatePage = () => {
    return (
        <main>

            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center d-lg-none">
                            <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSideNavbar" aria-controls="offcanvasSideNavbar">
                                <span className="btn btn-primary"><i className="fa-solid fa-sliders-h"></i></span>
                                <span className="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
                            </button>
                        </div>

                        <nav className="navbar navbar-expand-lg mx-0">
                            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasSideNavbar">

                                <div className="offcanvas-header">
                                    <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>


                                <div className="offcanvas-body d-block px-2 px-lg-0">

                                    <div className="card overflow-hidden">

                                        <div className="h-50px" style={{ backgroundImage: 'url(assets/images/bg/01.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>

                                        <div className="card-body pt-0">
                                            <div className="text-center">

                                                <div className="avatar avatar-lg mt-n5 mb-3">
                                                    <Link to="#!"><img className="avatar-img rounded border border-white border-3" src="assets/images/avatar/07.jpg" alt="" /></Link>
                                                </div>

                                                <h5 className="mb-0"> <Link to="#!">Sam Lanson </Link> </h5>
                                                <small>Web Developer at Webestica</small>
                                                <p className="mt-3">I'd love to change the world, but they won’t give me the source code.</p>


                                                <div className="hstack gap-2 gap-xl-3 justify-content-center">

                                                    <div>
                                                        <h6 className="mb-0">256</h6>
                                                        <small>Post</small>
                                                    </div>

                                                    <div className="vr"></div>

                                                    <div>
                                                        <h6 className="mb-0">2.5K</h6>
                                                        <small>Followers</small>
                                                    </div>

                                                    <div className="vr"></div>

                                                    <div>
                                                        <h6 className="mb-0">365</h6>
                                                        <small>Following</small>
                                                    </div>
                                                </div>

                                            </div>


                                            <hr />

                                            <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="my-profile.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/home-outline-filled.svg" alt="" /><span>Feed </span></Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="my-profile-connections.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/person-outline-filled.svg" alt="" /><span>Connections </span></Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="blog.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/earth-outline-filled.svg" alt="" /><span>Latest News </span></Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="events.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/calendar-outline-filled.svg" alt="" /><span>Events </span></Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="groups.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/chat-outline-filled.svg" alt="" /><span>Groups </span></Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="notifications.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/notification-outlined-filled.svg" alt="" /><span>Notifications </span></Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="settings.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/cog-outline-filled.svg" alt="" /><span>Settings </span></Link>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="card-footer text-center py-2">
                                            <Link className="btn btn-link btn-sm" to="my-profile.html">View Profile </Link>
                                        </div>
                                    </div>

                                    <ul className="nav small mt-4 justify-content-center lh-1">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="my-profile-about.html">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="settings.html">Settings</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" target="_blank" to="https://support.webestica.com/login">Support </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" target="_blank" to="docs/index.html">Docs </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="help.html">Help</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="privacy-and-terms.html">Privacy & terms</Link>
                                        </li>
                                    </ul>

                                    <p className="small text-center mt-1">©2023 <Link className="text-reset" target="_blank" to="https://www.webestica.com/"> Webestica </Link></p>
                                </div>
                            </div>
                        </nav>

                    </div>

                    <div className="col-md-8 col-lg-6 vstack gap-4">

                        <div className="card">

                            <div className="card-header border-0 pb-0">
                                <h1 className="h4 card-title mb-0">Create a page</h1>
                            </div>

                            <div className="card-body">
                                <form className="row g-3">

                                    <div className="col-12">
                                        <label className="form-label">Page name</label>
                                        <input type="text" className="form-control" placeholder="Page name (Required)" />
                                        <small>Name that describes what the page is about.</small>
                                    </div>

                                    <div className="col-sm-6 col-lg-4">
                                        <label className="form-label">Display name</label>
                                        <input type="text" className="form-control" placeholder="Display name (Required)" />
                                    </div>

                                    <div className="col-sm-6 col-lg-4">
                                        <label className="form-label">Email</label>
                                        <input type="text" className="form-control" placeholder="Email (Required)" />
                                    </div>

                                    <div className="col-sm-6 col-lg-4">
                                        <label className="form-label">Category (required)</label>
                                        <select className="form-select js-choice" data-search-enabled="true">
                                            <option value="PV">Comedy</option>
                                            <option value="PB">Technology</option>
                                            <option value="PV">Education</option>
                                            <option value="PV">Entertainment</option>
                                            <option value="PV">Hotel</option>
                                            <option value="PV">Travel</option>
                                        </select>
                                    </div>

                                    <div className="col-sm-6">
                                        <label className="form-label">Website URL</label>
                                        <input type="text" className="form-control" placeholder="https://www.webestica.com" />
                                    </div>

                                    <div className="col-lg-6">
                                        <label className="form-label">Phone number</label>
                                        <input type="text" className="form-control" placeholder="Phone number (Required)" />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label">About page</label>
                                        <textarea className="form-control" rows="3" placeholder="Description (Required)"></textarea>
                                        <small>Character limit: 300</small>
                                    </div>


                                    <hr />


                                    <div className="col-12">
                                        <h5 className="card-title mb-0">Social Links</h5>
                                    </div>

                                    <div className="col-sm-6">
                                        <label className="form-label">Facebook</label>
                                        <div className="input-group">
                                            <span className="input-group-text border-0"> <i className="bi bi-facebook text-facebook"></i> </span>
                                            <input type="text" className="form-control" placeholder="https://www.facebook.com" />
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label className="form-label">Twitter</label>
                                        <div className="input-group">
                                            <span className="input-group-text border-0"> <i className="bi bi-twitter text-twitter"></i> </span>
                                            <input type="text" className="form-control" placeholder="https://www.twitter.com" />
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label className="form-label">Instagram</label>
                                        <div className="input-group">
                                            <span className="input-group-text border-0"> <i className="bi bi-instagram text-instagram"></i> </span>
                                            <input type="text" className="form-control" placeholder="https://www.instagram.com" />
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label className="form-label">Pinterest</label>
                                        <div className="input-group">
                                            <span className="input-group-text border-0"> <i className="bi bi-pinterest text-pinterest"></i> </span>
                                            <input type="text" className="form-control" placeholder="https://www.pinterest.com" />
                                        </div>
                                    </div>

                                    <div className="col-12 text-end">
                                        <button type="submit" className="btn btn-primary mb-0">Create a page</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </main>
    );
}

