import React from 'react';
import { Link } from 'react-router-dom';
export const Notifications = () => {
    return (
        <main>
            <div class="container">
                <div class="row g-4">
                   
                    <div class="col-lg-8 mx-auto">
                 
                        <div class="card">
                            <div class="card-header py-3 border-0 d-flex align-items-center justify-content-between">
                                <h1 class="h5 mb-0">Notifications</h1>
                             
                                <div class="dropdown">
                                    <Link to="#" class="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardNotiAction" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-three-dots"></i>
                                     </Link>
                                  
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction">
                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-check-lg fa-fw pe-2"></i>Mark all read </Link></li>
                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-bell-slash fa-fw pe-2"></i>Push notifications  </Link></li>
                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-bell fa-fw pe-2"></i>Email notifications  </Link></li>
                                    </ul>
                                </div>
                               
                            </div>
                            <div class="card-body p-2">
                                <ul class="list-unstyled">
                                  
                                    <li>
                                        <div class="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                                        
                                            <div class="avatar text-center">
                                                <img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" />
                                            </div>
                                         
                                            <div class="mx-sm-3 my-2 my-sm-0">
                                                <p class="small mb-2"><b>Judy Nguyen</b> sent you a friend request.</p>
                                              
                                                <div class="d-flex">
                                                    <button class="btn btn-sm py-1 btn-primary me-2">Accept </button>
                                                    <button class="btn btn-sm py-1 btn-danger-soft">Delete </button>
                                                </div>
                                            </div>
                                            <div class="d-flex ms-auto">
                                                <p class="small me-5 text-nowrap">Just now</p>
                                             
                                                <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                    <Link to="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-three-dots"></i>
                                                     </Link>
                                                  
                                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction1">
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-trash fa-fw pe-2"></i>Delete </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off  </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen  </Link></li>
                                                    </ul>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </li>
                                  
                                    <li>
                                        <div class="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                                        
                                            <div class="avatar text-center">
                                                <img class="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="" />
                                            </div>
                                         
                                            <div class="mx-sm-3 my-2 my-sm-0">
                                                <p class="small mb-2">Wish <b>Amanda Reed</b> a happy birthday (Nov 12)</p>
                                                <button class="btn btn-sm btn-outline-light py-1 me-2">Say happy birthday 🎂</button>
                                            </div>
                                           
                                            <div class="d-flex ms-auto">
                                                <p class="small me-5 text-nowrap">Just now</p>
                                             
                                                <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                    <Link to="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction2" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-three-dots"></i>
                                                     </Link>
                                                  
                                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction2">
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-trash fa-fw pe-2"></i>Delete </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off  </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen  </Link></li>
                                                    </ul>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </li>
                                  
                                    <li>
                                        <div class="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                                        
                                            <div class="avatar text-center">
                                                <div class="avatar-img rounded-circle bg-success"><span class="text-white position-absolute top-50 start-50 translate-middle fw-bold">WB</span></div>
                                            </div>
                                         
                                            <div class="mx-sm-3 my-2 my-sm-0">
                                                <Link class="small text-body stretched-link" to="#!"> Webestica has 15 like and 1 new activity </Link>
                                            </div>
                                           
                                            <div class="d-flex ms-auto">
                                                <p class="small me-5 text-nowrap">2 min</p>
                                             
                                                <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                    <Link to="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction3" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-three-dots"></i>
                                                     </Link>
                                                  
                                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction3">
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-trash fa-fw pe-2"></i>Delete </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off  </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen  </Link></li>
                                                    </ul>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </li>
                                  
                                  
                                    <li>
                                        <div class="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                                        
                                            <div class="avatar text-center">
                                                <div class="avatar-img rounded-circle bg-success"><span class="text-white position-absolute top-50 start-50 translate-middle fw-bold">WB</span></div>
                                            </div>
                                         
                                            <div class="mx-sm-3 my-2 my-sm-0">
                                                <Link class="stretched-link small text-body" to="#!"><b>Bootstrap in the news:</b> The search giant’s parent company, Alphabet, just joined an exclusive club of tech stocks. </Link>
                                            </div>
                                           
                                            <div class="d-flex ms-auto">
                                                <p class="small me-5 text-nowrap">8min</p>
                                             
                                                <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                    <Link to="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction5" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-three-dots"></i>
                                                     </Link>
                                                  
                                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction5">
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-trash fa-fw pe-2"></i>Delete </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off  </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen  </Link></li>
                                                    </ul>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </li>
                                  
                                    <li>
                                        <div class="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                                        
                                            <div class="avatar text-center">
                                                <img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" />
                                            </div>
                                         
                                            <div class="mx-sm-3 my-2 my-sm-0">
                                                <p class="small mb-0"><b>You have a Connection!</b> </p>
                                                <p class="small"> <Link to="@!"> @Samuel Bishop </Link> joined project Blogzine blog theme</p>
                                            </div>
                                           
                                            <div class="d-flex ms-auto">
                                                <p class="small me-5 text-nowrap">20min</p>
                                             
                                                <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                    <Link to="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction6" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-three-dots"></i>
                                                     </Link>
                                                  
                                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction6">
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-trash fa-fw pe-2"></i>Delete </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off  </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen  </Link></li>
                                                    </ul>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </li>
                                  
                                    <li>
                                        <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                        
                                            <div class="avatar text-center">
                                                <img class="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                            </div>
                                         
                                            <div class="mx-sm-3 my-2 my-sm-0">
                                                <Link to="#!" class="stretched-link small mb-0 text-secondary"><b>You have a Payout!</b>  </Link>
                                                <p class="small mb-0">Webestica LLC has sent you $1205 USD</p>
                                            </div>
                                           
                                            <div class="d-flex ms-auto">
                                                <p class="small me-5 text-nowrap">3hrs</p>
                                             
                                                <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                    <Link to="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction7" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-three-dots"></i>
                                                     </Link>
                                                  
                                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction7">
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-trash fa-fw pe-2"></i>Delete </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off  </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen  </Link></li>
                                                    </ul>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </li>
                                  
                                    <li>
                                        <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                        
                                            <div class="avatar text-center">
                                                <img class="avatar-img rounded-circle" src="assets/images/logo/08.svg" alt="" />
                                            </div>
                                         
                                            <div class="mx-sm-3 my-2 my-sm-0">
                                                <p class="small mb-0"><b>Order cancelled: #23685</b> </p>
                                                <p class="small mb-0">Order #23685 belonging to Amanda Reed has been cancelled</p>
                                                <Link class="btn btn-link btn-sm" to="#!"> <u> Review order </u> </Link>
                                            </div>
                                           
                                            <div class="d-flex ms-auto">
                                                <p class="small me-5 text-nowrap">5hrs</p>
                                             
                                                <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                    <Link to="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction8" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-three-dots"></i>
                                                     </Link>
                                                  
                                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction8">
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-trash fa-fw pe-2"></i>Delete </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off  </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen  </Link></li>
                                                    </ul>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </li>
                                  
                                    <li>
                                        <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                        
                                            <div class="avatar text-center">
                                                <img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                            </div>
                                         
                                            <div class="mx-sm-3 my-2 my-sm-0">
                                                <p class="small m-0">Congratulate <b>Joan Wallace</b> for graduating from <b>Microverse university</b></p>
                                                <p class="small mb-0">Order #23685 belonging to Amanda Reed has been cancelled</p>
                                                <Link class="btn btn-link btn-sm" to="#!"> <u> Say congrats </u> </Link>
                                            </div>
                                           
                                            <div class="d-flex ms-auto">
                                                <p class="small me-5 text-nowrap">5hrs</p>
                                             
                                                <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                    <Link to="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-three-dots"></i>
                                                     </Link>
                                                  
                                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-trash fa-fw pe-2"></i>Delete </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off  </Link></li>
                                                        <li><Link class="dropdown-item" to="#"> <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen  </Link></li>
                                                    </ul>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-footer border-0 py-3 text-center position-relative d-grid pt-0">
                          
                                <Link to="#!" role="button" class="btn btn-loader btn-primary-soft" data-bs-toggle="button" aria-pressed="true">
                                    <span class="load-text"> Load more notifications </span>
                                    <div class="load-icon">
                                        <div class="spinner-grow spinner-grow-sm" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                 </Link>
                              
                            </div>
                        </div>
                     
                    </div>
                </div> 
            </div>


        </main>
    );
}

