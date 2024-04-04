import React from 'react';
import { Link } from 'react-router-dom';
import { MyProfileHeader } from './MyProfile-Header';

export const MyProfileEvents = () => {
    return (
        <main>

            <div className="container">
                <div className="row g-4">

      
                    <div className="col-lg-8 vstack gap-4">
                        <MyProfileHeader />

                        <div className="card">
                      
                            <div className="card-header d-sm-flex align-items-center justify-content-between border-0 pb-0">
                                <h5 className="card-title mb-sm-0">Discover Events</h5>
                             
                                <Link className="btn btn-primary-soft btn-sm" to="#"> <i className="fa-solid fa-plus pe-1"></i> Create events</Link>
                            </div>
                          
                            <div className="card-body">
                               
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>Upcoming event:</strong> The learning conference on Sep 19 2022
                                    <Link href="events.html" className="btn btn-xs btn-success ms-md-4">View event</Link>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                             
                                <div className="row">
                                    <div className="d-sm-flex align-items-center">
                                   
                                        <div className="avatar avatar-xl">
                                            <Link href="#!"><img className="avatar-img rounded border border-white border-3" src="assets/images/events/01.jpg" alt="" /></Link>
                                        </div>
                                        <div className="ms-sm-4 mt-2 mt-sm-0">
                                           
                                            <h5 className="mb-1"><Link href="event-details.html"> Comedy on the green </Link></h5>
                                            <ul className="nav nav-stack small">
                                                <li className="nav-item">
                                                    <i className="bi bi-calendar-check pe-1"></i> Mon, Sep 25, 2020 at 9:30 AM
                                                </li>
                                                <li className="nav-item">
                                                    <i className="bi bi-geo-alt pe-1"></i> San francisco
                                                </li>
                                                <li className="nav-item">
                                                    <i className="bi bi-people pe-1"></i> 77 going
                                                </li>
                                            </ul>
                                        </div>
                                      
                                        <div className="d-flex mt-3 ms-auto">
                                            <div className="dropdown">
                                               
                                                <button className="icon-md btn btn-secondary-soft" type="button" id="profileAction" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi bi-three-dots"></i>
                                                </button>
                                            
                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileAction">
                                                    <li><Link className="dropdown-item" href="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Share profile in a message</Link></li>
                                                    <li><Link className="dropdown-item" href="#"> <i className="bi bi-file-earmark-pdf fa-fw pe-2"></i>Save your profile to PDF</Link></li>
                                                    <li><Link className="dropdown-item" href="#"> <i className="bi bi-lock fa-fw pe-2"></i>Lock profile</Link></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><Link className="dropdown-item" href="#"> <i className="bi bi-gear fa-fw pe-2"></i>Profile settings</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
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
                                        <Link className="btn btn-primary-soft btn-sm" href="#!"> <i className="fa-solid fa-plus"></i> </Link>
                                    </div>
                                 
                                    <div className="card-body position-relative pt-0">
                                       
                                        <div className="d-flex">
                                       
                                            <div className="avatar me-3">
                                                <Link href="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/08.svg" alt="" /> </Link>
                                            </div>
                                           
                                            <div>
                                                <h6 className="card-title mb-0"><Link href="#!"> Apple Computer, Inc. </Link></h6>
                                                <p className="small">May 2015 – Present Employment Duration 8 mos <Link className="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </Link></p>
                                            </div>
                                        </div>
                                    

                                       
                                        <div className="d-flex">
                                       
                                            <div className="avatar me-3">
                                                <Link href="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/09.svg" alt="" /> </Link>
                                            </div>
                                           
                                            <div>
                                                <h6 className="card-title mb-0"><Link href="#!"> Microsoft Corporation </Link></h6>
                                                <p className="small">May 2017 – Present Employment Duration 1 yrs 5 mos <Link className="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </Link></p>
                                            </div>
                                        </div>
                                    

                                       
                                        <div className="d-flex">
                                       
                                            <div className="avatar me-3">
                                                <Link href="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/10.svg" alt="" /> </Link>
                                            </div>
                                           
                                            <div>
                                                <h6 className="card-title mb-0"><Link href="#!"> Tata Consultancy Services. </Link></h6>
                                                <p className="small mb-0">May 2022 – Present Employment Duration 6 yrs 10 mos <Link className="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </Link></p>
                                            </div>
                                        </div>
                                    

                                    </div>
                                  
                                </div>
                            </div>
                           
                            <div className="col-md-6 col-lg-12">
                                <div className="card">
                              
                                    <div className="card-header d-sm-flex justify-content-between border-0">
                                        <h5 className="card-title">Photos</h5>
                                        <Link className="btn btn-primary-soft btn-sm" href="#!"> See all photo</Link>
                                    </div>
                                 
                                    <div className="card-body position-relative pt-0">
                                        <div className="row g-2">
                                       
                                            <div className="col-6">
                                                <Link href="assets/images/albums/01.jpg" data-gallery="image-popup" data-glightbox="">
                                                    <img className="rounded img-fluid" src="assets/images/albums/01.jpg" alt="" />
                                                </Link>
                                            </div>
                                       
                                            <div className="col-6">
                                                <Link href="assets/images/albums/02.jpg" data-gallery="image-popup" data-glightbox="">
                                                    <img className="rounded img-fluid" src="assets/images/albums/02.jpg" alt="" />
                                                </Link>
                                            </div>
                                       
                                            <div className="col-4">
                                                <Link href="assets/images/albums/03.jpg" data-gallery="image-popup" data-glightbox="">
                                                    <img className="rounded img-fluid" src="assets/images/albums/03.jpg" alt="" />
                                                </Link>
                                            </div>
                                       
                                            <div className="col-4">
                                                <Link href="assets/images/albums/04.jpg" data-gallery="image-popup" data-glightbox="">
                                                    <img className="rounded img-fluid" src="assets/images/albums/04.jpg" alt="" />
                                                </Link>
                                            </div>
                                       
                                            <div className="col-4">
                                                <Link href="assets/images/albums/05.jpg" data-gallery="image-popup" data-glightbox="">
                                                    <img className="rounded img-fluid" src="assets/images/albums/05.jpg" alt="" />
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
                                        <Link className="btn btn-primary-soft btn-sm" href="#!"> See all friends</Link>
                                    </div>
                                 
                                    <div className="card-body position-relative pt-0">
                                        <div className="row g-3">

                                            <div className="col-6">
                                              
                                                <div className="card shadow-none text-center h-100">
                                                 
                                                    <div className="card-body p-2 pb-0">
                                                        <div className="avatar avatar-story avatar-xl">
                                                            <Link href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="" /></Link>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <Link href="#!"> Amanda Reed </Link></h6>
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
                                                            <Link href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" /></Link>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <Link href="#!"> Samuel Bishop </Link></h6>
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
                                                            <Link href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" /></Link>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <Link href="#"> Bryan Knight </Link></h6>
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
                                                            <Link href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /></Link>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <Link href="#!"> Amanda Reed </Link></h6>
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

