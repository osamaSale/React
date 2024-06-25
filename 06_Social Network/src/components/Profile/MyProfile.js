import React from 'react';
import { Link } from 'react-router-dom';
import { MyProfileHeader } from './MyProfile-Header';
export const MyProfile = () => {
  return (
    <main>
      <div className="container">
        <div className="row g-4">

          <div className="col-lg-8 vstack gap-4">
          
            <MyProfileHeader />
            <div className="card card-body">
              <div className="d-flex mb-3">

                <div className="avatar avatar-xs me-2">
                  <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" /> </Link>
                </div>

                <form className="w-100">
                  <input className="form-control pe-4 border-0" placeholder="Share your thoughts..." data-bs-toggle="modal" data-bs-target="#modalCreateFeed" />
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
                <li className="nav-item dropdown ms-sm-auto">
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
                      <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt='' /> </Link>
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
                    <Link to="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction1" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-three-dots"></i>
                    </Link>

                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction1">
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
                    <Link className="nav-link active" to="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
                  </li>

                  <li className="nav-item dropdown ms-sm-auto">
                    <Link className="nav-link mb-0" to="#" id="cardShareAction8" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
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
                    <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt='' /> </Link>
                  </div>

                  <form className="position-relative w-100">
                    <textarea className="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                  </form>
                </div>

                <ul className="comment-wrap list-unstyled">

                  <li className="comment-item">
                    <div className="d-flex position-relative">

                      <div className="avatar avatar-xs">
                        <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt='' /></Link>
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
                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt='' /></Link>
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
                            <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt='' /></Link>
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
                        <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt='' /></Link>
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

              <div className="border-bottom">
                <p className="small mb-0 px-4 py-2"><i className="bi bi-heart-fill text-danger pe-1"></i>Sam Lanson likes this post</p>
              </div>

              <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">

                    <div className="avatar me-2">
                      <Link to="#"> <img className="avatar-img rounded-circle" src="assets/images/logo/13.svg" alt='' /> </Link>
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
                  <li className="nav-item">
                    <Link className="nav-link mb-0" to="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</Link>
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

          </div>

          <div className="col-lg-4">

            <div className="row g-4">


              <div className="col-md-6 col-lg-12">
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



              <div className="col-md-6 col-lg-12">
                <div className="card">

                  <div className="card-header d-flex justify-content-between border-0">
                    <h5 className="card-title">Experience</h5>
                    <Link className="btn btn-primary-soft btn-sm" to="#!"> <i className="fa-solid fa-plus"></i> </Link>
                  </div>


                  <div className="card-body position-relative pt-0">

                    <div className="d-flex">

                      <div className="avatar me-3">
                        <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/08.svg" alt='' /> </Link>
                      </div>

                      <div>
                        <h6 className="card-title mb-0"><Link to="#!"> Apple Computer, Inc. </Link></h6>
                        <p className="small">May 2015 – Present Employment Duration 8 mos <Link className="btn btn-primary-soft btn-xs ms-2" to="#!">Edit </Link></p>
                      </div>
                    </div>



                    <div className="d-flex">

                      <div className="avatar me-3">
                        <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/09.svg" alt='' /> </Link>
                      </div>

                      <div>
                        <h6 className="card-title mb-0"><Link to="#!"> Microsoft Corporation </Link></h6>
                        <p className="small">May 2017 – Present Employment Duration 1 yrs 5 mos <Link className="btn btn-primary-soft btn-xs ms-2" to="#!">Edit </Link></p>
                      </div>
                    </div>



                    <div className="d-flex">

                      <div className="avatar me-3">
                        <Link to="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/10.svg" alt='' /> </Link>
                      </div>

                      <div>
                        <h6 className="card-title mb-0"><Link to="#!"> Tata Consultancy Services. </Link></h6>
                        <p className="small mb-0">May 2022 – Present Employment Duration 6 yrs 10 mos <Link className="btn btn-primary-soft btn-xs ms-2" to="#!">Edit </Link></p>
                      </div>
                    </div>


                  </div>

                </div>
              </div>



              <div className="col-md-6 col-lg-12">
                <div className="card">

                  <div className="card-header d-sm-flex justify-content-between border-0">
                    <h5 className="card-title">Photos</h5>
                    <Link className="btn btn-primary-soft btn-sm" to="#!"> See all photo</Link>
                  </div>


                  <div className="card-body position-relative pt-0">
                    <div className="row g-2">

                      <div className="col-6">
                        <Link to="assets/images/albums/01.jpg" data-gallery="image-popup" data-glightbox="">
                          <img className="rounded img-fluid" src="assets/images/albums/01.jpg" alt='' />
                        </Link>
                      </div>

                      <div className="col-6">
                        <Link to="assets/images/albums/02.jpg" data-gallery="image-popup" data-glightbox="">
                          <img className="rounded img-fluid" src="assets/images/albums/02.jpg" alt='' />
                        </Link>
                      </div>

                      <div className="col-4">
                        <Link to="assets/images/albums/03.jpg" data-gallery="image-popup" data-glightbox="">
                          <img className="rounded img-fluid" src="assets/images/albums/03.jpg" alt='' />
                        </Link>
                      </div>

                      <div className="col-4">
                        <Link to="assets/images/albums/04.jpg" data-gallery="image-popup" data-glightbox="">
                          <img className="rounded img-fluid" src="assets/images/albums/04.jpg" alt='' />
                        </Link>
                      </div>

                      <div className="col-4">
                        <Link to="assets/images/albums/05.jpg" data-gallery="image-popup" data-glightbox="">
                          <img className="rounded img-fluid" src="assets/images/albums/05.jpg" alt='' />
                        </Link>

                      </div>
                    </div>
                  </div>

                </div>
              </div>



              <div className="col-md-6 col-lg-12">
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
                              <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt='' /></Link>
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
                              <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt='' /></Link>
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
                              <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt='' /></Link>
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
                              <Link to="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt='' /></Link>
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
    </main>
  );
}

