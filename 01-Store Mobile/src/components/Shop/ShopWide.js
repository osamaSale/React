import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllUsers } from '../../redux/api/users';
import { searchProducts } from '../../redux/api/products';
import { createCart } from '../../redux/api/carts';
import Slider from "react-slick";
import { ViewProduct } from '../Modals';
export const ShopWide = ({ update }) => {
    const { products, carts, user, brands, devices } = useSelector((store) => store.data)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const bestSellingProducts = {
        infinite: !0,
        slidesToShow: 10,
        slidesToScroll: 1,
        dots: !1,
        arrows: false,
        speed: 1e3,
        loop: !0,
        adaptiveHeight: !0,
        responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }],

    }
    return (

        <section className="mt-8 mb-lg-14 mb-8">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-lg-flex justify-content-between align-items-center">
                            <div>
                                <p className="mb-3 mb-md-0">
                                    <span className="me-2">{products && products.length > 0 ? products.length : 0}</span>
                                    Products found
                                </p>
                            </div>

                            <div className="d-md-flex justify-content-between align-items-center">
                                <div>
                                    <Link to="shop-list.html" className="text-muted me-3"><i className="bi bi-list-ul"></i></Link>
                                    <Link to="shop-grid.html" className="me-3 active"><i className="bi bi-grid"></i></Link>
                                    <Link to="shop-grid-3-column.html" className="me-3 text-muted"><i className="bi bi-grid-3x3-gap"></i></Link>
                                </div>
                                <div className="d-flex mt-2 mt-lg-0">
                                    <div className="me-2 flex-grow-1">

                                        <select className="form-select border" onClick={(e) => { dispatch(searchProducts(e.target.value)).then(res => console.log(res)) }}>
                                            <option >Devices: 4</option>
                                            {devices && devices.map((row) => {
                                                return <option value={row.name} key={row.id}>{row.name}</option>
                                            })}

                                        </select>
                                    </div>
                                    <div className="me-2 flex-grow-1">

                                        <select className="form-select border">
                                            <option >Show: 50</option>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                        </select>
                                    </div>
                                    <div>

                                        <select className="form-select border">
                                            <option >Sort by: Featured</option>
                                            <option value="Low to High">Price: Low to High</option>
                                            <option value="High to Low">Price: High to Low</option>
                                            <option value="Release Date">Release Date</option>
                                            <option value="Avg. Rating">Avg. Rating</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row mt-8">
                            <div className="col-12">
                                <div className="product-slider-second " id="slider-third">
                                    <Slider  {...bestSellingProducts}>
                                        <button className="btn btn-primary btn-sm" onClick={() => { update() }}>All Products</button>
                                        {brands && brands.map((row) => {
                                            return <button key={row.id} className="btn btn-primary btn-sm"
                                                onClick={() => { dispatch(searchProducts(row.name)) }}
                                            >{row.name}</button>

                                        })}

                                    </Slider>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4 row-cols-lg-5 row-cols-1 row-cols-md-3 mt-2">

                            {products && products.map((row) => {
                                return <div className="col" key={row.id} onClick={()=>{
                                    navigate(`/shop-single/${row.id}`)
                                }}>

                                    <div className="card card-product">
                                        <div className="card-body">
                                            <div className="text-center position-relative">
                                                <div className="position-absolute top-0 start-0">
                                                    <span className="badge bg-danger">{row.stock}</span>
                                                </div>
                                                <Link to="shop-single.html">

                                                    <img src={row.image} alt="Grocery Ecommerce Template" className="mb-3 card-img-top" height={160} />
                                                </Link>

                                                <div className="card-product-action">
                                                    <Link  className="btn-action me-1" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                                        <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                                    </Link>
                                                    <Link to="shop-wishlist.html" className="btn-action me-1" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></Link>
                                                    <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></Link>
                                                </div>
                                            </div>

                                            <div className="text-small mb-1">
                                                <Link to="#!" className="text-decoration-none text-muted"><small>{row.device} &amp; {row.brand}</small></Link>
                                            </div>
                                            <h2 className="fs-6"><Link to="shop-single.html" className="text-inherit text-decoration-none">{`${row && row.name}`.slice(0, 15)}..</Link></h2>
                                            <div>

                                                <small className="text-warning me-2">
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
                                                    <span className="text-danger me-2">${row.priceDiscount}</span>
                                                    <span className="text-decoration-line-through text-muted">${row.price}</span>
                                                </div>

                                                <div>
                                                    <button className="btn btn-primary btn-sm"
                                                        disabled={carts && carts.find(up => (up.productid === row.id))}
                                                        onClick={() => {
                                                            let data = {
                                                                userId: user.id,
                                                                productid: row.id,
                                                                quantity: 1
                                                            }
                                                            dispatch(createCart(data)).then((res) => {
                                                                dispatch(getAllUsers())
                                                                update()
                                                            })
                                                        }}
                                                    >
                                                        {carts && carts.find(c => c.productid === row.id) ?
                                                            <><i className="bi bi-cart-check"></i> In Cart</>
                                                            : <><i className="bi bi-plus-lg"></i> Add </>}

                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}

                        </div>

                        <div className="row mt-8">
                            <div className="col">

                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link className="page-link mx-1" to="#" aria-label="Previous">
                                                <i className="bi bi-chevron-left"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link mx-1 active" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link mx-1" to="#">2</Link></li>

                                        <li className="page-item"><Link className="page-link mx-1" to="#">...</Link></li>
                                        <li className="page-item"><Link className="page-link mx-1" to="#">12</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link mx-1" to="#" aria-label="Next">
                                                <i className="bi bi-chevron-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   {/*          <ViewProduct selectedProduct={selectedProduct} /> */}
        </section>

    );
}

