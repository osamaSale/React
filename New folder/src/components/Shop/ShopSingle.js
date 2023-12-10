import React from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { Link, useParams } from 'react-router-dom';

export const ShopSingle = () => {
    let { id } = useParams()
    const { products } = useSelector((store) => store.data)
    const product = products.find((e) => e.id === parseInt(id))
    const image = products.filter((e) => e.id !== parseInt(id) && e.brand === product.brand && e.device === product.device)
    return (
        <div>
            {product !== undefined &&
                <section className="mt-8">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <Carousel showArrows={false} dynamicHeight={false} showIndicators={false} className='product'>
                                    <div className="zoom" style={{ backgroundImage: `${product && product.image}` }}>
                                        <img src={product && product.image} alt='' />
                                    </div>
                                    {image && image.map((row) => {
                                        return <div className="thumbnails-img" key={row.id} >
                                            <img src={row && row.image} alt=''/>
                                        </div >
                                    })}
                                </Carousel>
                            </div>
                            <div className="col-md-6">
                            <div className="d-flex flex-column mb-3">
                                        <div className="p-2">
                                            <h4 className="title text-primary">
                                                {product && product.name}
                                            </h4>
                                        </div>
                                        <div className="p-2">
                                            <div className="d-flex flex-row ">
                                                <div className="text-warning mb-1 me-2">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                    <span className="ms-1">
                                                        4.5
                                                    </span>
                                                </div>
                                                <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                                <span className="text-success ms-2">{product.stock}</span>
                                            </div>
                                        </div>
                                        <div className="p-2">
                                            <span className="h5">${product && product.price}</span>
                                            <span className="text-muted">/ Per box</span>
                                        </div>
                                        <div className="p-2">
                                            <p className='lh-lg text-muted'> {product && product.description}</p>
                                        </div>
                                        <div className="p-2">
                                            <div className="row">
                                                <dt className="col-3">Type:</dt>
                                                <dd className="col-9">{product && product.device}</dd>

                                                <dt className="col-3">Color</dt>
                                                <dd className="col-9 text-capitalize">{product && product.color}</dd>



                                                <dt className="col-3">Brand</dt>
                                                <dd className="col-9">{product && product.brand}</dd>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="p-2">
                                            <div className="row">
                                                <div className="col-md-4 col-6">
                                                    <label className="mb-2">Color</label>
                                                    <select name='color' className="form-select border border-secondary" style={{ height: "35px" }}
                                                      /*   onChange={(e) => setColor(e.target.value)}
                                                        value={color} */
                                                    >
                                                        <option >Select Color</option>
                                                        <option value={"black"}>Black</option>
                                                        <option value={"yellow"}>Yellow</option>
                                                        <option value={"red"}>Red</option>
                                                        <option value={"silver"}>Silver</option>
                                                        <option value={"blue"}>Blue</option>
                                                        <option value={"green"}>Green</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4 col-6 mb-3">
                                                    <label className="mb-2 d-block">Quantity</label>
                                                    <div className="input-group mb-3" style={{ width: "170px" }}>
                                                        <button className="btn btn-white border border-secondary px-3" type="button"
                                                            /* disabled={quantity > 1 ? false : true}
                                                            onClick={() => setQuantity(quantity - 1)} */>
                                                            <i className="fas fa-minus"></i>
                                                        </button>
                                                        <input type="text" className="form-control text-center border border-secondary" /* placeholder={quantity} value={quantity} */ />
                                                        <button className="btn btn-white border border-secondary px-3" type="button"
                                                            /* onClick={() => setQuantity(quantity + 1)} */>
                                                            <i className="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row  p-2">
                                            <button className="me-2 border rounded py-1 px-3 nav-link "
                                        /*         disabled={findUserCarts && findUserCarts.find(up => (up.productid === product.id))} */
                                              /*   onClick={() => {
                                                    if (user) {
                                                        let data = {
                                                            userId: user.id,
                                                            productid: product.id,
                                                            price: product.price,
                                                            device: product.device,
                                                            name: product.name,
                                                            image: product.image,
                                                            color: color,
                                                            editPrice: parseFloat(product.price) * quantity,
                                                            quantity: quantity
                                                        }

                                                        dispatch(insertCatrs(data)).then(() => update())
                                                    } else {
                                                        if (window.confirm("You Must login")) {
                                                            navigate('/login')
                                                        }
                                                    }

                                                }} */
                                            >
                                               {/*  {findUserCarts && findUserCarts.length > 0 ?
                                                    findUserCarts.find(up => (up.productid === product.id)) ?
                                                        <> <i className="fa-solid fa-cart-shopping me-2"></i> In Cart</> :
                                                        <><i className="fa-solid fa-plus me-2"></i> Add To Cart </>
                                                    : <><i className="fa-solid fa-plus me-2"></i> Add To Cart </>
                                                } */}

                                            </button>
                                            <button className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                            /*                     disabled={findUserSave && findUserSave.find(up => (up.productid === product.id))} */
                                             /*    onClick={() => {
                                                    if (user) {
                                                        let data = {
                                                            userId: user.id,
                                                            productid: product.id,
                                                            price: product.price,
                                                            device: product.device,
                                                            name: product.name,
                                                            image: product.image
                                                        }

                                                        dispatch(createSave(data)).then(() => update())
                                                    } else {
                                                        if (window.confirm("You Must login")) {
                                                            navigate('/login')
                                                        }
                                                    }

                                                }} */
                                            >
                                               {/*  {findUserSave && findUserSave.length > 0 ?
                                                    findUserSave.find(up => (up.productid === product.id)) ?
                                                        <> <i className="fas fa-heart text-danger me-2"></i> Wishlist</> :
                                                        <><i className="fa-regular fa-heart me-2"></i>Wishlist</>
                                                    : <><i className="fa-regular fa-heart me-2"></i>Wishlist</>
                                                } */}
dddd
                                            </button>

                                        </div>
                                    </div>
                                {/* <div className="ps-lg-10 mt-6 mt-md-0">

                                    <Link to="#!" className="mb-4 d-block">{product && product.brand}</Link>

                                    <h1 className="mb-1">{product && product.name}</h1>
                                    <div className="mb-4">

                                        <small className="text-warning">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                        </small>
                                        <Link to="#" className="ms-2">(30 reviews)</Link>
                                    </div>
                                    <div className="fs-4">

                                        <span className="fw-bold me-2">$32</span>
                                        <span className="text-decoration-line-through text-muted">$35</span>
                                        <span><small className="fs-6 ms-2 text-danger">26% Off</small></span>
                                    </div>

                                    <hr className="my-6" />
                                    <div className="mb-5">
                                        <button type="button" className="btn btn-outline-secondary">250g</button>

                                        <button type="button" className="btn btn-outline-secondary">500g</button>

                                        <button type="button" className="btn btn-outline-secondary">1kg</button>
                                    </div>
                                    <div>

                                        <div className="input-group input-spinner">
                                            <input type="button" value="-" className="button-minus btn btn-sm" data-field="quantity" />
                                            <input type="number" step="1" max="10" value="1" name="quantity" className="quantity-field form-control-sm form-input" />
                                            <input type="button" value="+" className="button-plus btn btn-sm" data-field="quantity" />
                                        </div>
                                    </div>
                                    <div className="mt-3 row justify-content-start g-2 align-items-center">
                                        <div className="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">


                                            <button type="button" className="btn btn-primary">
                                                <i className="feather-icon icon-shopping-bag me-2"></i>
                                                Add to cart
                                            </button>
                                        </div>
                                        <div className="col-md-4 col-4">

                                            <Link className="btn border me-2" to="#" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare"><i className="bi bi-arrow-left-right"></i></Link>
                                            <Link className="btn border" to="shop-wishlist.html" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist"><i className="bi bi-suit-heart-fill"></i></Link>
                                        </div>
                                    </div>

                                    <hr className="my-6" />
                                    <div>

                                        <table className="table table-borderless mb-0">
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
                                                        <small>
                                                            01 day shipping.
                                                            <span className="text-muted">( Free pickup today)</span>
                                                        </small>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-8">

                                        <div className="dropdown">
                                            <Link className="btn btn-outline-secondary dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Share</Link>

                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link className="dropdown-item" to="#">
                                                        <i className="bi bi-facebook me-2"></i>
                                                        Facebook
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="#">
                                                        <i className="bi bi-twitter me-2"></i>
                                                        Twitter
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="#">
                                                        <i className="bi bi-instagram me-2"></i>
                                                        Instagram
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            }
            <section className="mt-lg-14 mt-8">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav nav-pills nav-lb-tab" id="myTab" role="tablist">

                                <li className="nav-item" role="presentation">

                                    <button
                                        className="nav-link active"
                                        id="product-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#product-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="product-tab-pane"
                                        aria-selected="true">
                                        Product Details
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">

                                    <button
                                        className="nav-link"
                                        id="details-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#details-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="details-tab-pane"
                                        aria-selected="false">
                                        Information
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">

                                    <button
                                        className="nav-link"
                                        id="reviews-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#reviews-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="reviews-tab-pane"
                                        aria-selected="false">
                                        Reviews
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">

                                    <button
                                        className="nav-link"
                                        id="sellerInfo-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#sellerInfo-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="sellerInfo-tab-pane"
                                        aria-selected="false"
                                        disabled>
                                        Seller Info
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content" id="myTabContent">

                                <div className="tab-pane fade show active" id="product-tab-pane" role="tabpanel" aria-labelledby="product-tab" tabindex="0">
                                    <div className="my-8">
                                        <div className="mb-5">

                                            <h4 className="mb-1">Nutrient Value & Benefits</h4>
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc
                                                sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit.
                                            </p>
                                        </div>
                                        <div className="mb-5">
                                            <h5 className="mb-1">Storage Tips</h5>
                                            <p className="mb-0">
                                                Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus
                                                facilisis ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </div>

                                        <div className="mb-5">
                                            <h5 className="mb-1">Unit</h5>
                                            <p className="mb-0">3 units</p>
                                        </div>
                                        <div className="mb-5">
                                            <h5 className="mb-1">Seller</h5>
                                            <p className="mb-0">DMart Pvt. LTD</p>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">Disclaimer</h5>
                                            <p className="mb-0">
                                                Image shown is a representation and may slightly vary from the actual product. Every effort is made to maintain accuracy of all information displayed.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="details-tab-pane" role="tabpanel" aria-labelledby="details-tab" tabindex="0">
                                    <div className="my-8">
                                        <div className="row">
                                            <div className="col-12">
                                                <h4 className="mb-4">Details</h4>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <table className="table table-striped">

                                                    <tbody>
                                                        <tr>
                                                            <th>Weight</th>
                                                            <td>1000 Grams</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Ingredient Type</th>
                                                            <td>Vegetarian</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Brand</th>
                                                            <td>Dmart</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Item Package Quantity</th>
                                                            <td>1</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Form</th>
                                                            <td>Larry the Bird</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Manufacturer</th>
                                                            <td>Dmart</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Net Quantity</th>
                                                            <td>340.0 Gram</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Product Dimensions</th>
                                                            <td>9.6 x 7.49 x 18.49 cm</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <table className="table table-striped">

                                                    <tbody>
                                                        <tr>
                                                            <th>ASIN</th>
                                                            <td>SB0025UJ75W</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Best Sellers Rank</th>
                                                            <td>#2 in Fruits</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Date First Available</th>
                                                            <td>30 April 2022</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Item Weight</th>
                                                            <td>500g</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Generic Name</th>
                                                            <td>Banana Robusta</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabindex="0">
                                    <div className="my-8">

                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="me-lg-12 mb-6 mb-md-0">
                                                    <div className="mb-5">

                                                        <h4 className="mb-3">Customer reviews</h4>
                                                        <span>

                                                            <small className="text-warning">
                                                                <i className="bi bi-star-fill"></i>
                                                                <i className="bi bi-star-fill"></i>
                                                                <i className="bi bi-star-fill"></i>
                                                                <i className="bi bi-star-fill"></i>
                                                                <i className="bi bi-star-half"></i>
                                                            </small>
                                                            <span className="ms-3">4.1 out of 5</span>
                                                            <small className="ms-3">11,130 global ratings</small>
                                                        </span>
                                                    </div>
                                                    <div className="mb-8">

                                                        <div className="d-flex align-items-center mb-2">
                                                            <div className="text-nowrap me-3 text-muted">
                                                                <span className="d-inline-block align-middle text-muted">5</span>
                                                                <i className="bi bi-star-fill ms-1 small text-warning"></i>
                                                            </div>
                                                            <div className="w-100">
                                                                <div className="progress" style={{ height: "6px" }}>
                                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                            <span className="text-muted ms-3">53%</span>
                                                        </div>

                                                        <div className="d-flex align-items-center mb-2">
                                                            <div className="text-nowrap me-3 text-muted">
                                                                <span className="d-inline-block align-middle text-muted">4</span>
                                                                <i className="bi bi-star-fill ms-1 small text-warning"></i>
                                                            </div>
                                                            <div className="w-100">
                                                                <div className="progress" style={{ height: "6px" }}>
                                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div>
                                                                </div>
                                                            </div>
                                                            <span className="text-muted ms-3">22%</span>
                                                        </div>

                                                        <div className="d-flex align-items-center mb-2">
                                                            <div className="text-nowrap me-3 text-muted">
                                                                <span className="d-inline-block align-middle text-muted">3</span>
                                                                <i className="bi bi-star-fill ms-1 small text-warning"></i>
                                                            </div>
                                                            <div className="w-100">
                                                                <div className="progress" style={{ height: "6px" }}>
                                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "35%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="35"></div>
                                                                </div>
                                                            </div>
                                                            <span className="text-muted ms-3">14%</span>
                                                        </div>

                                                        <div className="d-flex align-items-center mb-2">
                                                            <div className="text-nowrap me-3 text-muted">
                                                                <span className="d-inline-block align-middle text-muted">2</span>
                                                                <i className="bi bi-star-fill ms-1 small text-warning"></i>
                                                            </div>
                                                            <div className="w-100">
                                                                <div className="progress" style={{ height: "6px" }}>
                                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "22%" }} aria-valuenow="22" aria-valuemin="0" aria-valuemax="22"></div>
                                                                </div>
                                                            </div>
                                                            <span className="text-muted ms-3">5%</span>
                                                        </div>

                                                        <div className="d-flex align-items-center mb-2">
                                                            <div className="text-nowrap me-3 text-muted">
                                                                <span className="d-inline-block align-middle text-muted">1</span>
                                                                <i className="bi bi-star-fill ms-1 small text-warning"></i>
                                                            </div>
                                                            <div className="w-100">
                                                                <div className="progress" style={{ height: "6px" }}>
                                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "14%" }} aria-valuenow="14" aria-valuemin="0" aria-valuemax="14"></div>
                                                                </div>
                                                            </div>
                                                            <span className="text-muted ms-3">7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-grid">
                                                        <h4>Review this product</h4>
                                                        <p className="mb-0">Share your thoughts with other customers.</p>
                                                        <Link to="#" className="btn btn-outline-gray-400 mt-4 text-muted">Write the Review</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="mb-10">
                                                    <div className="d-flex justify-content-between align-items-center mb-8">
                                                        <div>

                                                            <h4>Reviews</h4>
                                                        </div>
                                                        <div>
                                                            <select className="form-select">
                                                                <option selected>Top Reviews</option>
                                                                <option value="Most Recent">Most Recent</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex border-bottom pb-6 mb-6">


                                                        <img src="assets/images/avatar/avatar-10.jpg" alt="" className="rounded-circle avatar-lg" />
                                                        <div className="ms-5">
                                                            <h6 className="mb-1">Shankar Subbaraman</h6>

                                                            <p className="small">
                                                                <span className="text-muted">30 December 2022</span>
                                                                <span className="text-primary ms-3 fw-bold">Verified Purchase</span>
                                                            </p>

                                                            <div className="mb-2">
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <span className="ms-3 me-2 fw-bold">Need to recheck the weight at delivery point</span>
                                                            </div>

                                                            <p>
                                                                Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between.
                                                                FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .
                                                            </p>
                                                            <div>
                                                                <div className="border icon-shape icon-lg border-2">

                                                                    <img src="../assets/images/products/product-img-1.jpg" alt="" className="img-fluid" />
                                                                </div>
                                                                <div className="border icon-shape icon-lg border-2 ms-1">

                                                                    <img src="../assets/images/products/product-img-2.jpg" alt="" className="img-fluid" />
                                                                </div>
                                                                <div className="border icon-shape icon-lg border-2 ms-1">

                                                                    <img src="../assets/images/products/product-img-3.jpg" alt="" className="img-fluid" />
                                                                </div>
                                                            </div>

                                                            <div className="d-flex justify-content-end mt-4">
                                                                <Link to="#" className="text-muted">
                                                                    <i className="feather-icon icon-thumbs-up me-1"></i>
                                                                    Helpful
                                                                </Link>
                                                                <Link to="#" className="text-muted ms-4">
                                                                    <i className="feather-icon icon-flag me-2"></i>
                                                                    Report abuse
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex border-bottom pb-6 mb-6 pt-4">

                                                        <img src="../assets/images/avatar/avatar-12.jpg" alt="" className="rounded-circle avatar-lg" />
                                                        <div className="ms-5">
                                                            <h6 className="mb-1">Robert Thomas</h6>

                                                            <p className="small">
                                                                <span className="text-muted">29 December 2022</span>
                                                                <span className="text-primary ms-3 fw-bold">Verified Purchase</span>
                                                            </p>

                                                            <div className="mb-2">
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star text-warning"></i>
                                                                <span className="ms-3 me-2 fw-bold">Need to recheck the weight at delivery point</span>
                                                            </div>

                                                            <p>
                                                                Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between.
                                                                FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .
                                                            </p>


                                                            <div className="d-flex justify-content-end mt-4">
                                                                <Link to="#" className="text-muted">
                                                                    <i className="feather-icon icon-thumbs-up me-1"></i>
                                                                    Helpful
                                                                </Link>
                                                                <Link to="#" className="text-muted ms-4">
                                                                    <i className="feather-icon icon-flag me-2"></i>
                                                                    Report abuse
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex border-bottom pb-6 mb-6 pt-4">

                                                        <img src="../assets/images/avatar/avatar-9.jpg" alt="" className="rounded-circle avatar-lg" />
                                                        <div className="ms-5">
                                                            <h6 className="mb-1">Barbara Tay</h6>

                                                            <p className="small">
                                                                <span className="text-muted">28 December 2022</span>
                                                                <span className="text-danger ms-3 fw-bold">Unverified Purchase</span>
                                                            </p>

                                                            <div className="mb-2">
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star text-warning"></i>
                                                                <span className="ms-3 me-2 fw-bold">Need to recheck the weight at delivery point</span>
                                                            </div>

                                                            <p>Everytime i ordered from fresh i got greenish yellow bananas just like i wanted so go for it , its happens very rare that u get over riped ones.</p>


                                                            <div className="d-flex justify-content-end mt-4">
                                                                <Link to="#" className="text-muted">
                                                                    <i className="feather-icon icon-thumbs-up me-1"></i>
                                                                    Helpful
                                                                </Link>
                                                                <Link to="#" className="text-muted ms-4">
                                                                    <i className="feather-icon icon-flag me-2"></i>
                                                                    Report abuse
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex border-bottom pb-6 mb-6 pt-4">

                                                        <img src="../assets/images/avatar/avatar-8.jpg" alt="" className="rounded-circle avatar-lg" />
                                                        <div className="ms-5 flex-grow-1">
                                                            <h6 className="mb-1">Sandra Langevin</h6>

                                                            <p className="small">
                                                                <span className="text-muted">8 December 2022</span>
                                                                <span className="text-danger ms-3 fw-bold">Unverified Purchase</span>
                                                            </p>

                                                            <div className="mb-2">
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star-fill text-warning"></i>
                                                                <i className="bi bi-star text-warning"></i>
                                                                <span className="ms-3 me-2 fw-bold">Great product</span>
                                                            </div>

                                                            <p>Great product & package. Delivery can be expedited.</p>


                                                            <div className="d-flex justify-content-end mt-4">
                                                                <Link to="#" className="text-muted">
                                                                    <i className="feather-icon icon-thumbs-up me-1"></i>
                                                                    Helpful
                                                                </Link>
                                                                <Link to="#" className="text-muted ms-4">
                                                                    <i className="feather-icon icon-flag me-2"></i>
                                                                    Report abuse
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Link to="#" className="btn btn-outline-gray-400 text-muted">Read More Reviews</Link>
                                                    </div>
                                                </div>
                                                <div>

                                                    <h3 className="mb-5">Create Review</h3>
                                                    <div className="border-bottom py-4 mb-4">
                                                        <h4 className="mb-3">Overall rating</h4>
                                                        <div className="rater"></div>
                                                    </div>
                                                    <div className="border-bottom py-4 mb-4">
                                                        <h4 className="mb-0">Rate Features</h4>
                                                        <div className="my-5">
                                                            <h5>Flavor</h5>
                                                            <div className="rater"></div>
                                                        </div>
                                                        <div className="my-5">
                                                            <h5>Value for money</h5>
                                                            <div className="rater"></div>
                                                        </div>
                                                        <div className="my-5">
                                                            <h5>Scent</h5>
                                                            <div className="rater"></div>
                                                        </div>
                                                    </div>

                                                    <div className="border-bottom py-4 mb-4">
                                                        <h5>Add a headline</h5>
                                                        <input type="text" className="form-control" placeholder="What’s most important to know" />
                                                    </div>
                                                    <div className="border-bottom py-4 mb-4">
                                                        <h5>Add a photo or video</h5>
                                                        <p>Shoppers find images and videos more helpful than text alone.</p>

                                                        <div id="my-dropzone" className="dropzone mt-4 border-dashed rounded-2 min-h-0"></div>
                                                    </div>
                                                    <div className="py-4 mb-4">

                                                        <h5>Add a written review</h5>
                                                        <textarea className="form-control" rows="3" placeholder="What did you like or dislike? What did you use this product for?"></textarea>
                                                    </div>

                                                    <div className="d-flex justify-content-end">
                                                        <Link to="#" className="btn btn-primary">Submit Review</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="sellerInfo-tab-pane" role="tabpanel" aria-labelledby="sellerInfo-tab" tabindex="0">...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="my-lg-14 my-14">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">

                            <h3>Related Items</h3>
                        </div>
                    </div>

                    <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">

                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">


                                    <div className="text-center position-relative">
                                        <div className="position-absolute top-0 start-0">
                                            <span className="badge bg-danger">Sale</span>
                                        </div>
                                        <Link to="#!">

                                            <img src="../assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                                        </Link>

                                        <div className="card-product-action">
                                            <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                            </Link>
                                            <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></Link>
                                            <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></Link>
                                        </div>
                                    </div>

                                    <div className="text-small mb-1">
                                        <Link to="#!" className="text-decoration-none text-muted"><small>Snack & Munchies</small></Link>
                                    </div>
                                    <h2 className="fs-6"><Link to="#!" className="text-inherit text-decoration-none">Haldiram's Sev Bhujia</Link></h2>
                                    <div>

                                        <small className="text-warning">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                        </small>
                                        <span className="text-muted small">4.5(149)</span>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="me-2">$18</span>
                                            <span className="text-decoration-line-through text-muted">$24</span>
                                        </div>

                                        <div>
                                            <Link to="#!" className="btn btn-primary btn-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">

                                    <div className="text-center position-relative">
                                        <Link to="#!"><img src="../assets/images/products/product-img-2.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></Link>

                                        <div className="card-product-action">
                                            <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                            </Link>
                                            <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></Link>
                                            <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></Link>
                                        </div>
                                    </div>

                                    <div className="text-small mb-1">
                                        <Link to="#!" className="text-decoration-none text-muted"><small>Bakery & Biscuits</small></Link>
                                    </div>
                                    <h2 className="fs-6"><Link to="#!" className="text-inherit text-decoration-none">NutriChoice Digestive</Link></h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                        </small>
                                        <span className="text-muted small">4.5 (25)</span>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div><span className="me-2">$24</span></div>

                                        <div>
                                            <Link to="#!" className="btn btn-primary btn-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">

                                    <div className="text-center position-relative">
                                        <Link to="#!"><img src="../assets/images/products/product-img-3.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></Link>

                                        <div className="card-product-action">
                                            <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                            </Link>
                                            <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></Link>
                                            <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></Link>
                                        </div>
                                    </div>

                                    <div className="text-small mb-1">
                                        <Link to="#!" className="text-decoration-none text-muted"><small>Bakery & Biscuits</small></Link>
                                    </div>
                                    <h2 className="fs-6"><Link to="#!" className="text-inherit text-decoration-none">Cadbury 5 Star Chocolate</Link></h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </small>
                                        <span className="text-muted small">5 (469)</span>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="me-2">$32</span>
                                            <span className="text-decoration-line-through text-muted">$35</span>
                                        </div>

                                        <div>
                                            <Link to="#!" className="btn btn-primary btn-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">

                                    <div className="text-center position-relative">
                                        <Link to="#!"><img src="../assets/images/products/product-img-4.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></Link>

                                        <div className="card-product-action">
                                            <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                            </Link>
                                            <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></Link>
                                            <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></Link>
                                        </div>
                                    </div>

                                    <div className="text-small mb-1">
                                        <Link to="#!" className="text-decoration-none text-muted"><small>Snack & Munchies</small></Link>
                                    </div>
                                    <h2 className="fs-6"><Link to="#!" className="text-inherit text-decoration-none">Onion Flavour Potato</Link></h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                            <i className="bi bi-star"></i>
                                        </small>
                                        <span className="text-muted small">3.5 (456)</span>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="me-2">$3</span>
                                            <span className="text-decoration-line-through text-muted">$5</span>
                                        </div>

                                        <div>
                                            <Link to="#!" className="btn btn-primary btn-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">

                                    <div className="text-center position-relative">
                                        <Link to="#!"><img src="../assets/images/products/product-img-9.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></Link>

                                        <div className="card-product-action">
                                            <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                            </Link>
                                            <Link to="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></Link>
                                            <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></Link>
                                        </div>
                                    </div>

                                    <div className="text-small mb-1">
                                        <Link to="#!" className="text-decoration-none text-muted"><small>Snack & Munchies</small></Link>
                                    </div>
                                    <h2 className="fs-6"><Link to="#!" className="text-inherit text-decoration-none">Slurrp Millet Chocolate</Link></h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                        </small>
                                        <span className="text-muted small">4.5 (67)</span>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="me-2">$6</span>
                                            <span className="text-decoration-line-through text-muted">$10</span>
                                        </div>

                                        <div>
                                            <Link to="#!" className="btn btn-primary btn-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-plus">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

