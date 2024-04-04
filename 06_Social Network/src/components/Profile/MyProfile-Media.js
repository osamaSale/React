import React from 'react';
import { MyProfileHeader } from './MyProfile-Header';
import { Link } from 'react-router-dom';
import {Modals} from "../Modals"
export const MyProfileMedia = () => {
    return (
        <main>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8 vstack gap-4">
                        <MyProfileHeader />
                        <div className="card">
                            <div className="card-header d-sm-flex align-items-center justify-content-between border-0 pb-0">
                                <h5 className="card-title">Photos</h5>

                                <Link className="btn btn-sm btn-primary-soft" to="#" data-bs-toggle="modal" data-bs-target="#modalCreateAlbum"> <i className="fa-solid fa-plus pe-1"></i> Create album</Link>
                            </div>

                            <div className="card-body">

                                <div className="row g-3">


                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                        <div className="border border-2 py-5 border-dashed h-100 rounded text-center d-flex align-items-center justify-content-center position-relative">
                                            <Link className="stretched-link" to="#!">
                                                <i className="fa-solid fa-camera-retro fs-1"></i>
                                                <h6 className="mt-2">Add photo</h6>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-4 col-lg-3">

                                        <a href="assets/images/albums/01.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                            <img className="rounded img-fluid" src="assets/images/albums/01.jpg" alt="" />
                                        </a>

                                        <ul className="nav nav-stack py-2 small">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>22k </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>3k </Link>
                                            </li>
                                        </ul>

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
                                                    <textarea className="one form-control pe-4 bg-light" data-autoresize rows="1" placeholder="Add a comment..."></textarea>

                                                    <div className="position-absolute top-0 end-0">
                                                        <button className="btn" type="button">🙂</button>
                                                    </div>
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



                                    <div className="col-sm-6 col-md-4 col-lg-3 position-relative">

                                        <a href="assets/images/albums/02.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                            <img className="rounded img-fluid" src="assets/images/albums/02.jpg" alt="" />
                                        </a>

                                        <ul className="nav nav-stack py-2 small">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>32k </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>12k </Link>
                                            </li>
                                        </ul>

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



                                    <div className="col-sm-6 col-md-4 col-lg-3">

                                        <a href="assets/images/albums/03.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                            <img className="rounded img-fluid" src="assets/images/albums/03.jpg" alt="" />
                                        </a>

                                        <ul className="nav nav-stack py-2 small">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>21k </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>4k </Link>
                                            </li>
                                        </ul>

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



                                    <div className="col-sm-6 col-md-4 col-lg-3">

                                        <a href="assets/images/albums/04.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                            <img className="rounded img-fluid" src="assets/images/albums/04.jpg" alt="" />
                                        </a>

                                        <ul className="nav nav-stack py-2 small">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>32k </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>16k </Link>
                                            </li>
                                        </ul>

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



                                    <div className="col-sm-6 col-md-4 col-lg-3">

                                        <a href="assets/images/albums/05.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                            <img className="rounded img-fluid" src="assets/images/albums/05.jpg" alt="" />
                                        </a>

                                        <ul className="nav nav-stack py-2 small">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>20k </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>8k </Link>
                                            </li>
                                        </ul>

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



                                    <div className="col-sm-6 col-md-4 col-lg-3">

                                        <a href="assets/images/albums/06.jpg" data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
                                            <img className="rounded img-fluid" src="assets/images/albums/06.jpg" alt="" />
                                        </a>

                                        <ul className="nav nav-stack py-2 small">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>56k </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>12k </Link>
                                            </li>
                                        </ul>

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

                        </div>


                    </div>

                    <div className="col-lg-4">

                        <div className="row g-4">

                            <div className="col-sm-6 col-lg-12">
                                <div className="card">
                                    <div className="card-header border-0 pb-0">
                                        <h5 className="card-title">About</h5>

                                    </div>

                                    <div className="card-body position-relative pt-0">
                                        <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>

                                        <ul className="list-unstyled mt-3 mb-0">
                                            <li className="mb-2"> <i className="bi bi-calendar-date fa-fw pe-1"></i> Born: <strong> October 20, 1990 </strong> </li>
                                            <li className="mb-2"> <i className="bi bi-heart fa-fw pe-1"></i> Status: <strong> Single </strong> </li>
                                            <li> <i className="bi bi-envelope fa-fw pe-1"></i> Email: <strong> webestica@gmail.com </strong> </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-12">
                                <div className="card">

                                    <div className="card-header d-flex justify-content-between border-0">
                                        <h5 className="card-title">Experience</h5>
                                        <Link className="btn btn-primary-soft btn-sm" to="#!"> <i className="fa-solid fa-plus"></i> </Link>
                                    </div>


                                    <div className="card-body position-relative pt-0">

                                        <div className="d-flex">

                                            <div className="avatar me-3">
                                                <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/08.svg" alt="" /> </Link>
                                            </div>

                                            <div>
                                                <h6 className="card-title mb-0"><Link to="#!"> Apple Computer, Inc. </Link></h6>
                                                <p className="small">May 2015 – Present Employment Duration 8 mos <Link className="btn btn-primary-soft btn-xs ms-2" to="#!">Edit </Link></p>
                                            </div>
                                        </div>



                                        <div className="d-flex">

                                            <div className="avatar me-3">
                                                <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/09.svg" alt="" /> </Link>
                                            </div>

                                            <div>
                                                <h6 className="card-title mb-0"><Link to="#!"> Microsoft Corporation </Link></h6>
                                                <p className="small">May 2017 – Present Employment Duration 1 yrs 5 mos <Link className="btn btn-primary-soft btn-xs ms-2" to="#!">Edit </Link></p>
                                            </div>
                                        </div>



                                        <div className="d-flex">

                                            <div className="avatar me-3">
                                                <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/10.svg" alt="" /> </Link>
                                            </div>

                                            <div>
                                                <h6 className="card-title mb-0"><Link to="#!"> Tata Consultancy Services. </Link></h6>
                                                <p className="small mb-0">May 2022 – Present Employment Duration 6 yrs 10 mos <Link className="btn btn-primary-soft btn-xs ms-2" to="#!">Edit </Link></p>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-12">
                                <div className="card">

                                    <div className="card-header d-sm-flex justify-content-between border-0">
                                        <h5 className="card-title">Photos</h5>
                                        <Link className="btn btn-primary-soft btn-sm" to="#!"> See all photo</Link>
                                    </div>


                                    <div className="card-body position-relative pt-0">
                                        <div className="row g-2">

                                            <div className="col-6">
                                                <Link to="assets/images/albums/01.jpg" data-gallery="image-popup" data-glightbox="">
                                                    <img className="rounded img-fluid" src="assets/images/albums/01.jpg" alt="" />
                                                </Link>
                                            </div>

                                            <div className="col-6">
                                                <Link to="assets/images/albums/02.jpg" data-gallery="image-popup" data-glightbox="">
                                                    <img className="rounded img-fluid" src="assets/images/albums/02.jpg" alt="" />
                                                </Link>
                                            </div>

                                            <div className="col-4">
                                                <Link to="assets/images/albums/03.jpg" data-gallery="image-popup" data-glightbox="">
                                                    <img className="rounded img-fluid" src="assets/images/albums/03.jpg" alt="" />
                                                </Link>
                                            </div>

                                            <div className="col-4">
                                                <Link to="assets/images/albums/04.jpg" data-gallery="image-popup" data-glightbox="">
                                                    <img className="rounded img-fluid" src="assets/images/albums/04.jpg" alt="" />
                                                </Link>
                                            </div>

                                            <div className="col-4">
                                                <Link to="assets/images/albums/05.jpg" data-gallery="image-popup" data-glightbox="">
                                                    <img className="rounded img-fluid" src="assets/images/albums/05.jpg" alt="" />
                                                </Link>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-12">
                                <div className="card">

                                    <div className="card-header d-sm-flex justify-content-between align-items-center border-0">
                                        <h5 className="card-title">Friends <span className="badge bg-danger bg-opacity-10 text-danger">230</span></h5>
                                        <Link className="btn btn-primary-soft btn-sm" to="#!"> See all friends</Link>
                                    </div>


                                    <div className="card-body position-relative pt-0">
                                        <div className="row g-3">

                                            <div className="col-6">

                                                <div className="card shadow-none text-center h-100">

                                                    <div className="card-body p-2 pb-0">
                                                        <div className="avatar avatar-story avatar-xl">
                                                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="" /></Link>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <Link to="#!"> Amanda Reed </Link></h6>
                                                        <p className="mb-0 small lh-sm">16 mutual connections</p>
                                                    </div>

                                                    <div className="card-footer p-2 border-0">
                                                        <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Send message"> <i className="bi bi-chat-left-text"></i> </button>
                                                        <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove friend"> <i className="bi bi-person-x"></i> </button>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="col-6">

                                                <div className="card shadow-none text-center h-100">

                                                    <div className="card-body p-2 pb-0">
                                                        <div className="avatar avatar-xl">
                                                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" /></Link>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <Link to="#!"> Samuel Bishop </Link></h6>
                                                        <p className="mb-0 small lh-sm">22 mutual connections</p>
                                                    </div>

                                                    <div className="card-footer p-2 border-0">
                                                        <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Send message"> <i className="bi bi-chat-left-text"></i> </button>
                                                        <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove friend"> <i className="bi bi-person-x"></i> </button>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="col-6">

                                                <div className="card shadow-none text-center h-100">

                                                    <div className="card-body p-2 pb-0">
                                                        <div className="avatar avatar-xl">
                                                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" /></Link>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <Link to="#"> Bryan Knight </Link></h6>
                                                        <p className="mb-0 small lh-sm">1 mutual connection</p>
                                                    </div>

                                                    <div className="card-footer p-2 border-0">
                                                        <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Send message"> <i className="bi bi-chat-left-text"></i> </button>
                                                        <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove friend"> <i className="bi bi-person-x"></i> </button>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="col-6">

                                                <div className="card shadow-none text-center h-100">

                                                    <div className="card-body p-2 pb-0">
                                                        <div className="avatar avatar-xl">
                                                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /></Link>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <Link to="#!"> Amanda Reed </Link></h6>
                                                        <p className="mb-0 small lh-sm">15 mutual connections</p>
                                                    </div>

                                                    <div className="card-footer p-2 border-0">
                                                        <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Send message"> <i className="bi bi-chat-left-text"></i> </button>
                                                        <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove friend"> <i className="bi bi-person-x"></i> </button>
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
            <Modals />
        </main>
    );
}

