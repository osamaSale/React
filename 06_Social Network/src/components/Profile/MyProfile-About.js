import React from 'react';
import { Modals } from '../Modals';
import { Link } from 'react-router-dom';
import { MyProfileHeader } from './MyProfile-Header';

export const MyProfileAbout = () => {
    return (
        <div>
            <main>
                <div className="container" style={{marginTop: '80px'}}>
                    <div className="row g-4">
                         <div className="col-lg-8 vstack gap-4">
                         <MyProfileHeader />

                            <div className="card">
                                <div className="card-header border-0 pb-0">
                                    <h5 className="card-title"> Profile Info</h5>
                                </div>

                                <div className="card-body">
                                    <div className="rounded border px-3 py-2 mb-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6>Overview</h6>
                                            <div className="dropdown ms-auto">

                                                <Link className="nav nav-link text-secondary mb-0" to="#" id="aboutAction" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi bi-three-dots"></i>
                                                </Link>

                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutAction">
                                                    <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
                                                    <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-2"></i>Delete</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance. </p>
                                    </div>
                                    <div className="row g-4">
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center rounded border px-3 py-2">

                                                <p className="mb-0">
                                                    <i className="bi bi-calendar-date fa-fw me-2"></i> Born: <strong> October 20, 1990 </strong>
                                                </p>
                                                <div className="dropdown ms-auto">

                                                    <Link className="nav nav-link text-secondary mb-0" to="#" id="aboutAction2" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="bi bi-three-dots"></i>
                                                    </Link>

                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutAction2">
                                                        <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
                                                        <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-2"></i>Delete</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">

                                            <div className="d-flex align-items-center rounded border px-3 py-2">

                                                <p className="mb-0">
                                                    <i className="bi bi-heart fa-fw me-2"></i> Status: <strong> Single </strong>
                                                </p>
                                                <div className="dropdown ms-auto">

                                                    <Link className="nav nav-link text-secondary mb-0" to="#" id="aboutAction3" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="bi bi-three-dots"></i>
                                                    </Link>

                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutAction3">
                                                        <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
                                                        <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-2"></i>Delete</Link></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">

                                            <div className="d-flex align-items-center rounded border px-3 py-2">

                                                <p className="mb-0">
                                                    <i className="bi bi-briefcase fa-fw me-2"></i> <strong> Lead Developer </strong>
                                                </p>
                                                <div className="dropdown ms-auto">

                                                    <Link className="nav nav-link text-secondary mb-0" to="#" id="aboutAction4" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="bi bi-three-dots"></i>
                                                    </Link>

                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutAction4">
                                                        <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
                                                        <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-2"></i>Delete</Link></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">

                                            <div className="d-flex align-items-center rounded border px-3 py-2">

                                                <p className="mb-0">
                                                    <i className="bi bi-geo-alt fa-fw me-2"></i> Lives in: <strong> New Hampshire </strong>
                                                </p>
                                                <div className="dropdown ms-auto">

                                                    <Link className="nav nav-link text-secondary mb-0" to="#" id="aboutAction5" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="bi bi-three-dots"></i>
                                                    </Link>

                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutAction5">
                                                        <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
                                                        <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-2"></i>Delete</Link></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">
                                            <div className="d-flex align-items-center rounded border px-3 py-2">

                                                <p className="mb-0">
                                                    <i className="bi bi-geo-alt fa-fw me-2"></i> Joined on: <strong> Nov 26, 2019 </strong>
                                                </p>
                                                <div className="dropdown ms-auto">

                                                    <Link className="nav nav-link text-secondary mb-0" to="#" id="aboutAction6" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="bi bi-three-dots"></i>
                                                    </Link>

                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutAction6">
                                                        <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
                                                        <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-2"></i>Delete</Link></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">

                                            <div className="d-flex align-items-center rounded border px-3 py-2">

                                                <p className="mb-0">
                                                    <i className="bi bi-envelope fa-fw me-2"></i> Email: <strong> webestica@gmail.com </strong>
                                                </p>
                                                <div className="dropdown ms-auto">

                                                    <Link className="nav nav-link text-secondary mb-0" to="#" id="aboutAction7" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="bi bi-three-dots"></i>
                                                    </Link>

                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutAction7">
                                                        <li><Link className="dropdown-item" to="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
                                                        <li><Link className="dropdown-item" to="#"> <i className="bi bi-trash fa-fw pe-2"></i>Delete</Link></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6 position-relative">

                                            <Link className="btn btn-dashed rounded w-100" to="#!"> <i className="bi bi-plus-circle-dotted me-1"></i>Add a workplace</Link>

                                        </div>
                                        <div className="col-sm-6 position-relative">

                                            <Link className="btn btn-dashed rounded w-100" to="#!"> <i className="bi bi-plus-circle-dotted me-1"></i>Add a education</Link>

                                        </div>
                                    </div>
                                </div>

                            </div>



                            <div className="card">

                                <div className="card-header d-sm-flex justify-content-between border-0 pb-0">
                                    <h5 className="card-title">Interests</h5>
                                    <Link className="btn btn-primary-soft btn-sm" to="#!"> See all</Link>
                                </div>


                                <div className="card-body">
                                    <div className="row g-4">
                                        <div className="col-sm-6 col-lg-4">

                                            <div className="d-flex align-items-center position-relative">
                                                <div className="avatar">
                                                    <img className="avatar-img" src="assets/images/logo/04.svg" alt="" />
                                                </div>
                                                <div className="ms-2">
                                                    <h6 className="mb-0"> <Link className="stretched-link" to="#"> Oracle </Link></h6>
                                                    <p className="small mb-0">7,546,224 followers</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4">

                                            <div className="d-flex align-items-center position-relative">
                                                <div className="avatar">
                                                    <img className="avatar-img" src="assets/images/logo/13.svg" alt="" />
                                                </div>
                                                <div className="ms-2">
                                                    <h6 className="mb-0"> <Link className="stretched-link" to="#"> Apple </Link></h6>
                                                    <p className="small mb-0">102B followers</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6 col-lg-4">

                                            <div className="d-flex align-items-center position-relative">
                                                <div className="avatar">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/placeholder.jpg" alt="" />
                                                </div>
                                                <div className="ms-2">
                                                    <h6 className="mb-0"> <Link className="stretched-link" to="#"> Elon musk </Link></h6>
                                                    <p className="small mb-0"> CEO and Product Architect of Tesla, Inc 41B followers</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6 col-lg-4">

                                            <div className="d-flex align-items-center position-relative">
                                                <div className="avatar">
                                                    <img className="avatar-img" src="assets/images/events/04.jpg" alt="" />
                                                </div>
                                                <div className="ms-2">
                                                    <h6 className="mb-0"> <Link className="stretched-link" to="#"> The X Factor </Link></h6>
                                                    <p className="small mb-0">9,654 followers</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6 col-lg-4">

                                            <div className="d-flex align-items-center position-relative">
                                                <div className="avatar">
                                                    <img className="avatar-img rounded-circle" src="assets/images/logo/12.svg" alt="" />
                                                </div>
                                                <div className="ms-2">
                                                    <h6 className="mb-0"> <Link className="stretched-link" to="#"> Getbootstrap </Link></h6>
                                                    <p className="small mb-0">8,457,224 followers</p>
                                                </div>
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


            </main>
            <Modals />
        </div>
    );
}

