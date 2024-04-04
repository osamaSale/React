import React from 'react';
import { Link } from 'react-router-dom';
import { MyProfileHeader } from './MyProfile-Header';

export const MyProfileActivity = () => {
    return (
        <main>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8 vstack gap-4">
                        <MyProfileHeader />
                        <div className="card">
                         
                            <div className="card-header border-0 pb-0">
                                <h5 className="card-title"> Activity feed</h5>
                            </div>
                       
                            <div className="card-body">
                                <div className="timeline">

                                 
                                    <div className="timeline-item">
                                      
                                        <div className="timeline-icon">
                                            <div className="avatar text-center">
                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                            </div>
                                        </div>
                                 
                                        <div className="timeline-content">
                                            <div className="d-sm-flex justify-content-between">
                                                <div>
                                                    <p className="small mb-0"><b>Sam Lanson</b> update a playlist on webestica.</p>
                                                    <p className="small mb-0"><i className="bi bi-unlock-fill pe-1"></i>Public</p>
                                                </div>
                                                <p className="small ms-sm-3 mt-2 mt-sm-0 text-nowrap">Just now</p>
                                            </div>
                                        </div>
                                    </div>
                                    

                                 
                                    <div className="timeline-item">
                                      
                                        <div className="timeline-icon">
                                            <div className="avatar text-center">
                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" />
                                            </div>
                                        </div>
                                 
                                        <div className="timeline-content">
                                            <div className="d-sm-flex justify-content-between">
                                                <div>
                                                    <p className="small mb-0"><b>Billy Vasquez</b> save a <Link to="#!">link.</Link> </p>
                                                    <p className="small mb-0"><i className="bi bi-lock-fill pe-1"></i>only me</p>
                                                </div>
                                                <p className="small ms-sm-3 mt-2 mt-sm-0">2min</p>
                                            </div>
                                        </div>
                                    </div>
                                    

                                 
                                    <div className="timeline-item align-items-center">
                                      
                                        <div className="timeline-icon">
                                            <div className="avatar text-center">
                                                <div className="avatar-img rounded-circle bg-success"><span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">SM</span></div>
                                            </div>
                                        </div>
                                 
                                        <div className="timeline-content">
                                            <div className="d-sm-flex justify-content-between">
                                                <div>
                                                    <p className="small mb-0"> <b>Sam Lanson</b> liked <b> Frances Guerrero's </b> add comment.</p>
                                                    <p className="small mb-0">This is the best picture I have come across today.... </p>
                                                </div>
                                                <p className="small mb-0 ms-sm-3">1hr</p>
                                            </div>
                                        </div>
                                    </div>
                                    

                                 
                                    <div className="timeline-item align-items-center">
                                      
                                        <div className="timeline-icon">
                                            <div className="avatar text-center">
                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="" />
                                            </div>
                                        </div>
                                 
                                        <div className="timeline-content">
                                            <div className="d-sm-flex justify-content-between">
                                                <div>
                                                    <p className="small mb-0"><b>Judy Nguyen</b> likes <b>Jacqueline Miller</b> Photos. </p>
                                                    <p className="mb-0">✌️👌👍</p>
                                                </div>
                                                <p className="small ms-sm-3 mt-2 mt-sm-0">4hr</p>
                                            </div>
                                        </div>
                                    </div>
                                    

                                 
                                    <div className="timeline-item">
                                      
                                        <div className="timeline-icon">
                                            <div className="avatar text-center">
                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" />
                                            </div>
                                        </div>
                                 
                                        <div className="timeline-content">
                                            <div className="d-sm-flex justify-content-between">
                                                <div>
                                                    <p className="small mb-0"><b>Larry Lawson</b> </p>
                                                    <p className="small mb-2">Replied to your comment on Blogzine blog theme</p>
                                                    <small className="bg-light rounded p-2 d-block">
                                                        Yes, I am so excited to see it live. 👍
                                                    </small>
                                                </div>
                                                <p className="small ms-sm-3 mt-2 mt-sm-0">10hr</p>
                                            </div>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                          
                            <div className="card-footer border-0 py-3 text-center position-relative d-grid pt-0">
                             
                                <Link to="#!" role="button" className="btn btn-sm btn-loader btn-primary-soft" data-bs-toggle="button" aria-pressed="true">
                                    <span className="load-text"> Load more activity </span>
                                    <div className="load-icon">
                                        <div className="spinner-grow spinner-grow-sm" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                </Link>
                            
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
      

        </main>


    );
}

