import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../Modal';

export const Shop = () => {
    return (
        <div className=" mt-8 mb-lg-14 mb-8 mt-10">
            <div className="container-fluid">
                <div className="row gx-10">
                    <aside className="col-lg-3 col-md-4 mb-6 mb-md-0">
                        <div className="offcanvas offcanvas-start offcanvas-collapse w-md-50 " tabIndex="-1" id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">
                            <div className="offcanvas-header d-lg-none">
                                <h5 className="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body ps-lg-2 pt-lg-0">
                                <div className="mb-8">
                                    <h5 className="mb-3">Categories</h5>

                                    <ul className="nav nav-category" id="categoryCollapseMenu">
                                        <li className="nav-item border-bottom w-100 " >
                                            <Link to="#" className="nav-link collapsed" data-bs-toggle="collapse"
                                                data-bs-target="#categoryFlushOne" aria-expanded="false" aria-controls="categoryFlushOne">Dairy, Bread & Eggs
                                                <i className="fa fa-arrow-right"></i>
                                            </Link>

                                            <div id="categoryFlushOne" className="accordion-collapse collapse"
                                                data-bs-parent="#categoryCollapseMenu">
                                                <div>
                                                    <ul className="nav flex-column ms-3">

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Milk</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Milk Drinks</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Curd & Yogurt</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Eggs</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Bread</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Buns & Bakery</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Butter & More</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Cheese</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Paneer & Tofu</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Cream & Whitener</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Condensed Milk</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Vegan Drinks</Link></li>
                                                    </ul>



                                                </div>
                                            </div>

                                        </li>

                                        <li className="nav-item border-bottom w-100 " ><Link to="#"
                                            className="nav-link collapsed" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Snacks &
                                            Munchies <i className="fa fa-arrow-right"></i>
                                        </Link>


                                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                                data-bs-parent="#categoryCollapseMenu">
                                                <div>



                                                    <ul className="nav flex-column ms-3">

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Chips & Crisps</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Nachos</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Popcorn</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Bhujia & Mixtures</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Namkeen Snacks</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Healthy Snacks</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Cakes & Rolls</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Energy Bars</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Papad & Fryums</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Rusks & Wafers</Link></li>
                                                    </ul>


                                                </div>
                                            </div>

                                        </li>
                                        <li className="nav-item border-bottom w-100 " > <Link
                                            to="#" className="nav-link collapsed" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Fruits & Vegetables <i className="fa fa-arrow-right"></i></Link>


                                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                                data-bs-parent="#categoryCollapseMenu">
                                                <div>

                                                    <ul className="nav flex-column ms-3">

                                                        <li className="nav-item">
                                                            <Link className="nav-link active" aria-current="page" to="#!">Fresh Vegetables</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Herbs & Seasonings</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Fresh Fruits</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Organic Fruits & Vegetables</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Cuts & Sprouts</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Exotic Fruits & Veggies</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Flower Bouquets, Bunches</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item border-bottom w-100 "> <Link
                                            to="#" className="nav-link collapsed" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">Cold Drinks & Juices <i className="fa fa-arrow-right"></i></Link>


                                            <div id="flush-collapseFour" className="accordion-collapse collapse"
                                                data-bs-parent="#categoryCollapseMenu">
                                                <div>
                                                    <ul className="nav flex-column ms-3">

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Soft Drinks</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Fruit Juices</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Coldpress</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Energy Drinks</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Water & Ice Cubes</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Soda & Mixers</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Concentrates & Syrups</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Detox & Energy Drinks</Link></li>

                                                        <li className="nav-item"><Link to="#!" className="nav-link">Juice Collection</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>



                                        <li className="nav-item border-bottom w-100 " > <Link
                                            to="#" className="nav-link collapsed" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">Breakfast & Instant Food <i className="fa fa-arrow-right"></i></Link>


                                            <div id="flush-collapseFive" className="accordion-collapse collapse"
                                                data-bs-parent="#categoryCollapseMenu">
                                                <div>

                                                    <ul className="nav flex-column ms-3">

                                                        <li className="nav-item">
                                                            <Link className="nav-link active" aria-current="page" to="#!">Batter</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Breakfast Cereal</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Noodles, Pasta & Soup</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Frozen Non-Veg Snackss</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Frozen Veg</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Vermicelli</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Instant Mixes</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item border-bottom w-100 " > <Link to="#"
                                            className="nav-link collapsed" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">Bakery & Biscuits <i className="fa fa-arrow-right"></i></Link>


                                            <div id="flush-collapseSix" className="accordion-collapse collapse"
                                                data-bs-parent="#categoryCollapseMenu">
                                                <div>

                                                    <ul className="nav flex-column ms-3">

                                                        <li className="nav-item">
                                                            <Link className="nav-link active" aria-current="page" to="#!">Cookies</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Glucose & Marie</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Sweet & Salty</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Healthy & Digestive</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Cream Biscuits</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Rusks & Wafers</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Cakes & Rolls</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">
                                                                Buns & Bakery</Link>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item border-bottom w-100 " > <Link
                                            to="#" className="nav-link collapsed" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">Chicken, Meat & Fish <i className="fa fa-arrow-right"></i></Link>


                                            <div id="flush-collapseSeven" className="accordion-collapse collapse"
                                                data-bs-parent="#categoryCollapseMenu">
                                                <div>

                                                    <ul className="nav flex-column ms-3">

                                                        <li className="nav-item">
                                                            <Link className="nav-link active" aria-current="page" to="#!">Chicken</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Sausage, Salami & Ham</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Exotic Meat</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Eggs</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className="nav-link" to="#!">Frozen Non-Veg Snacks</Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <div className="mb-8">

                                    <h5 className="mb-3">Stores</h5>
                                    <div className="my-4">

                                        <input type="search" className="form-control" placeholder="Search by store" />
                                    </div>

                                    <div className="form-check mb-2">

                                        <input className="form-check-input" type="checkbox" value="" id="eGrocery" checked />
                                        <label className="form-check-label" htmlFor="eGrocery">
                                            E-Grocery
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">

                                        <input className="form-check-input" type="checkbox" value="" id="DealShare" />
                                        <label className="form-check-label" htmlFor="DealShare">
                                            DealShare
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">

                                        <input className="form-check-input" type="checkbox" value="" id="Dmart" />
                                        <label className="form-check-label" htmlFor="Dmart">
                                            DMart
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">

                                        <input className="form-check-input" type="checkbox" value="" id="Blinkit" />
                                        <label className="form-check-label" htmlFor="Blinkit">
                                            Blinkit
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">

                                        <input className="form-check-input" type="checkbox" value="" id="BigBasket" />
                                        <label className="form-check-label" htmlFor="BigBasket">
                                            BigBasket
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">

                                        <input className="form-check-input" type="checkbox" value="" id="StoreFront" />
                                        <label className="form-check-label" htmlFor="StoreFront">
                                            StoreFront
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">

                                        <input className="form-check-input" type="checkbox" value="" id="Spencers" />
                                        <label className="form-check-label" htmlFor="Spencers">
                                            Spencers
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">

                                        <input className="form-check-input" type="checkbox" value="" id="onlineGrocery" />
                                        <label className="form-check-label" htmlFor="onlineGrocery">
                                            Online Grocery
                                        </label>
                                    </div>

                                </div>


                                <div className="mb-8">

                                    <h5 className="mb-3">Rating</h5>
                                    <div>

                                        <div className="form-check mb-2">

                                            <input className="form-check-input" type="checkbox" value="" id="ratingFive" />
                                            <label className="form-check-label" htmlFor="ratingFive">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning "></i>
                                                <i className="bi bi-star-fill text-warning "></i>
                                                <i className="bi bi-star-fill text-warning "></i>
                                                <i className="bi bi-star-fill text-warning "></i>
                                            </label>
                                        </div>

                                        <div className="form-check mb-2">

                                            <input className="form-check-input" type="checkbox" value="" id="ratingFour" checked />
                                            <label className="form-check-label" htmlFor="ratingFour">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning "></i>
                                                <i className="bi bi-star-fill text-warning "></i>
                                                <i className="bi bi-star-fill text-warning "></i>
                                                <i className="bi bi-star text-warning"></i>
                                            </label>
                                        </div>

                                        <div className="form-check mb-2">

                                            <input className="form-check-input" type="checkbox" value="" id="ratingThree" />
                                            <label className="form-check-label" htmlFor="ratingThree">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning "></i>
                                                <i className="bi bi-star-fill text-warning "></i>
                                                <i className="bi bi-star text-warning"></i>
                                                <i className="bi bi-star text-warning"></i>
                                            </label>
                                        </div>

                                        <div className="form-check mb-2">

                                            <input className="form-check-input" type="checkbox" value="" id="ratingTwo" />
                                            <label className="form-check-label" htmlFor="ratingTwo">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star text-warning"></i>
                                                <i className="bi bi-star text-warning"></i>
                                                <i className="bi bi-star text-warning"></i>
                                            </label>
                                        </div>

                                        <div className="form-check mb-2">

                                            <input className="form-check-input" type="checkbox" value="" id="ratingOne" />
                                            <label className="form-check-label" htmlFor="ratingOne">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star text-warning"></i>
                                                <i className="bi bi-star text-warning"></i>
                                                <i className="bi bi-star text-warning"></i>
                                                <i className="bi bi-star text-warning"></i>
                                            </label>
                                        </div>
                                    </div>


                                </div>
                                <div className="mb-8 position-relative">

                                    <div className="position-absolute p-5 py-8">
                                        <h3 className="mb-0">Fresh Fruits </h3>
                                        <p>Get Upto 25% Off</p>
                                        <Link to="#" className="btn btn-dark">Shop Now<i className="feather-icon icon-arrow-right ms-1"></i></Link>
                                    </div>

                                    <img src="../assets/images/banner/assortment-citrus-fruits.png" alt=""
                                        className="img-fluid rounded " />

                                </div>
                            </div>
                        </div>
                    </aside>
                    <section className="col-lg-9 col-md-12">
                        <div className="d-lg-flex justify-content-between align-items-center">
                            <div className="mb-3 mb-lg-0">
                                <p className="mb-0"> <span>24 </span> Products found </p>
                            </div>


                            <div className="d-md-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>

                                        <Link to="./Shop-list.html" className="text-muted me-3"><i className="bi bi-list-ul"></i></Link>
                                        <Link to="./Shop Grid Filter.html" className=" me-3 active"><i className="bi bi-grid"></i></Link>
                                        <Link to="./shop-grid-3-column.html" className="me-3 text-muted"><i className="bi bi-grid-3x3-gap"></i></Link>
                                    </div>
                                    <div className="ms-2 d-lg-none">
                                        <Link className="btn btn-outline-gray-400 text-muted" data-bs-toggle="offcanvas" to="#offcanvasCategory" role="button" aria-controls="offcanvasCategory"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                            className="feather feather-filter me-2">
                                            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                        </svg> Filters</Link>
                                    </div>
                                </div>

                                <div className="d-flex mt-2 mt-lg-0">
                                    <div className="me-2 flex-grow-1">

                                        <select className="form-select">
                                            <option selected>Show: 50</option>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                        </select></div>
                                    <div>

                                        <select className="form-select">
                                            <option selected>Sort by: Featured</option>
                                            <option value="Low to High">Price: Low to High</option>
                                            <option value="High to Low"> Price: High to Low</option>
                                            <option value="Release Date"> Release Date</option>
                                            <option value="Avg. Rating"> Avg. Rating</option>

                                        </select></div>

                                </div>

                            </div>
                        </div>

                        <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">


                            <div className="col">

                                <div className="card card-product">
                                    <div className="card-body">


                                        <div className="text-center position-relative ">
                                            <div className=" position-absolute top-0 start-0">
                                                <span className="badge bg-danger">Sale</span>
                                            </div>
                                            <Link to="shop-single.html">
                                                <img src="../assets/images/products/product-img-1.jpg"
                                                    alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></Link>

                                            <div className="card-product-action">
                                                <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></Link>
                                                <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true"
                                                    title="Wishlist"><i className="bi bi-heart"></i></Link>
                                                <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i
                                                    className="bi bi-arrow-left-right"></i></Link>
                                            </div>
                                        </div>

                                        <div className="text-small mb-1"><Link to="#!" className="text-decoration-none text-muted"><small>Snack &
                                            Munchies</small></Link></div>
                                        <h2 className="fs-6"><Link to="shop-single.html" className="text-inherit text-decoration-none">Haldiram's Sev Bhujia</Link></h2>
                                        <div>

                                            <small className="text-warning"> <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5(149)</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div><span >$18</span> <span
                                                className="text-decoration-line-through text-muted">$24</span>
                                            </div>

                                            <div><Link to="#!" className="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg> Add</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">

                                <div className="card card-product">
                                    <div className="card-body">

                                        <div className="text-center position-relative">
                                            <div className=" position-absolute top-0 start-0">
                                                <span className="badge bg-success">14%</span>
                                            </div>

                                            <Link to="shop-single.html">
                                                <img src="../assets/images/products/product-img-2.jpg"
                                                    alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></Link>

                                            <div className="card-product-action">
                                                <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></Link>
                                                <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i
                                                    className="bi bi-heart"></i></Link>
                                                <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i
                                                    className="bi bi-arrow-left-right"></i></Link>
                                            </div>
                                        </div>

                                        <div className="text-small mb-1"><Link to="#!" className="text-decoration-none text-muted"><small>Bakery &
                                            Biscuits</small></Link></div>
                                        <h2 className="fs-6"><Link to="shop-single.html" className="text-inherit text-decoration-none">NutriChoice Digestive </Link>
                                        </h2>
                                        <div className="text-warning">

                                            <small> <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5 (25)</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div><span >$24</span>
                                            </div>

                                            <div><Link to="#!" className="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg> Add</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">

                                <div className="card card-product">
                                    <div className="card-body">

                                        <div className="text-center position-relative"> <Link to="shop-single.html"><img
                                            src="../assets/images/products/product-img-3.jpg" alt="Grocery Ecommerce Template"
                                            className="mb-3 img-fluid" /></Link>

                                            <div className="card-product-action">
                                                <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></Link>
                                                <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i
                                                    className="bi bi-heart"></i></Link>
                                                <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i
                                                    className="bi bi-arrow-left-right"></i></Link>
                                            </div>
                                        </div>

                                        <div className="text-small mb-1"><Link to="#!" className="text-decoration-none text-muted"><small>Bakery &
                                            Biscuits</small></Link></div>
                                        <h2 className="fs-6"><Link to="shop-single.html" className="text-inherit text-decoration-none">Cadbury 5 Star Chocolate</Link>
                                        </h2>
                                        <div className="text-warning">

                                            <small> <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i></small> <span className="text-muted small">5 (469)</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div><span >$32</span> <span
                                                className="text-decoration-line-through text-muted">$35</span>
                                            </div>

                                            <div><Link to="#!" className="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg> Add</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">

                                <div className="card card-product">
                                    <div className="card-body">

                                        <div className="text-center position-relative">
                                            <div className=" position-absolute top-0">
                                                <span className="badge bg-danger">Hot</span>
                                            </div>

                                            <Link to="shop-single.html">
                                                <img src="../assets/images/products/product-img-4.jpg"
                                                    alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></Link>

                                            <div className="card-product-action">
                                                <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></Link>
                                                <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i
                                                    className="bi bi-heart"></i></Link>
                                                <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i
                                                    className="bi bi-arrow-left-right"></i></Link>
                                            </div>
                                        </div>

                                        <div className="text-small mb-1"><Link to="#!" className="text-decoration-none text-muted"><small>Snack &
                                            Munchies</small></Link></div>
                                        <h2 className="fs-6"><Link to="shop-single.html" className="text-inherit text-decoration-none">Onion Flavour Potato</Link></h2>
                                        <div className="text-warning">

                                            <small> <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-half"></i>
                                                <i className="bi bi-star"></i></small> <span className="text-muted small">3.5 (456)</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div><span >$3</span> <span
                                                className="text-decoration-line-through text-muted">$5</span>
                                            </div>

                                            <div><Link to="#!" className="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg> Add</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">

                                <div className="card card-product">
                                    <div className="card-body">

                                        <div className="text-center position-relative"> <Link to="shop-single.html"><img
                                            src="../assets/images/products/product-img-5.jpg" alt="Grocery Ecommerce Template"
                                            className="mb-3 img-fluid" /></Link>

                                            <div className="card-product-action">
                                                <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></Link>
                                                <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i
                                                    className="bi bi-heart"></i></Link>
                                                <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i
                                                    className="bi bi-arrow-left-right"></i></Link>
                                            </div>
                                        </div>

                                        <div className="text-small mb-1"><Link to="#!" className="text-decoration-none text-muted"><small>Instant
                                            Food</small></Link></div>
                                        <h2 className="fs-6"><Link to="shop-single.html" className="text-inherit text-decoration-none">Salted Instant Popcorn </Link>
                                        </h2>
                                        <div className="text-warning">

                                            <small> <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5 (39)</span>
                                        </div>
                                        <div className="d-flex justify-content-between mt-4">
                                            <div><span >$13</span> <span
                                                className="text-decoration-line-through text-muted">$18</span>
                                            </div>

                                            <div><Link to="#!" className="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg> Add</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">

                                <div className="card card-product">
                                    <div className="card-body">


                                        <div className="text-center position-relative ">
                                            <div className=" position-absolute top-0">
                                                <span className="badge bg-danger">Sale</span>
                                            </div>
                                            <Link to="shop-single.html">
                                                <img src="../assets/images/products/product-img-6.jpg"
                                                    alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></Link>

                                            <div className="card-product-action">
                                                <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></Link>
                                                <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true"
                                                    title="Wishlist"><i className="bi bi-heart"></i></Link>
                                                <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i
                                                    className="bi bi-arrow-left-right"></i></Link>
                                            </div>
                                        </div>

                                        <div className="text-small mb-1"><Link to="#!" className="text-decoration-none text-muted"><small>Dairy, Bread
                                            &
                                            Eggs</small></Link></div>
                                        <h2 className="fs-6"><Link to="shop-single.html" className="text-inherit text-decoration-none">Blueberry Greek Yogurt</Link>
                                        </h2>
                                        <div>

                                            <small className="text-warning"> <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5 (189)</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div><span >$18</span> <span
                                                className="text-decoration-line-through text-muted">$24</span>
                                            </div>

                                            <div><Link to="#!" className="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg> Add</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">

                                <div className="card card-product">
                                    <div className="card-body">

                                        <div className="text-center position-relative"> <Link to="shop-single.html"><img
                                            src="../assets/images/products/product-img-7.jpg" alt="Grocery Ecommerce Template"
                                            className="mb-3 img-fluid" /></Link>

                                            <div className="card-product-action">
                                                <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></Link>
                                                <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i
                                                    className="bi bi-heart"></i></Link>
                                                <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i
                                                    className="bi bi-arrow-left-right"></i></Link>
                                            </div>
                                        </div>

                                        <div className="text-small mb-1"><Link to="#!" className="text-decoration-none text-muted"><small>Dairy, Bread
                                            &
                                            Eggs</small></Link></div>
                                        <h2 className="fs-6"><Link to="shop-single.html" className="text-inherit text-decoration-none">Britannia Cheese Slices</Link>
                                        </h2>
                                        <div className="text-warning">

                                            <small> <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i></small> <span className="text-muted small">5 (345)</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div><span >$24</span>
                                            </div>

                                            <div><Link to="#!" className="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg> Add</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">

                                <div className="card card-product">
                                    <div className="card-body">

                                        <div className="text-center position-relative"> <Link to="shop-single.html"><img
                                            src="../assets/images/products/product-img-8.jpg" alt="Grocery Ecommerce Template"
                                            className="mb-3 img-fluid" /></Link>

                                            <div className="card-product-action">
                                                <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></Link>
                                                <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i
                                                    className="bi bi-heart"></i></Link>
                                                <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i
                                                    className="bi bi-arrow-left-right"></i></Link>
                                            </div>
                                        </div>

                                        <div className="text-small mb-1"><Link to="#!" className="text-decoration-none text-muted"><small>Instant
                                            Food</small></Link></div>
                                        <h2 className="fs-6"><Link to="shop-single.html" className="text-inherit text-decoration-none">Kellogg's Original Cereals</Link>
                                        </h2>
                                        <div className="text-warning">

                                            <small> <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-half"></i></small> <span className="text-muted small">4 (90)</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div><span >$32</span> <span
                                                className="text-decoration-line-through text-muted">$35</span>
                                            </div>

                                            <div><Link to="#!" className="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg> Add</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">

                                <div className="card card-product">
                                    <div className="card-body">

                                        <div className="text-center position-relative"> <Link to="shop-single.html"><img
                                            src="../assets/images/products/product-img-9.jpg" alt="Grocery Ecommerce Template"
                                            className="mb-3 img-fluid" /></Link>

                                            <div className="card-product-action">
                                                <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></Link>
                                                <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i
                                                    className="bi bi-heart"></i></Link>
                                                <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i
                                                    className="bi bi-arrow-left-right"></i></Link>
                                            </div>
                                        </div>

                                        <div className="text-small mb-1"><Link to="#!" className="text-decoration-none text-muted"><small>Snack &
                                            Munchies</small></Link></div>
                                        <h2 className="fs-6"><Link to="shop-single.html" className="text-inherit text-decoration-none">Slurrp Millet Chocolate </Link>
                                        </h2>
                                        <div className="text-warning">

                                            <small> <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5 (67)</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div><span >$3</span> <span
                                                className="text-decoration-line-through text-muted">$5</span>
                                            </div>

                                            <div><Link to="#!" className="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg> Add</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">

                                <div className="card card-product">
                                    <div className="card-body">

                                        <div className="text-center position-relative"> <Link to="shop-single.html"><img
                                            src="../assets/images/products/product-img-10.jpg" alt="Grocery Ecommerce Template"
                                            className="mb-3 img-fluid" /></Link>

                                            <div className="card-product-action">

                                                <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                                                    className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></Link>
                                                <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i
                                                    className="bi bi-heart"></i></Link>
                                                <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i
                                                    className="bi bi-arrow-left-right"></i></Link>
                                            </div>
                                        </div>

                                        <div className="text-small mb-1"><Link to="#!" className="text-decoration-none text-muted"><small>Dairy, Bread
                                            &
                                            Eggs</small></Link></div>
                                        <h2 className="fs-6"><Link to="shop-single.html" className="text-inherit text-decoration-none">Amul Butter - 500 g</Link></h2>
                                        <div className="text-warning">

                                            <small> <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-half"></i>
                                                <i className="bi bi-star"></i></small> <span className="text-muted small">3.5 (89)</span>
                                        </div>
                                        <div className="d-flex justify-content-between mt-4">
                                            <div><span >$13</span> <span
                                                className="text-decoration-line-through text-muted">$18</span>
                                            </div>

                                            <div><Link to="#!" className="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg> Add</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-8">
                            <div className="col">

                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item disabled">
                                            <Link className="page-link border  mx-1" to="#" aria-label="Previous">
                                                <i className="bi bi-arrow-left"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item "><Link className="page-link  mx-1 active" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link mx-1" to="#">2</Link></li>

                                        <li className="page-item"><Link className="page-link mx-1" to="#">...</Link></li>
                                        <li className="page-item"><Link className="page-link mx-1" to="#">12</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link mx-1" to="#" aria-label="Next">
                                                <i className="bi bi-arrow-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Modal />
        </div>
    );
}

