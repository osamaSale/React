import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom"


export const Modal = () => {
    let element = document.body
    function checkMode() {
        element.dataset.bsTheme = element.dataset.bsTheme === "light" ? "dark" : "light"
        localStorage.setItem("mode", element.dataset.bsTheme)
    }
    return (
        <div>
            {/*  <!-- Shop Cart --> */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <div className="text-start">
                        <h5 id="offcanvasRightLabel" className="mb-0 fs-4">Shop Cart</h5>
                        <small>Location in 382480</small>
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="">
                        <div className="alert alert-danger p-2" role="alert">
                            You’ve got FREE delivery. Start <Link to="#!" className="alert-link">checkout now!</Link>
                        </div>
                        <ul className="list-group list-group-flush">

                            <li className="list-group-item py-3 ps-0 border-top">

                                <div className="row align-items-center">

                                    <div className="col-6 col-md-6 col-lg-7">
                                        <div className="d-flex">
                                            <img src="./assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                                            <div className="ms-3">

                                                <Link to="../pages/shop-single.html" className="text-inherit">
                                                    <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                                                </Link>
                                                <span><small className="text-muted">.98 / lb</small></span>

                                                <div className="mt-2 small lh-1"> <Link to="#!"
                                                    className="text-decoration-none text-inherit"> <span
                                                        className="me-1 align-text-bottom">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                            className="feather feather-trash-2 text-success">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></span><span className="text-muted">Remove</span></Link></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4 col-md-3 col-lg-3">

                                        <div className="input-group input-spinner  ">
                                            <input type="button" value="-" className="button-minus btn  btn-sm" data-field="quantity" />
                                            <input type="number" step="1" max="10" value="1" name="quantity" className="quantity-field form-control-sm form-input" />
                                            <input type="button" value="+" className="button-plus btn btn-sm " data-field="quantity" />
                                        </div>

                                    </div>

                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold">$5.00</span>

                                    </div>
                                </div>

                            </li>

                            <li className="list-group-item py-3 ps-0">

                                <div className="row align-items-center">
                                    <div className="col-6 col-md-6 col-lg-7">
                                        <div className="d-flex">
                                            <img src="./assets/images/products/product-img-2.jpg" alt="Ecommerce"
                                                className="icon-shape icon-xxl" />
                                            <div className="ms-3">
                                                <Link to="../pages/shop-single.html" className="text-inherit">
                                                    <h6 className="mb-0">NutriChoice Digestive </h6>
                                                </Link>
                                                <span><small className="text-muted">250g</small></span>

                                                <div className="mt-2 small lh-1"> <Link to="#!"
                                                    className="text-decoration-none text-inherit"> <span
                                                        className="me-1 align-text-bottom">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                            className="feather feather-trash-2 text-success">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></span><span className="text-muted">Remove</span></Link></div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="col-4 col-md-3 col-lg-3">

                                        <div className="input-group input-spinner  ">
                                            <input type="button" value="-" className="button-minus  btn  btn-sm "
                                                data-field="quantity" />
                                            <input type="number" step="1" max="10" value="1" name="quantity"
                                                className="quantity-field form-control-sm form-input   " />
                                            <input type="button" value="+" className="button-plus btn btn-sm "
                                                data-field="quantity" />
                                        </div>
                                    </div>

                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold text-danger">$20.00</span>
                                        <div className="text-decoration-line-through text-muted small">$26.00</div>
                                    </div>
                                </div>

                            </li>

                            <li className="list-group-item py-3 ps-0">

                                <div className="row align-items-center">

                                    <div className="col-6 col-md-6 col-lg-7">
                                        <div className="d-flex">
                                            <img src="./assets/images/products/product-img-3.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                                            <div className="ms-3">

                                                <Link to="../pages/shop-single.html" className="text-inherit">
                                                    <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                                                </Link>
                                                <span><small className="text-muted">1 kg</small></span>

                                                <div className="mt-2 small lh-1"> <Link to="#!"
                                                    className="text-decoration-none text-inherit"> <span
                                                        className="me-1 align-text-bottom">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                            className="feather feather-trash-2 text-success">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></span><span className="text-muted">Remove</span></Link></div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-4 col-md-3 col-lg-3">

                                        <div className="input-group input-spinner  ">
                                            <input type="button" value="-" className="button-minus  btn  btn-sm "
                                                data-field="quantity" />
                                            <input type="number" step="1" max="10" value="1" name="quantity"
                                                className="quantity-field form-control-sm form-input   " />
                                            <input type="button" value="+" className="button-plus btn btn-sm "
                                                data-field="quantity" />
                                        </div>
                                    </div>

                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold">$15.00</span>
                                        <div className="text-decoration-line-through text-muted small">$20.00</div>
                                    </div>
                                </div>

                            </li>

                            <li className="list-group-item py-3 ps-0">

                                <div className="row align-items-center">
                                    <div className="col-6 col-md-6 col-lg-7">
                                        <div className="d-flex">
                                            <img src="./assets/images/products/product-img-4.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                                            <div className="ms-3">

                                                <Link to="../pages/shop-single.html" className="text-inherit">
                                                    <h6 className="mb-0">Onion Flavour Potato</h6>
                                                </Link>
                                                <span><small className="text-muted">250g</small></span>

                                                <div className="mt-2 small lh-1"> <Link to="#!"
                                                    className="text-decoration-none text-inherit"> <span
                                                        className="me-1 align-text-bottom">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                            className="feather feather-trash-2 text-success">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></span><span className="text-muted">Remove</span></Link></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4 col-md-3 col-lg-3">

                                        <div className="input-group input-spinner  ">
                                            <input type="button" value="-" className="button-minus  btn  btn-sm "
                                                data-field="quantity" />
                                            <input type="number" step="1" max="10" value="1" name="quantity"
                                                className="quantity-field form-control-sm form-input   " />
                                            <input type="button" value="+" className="button-plus btn btn-sm "
                                                data-field="quantity" />
                                        </div>
                                    </div>

                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold">$15.00</span>
                                        <div className="text-decoration-line-through text-muted small">$20.00</div>
                                    </div>
                                </div>

                            </li>

                            <li className="list-group-item py-3 ps-0 border-bottom">

                                <div className="row align-items-center">
                                    <div className="col-6 col-md-6 col-lg-7">
                                        <div className="d-flex">
                                            <img src="./assets/images/products/product-img-5.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                                            <div className="ms-3">

                                                <Link to="../pages/shop-single.html" className="text-inherit">
                                                    <h6 className="mb-0">Salted Instant Popcorn </h6>
                                                </Link>
                                                <span><small className="text-muted">100g</small></span>

                                                <div className="mt-2 small lh-1"> <Link to="#!"
                                                    className="text-decoration-none text-inherit"> <span
                                                        className="me-1 align-text-bottom">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                            className="feather feather-trash-2 text-success">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></span><span className="text-muted">Remove</span></Link></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4 col-md-3 col-lg-3">

                                        <div className="input-group input-spinner  ">
                                            <input type="button" value="-" className="button-minus  btn  btn-sm "
                                                data-field="quantity" />
                                            <input type="number" step="1" max="10" value="1" name="quantity"
                                                className="quantity-field form-control-sm form-input   " />
                                            <input type="button" value="+" className="button-plus btn btn-sm "
                                                data-field="quantity" />
                                        </div>
                                    </div>

                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold">$15.00</span>
                                        <div className="text-decoration-line-through text-muted small">$25.00</div>
                                    </div>
                                </div>

                            </li>

                        </ul>

                        <div className="d-flex justify-content-between mt-4">
                            <Link to="#!" className="btn btn-primary">Continue Shopping</Link>
                            <Link to="#!" className="btn btn-dark">Update Cart</Link>
                        </div>

                    </div>
                </div>
            </div>
            {/* login and register */}
            <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">Sign Up</h5>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" id="fullName" placeholder="Enter Your Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter Email address" />
                                </div>

                                <div className="mb-5">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                                    <small className="form-text">By Signup, you agree to our <Link>Terms of Service</Link> & <Link>Privacy
                                        Policy</Link></small>
                                </div>

                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </form>
                        </div>
                        <div className="modal-footer border-0 justify-content-center">

                            Already have an account? <Link to="#">Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar */}
            <div className=" position-fixed bottom-0 w-100  z-1 shadow-lg d-block d-lg-none text-center">
                <div className="d-flex align-items-center ">

                    <div className="w-25 icon-hover py-4">
                        <button className="navbar-toggler collapsed d-lg-none" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                className="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                                <path
                                    d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>
                    </div>


                    <div className="  w-25 ms-2 py-4  icon-hover">
                        <Link to="#" className="text-inherit" onClick={checkMode}>
                            <div className="text-center">
                                <div className="position-relative d-inline-block">
                                    <i className="bi bi-moon fs-4"></i>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="w-25 ms-2 py-4  icon-hover">
                        <Link className="text-inherit" data-bs-toggle="modal" data-bs-target="#userModal">
                            <div className="text-center">
                                <div className="">
                                    <i className="bi bi-person-circle fs-4"></i>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div className="w-25 ms-2 py-4  icon-hover">
                        <Link className="text-inherit">
                            <div className="text-center">
                                <div className="">
                                    <i className="bi bi-archive fs-4"></i>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div className="w-25 ms-2 py-4  icon-hover">
                        <Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" to="#offcanvasExample" role="button"
                            aria-controls="offcanvasRight" className="text-inherit">
                            <div className="text-center">
                                <div className="">
                                    <i className="bi bi-cart2 fs-4"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-25 ms-2 py-4 icon-hover">
                        <Link className="text-inherit" >
                            <i className="bi bi-bookmark-heart fs-4"></i>
                        </Link>

                    </div>
                </div>
            </div>
            {/* View Product*/}
            <div class="modal fade" id="quickViewModal" tabIndex="-1" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body p-8">
                            <div class="position-absolute top-0 end-0 me-3 mt-3">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <Carousel showArrows={false} dynamicHeight={false} showIndicators={false}>
                                        <div>
                                            <img src="./assets/images/products/product-single-img-1.jpg" alt='' />
                                        </div>
                                        <div class="thumbnails-img" >
                                            <img src="./assets/images/products/product-single-img-2.jpg" alt='' />
                                        </div >
                                        <div class="thumbnails-img">
                                            <img src="./assets/images/products/product-single-img-3.jpg" alt='' />
                                        </div>
                                        <div class="thumbnails-img">
                                            <img src="./assets/images/products/product-single-img-4.jpg" alt='' />
                                        </div>
                                     

                                    </Carousel>
                                    {/* <div class="product productModal" id="productModal">
                                        <div class="zoom" onmousemove="zoom(event)" style={{ backgroundImage: "url(./assets/images/products/product-single-img-1.jpg)"}}>

                                            <img src="./assets/images/products/product-single-img-1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div class="zoom" onmousemove="zoom(event)" style={{ backgroundImage: "url(./assets/images/products/product-single-img-1.jpg)"}}>

                                                <img src="./assets/images/products/product-single-img-2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="zoom" onmousemove="zoom(event)" style={{ backgroundImage: "url(./assets/images/products/product-single-img-1.jpg)"}}>

                                                <img src="./assets/images/products/product-single-img-3.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="zoom" onmousemove="zoom(event)" style={{ backgroundImage: "url(./assets/images/products/product-single-img-1.jpg)"}}>

                                                <img src="./assets/images/products/product-single-img-4.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* <div class="product-tools">
                                        <div class="thumbnails row g-3" id="productModalThumbnails">
                                            <div class="col-3" >
                                                <div class="thumbnails-img">

                                                    <img src="./assets/images/products/product-single-img-1.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="thumbnails-img">

                                                    <img src="./assets/images/products/product-single-img-2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="thumbnails-img">

                                                    <img src="./assets/images/products/product-single-img-3.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="thumbnails-img">

                                                    <img src="./assets/images/products/product-single-img-4.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div class="col-lg-6">
                                    <div class="ps-lg-8 mt-6 mt-lg-0">
                                        <Link to="#!" class="mb-4 d-block">Bakery Biscuits</Link>
                                        <h2 class="mb-1 h1">Napolitanke Ljesnjak</h2>
                                        <div class="mb-4">
                                            <small class="text-warning">
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-half"></i></small><Link to="#" class="ms-2">(30 reviews)</Link>
                                        </div>
                                        <div class="fs-4">
                                            <span class="fw-bold text-dark">$32</span>
                                            <span class="text-decoration-line-through text-muted">$35</span><span><small
                                                class="fs-6 ms-2 text-danger">26% Off</small></span>
                                        </div>
                                        <hr class="my-6" />
                                        <div class="mb-4">
                                            <button type="button" class="btn btn-outline-secondary">
                                                250g
                                            </button>
                                            <button type="button" class="btn btn-outline-secondary">
                                                500g
                                            </button>
                                            <button type="button" class="btn btn-outline-secondary">
                                                1kg
                                            </button>
                                        </div>
                                        <div>

                                            <div class="input-group input-spinner  ">
                                                <input type="button" value="-" class="button-minus  btn  btn-sm "
                                                    data-field="quantity" />
                                                <input type="number" step="1" max="10" value="1" name="quantity"
                                                    class="quantity-field form-control-sm form-input   " />
                                                <input type="button" value="+" class="button-plus btn btn-sm "
                                                    data-field="quantity" />
                                            </div>
                                        </div>
                                        <div class="mt-3 row justify-content-start g-2 align-items-center">

                                            <div class="col-lg-4 col-md-5 col-6 d-grid">


                                                <button type="button" class="btn btn-primary">
                                                    <i class="feather-icon icon-shopping-bag me-2"></i>Add to
                                                    cart
                                                </button>
                                            </div>
                                            <div class="col-md-4 col-5">

                                                <Link class="btn btn-light" to="#" data-bs-toggle="tooltip" data-bs-html="true"
                                                    aria-label="Compare"><i class="bi bi-arrow-left-right"></i></Link>
                                                <Link class="btn btn-light" to="#!" data-bs-toggle="tooltip" data-bs-html="true"
                                                    aria-label="Wishlist"><i class="feather-icon icon-heart"></i></Link>
                                            </div>
                                        </div>
                                        <hr class="my-6" />
                                        <div>
                                            <table class="table table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td>Product Code:</td>
                                                        <td>FBB00255</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Availability:</td>
                                                        <td>In Stock</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Type:</td>
                                                        <td>Fruits</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shipping:</td>
                                                        <td>
                                                            <small>01 day shipping.<span class="text-muted">( Free pickup
                                                                today)</span></small>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};


