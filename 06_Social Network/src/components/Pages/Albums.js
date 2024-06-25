import React from 'react';
import { Link } from 'react-router-dom';
export const Albums = () => {
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
                                                    <Link className="nav-link" to="/my-profile"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/home-outline-filled.svg" alt="" /><span>Feed </span></Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/my-profile-connections"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/person-outline-filled.svg" alt="" /><span>Connections </span></Link>
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
                                            <Link className="btn btn-link btn-sm" to="/my-profile">View Profile </Link>
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

                            <div className="card-header d-sm-flex text-center align-items-center justify-content-between border-0 pb-0">
                                <h1 className="card-title h4">Photos</h1>

                                <Link className="btn btn-primary-soft" to="#" data-bs-toggle="modal" data-bs-target="#modalCreateAlbum"> <i className="fa-solid fa-plus pe-1"></i> Create album</Link>
                            </div>

                            <div className="card-body">

                                <ul className="nav nav-tabs nav-bottom-line justify-content-center justify-content-md-start">
                                    <li className="nav-item"> <Link className="nav-link active" data-bs-toggle="tab" to="#tab-1"> Photos of you </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" to="#tab-2"> Your photos </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" to="#tab-3"> Recently added </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" to="#tab-4"> Family </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link" data-bs-toggle="tab" to="#tab-5"> Albums </Link> </li>
                                </ul>


                                <div className="tab-content mb-0 pb-0">


                                    <div className="tab-pane fade show active" id="tab-1">
                                        <div className="row g-3">

                                            <div className="col-6 col-lg-3">
                                                <div className="border border-2 border-dashed h-100 rounded text-center d-flex align-items-center justify-content-center position-relative">
                                                    <Link className="stretched-link" to="#!">
                                                        <i className="fa-solid fa-camera-retro fs-1"></i>
                                                        <h6 className="mt-2">Add photo</h6>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="col-6 col-lg-3 position-relative">
                                                <div className="position-absolute bottom-0 end-0">

                                                    <div className="dropdown mb-2 me-3">
                                                        <Link to="#" className="icon-sm bg-primary text-white rounded-circle" id="photoActionEdit" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-pencil-fill"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="photoActionEdit">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-tag fa-fw pe-1"></i> Remove Tag</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Make Profile Picture</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-bounding-box fa-fw pe-1"></i> Make Cover Photo</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report photo</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <Link to="assets/images/albums/01.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                                    <img className="rounded img-fluid" src="assets/images/albums/01.jpg" alt="" />
                                                </Link>

                                                <div className="glightbox-desc custom-desc2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">

                                                            <div className="avatar me-2">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                            </div>

                                                            <div>
                                                                <div className="nav nav-divider">
                                                                    <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                                                                    <span className="nav-item small"> 2hr</span>
                                                                </div>
                                                                <p className="mb-0 small">Web Developer at Webestica</p>
                                                            </div>
                                                        </div>

                                                        <div className="dropdown">
                                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-three-dots"></i>
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                                                    <ul className="nav nav-stack py-3 small">
                                                        <li className="nav-item">
                                                            <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                                        </li>
                                                        <li className="nav-item dropdown ms-auto">
                                                            <Link className="nav-link mb-0" to="#" id="cardShareAction" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                                            </ul>
                                                        </li>

                                                    </ul>

                                                    <div className="d-flex mb-3">

                                                        <div className="avatar avatar-xs me-2">
                                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                        </div>

                                                        <form className="position-relative w-100">
                                                            <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                                        </form>
                                                    </div>

                                                    <ul className="comment-wrap list-unstyled ">

                                                        <li className="comment-item">
                                                            <div className="d-flex">

                                                                <div className="avatar avatar-xs">
                                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                                                                </div>
                                                                <div className="ms-2">

                                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                                        <div className="d-flex justify-content-center">
                                                                            <div className="me-2">
                                                                                <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                                                <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                                                            </div>
                                                                            <small>5hr</small>
                                                                        </div>
                                                                    </div>

                                                                    <ul className="nav nav-divider py-2 small">
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Like (3)</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Reply</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> View 5 replies</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>

                                            </div>

                                            <div className="col-6 col-lg-3 position-relative">
                                                <div className="position-absolute bottom-0 end-0">

                                                    <div className="dropdown mb-2 me-3">
                                                        <Link to="#" className="icon-sm bg-primary text-white rounded-circle" id="photoActionEdit2" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-pencil-fill"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="photoActionEdit2">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-tag fa-fw pe-1"></i> Remove Tag</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Make Profile Picture</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-bounding-box fa-fw pe-1"></i> Make Cover Photo</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report photo</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <Link to="assets/images/albums/02.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                                    <img className="rounded img-fluid" src="assets/images/albums/02.jpg" alt="" />
                                                </Link>

                                                <div className="glightbox-desc custom-desc2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">

                                                            <div className="avatar me-2">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                            </div>

                                                            <div>
                                                                <div className="nav nav-divider">
                                                                    <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                                                                    <span className="nav-item small"> 2hr</span>
                                                                </div>
                                                                <p className="mb-0 small">Web Developer at Webestica</p>
                                                            </div>
                                                        </div>

                                                        <div className="dropdown">
                                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-three-dots"></i>
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction2">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                                                    <ul className="nav nav-stack py-3 small">
                                                        <li className="nav-item">
                                                            <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                                        </li>

                                                        <li className="nav-item dropdown ms-auto">
                                                            <Link className="nav-link mb-0" to="#" id="cardShareAction2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction2">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                                            </ul>
                                                        </li>

                                                    </ul>

                                                    <div className="d-flex mb-3">

                                                        <div className="avatar avatar-xs me-2">
                                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                        </div>

                                                        <form className="position-relative w-100">
                                                            <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                                        </form>
                                                    </div>

                                                    <ul className="comment-wrap list-unstyled ">

                                                        <li className="comment-item">
                                                            <div className="d-flex">

                                                                <div className="avatar avatar-xs">
                                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                                                                </div>
                                                                <div className="ms-2">

                                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                                        <div className="d-flex justify-content-center">
                                                                            <div className="me-2">
                                                                                <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                                                <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                                                            </div>
                                                                            <small>5hr</small>
                                                                        </div>
                                                                    </div>

                                                                    <ul className="nav nav-divider py-2 small">
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Like (3)</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Reply</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> View 5 replies</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>

                                            </div>

                                            <div className="col-6 col-lg-3 position-relative">
                                                <div className="position-absolute bottom-0 end-0">

                                                    <div className="dropdown mb-2 me-3">
                                                        <Link to="#" className="icon-sm bg-primary text-white rounded-circle" id="photoActionEdit3" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-pencil-fill"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="photoActionEdit3">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-tag fa-fw pe-1"></i> Remove Tag</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Make Profile Picture</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-bounding-box fa-fw pe-1"></i> Make Cover Photo</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report photo</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <Link to="assets/images/albums/03.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                                    <img className="rounded img-fluid" src="assets/images/albums/03.jpg" alt="" />
                                                </Link>

                                                <div className="glightbox-desc custom-desc2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">

                                                            <div className="avatar me-2">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                            </div>

                                                            <div>
                                                                <div className="nav nav-divider">
                                                                    <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                                                                    <span className="nav-item small"> 2hr</span>
                                                                </div>
                                                                <p className="mb-0 small">Web Developer at Webestica</p>
                                                            </div>
                                                        </div>

                                                        <div className="dropdown">
                                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction3" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-three-dots"></i>
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction3">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                                                    <ul className="nav nav-stack py-3 small">
                                                        <li className="nav-item">
                                                            <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                                        </li>

                                                        <li className="nav-item dropdown ms-auto">
                                                            <Link className="nav-link mb-0" to="#" id="cardShareAction3" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction3">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                                            </ul>
                                                        </li>

                                                    </ul>

                                                    <div className="d-flex mb-3">

                                                        <div className="avatar avatar-xs me-2">
                                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                        </div>

                                                        <form className="position-relative w-100">
                                                            <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                                        </form>
                                                    </div>

                                                    <ul className="comment-wrap list-unstyled ">

                                                        <li className="comment-item">
                                                            <div className="d-flex">

                                                                <div className="avatar avatar-xs">
                                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                                                                </div>
                                                                <div className="ms-2">

                                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                                        <div className="d-flex justify-content-center">
                                                                            <div className="me-2">
                                                                                <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                                                <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                                                            </div>
                                                                            <small>5hr</small>
                                                                        </div>
                                                                    </div>

                                                                    <ul className="nav nav-divider py-2 small">
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Like (3)</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Reply</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> View 5 replies</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>

                                            </div>

                                            <div className="col-6 col-lg-3 position-relative">
                                                <div className="position-absolute bottom-0 end-0">

                                                    <div className="dropdown mb-2 me-3">
                                                        <Link to="#" className="icon-sm bg-primary text-white rounded-circle" id="photoActionEdit4" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-pencil-fill"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="photoActionEdit4">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-tag fa-fw pe-1"></i> Remove Tag</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Make Profile Picture</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-bounding-box fa-fw pe-1"></i> Make Cover Photo</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report photo</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <Link to="assets/images/albums/04.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                                    <img className="rounded img-fluid" src="assets/images/albums/04.jpg" alt="" />
                                                </Link>

                                                <div className="glightbox-desc custom-desc2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">

                                                            <div className="avatar me-2">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                            </div>

                                                            <div>
                                                                <div className="nav nav-divider">
                                                                    <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                                                                    <span className="nav-item small"> 2hr</span>
                                                                </div>
                                                                <p className="mb-0 small">Web Developer at Webestica</p>
                                                            </div>
                                                        </div>

                                                        <div className="dropdown">
                                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction4" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-three-dots"></i>
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction4">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                                                    <ul className="nav nav-stack py-3 small">
                                                        <li className="nav-item">
                                                            <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                                        </li>

                                                        <li className="nav-item dropdown ms-auto">
                                                            <Link className="nav-link mb-0" to="#" id="cardShareAction4" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction4">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                                            </ul>
                                                        </li>

                                                    </ul>

                                                    <div className="d-flex mb-3">

                                                        <div className="avatar avatar-xs me-2">
                                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                        </div>

                                                        <form className="position-relative w-100">
                                                            <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                                        </form>
                                                    </div>

                                                    <ul className="comment-wrap list-unstyled ">

                                                        <li className="comment-item">
                                                            <div className="d-flex">

                                                                <div className="avatar avatar-xs">
                                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                                                                </div>
                                                                <div className="ms-2">

                                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                                        <div className="d-flex justify-content-center">
                                                                            <div className="me-2">
                                                                                <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                                                <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                                                            </div>
                                                                            <small>5hr</small>
                                                                        </div>
                                                                    </div>

                                                                    <ul className="nav nav-divider py-2 small">
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Like (3)</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Reply</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> View 5 replies</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>

                                            </div>

                                            <div className="col-6 col-lg-3 position-relative">
                                                <div className="position-absolute bottom-0 end-0">

                                                    <div className="dropdown mb-2 me-3">
                                                        <Link to="#" className="icon-sm bg-primary text-white rounded-circle" id="photoActionEdit5" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-pencil-fill"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="photoActionEdit5">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-tag fa-fw pe-1"></i> Remove Tag</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Make Profile Picture</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-bounding-box fa-fw pe-1"></i> Make Cover Photo</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report photo</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <Link to="assets/images/albums/05.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                                    <img className="rounded img-fluid" src="assets/images/albums/05.jpg" alt="" />
                                                </Link>

                                                <div className="glightbox-desc custom-desc2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">

                                                            <div className="avatar me-2">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                            </div>

                                                            <div>
                                                                <div className="nav nav-divider">
                                                                    <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                                                                    <span className="nav-item small"> 2hr</span>
                                                                </div>
                                                                <p className="mb-0 small">Web Developer at Webestica</p>
                                                            </div>
                                                        </div>

                                                        <div className="dropdown">
                                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction5" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-three-dots"></i>
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction5">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                                                    <ul className="nav nav-stack py-3 small">
                                                        <li className="nav-item">
                                                            <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                                        </li>

                                                        <li className="nav-item dropdown ms-auto">
                                                            <Link className="nav-link mb-0" to="#" id="cardShareAction5" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction5">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                                            </ul>
                                                        </li>

                                                    </ul>

                                                    <div className="d-flex mb-3">

                                                        <div className="avatar avatar-xs me-2">
                                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                        </div>

                                                        <form className="position-relative w-100">
                                                            <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                                        </form>
                                                    </div>

                                                    <ul className="comment-wrap list-unstyled ">

                                                        <li className="comment-item">
                                                            <div className="d-flex">

                                                                <div className="avatar avatar-xs">
                                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                                                                </div>
                                                                <div className="ms-2">

                                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                                        <div className="d-flex justify-content-center">
                                                                            <div className="me-2">
                                                                                <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                                                <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                                                            </div>
                                                                            <small>5hr</small>
                                                                        </div>
                                                                    </div>

                                                                    <ul className="nav nav-divider py-2 small">
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Like (3)</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Reply</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> View 5 replies</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>

                                            </div>

                                            <div className="col-6 col-lg-3 position-relative">
                                                <div className="position-absolute bottom-0 end-0">

                                                    <div className="dropdown mb-2 me-3">
                                                        <Link to="#" className="icon-sm bg-primary text-white rounded-circle" id="photoActionEdit6" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-pencil-fill"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="photoActionEdit6">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-tag fa-fw pe-1"></i> Remove Tag</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Make Profile Picture</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-bounding-box fa-fw pe-1"></i> Make Cover Photo</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report photo</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <Link to="assets/images/albums/06.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                                    <img className="rounded img-fluid" src="assets/images/albums/06.jpg" alt="" />
                                                </Link>

                                                <div className="glightbox-desc custom-desc2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">

                                                            <div className="avatar me-2">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                            </div>

                                                            <div>
                                                                <div className="nav nav-divider">
                                                                    <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                                                                    <span className="nav-item small"> 2hr</span>
                                                                </div>
                                                                <p className="mb-0 small">Web Developer at Webestica</p>
                                                            </div>
                                                        </div>

                                                        <div className="dropdown">
                                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction6" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-three-dots"></i>
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction6">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                                                    <ul className="nav nav-stack py-3 small">
                                                        <li className="nav-item">
                                                            <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                                        </li>

                                                        <li className="nav-item dropdown ms-auto">
                                                            <Link className="nav-link mb-0" to="#" id="cardShareAction6" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction6">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                                            </ul>
                                                        </li>

                                                    </ul>

                                                    <div className="d-flex mb-3">

                                                        <div className="avatar avatar-xs me-2">
                                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                        </div>

                                                        <form className="position-relative w-100">
                                                            <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                                        </form>
                                                    </div>

                                                    <ul className="comment-wrap list-unstyled ">

                                                        <li className="comment-item">
                                                            <div className="d-flex">

                                                                <div className="avatar avatar-xs">
                                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                                                                </div>
                                                                <div className="ms-2">

                                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                                        <div className="d-flex justify-content-center">
                                                                            <div className="me-2">
                                                                                <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                                                <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                                                            </div>
                                                                            <small>5hr</small>
                                                                        </div>
                                                                    </div>

                                                                    <ul className="nav nav-divider py-2 small">
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Like (3)</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Reply</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> View 5 replies</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab-2">
                                        <div className="row g-3">


                                            <div className="col-6 col-lg-3">
                                                <div className="border border-2 border-dashed h-100 rounded text-center d-flex align-items-center justify-content-center position-relative">
                                                    <Link className="stretched-link" to="#!">
                                                        <i className="fa-solid fa-camera-retro fs-1"></i>
                                                        <h6 className="mt-2">Add photo</h6>
                                                    </Link>
                                                </div>
                                            </div>



                                            <div className="col-6 col-lg-3 position-relative">
                                                <div className="position-absolute bottom-0 end-0">

                                                    <div className="dropdown mb-2 me-3">
                                                        <Link to="#" className="icon-sm bg-primary text-white rounded-circle" id="photoActionEdit7" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-pencil-fill"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="photoActionEdit7">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-tag fa-fw pe-1"></i> Remove Tag</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Make Profile Picture</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-bounding-box fa-fw pe-1"></i> Make Cover Photo</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report photo</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <Link to="assets/images/albums/01.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                                    <img className="rounded img-fluid" src="assets/images/albums/01.jpg" alt="" />
                                                </Link>

                                                <div className="glightbox-desc custom-desc2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">

                                                            <div className="avatar me-2">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                            </div>

                                                            <div>
                                                                <div className="nav nav-divider">
                                                                    <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                                                                    <span className="nav-item small"> 2hr</span>
                                                                </div>
                                                                <p className="mb-0 small">Web Developer at Webestica</p>
                                                            </div>
                                                        </div>

                                                        <div className="dropdown">
                                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction7" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-three-dots"></i>
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction7">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                                                    <ul className="nav nav-stack py-3 small">
                                                        <li className="nav-item">
                                                            <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                                        </li>

                                                        <li className="nav-item dropdown ms-auto">
                                                            <Link className="nav-link mb-0" to="#" id="cardShareAction7" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction7">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                                            </ul>
                                                        </li>

                                                    </ul>

                                                    <div className="d-flex mb-3">

                                                        <div className="avatar avatar-xs me-2">
                                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                        </div>

                                                        <form className="position-relative w-100">
                                                            <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                                        </form>
                                                    </div>

                                                    <ul className="comment-wrap list-unstyled ">

                                                        <li className="comment-item">
                                                            <div className="d-flex">

                                                                <div className="avatar avatar-xs">
                                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                                                                </div>
                                                                <div className="ms-2">

                                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                                        <div className="d-flex justify-content-center">
                                                                            <div className="me-2">
                                                                                <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                                                <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                                                            </div>
                                                                            <small>5hr</small>
                                                                        </div>
                                                                    </div>

                                                                    <ul className="nav nav-divider py-2 small">
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Like (3)</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Reply</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> View 5 replies</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>

                                            </div>

                                            <div className="col-6 col-lg-3 position-relative">
                                                <div className="position-absolute bottom-0 end-0">

                                                    <div className="dropdown mb-2 me-3">
                                                        <Link to="#" className="icon-sm bg-primary text-white rounded-circle" id="postActionEdit2" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-pencil-fill"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="postActionEdit2">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-tag fa-fw pe-1"></i> Remove Tag</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Make Profile Picture</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-bounding-box fa-fw pe-1"></i> Make Cover Photo</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report photo</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <Link to="assets/images/albums/02.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                                    <img className="rounded img-fluid" src="assets/images/albums/02.jpg" alt="" />
                                                </Link>

                                                <div className="glightbox-desc custom-desc2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">

                                                            <div className="avatar me-2">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                            </div>

                                                            <div>
                                                                <div className="nav nav-divider">
                                                                    <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                                                                    <span className="nav-item small"> 2hr</span>
                                                                </div>
                                                                <p className="mb-0 small">Web Developer at Webestica</p>
                                                            </div>
                                                        </div>

                                                        <div className="dropdown">
                                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction8" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-three-dots"></i>
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction8">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                                                    <ul className="nav nav-stack py-3 small">
                                                        <li className="nav-item">
                                                            <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                                        </li>

                                                        <li className="nav-item dropdown ms-auto">
                                                            <Link className="nav-link mb-0" to="#" id="cardShareAction8" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction8">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                                            </ul>
                                                        </li>

                                                    </ul>

                                                    <div className="d-flex mb-3">

                                                        <div className="avatar avatar-xs me-2">
                                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                        </div>

                                                        <form className="position-relative w-100">
                                                            <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                                        </form>
                                                    </div>

                                                    <ul className="comment-wrap list-unstyled ">

                                                        <li className="comment-item">
                                                            <div className="d-flex">

                                                                <div className="avatar avatar-xs">
                                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                                                                </div>
                                                                <div className="ms-2">

                                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                                        <div className="d-flex justify-content-center">
                                                                            <div className="me-2">
                                                                                <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                                                <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                                                            </div>
                                                                            <small>5hr</small>
                                                                        </div>
                                                                    </div>

                                                                    <ul className="nav nav-divider py-2 small">
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Like (3)</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Reply</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> View 5 replies</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>

                                            </div>

                                            <div className="col-6 col-lg-3 position-relative">
                                                <div className="position-absolute bottom-0 end-0">

                                                    <div className="dropdown mb-2 me-3">
                                                        <Link to="#" className="icon-sm bg-primary text-white rounded-circle" id="photoActionEdit8" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-pencil-fill"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="photoActionEdit8">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-tag fa-fw pe-1"></i> Remove Tag</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Make Profile Picture</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-bounding-box fa-fw pe-1"></i> Make Cover Photo</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report photo</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <Link to="assets/images/albums/03.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                                    <img className="rounded img-fluid" src="assets/images/albums/03.jpg" alt="" />
                                                </Link>

                                                <div className="glightbox-desc custom-desc2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">

                                                            <div className="avatar me-2">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                            </div>

                                                            <div>
                                                                <div className="nav nav-divider">
                                                                    <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                                                                    <span className="nav-item small"> 2hr</span>
                                                                </div>
                                                                <p className="mb-0 small">Web Developer at Webestica</p>
                                                            </div>
                                                        </div>

                                                        <div className="dropdown">
                                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-three-dots"></i>
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction9">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                                                    <ul className="nav nav-stack py-3 small">
                                                        <li className="nav-item">
                                                            <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                                        </li>

                                                        <li className="nav-item dropdown ms-auto">
                                                            <Link className="nav-link mb-0" to="#" id="cardShareAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction9">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                                            </ul>
                                                        </li>

                                                    </ul>

                                                    <div className="d-flex mb-3">

                                                        <div className="avatar avatar-xs me-2">
                                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                        </div>

                                                        <form className="position-relative w-100">
                                                            <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                                        </form>
                                                    </div>

                                                    <ul className="comment-wrap list-unstyled ">

                                                        <li className="comment-item">
                                                            <div className="d-flex">

                                                                <div className="avatar avatar-xs">
                                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                                                                </div>
                                                                <div className="ms-2">

                                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                                        <div className="d-flex justify-content-center">
                                                                            <div className="me-2">
                                                                                <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                                                <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                                                            </div>
                                                                            <small>5hr</small>
                                                                        </div>
                                                                    </div>

                                                                    <ul className="nav nav-divider py-2 small">
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Like (3)</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Reply</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> View 5 replies</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>

                                            </div>

                                        </div>
                                    </div>



                                    <div className="tab-pane fade" id="tab-3">
                                        <div className="row g-3">


                                            <div className="col-6 col-lg-3">
                                                <div className="border border-2 border-dashed h-100 rounded text-center d-flex align-items-center justify-content-center position-relative">
                                                    <Link className="stretched-link" to="#!">
                                                        <i className="fa-solid fa-camera-retro fs-1"></i>
                                                        <h6 className="mt-2">Add photo</h6>
                                                    </Link>
                                                </div>
                                            </div>



                                            <div className="col-6 col-lg-3 position-relative">
                                                <div className="position-absolute bottom-0 end-0">

                                                    <div className="dropdown mb-2 me-3">
                                                        <Link to="#" className="icon-sm bg-primary text-white rounded-circle" id="photoActionEdit9" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-pencil-fill"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="photoActionEdit9">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-tag fa-fw pe-1"></i> Remove Tag</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Make Profile Picture</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-bounding-box fa-fw pe-1"></i> Make Cover Photo</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report photo</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <Link to="assets/images/albums/01.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                                    <img className="rounded img-fluid" src="assets/images/albums/01.jpg" alt="" />
                                                </Link>

                                                <div className="glightbox-desc custom-desc2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">

                                                            <div className="avatar me-2">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                            </div>

                                                            <div>
                                                                <div className="nav nav-divider">
                                                                    <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                                                                    <span className="nav-item small"> 2hr</span>
                                                                </div>
                                                                <p className="mb-0 small">Web Developer at Webestica</p>
                                                            </div>
                                                        </div>

                                                        <div className="dropdown">
                                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction10" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-three-dots"></i>
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction10">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                                                    <ul className="nav nav-stack py-3 small">
                                                        <li className="nav-item">
                                                            <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                                        </li>

                                                        <li className="nav-item dropdown ms-auto">
                                                            <Link className="nav-link mb-0" to="#" id="cardShareAction10" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction10">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                                            </ul>
                                                        </li>

                                                    </ul>

                                                    <div className="d-flex mb-3">

                                                        <div className="avatar avatar-xs me-2">
                                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                        </div>

                                                        <form className="position-relative w-100">
                                                            <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                                        </form>
                                                    </div>

                                                    <ul className="comment-wrap list-unstyled ">

                                                        <li className="comment-item">
                                                            <div className="d-flex">

                                                                <div className="avatar avatar-xs">
                                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                                                                </div>
                                                                <div className="ms-2">

                                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                                        <div className="d-flex justify-content-center">
                                                                            <div className="me-2">
                                                                                <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                                                <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                                                            </div>
                                                                            <small>5hr</small>
                                                                        </div>
                                                                    </div>

                                                                    <ul className="nav nav-divider py-2 small">
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Like (3)</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Reply</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> View 5 replies</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>

                                            </div>

                                            <div className="col-6 col-lg-3 position-relative">
                                                <div className="position-absolute bottom-0 end-0">

                                                    <div className="dropdown mb-2 me-3">
                                                        <Link to="#" className="icon-sm bg-primary text-white rounded-circle" id="photoActionEdit10" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-pencil-fill"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="photoActionEdit10">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-tag fa-fw pe-1"></i> Remove Tag</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Make Profile Picture</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-bounding-box fa-fw pe-1"></i> Make Cover Photo</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report photo</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <Link to="assets/images/albums/02.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                                    <img className="rounded img-fluid" src="assets/images/albums/02.jpg" alt="" />
                                                </Link>

                                                <div className="glightbox-desc custom-desc2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">

                                                            <div className="avatar me-2">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                            </div>

                                                            <div>
                                                                <div className="nav nav-divider">
                                                                    <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                                                                    <span className="nav-item small"> 2hr</span>
                                                                </div>
                                                                <p className="mb-0 small">Web Developer at Webestica</p>
                                                            </div>
                                                        </div>

                                                        <div className="dropdown">
                                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction11" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-three-dots"></i>
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction11">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                                                    <ul className="nav nav-stack py-3 small">
                                                        <li className="nav-item">
                                                            <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                                        </li>

                                                        <li className="nav-item dropdown ms-auto">
                                                            <Link className="nav-link mb-0" to="#" id="cardShareAction11" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction11">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                                            </ul>
                                                        </li>

                                                    </ul>

                                                    <div className="d-flex mb-3">

                                                        <div className="avatar avatar-xs me-2">
                                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                        </div>

                                                        <form className="position-relative w-100">
                                                            <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                                        </form>
                                                    </div>

                                                    <ul className="comment-wrap list-unstyled ">

                                                        <li className="comment-item">
                                                            <div className="d-flex">

                                                                <div className="avatar avatar-xs">
                                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                                                                </div>
                                                                <div className="ms-2">

                                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                                        <div className="d-flex justify-content-center">
                                                                            <div className="me-2">
                                                                                <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                                                <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                                                            </div>
                                                                            <small>5hr</small>
                                                                        </div>
                                                                    </div>

                                                                    <ul className="nav nav-divider py-2 small">
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Like (3)</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Reply</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> View 5 replies</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>

                                            </div>

                                            <div className="col-6 col-lg-3 position-relative">
                                                <div className="position-absolute bottom-0 end-0">

                                                    <div className="dropdown mb-2 me-3">
                                                        <Link to="#" className="icon-sm bg-primary text-white rounded-circle" id="photoActionEdit12" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-pencil-fill"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="photoActionEdit12">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-tag fa-fw pe-1"></i> Remove Tag</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person fa-fw pe-1"></i> Make Profile Picture</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-bounding-box fa-fw pe-1"></i> Make Cover Photo</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report photo</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <Link to="assets/images/albums/03.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                                    <img className="rounded img-fluid" src="assets/images/albums/03.jpg" alt="" />
                                                </Link>

                                                <div className="glightbox-desc custom-desc2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">

                                                            <div className="avatar me-2">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                            </div>

                                                            <div>
                                                                <div className="nav nav-divider">
                                                                    <h6 className="nav-item card-title mb-0">Lori Ferguson</h6>
                                                                    <span className="nav-item small"> 2hr</span>
                                                                </div>
                                                                <p className="mb-0 small">Web Developer at Webestica</p>
                                                            </div>
                                                        </div>

                                                        <div className="dropdown">
                                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction12" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-three-dots"></i>
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction12">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <p className="mt-3 mb-0">I'm so privileged to be involved in the @bootstrap hiring process! <Link to="#">#internship #inclusivebusiness</Link> <Link to="#">#internship</Link> <Link to="#"> #hiring</Link> <Link to="#">#apply</Link> </p>
                                                    <ul className="nav nav-stack py-3 small">
                                                        <li className="nav-item">
                                                            <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                                        </li>

                                                        <li className="nav-item dropdown ms-auto">
                                                            <Link className="nav-link mb-0" to="#" id="cardShareAction12" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                                                            </Link>

                                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction12">
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                                <li><hr className="dropdown-divider" /></li>
                                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                                            </ul>
                                                        </li>

                                                    </ul>

                                                    <div className="d-flex mb-3">

                                                        <div className="avatar avatar-xs me-2">
                                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                                        </div>

                                                        <form className="position-relative w-100">
                                                            <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                                        </form>
                                                    </div>

                                                    <ul className="comment-wrap list-unstyled ">

                                                        <li className="comment-item">
                                                            <div className="d-flex">

                                                                <div className="avatar avatar-xs">
                                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                                                                </div>
                                                                <div className="ms-2">

                                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                                        <div className="d-flex justify-content-center">
                                                                            <div className="me-2">
                                                                                <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                                                <p className="small mb-0">Removed demands expense account in outward tedious do.</p>
                                                                            </div>
                                                                            <small>5hr</small>
                                                                        </div>
                                                                    </div>

                                                                    <ul className="nav nav-divider py-2 small">
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Like (3)</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> Reply</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link className="nav-link" to="#!"> View 5 replies</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="tab-pane fade text-center" id="tab-4">
                                        <div className="my-sm-5 py-sm-5">
                                            <i className="display-1 text-body-secondary bi bi-file-earmark-x"> </i>
                                            <h4 className="mt-2 mb-3 text-body">No photos or videos</h4>
                                            <button className="btn btn-primary-soft btn-sm" data-bs-toggle="modal" data-bs-target="#modalCreateAlbum"> Click here to add </button>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="tab-5">
                                        <div className="row g-3">


                                            <div className="col-6 col-lg-3">

                                                <Link to="#">
                                                    <img className="rounded img-fluid" src="assets/images/albums/01.jpg" alt="" />
                                                </Link>

                                                <div className="hstack mt-3">
                                                    <div>
                                                        <h6 className="mb-0"> <Link to="#!"> Cover Photos </Link> </h6>
                                                        <Link className="text-secondary small" to="#!">5 Items</Link>
                                                    </div>

                                                    <div className="dropdown ms-auto">
                                                        <Link to="#" className="icon-sm bg-light text-secondary rounded-circle" id="photoActionEdit17" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="photoActionEdit17">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil fa-fw pe-1"></i> Edit</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-1"></i> Delete</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report album</Link></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="col-6 col-lg-3">

                                                <Link to="#">
                                                    <img className="rounded img-fluid" src="assets/images/albums/02.jpg" alt="" />
                                                </Link>

                                                <div className="hstack mt-3">
                                                    <div>
                                                        <h6 className="mb-0"> <Link to="#!"> Profile pictures </Link> </h6>
                                                        <Link className="text-secondary small" to="#!">20 Items</Link>
                                                    </div>

                                                    <div className="dropdown ms-auto">
                                                        <Link to="#" className="icon-sm bg-light text-secondary rounded-circle" id="albumActionSetting2" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="albumActionSetting2">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil fa-fw pe-1"></i> Edit</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-1"></i> Delete</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report album</Link></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="col-6 col-lg-3">

                                                <Link to="#">
                                                    <img className="rounded img-fluid" src="assets/images/albums/03.jpg" alt="" />
                                                </Link>
                                                <div className="hstack mt-3">
                                                    <div>
                                                        <h6 className="mb-0"> <Link to="#!"> Untitled pictures </Link> </h6>
                                                        <Link className="text-secondary small" to="#!">12 Items</Link>
                                                    </div>

                                                    <div className="dropdown ms-auto">
                                                        <Link to="#" className="icon-sm bg-light text-secondary rounded-circle" id="albumActionSetting3" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="bi bi-three-dots"></i>
                                                        </Link>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="albumActionSetting3">
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil fa-fw pe-1"></i> Edit</Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-download fa-fw pe-1"></i> Download </Link></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-1"></i> Delete</Link></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-1"></i> Report album</Link></li>
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
        </main>

    );
}


