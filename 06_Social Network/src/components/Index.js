import React from 'react';
import { Link } from 'react-router-dom';
import { Modals } from './Modals';
export const Index = () => {
    return (
            <main>
                <div className="container" >
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
                                                        <Link className="nav-link" to="/myProfile"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/home-outline-filled.svg" alt="" /><span>Feed </span></Link>
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
                                                <Link className="btn btn-link btn-sm" to="/myProfile">View Profile </Link>
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

                            <div className="d-flex gap-2 mb-n3">
                                <div className="position-relative">
                                    <div className="card border border-2 border-dashed h-150px px-4 px-sm-5 shadow-none d-flex align-items-center justify-content-center text-center">
                                        <div>
                                            <Link className="stretched-link btn btn-light rounded-circle icon-md" to="#!"><i className="fa-solid fa-plus"></i></Link>
                                            <h6 className="mt-2 mb-0 small">Post a Story</h6>
                                        </div>
                                    </div>
                                </div>


                                <div id="stories" className="storiesWrapper stories-square stories user-icon carousel scroll-enable"></div>
                            </div>

                            <div className="card card-body">
                                <div className="d-flex mb-3">

                                    <div className="avatar avatar-xs me-2">
                                        <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" /> </Link>
                                    </div>

                                    <form className="w-100">
                                        <textarea className="form-control pe-4 border-0" rows="2" data-autoresize placeholder="Share your thoughts..."></textarea>
                                    </form>
                                </div>

                                <ul className="nav nav-pills nav-stack small fw-normal">
                                    <li className="nav-item">
                                        <Link className="nav-link bg-light py-1 px-2 mb-0" to="#!" data-bs-toggle="modal" data-bs-target="#feedActionPhoto"> <i className="bi bi-image-fill text-success pe-2"></i>Photo</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link bg-light py-1 px-2 mb-0" to="#!" data-bs-toggle="modal" data-bs-target="#feedActionVideo"> <i className="bi bi-camera-reels-fill text-info pe-2"></i>Video</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#" className="nav-link bg-light py-1 px-2 mb-0" data-bs-toggle="modal" data-bs-target="#modalCreateEvents"> <i className="bi bi-calendar2-event-fill text-danger pe-2"></i>Event </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link bg-light py-1 px-2 mb-0" to="#!" data-bs-toggle="modal" data-bs-target="#modalCreateFeed"> <i className="bi bi-emoji-smile-fill text-warning pe-2"></i>Feeling /Activity</Link>
                                    </li>
                                    <li className="nav-item dropdown ms-lg-auto">
                                        <Link className="nav-link bg-light py-1 px-2 mb-0" to="#" id="feedActionShare" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots"></i>
                                        </Link>

                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare">
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Create a poll</Link></li>
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Ask a question </Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Help</Link></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>

                            <div className="card">

                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">

                                            <div className="avatar avatar-story me-2">
                                                <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" /> </Link>
                                            </div>

                                            <div>
                                                <div className="nav nav-divider">
                                                    <h6 className="nav-item card-title mb-0"> <Link to="#!"> Lori Ferguson </Link></h6>
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
                                </div>

                                <div className="card-body">
                                    <p>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>

                                    <img className="card-img" src="assets/images/post/3by2/01.jpg" alt="Post" />

                                    <ul className="nav nav-stack py-3 small">
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="#!" data-bs-container="body" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true" /* data-bs-custom-className="tooltip-text-start" */ data-bs-title="Frances Guerrero<br> Lori Stevens<br> Billy Vasquez<br> Judy Nguyen<br> Larry Lawson<br> Amanda Reed<br> Louis Crawford"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                        </li>

                                        <li className="nav-item dropdown ms-sm-auto">
                                            <Link className="nav-link mb-0" to="#" id="cardShareAction" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
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
                                            <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="" /> </Link>
                                        </div>

                                        <form className="nav nav-item w-100 position-relative">
                                            <textarea data-autoresize className="form-control pe-5 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                            <button className="nav-link bg-transparent px-3 position-absolute top-50 end-0 translate-middle-y border-0" type="submit">
                                                <i className="bi bi-send-fill"> </i>
                                            </button>
                                        </form>
                                    </div>

                                    <ul className="comment-wrap list-unstyled">

                                        <li className="comment-item">
                                            <div className="d-flex position-relative">

                                                <div className="avatar avatar-xs">
                                                    <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /></Link>
                                                </div>
                                                <div className="ms-2">

                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                            <small className="ms-2">5hr</small>
                                                        </div>
                                                        <p className="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
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

                                            <ul className="comment-item-nested list-unstyled">

                                                <li className="comment-item">
                                                    <div className="d-flex">

                                                        <div className="avatar avatar-xs">
                                                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="" /></Link>
                                                        </div>

                                                        <div className="ms-2">
                                                            <div className="bg-light p-3 rounded">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-1"> <Link to="#!"> Lori Stevens </Link> </h6>
                                                                    <small className="ms-2">2hr</small>
                                                                </div>
                                                                <p className="small mb-0">See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.</p>
                                                            </div>

                                                            <ul className="nav nav-divider py-2 small">
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" to="#!"> Like (5)</Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" to="#!"> Reply</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li className="comment-item">
                                                    <div className="d-flex">

                                                        <div className="avatar avatar-story avatar-xs">
                                                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" /></Link>
                                                        </div>

                                                        <div className="ms-2">
                                                            <div className="bg-light p-3 rounded">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-1"> <Link to="#!"> Billy Vasquez </Link> </h6>
                                                                    <small className="ms-2">15min</small>
                                                                </div>
                                                                <p className="small mb-0">Wishing calling is warrant settled was lucky.</p>
                                                            </div>

                                                            <ul className="nav nav-divider py-2 small">
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" to="#!"> Like</Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" to="#!"> Reply</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>

                                            <Link to="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true">
                                                <div className="spinner-dots me-2">
                                                    <span className="spinner-dot"></span>
                                                    <span className="spinner-dot"></span>
                                                    <span className="spinner-dot"></span>
                                                </div>
                                                Load more replies
                                            </Link>

                                        </li>


                                        <li className="comment-item">
                                            <div className="d-flex">

                                                <div className="avatar avatar-xs">
                                                    <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /></Link>
                                                </div>

                                                <div className="ms-2">
                                                    <div className="bg-light p-3 rounded">
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link> </h6>
                                                            <small className="ms-2">4min</small>
                                                        </div>
                                                        <p className="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                                    </div>

                                                    <ul className="nav nav-divider pt-2 small">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> Like (1)</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> Reply</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> View 6 replies</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>

                                </div>

                                <div className="card-footer border-0 pt-0">

                                    <Link to="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                                        <div className="spinner-dots me-2">
                                            <span className="spinner-dot"></span>
                                            <span className="spinner-dot"></span>
                                            <span className="spinner-dot"></span>
                                        </div>
                                        Load more comments
                                    </Link>
                                </div>

                            </div>

                            <div className="card">

                                <div className="card-header">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">

                                            <div className="avatar me-2">
                                                <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/12.svg" alt="" /> </Link>
                                            </div>

                                            <div>
                                                <h6 className="card-title mb-0"><Link to="#!"> Bootstrap: Front-end framework </Link></h6>
                                                <Link to="#!" className="mb-0 text-body">Sponsored <i className="bi bi-info-circle ps-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="You're seeing this ad because your activity meets the intended audience of our site."></i> </Link>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-three-dots"></i>
                                            </Link>

                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction2">
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>



                                <div className="card-body">
                                    <p className="mb-0">Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
                                </div>
                                <img src="assets/images/post/3by2/02.jpg" alt="" />

                                <div className="card-footer border-0 d-flex justify-content-between align-items-center">
                                    <p className="mb-0">Currently v5.1.3 </p>
                                    <Link className="btn btn-primary-soft btn-sm" to="#"> Download now </Link>
                                </div>


                            </div>

                            <div className="card">

                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">

                                            <div className="avatar me-2">
                                                <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" /> </Link>
                                            </div>

                                            <div>
                                                <h6 className="card-title mb-0"> <Link to="#"> Judy Nguyen </Link></h6>
                                                <div className="nav nav-divider">
                                                    <p className="nav-item mb-0 small">Web Developer at Webestica</p>
                                                    <span className="nav-item small" data-bs-toggle="tooltip" data-bs-placement="top" title="Public"> <i className="bi bi-globe"></i> </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction3" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-three-dots"></i>
                                            </Link>

                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction3">
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>


                                <div className="card-body">
                                    <p>I'm so privileged to be involved in the <Link to="#!">@bootstrap </Link>hiring process! Interviewing with their team was fun and I hope this can be a valuable resource for folks! <Link to="#!"> #inclusivebusiness</Link> <Link to="#!"> #internship</Link> <Link to="#!"> #hiring</Link> <Link to="#"> #apply </Link></p>

                                    <div className="d-flex justify-content-between">
                                        <div className="row g-3">
                                            <div className="col-6">

                                                <Link className="h-100" to="assets/images/post/1by1/03.jpg" data-glightbox data-gallery="image-popup">
                                                    <img className="rounded img-fluid" src="assets/images/post/1by1/03.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="col-6">

                                                <Link to="assets/images/post/3by2/01.jpg" data-glightbox data-gallery="image-popup">
                                                    <img className="rounded img-fluid" src="assets/images/post/3by2/01.jpg" alt="" />
                                                </Link>

                                                <div className="position-relative bg-dark mt-3 rounded">
                                                    <div className="hover-actions-item position-absolute top-50 start-50 translate-middle z-index-9">
                                                        <Link className="btn btn-link text-white" to="#"> View all </Link>
                                                    </div>
                                                    <Link to="assets/images/post/3by2/02.jpg" data-glightbox data-gallery="image-popup">
                                                        <img className="img-fluid opacity-50 rounded" src="assets/images/post/3by2/02.jpg" alt="" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="nav nav-stack py-3 small">
                                        <li className="nav-item">
                                            <Link className="nav-link active text-secondary" to="#!"> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i> Louis, Billy and 126 others </Link>
                                        </li>
                                        <li className="nav-item ms-sm-auto">
                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                        </li>
                                    </ul>



                                    <ul className="nav nav-pills nav-pills-light nav-fill nav-stack small border-top border-bottom py-1 mb-3">
                                        <li className="nav-item">
                                            <Link className="nav-link mb-0 active" to="#!"> <i className="bi bi-heart pe-1"></i>Liked (56)</Link>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <Link to="#" className="nav-link mb-0" id="cardShareAction4" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
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

                                        <li className="nav-item">
                                            <Link className="nav-link mb-0" to="#!"> <i className="bi bi-send-fill pe-1"></i>Send</Link>
                                        </li>
                                    </ul>



                                    <ul className="comment-wrap list-unstyled">

                                        <li className="comment-item">
                                            <div className="d-flex">

                                                <div className="avatar avatar-xs">
                                                    <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /> </Link>
                                                </div>
                                                <div className="ms-2">

                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                            <small className="ms-2">5hr</small>
                                                        </div>
                                                        <p className="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
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

                                            <ul className="comment-item-nested list-unstyled">

                                                <li className="comment-item">
                                                    <div className="d-flex">

                                                        <div className="avatar avatar-xs">
                                                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="" /></Link>
                                                        </div>

                                                        <div className="ms-2">
                                                            <div className="bg-light p-3 rounded">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-1"> <Link to="#!"> Lori Stevens </Link> </h6>
                                                                    <small className="ms-2">2hr</small>
                                                                </div>
                                                                <p className="small mb-0">See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.</p>
                                                            </div>

                                                            <ul className="nav nav-divider py-2 small">
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" to="#!"> Like (5)</Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" to="#!"> Reply</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li className="comment-item">
                                                    <div className="d-flex">

                                                        <div className="avatar avatar-xs">
                                                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" /></Link>
                                                        </div>

                                                        <div className="ms-2">
                                                            <div className="bg-light p-3 rounded">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-1"> <Link to="#!"> Billy Vasquez </Link> </h6>
                                                                    <small className="ms-2">15min</small>
                                                                </div>
                                                                <p className="small mb-0">Wishing calling is warrant settled was lucky.</p>
                                                            </div>

                                                            <ul className="nav nav-divider py-2 small">
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" to="#!"> Like</Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" to="#!"> Reply</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>

                                            <Link to="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true">
                                                <div className="spinner-dots me-2">
                                                    <span className="spinner-dot"></span>
                                                    <span className="spinner-dot"></span>
                                                    <span className="spinner-dot"></span>
                                                </div>
                                                Load more replies
                                            </Link>
                                        </li>


                                        <li className="comment-item">
                                            <div className="d-flex">

                                                <div className="avatar avatar-xs">
                                                    <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /></Link>
                                                </div>

                                                <div className="ms-2">
                                                    <div className="bg-light p-3 rounded">
                                                        <div className="d-flex justify-content-center">
                                                            <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link> </h6>
                                                            <small className="ms-2">4min</small>
                                                        </div>
                                                        <p className="small mb-0">Congratulations:)</p>
                                                        <div className="card p-2 border border-2 rounded mt-2 shadow-none">
                                                            <img src="assets/images/elements/12.svg" alt="" />
                                                        </div>
                                                    </div>

                                                    <ul className="nav nav-divider pt-2 small">
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> Like (1)</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> Reply</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!"> View 6 replies</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>

                                </div>

                                <div className="card-footer border-0 pt-0">

                                    <Link to="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                                        <div className="spinner-dots me-2">
                                            <span className="spinner-dot"></span>
                                            <span className="spinner-dot"></span>
                                            <span className="spinner-dot"></span>
                                        </div>
                                        Load more comments
                                    </Link>
                                </div>

                            </div>

                            <div className="card">

                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">

                                            <div className="avatar me-2">
                                                <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/logo/13.svg" alt="" /> </Link>
                                            </div>

                                            <div>
                                                <h6 className="card-title mb-0"> <Link to="#!"> Apple Education </Link></h6>
                                                <p className="mb-0 small">9 November at 23:29</p>
                                            </div>
                                        </div>

                                        <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction5" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots"></i>
                                        </Link>

                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction5">
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                        </ul>
                                    </div>

                                </div>



                                <div className="card-body pb-0">
                                    <p>Find out how you can save time in the classroom this year. Earn recognition while you learn new skills on iPad and Mac. Start  recognition your first Apple Teacher badge today!</p>

                                    <ul className="nav nav-stack pb-2 small">
                                        <li className="nav-item">
                                            <Link className="nav-link active text-secondary" to="#!"> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i> Louis, Billy and 126 others </Link>
                                        </li>
                                        <li className="nav-item ms-sm-auto">
                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                        </li>
                                    </ul>

                                </div>


                                <div className="card-footer py-3">

                                    <ul className="nav nav-fill nav-stack small">
                                        <li className="nav-item">
                                            <Link className="nav-link mb-0 active" to="#!"> <i className="bi bi-heart pe-1"></i>Liked (56)</Link>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <Link to="#" className="nav-link mb-0" id="cardShareAction6" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
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

                                        <li className="nav-item">
                                            <Link className="nav-link mb-0" to="#!"> <i className="bi bi-send-fill pe-1"></i>Send</Link>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                            <div className="card">

                                <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                                    <h6 className="card-title mb-0">People you may know</h6>
                                    <button className="btn btn-sm btn-primary-soft"> See all </button>
                                </div>



                                <div className="card-body">
                                    <div className="tiny-slider arrow-hover">
                                        <div className="tiny-slider-inner ms-n4" data-arrow="true" data-dots="false" data-items-xl="3" data-items-lg="2" data-items-md="2" data-items-sm="2" data-items-xs="1" data-gutter="12" data-edge="30">

                                            <div>

                                                <div className="card shadow-none text-center">

                                                    <div className="card-body p-2 pb-0">
                                                        <div className="avatar avatar-xl">
                                                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="" /></Link>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <Link to="#!"> Amanda Reed </Link></h6>
                                                        <p className="mb-0 small lh-sm">50 mutual connections</p>
                                                    </div>

                                                    <div className="card-footer p-2 border-0">
                                                        <button className="btn btn-sm btn-primary-soft w-100"> Add friend </button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>

                                                <div className="card shadow-none text-center">

                                                    <div className="card-body p-2 pb-0">
                                                        <div className="avatar avatar-story avatar-xl">
                                                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="" /></Link>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <Link to="#!"> Larry Lawson </Link></h6>
                                                        <p className="mb-0 small lh-sm">33 mutual connections</p>
                                                    </div>

                                                    <div className="card-footer p-2 border-0">
                                                        <button className="btn btn-sm btn-primary-soft w-100"> Add friend </button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>

                                                <div className="card shadow-none text-center">

                                                    <div className="card-body p-2 pb-0">
                                                        <div className="avatar avatar-xl">
                                                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="" /></Link>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <Link to="#!"> Louis Crawford </Link></h6>
                                                        <p className="mb-0 small lh-sm">45 mutual connections</p>
                                                    </div>

                                                    <div className="card-footer p-2 border-0">
                                                        <button className="btn btn-sm btn-primary-soft w-100"> Add friend </button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div>

                                                <div className="card shadow-none text-center">

                                                    <div className="card-body p-2 pb-0">
                                                        <div className="avatar avatar-xl">
                                                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="" /></Link>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <Link to="#!"> Dennis Barrett </Link></h6>
                                                        <p className="mb-0 small lh-sm">21 mutual connections</p>
                                                    </div>

                                                    <div className="card-footer p-2 border-0">
                                                        <button className="btn btn-sm btn-primary-soft w-100"> Add friend </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="card">

                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">

                                            <div className="avatar me-2">
                                                <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" /> </Link>
                                            </div>

                                            <div>
                                                <h6 className="card-title mb-0"> <Link to="#!"> All in the Mind </Link></h6>
                                                <p className="mb-0 small">9 November at 23:29</p>
                                            </div>
                                        </div>

                                        <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction7" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots"></i>
                                        </Link>

                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction7">
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                        </ul>
                                    </div>

                                </div>



                                <div className="card-body pb-0">
                                    <p>How do you protect your business against cyber-crime?</p>
                                    <div className="vstack gap-2">

                                        <div>
                                            <input type="radio" className="btn-check" name="poll" id="option" />
                                            <label className="btn btn-outline-primary w-100" htmlFor="option">We have cybersecurity insurance coverage</label>
                                        </div>

                                        <div>
                                            <input type="radio" className="btn-check" name="poll" id="option2" />
                                            <label className="btn btn-outline-primary w-100" htmlFor="option2">Our dedicated staff will protect us</label>
                                        </div>

                                        <div>
                                            <input type="radio" className="btn-check" name="poll" id="option3" />
                                            <label className="btn btn-outline-primary w-100" htmlFor="option3">We give regular training for best practices</label>
                                        </div>

                                        <div>
                                            <input type="radio" className="btn-check" name="poll" id="option4" />
                                            <label className="btn btn-outline-primary w-100" htmlFor="option4">Third-party vendor protection</label>
                                        </div>
                                    </div>


                                    <ul className="nav nav-divider mt-2 mb-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">263 votes</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">2d left</Link>
                                        </li>
                                    </ul>



                                    <ul className="nav nav-stack pb-2 small mt-4">
                                        <li className="nav-item">
                                            <Link className="nav-link active text-secondary" to="#!"> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i> Louis, Billy and 126 others </Link>
                                        </li>
                                        <li className="nav-item ms-sm-auto">
                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                        </li>
                                    </ul>

                                </div>


                                <div className="card-footer py-3">

                                    <ul className="nav nav-fill nav-stack small">
                                        <li className="nav-item">
                                            <Link className="nav-link mb-0 active" to="#!"> <i className="bi bi-heart pe-1"></i>Liked (56)</Link>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <Link to="#" className="nav-link mb-0" id="feedActionShare6" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                                            </Link>

                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare6">
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link mb-0" to="#!"> <i className="bi bi-send-fill pe-1"></i>Send</Link>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                            <div className="card">

                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">

                                            <div className="avatar me-2">
                                                <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" /> </Link>
                                            </div>

                                            <div>
                                                <h6 className="card-title mb-0"> <Link to="#!"> All in the Mind </Link></h6>
                                                <p className="mb-0 small">9 November at 23:29</p>
                                            </div>
                                        </div>

                                        <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction10" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots"></i>
                                        </Link>

                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction10">
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                        </ul>
                                    </div>

                                </div>



                                <div className="card-body pb-0">
                                    <p>How do you protect your business against cyber-crime?</p>
                                    <div className="card card-body mt-4">

                                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                                            <span className="small">16/20 responded</span>
                                            <span className="small">Results not visible to participants</span>
                                        </div>


                                        <div className="vstack gap-4 gap-sm-3 mt-3">

                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="overflow-hidden w-100 me-3">
                                                    <div className="progress bg-primary bg-opacity-10 position-relative" style={{ height: "30px" }}>
                                                        <div className="progress-bar bg-primary bg-opacity-25" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                        <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">We have cybersecurity insurance coverage </span>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0">25%</div>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between">

                                                <div className="overflow-hidden w-100 me-3">
                                                    <div className="progress bg-primary bg-opacity-10 position-relative" style={{ height: "30px" }}>
                                                        <div className="progress-bar bg-primary bg-opacity-25" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                        <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">Our dedicated staff will protect us</span>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0">15%</div>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between">

                                                <div className="overflow-hidden w-100 me-3">
                                                    <div className="progress bg-primary bg-opacity-10 position-relative" style={{ height: "30px" }}>
                                                        <div className="progress-bar bg-primary bg-opacity-25" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                        <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">We give regular training for best practices</span>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0">10%</div>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between">

                                                <div className="overflow-hidden w-100 me-3">
                                                    <div className="progress bg-primary bg-opacity-10 position-relative" style={{ height: "30px" }}>
                                                        <div className="progress-bar bg-primary bg-opacity-25" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                        <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">Third-party vendor protection</span>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0">55%</div>
                                            </div>

                                        </div>
                                    </div>


                                    <ul className="nav nav-divider mt-2 mb-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">263 votes</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">2d left</Link>
                                        </li>
                                    </ul>



                                    <ul className="nav nav-stack pb-2 small mt-4">
                                        <li className="nav-item">
                                            <Link className="nav-link active text-secondary" to="#!"> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i> Louis, Billy and 126 others </Link>
                                        </li>
                                        <li className="nav-item ms-sm-auto">
                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                        </li>
                                    </ul>

                                </div>


                                <div className="card-footer py-3">

                                    <ul className="nav nav-fill nav-stack small">
                                        <li className="nav-item">
                                            <Link className="nav-link mb-0 active" to="#!"> <i className="bi bi-heart pe-1"></i>Liked (56)</Link>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <Link to="#" className="nav-link mb-0" id="feedActionShare8" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                                            </Link>

                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare8">
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link mb-0" to="#!"> <i className="bi bi-send-fill pe-1"></i>Send</Link>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                            <div className="card">

                                <div className="card-header">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">

                                            <div className="avatar me-2">
                                                <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/11.svg" alt="" /> </Link>
                                            </div>

                                            <div>
                                                <h6 className="card-title mb-0"> <Link to="#!"> Webestica </Link></h6>
                                                <p className="small mb-0">9 December at 10:00 </p>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction8" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-three-dots"></i>
                                            </Link>

                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction8">
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</Link></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>



                                <div className="card-body">
                                    <p className="mb-0">The next-generation blog, news, and magazine theme for you to start sharing your content today with beautiful aesthetics! This minimal & clean Bootstrap 5 based theme is ideal for all types of sites that aim to provide users with content. <Link to="#!"> #bootstrap</Link> <Link to="#!"> #webestica </Link> <Link to="#!"> #getbootstrap</Link> <Link to="#"> #bootstrap5 </Link></p>
                                </div>

                                <Link to="#!"> <img src="assets/images/post/3by2/03.jpg" alt="" /> </Link>

                                <div className="card-body position-relative bg-light">
                                    <Link to="#!" className="small stretched-link">https://blogzine.webestica.com</Link>
                                    <h6 className="mb-0 mt-1">Blogzine - Blog and Magazine Bootstrap 5 Theme</h6>
                                    <p className="mb-0 small">Bootstrap based News, Magazine and Blog Theme</p>
                                </div>



                                <div className="card-footer py-3">

                                    <ul className="nav nav-fill nav-stack small">
                                        <li className="nav-item">
                                            <Link className="nav-link mb-0 active" to="#!"> <i className="bi bi-heart pe-1"></i>Liked (56)</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link mb-0" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <Link to="#" className="nav-link mb-0" id="feedActionShare7" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                                            </Link>

                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare7">
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</Link></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</Link></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link mb-0" to="#!"> <i className="bi bi-send-fill pe-1"></i>Send</Link>
                                        </li>
                                    </ul>

                                </div>


                            </div>

                            <div>
                                <h6 className="mb-3">Suggested stories </h6>
                                <div className="tiny-slider arrow-hover overflow-hidden">
                                    <div className="tiny-slider-inner ms-n4" data-arrow="true" data-dots="true" data-loop="false" data-autoplay="false" data-items-xl="4" data-items-lg="3" data-items-md="3" data-items-sm="3" data-items-xs="2" data-gutter="12" data-edge="24">


                                        <div>

                                            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: 'url(assets/images/post/1by1/02.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
                                                <div className="card-img-overlay d-flex align-items-center p-2">
                                                    <div className="w-100 mt-auto">

                                                        <Link to="#!" className="stretched-link text-white small">Judy Nguyen</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div>

                                            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: "url(assets/images/post/1by1/03.jpg)", backgroundPosition: "center left", backgroundSize: "cover" }}>
                                                <div className="card-img-overlay d-flex align-items-center p-2">
                                                    <div className="w-100 mt-auto">

                                                        <Link to="#!" className="stretched-link text-white small">Samuel Bishop</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div>

                                            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: 'url(assets/images/post/1by1/04.jpg)', backgroundPosition: "center left", backgroundSize: "cover" }}>
                                                <div className="card-img-overlay d-flex align-items-center p-2">
                                                    <div className="w-100 mt-auto">

                                                        <Link to="#!" className="stretched-link text-white small">Carolyn Ortiz</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div>

                                            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: 'url(assets/images/post/1by1/05.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
                                                <div className="card-img-overlay d-flex align-items-center p-2">
                                                    <div className="w-100 mt-auto">

                                                        <Link to="#!" className="stretched-link text-white small">Amanda Reed</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div>

                                            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: 'url(assets/images/post/1by1/01.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
                                                <div className="card-img-overlay d-flex align-items-center p-2">
                                                    <div className="w-100 mt-auto">

                                                        <Link to="#!" className="stretched-link text-white small">Lori Stevens</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div>

                                            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: 'url(assets/images/post/1by1/06.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
                                                <div className="card-img-overlay d-flex align-items-center p-2">
                                                    <div className="w-100 mt-auto">

                                                        <Link to="#!" className="stretched-link text-white small">Joan Wallace</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">

                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">

                                            <div className="avatar avatar-story me-2">
                                                <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="" /> </Link>
                                            </div>

                                            <div>
                                                <div className="nav nav-divider">
                                                    <h6 className="nav-item card-title mb-0"> <Link to="#!"> Joan Wallace </Link></h6>
                                                    <span className="nav-item small"> 1day</span>
                                                </div>
                                                <p className="mb-0 small">12 January at 12:00</p>
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
                                </div>

                                <div className="card-body pb-0">
                                    <p>Comfort reached gay perhaps chamber his <Link to="#!">#internship</Link>  <Link to="#!">#hiring</Link> <Link to="#!">#apply</Link> </p>
                                </div>
                                <div className="overflow-hidden fullscreen-video w-100">

                                    <div className="player-wrapper overflow-hidden">
                                        <video className="player-html" controls crossOrigin="anonymous" poster="assets/images/videos/poster.jpg">
                                            <source src="assets/images/videos/video-feed.mp4" type="video/mp4" />
                                        </video>
                                    </div>

                                </div>

                                <div className="card-body pt-0">
                                    <ul className="nav nav-stack py-3 small">
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                                        </li>

                                        <li className="nav-item dropdown ms-sm-auto">
                                            <Link className="nav-link mb-0" to="#" id="cardShareAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
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
                                            <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="" /> </Link>
                                        </div>


                                        <form className="input-group">
                                            <textarea data-autoresize className="form-control me-2 bg-light rounded" rows="1" placeholder="Add a comment..."></textarea>
                                            <button className="btn btn-primary mb-0 rounded" type="submit">Post</button>
                                        </form>
                                    </div>

                                    <ul className="comment-wrap list-unstyled mb-0">

                                        <li className="comment-item">
                                            <div className="d-flex">

                                                <div className="avatar avatar-xs">
                                                    <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /></Link>
                                                </div>
                                                <div className="ms-2">

                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="mb-1"> <Link to="#!"> Frances Guerrero </Link></h6>
                                                            <small className="ms-2">5hr</small>
                                                        </div>
                                                        <p className="small mb-0">Preference any astonished unreserved Mrs.</p>
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

                                            <ul className="comment-item-nested list-unstyled">

                                                <li className="comment-item">
                                                    <div className="d-flex">

                                                        <div className="avatar avatar-xs">
                                                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="" /></Link>
                                                        </div>

                                                        <div className="ms-2">
                                                            <div className="bg-light p-3 rounded">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-1"> <Link to="#!"> Lori Stevens </Link> </h6>
                                                                    <small className="ms-2">2hr</small>
                                                                </div>
                                                                <p className="small mb-0">Dependent on so extremely delivered by. Yet ﻿no jokes worse her why.</p>
                                                            </div>

                                                            <ul className="nav nav-divider py-2 small">
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" to="#!"> Like (5)</Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" to="#!"> Reply</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>

                                        </li>

                                    </ul>

                                </div>

                                <div className="card-footer border-0 pt-0">

                                    <Link to="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                                        <div className="spinner-dots me-2">
                                            <span className="spinner-dot"></span>
                                            <span className="spinner-dot"></span>
                                            <span className="spinner-dot"></span>
                                        </div>
                                        Load more comments
                                    </Link>
                                </div>

                            </div>

                            <Link to="#!" role="button" className="btn btn-loader btn-primary-soft" data-bs-toggle="button" aria-pressed="true">
                                <span className="load-text"> Load more </span>
                                <div className="load-icon">
                                    <div className="spinner-grow spinner-grow-sm" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </Link>


                        </div>

                        <div className="col-lg-3">
                            <div className="row g-4">

                                <div className="col-sm-6 col-lg-12">
                                    <div className="card">

                                        <div className="card-header pb-0 border-0">
                                            <h5 className="card-title mb-0">Who to follow</h5>
                                        </div>


                                        <div className="card-body">

                                            <div className="hstack gap-2 mb-3">

                                                <div className="avatar">
                                                    <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" /></Link>
                                                </div>

                                                <div className="overflow-hidden">
                                                    <Link className="h6 mb-0" to="#!">Judy Nguyen </Link>
                                                    <p className="mb-0 small text-truncate">News anchor</p>
                                                </div>

                                                <Link className="btn btn-primary-soft rounded-circle icon-md ms-auto" to="#"><i className="fa-solid fa-plus"> </i></Link>
                                            </div>

                                            <div className="hstack gap-2 mb-3">

                                                <div className="avatar avatar-story">
                                                    <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /> </Link>
                                                </div>

                                                <div className="overflow-hidden">
                                                    <Link className="h6 mb-0" to="#!">Amanda Reed </Link>
                                                    <p className="mb-0 small text-truncate">Web Developer</p>
                                                </div>

                                                <Link className="btn btn-primary-soft rounded-circle icon-md ms-auto" to="#"><i className="fa-solid fa-plus"> </i></Link>
                                            </div>

                                            <div className="hstack gap-2 mb-3">

                                                <div className="avatar">
                                                    <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="" /> </Link>
                                                </div>

                                                <div className="overflow-hidden">
                                                    <Link className="h6 mb-0" to="#!">Billy Vasquez </Link>
                                                    <p className="mb-0 small text-truncate">News anchor</p>
                                                </div>

                                                <Link className="btn btn-primary rounded-circle icon-md ms-auto" to="#"><i className="bi bi-person-check-fill"> </i></Link>
                                            </div>

                                            <div className="hstack gap-2 mb-3">

                                                <div className="avatar">
                                                    <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" /> </Link>
                                                </div>

                                                <div className="overflow-hidden">
                                                    <Link className="h6 mb-0" to="#!">Lori Ferguson </Link>
                                                    <p className="mb-0 small text-truncate">Web Developer at Webestica</p>
                                                </div>

                                                <Link className="btn btn-primary-soft rounded-circle icon-md ms-auto" to="#"><i className="fa-solid fa-plus"> </i></Link>
                                            </div>

                                            <div className="hstack gap-2 mb-3">

                                                <div className="avatar">
                                                    <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/placeholder.jpg" alt="" /> </Link>
                                                </div>

                                                <div className="overflow-hidden">
                                                    <Link className="h6 mb-0" to="#!">Carolyn Ortiz </Link>
                                                    <p className="mb-0 small text-truncate">News anchor</p>
                                                </div>

                                                <Link className="btn btn-primary-soft rounded-circle icon-md ms-auto" to="#"><i className="fa-solid fa-plus"> </i></Link>
                                            </div>

                                            <div className="d-grid mt-3">
                                                <Link className="btn btn-sm btn-primary-soft" to="#!">View more</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-12">
                                    <div className="card">

                                        <div className="card-header pb-0 border-0">
                                            <h5 className="card-title mb-0">Today’s news</h5>
                                        </div>

                                        <div className="card-body">

                                            <div className="mb-3">
                                                <h6 className="mb-0"><Link to="blog-details.html">Ten questions you should answer truthfully</Link></h6>
                                                <small>2hr</small>
                                            </div>

                                            <div className="mb-3">
                                                <h6 className="mb-0"><Link to="blog-details.html">Five unbelievable facts about money</Link></h6>
                                                <small>3hr</small>
                                            </div>

                                            <div className="mb-3">
                                                <h6 className="mb-0"><Link to="blog-details.html">Best Pinterest Boards for learning about business</Link></h6>
                                                <small>4hr</small>
                                            </div>

                                            <div className="mb-3">
                                                <h6 className="mb-0"><Link to="blog-details.html">Skills that you can learn from business</Link></h6>
                                                <small>6hr</small>
                                            </div>

                                            <Link to="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                                                <div className="spinner-dots me-2">
                                                    <span className="spinner-dot"></span>
                                                    <span className="spinner-dot"></span>
                                                    <span className="spinner-dot"></span>
                                                </div>
                                                View all latest news
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
                <Modals/>
            </main>
       
   
    );
}

