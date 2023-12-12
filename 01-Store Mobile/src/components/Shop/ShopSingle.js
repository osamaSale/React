import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel';
import { getAllUsers } from '../../redux/api/users';
import { createCart } from '../../redux/api/carts';
import { createWishlist } from '../../redux/api/wishlist';
import { BestSellingProducts } from './ShopCard';
export const ShopSingle = ({ update }) => {
    let { id } = useParams()
    const { products, carts, user, wishlist } = useSelector((store) => store.data)
    const product = products.find((e) => parseInt(e.id) === parseInt(id))
    const image = products.filter((e) => e.id !== parseInt(id) && e.brand === product.brand && e.device === product.device)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState(product ? product.color : "");
    return (
        <section className="mt-8 mb-14">
            <div className="container-fluid">
                <div className="row mt-8">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/shop-wide">Shop Wide</Link></li>

                                <li className="breadcrumb-item active" aria-current="page">View Product</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row mt-8">
                    <div className="col-md-6">
                        <Carousel showArrows={false} dynamicHeight={false} showIndicators={false} className='product'>
                            <div >
                                <img src={product && product.image} alt='' />
                            </div>
                            {image && image.map((row) => {
                                return <div className="thumbnails-img" key={row.id}>
                                    <img src={row.image} alt='' />
                                </div >
                            })}

                        </Carousel>
                    </div>
                    <div className="col-md-6">
                        <div className="ps-lg-10 mt-6 mt-md-0">
                            <h1 className="mb-4">{product && product.name}</h1>
                            <Link to="#!" className="mb-4 d-block">{product && product.brand} && {product && product.device}</Link>
                            <div className="mb-4">
                                <small className="text-warning me-2">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </small>
                                <span className="text-muted small">4.5(149)</span>
                                <Link to="#" className="ms-2">(30 reviews)</Link>
                            </div>

                            <div className="fs-4 mb-4">
                                <span className="fw-bold me-2">${product && product.priceDiscount}</span>
                                <span className="text-decoration-line-through text-muted me-2">${product && product.price}</span>
                                <span><small className="fs-6 ms-2 text-danger">26% Off</small></span>
                            </div>

                            <p className="mb-1">{product && product.description}</p>

                            <hr className="my-6 border" />
                            <div>
                                <div className="row">
                                    <dt className="col-3">Availability:</dt>
                                    <dd className="col-9">{product && product.stock}</dd>

                                    <dt className="col-3">Color</dt>
                                    <dd className="col-9 text-capitalize">{product && product.color}</dd>

                                    <dt className="col-3">Brand</dt>
                                    <dd className="col-9">{product && product.brand}</dd>
                                </div>

                            </div>
                            <hr className="my-6 border" />
                            <div className="row">
                                <div className="col-md-4 col-6">
                                    <label className="mb-1">Color</label>
                                    <select name='color' className="form-select border "
                                        onChange={(e) => setColor(e.target.value)}
                                        value={color}
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
                                    <label className="mb-1 d-block">Quantity</label>
                                    <div className="input-group mb-2" >
                                        <button className="btn  border" type="button"
                                            disabled={quantity > 1 ? false : true}
                                            onClick={() => setQuantity(quantity - 1)}>
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <input type="text" className="form-control form-control-sm text-center border " placeholder={quantity} value={quantity} />
                                        <button className="btn  border" type="button"
                                            onClick={() => setQuantity(quantity + 1)}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 row justify-content-start g-2 align-items-center">
                                <div className="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">
                                    <button type="button" className="btn btn-primary"
                                        disabled={carts && carts.find(up => (up.productid === product.id))}
                                        onClick={() => {
                                            let data = {
                                                userId: user.id,
                                                productid: product.id,
                                                quantity: quantity
                                            }
                                            dispatch(createCart(data)).then((res) => {
                                                dispatch(getAllUsers())
                                                update()
                                            })
                                        }}
                                    >
                                        {carts && carts.find(c => c.productid === product.id) ?
                                            <><i className="bi bi-cart-check"></i> In Cart</>
                                            : <><i className="bi bi-plus-lg"></i> Add To Cart </>}
                                    </button>
                                </div>
                                <div className="col-md-4 col-4">
                                    <button className="btn active border"
                                     disabled={wishlist && wishlist.find(up => (up.productid === product.id))}
                                        onClick={() => {
                                            let data = {
                                                userId: user.id,
                                                productid: product.id
                                            }
                                            dispatch(createWishlist(data)).then((res) => {
                                                dispatch(getAllUsers())
                                                update()

                                            })
                                        }}>
                                        {wishlist && wishlist.find(c => c.productid === product.id) ?
                                            <><i className="bi bi-suit-heart-fill text-danger me-2"></i> Wishlist</>
                                            : <><i class="bi bi-suit-heart me-2"></i> Wishlist </>}

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mt-lg-14 mt-8">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav nav-pills nav-lb-tab" id="myTab" role="tablist">

                                <li className="nav-item" role="presentation">

                                    <button className="nav-link active" id="product-tab" data-bs-toggle="tab" data-bs-target="#product-tab-pane" type="button" role="tab" aria-controls="product-tab-pane" aria-selected="true">
                                        Product Details
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">

                                    <button className="nav-link" id="details-tab" data-bs-toggle="tab" data-bs-target="#details-tab-pane" type="button" role="tab" aria-controls="details-tab-pane" aria-selected="false" tabindex="-1">
                                        Information
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">

                                    <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane" aria-selected="false" tabindex="-1">
                                        Reviews
                                    </button>
                                </li>

                            </ul>

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade active show" id="product-tab-pane" role="tabpanel" aria-labelledby="product-tab" tabindex="0">
                                    <div className="my-8">
                                        <div className="mb-5">
                                            <h4 className="mb-1">Nutrient Value &amp; Benefits</h4>
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
                                                                <option selected="">Top Reviews</option>
                                                                <option value="Most Recent">Most Recent</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex border-bottom pb-6 mb-6">


                                                        <img src="../assets/images/avatar/avatar-10.jpg" alt="" className="rounded-circle avatar-lg" />
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
                                                                <span className="ms-3 text-dark fw-bold">Need to recheck the weight at delivery point</span>
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
                                                                <span className="ms-3 text-dark fw-bold">Need to recheck the weight at delivery point</span>
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
                                                                <span className="ms-3 text-dark fw-bold">Need to recheck the weight at delivery point</span>
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
                                                                <span className="ms-3 text-dark fw-bold">Great product</span>
                                                            </div>

                                                            <p>Great product &amp; package. Delivery can be expedited.</p>


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

                                                        <div id="my-dropzone" className="dropzone mt-4 border-dashed rounded-2 min-h-0 dz-clickable"><div className="dz-default dz-message"><button className="dz-button" type="button">Drop files here to upload</button></div></div>
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

                    <div className="row ">
                    <div className="col-12">
                       <BestSellingProducts update={update}/>
                       </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

