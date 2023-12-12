import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
function SampleNextArrow1(props) {
    const { onClick } = props;
    return <span onClick={onClick} className="slick-prev border"><i className="fa fa-arrow-left"></i></span>
}
function SamplePrevArrow1(props) {
    const { onClick } = props;
    return <span className="slick-next border" onClick={onClick}><i className="fa fa-arrow-right"></i></span>
}
const bestSellingProducts = {
    infinite: !0,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: !0,
    dots: !1,
    arrows: !0,
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
    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
}

const newArrivals = {
    slidesToShow: 5,
    slidesToScroll: !0,
    autoplay: !0,
    dots: !1,
    arrows: !0,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 820,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 2
        }
    }],

    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
};
export const BestSellingProducts = ({ update }) => {
    const { products } = useSelector((store) => store.data)
    return (
        <div className="product-slider-second " id="slider-third">
            <Slider  {...bestSellingProducts}>
                {products && products.map((row) => {
                    return <div className="item " key={row.id}>
                        <div className="card card-product h-100 mb-4">
                            <div className="card-body position-relative">

                                <div className="text-center position-relative ">
                                    <div className=" position-absolute top-0 start-0">
                                        <span className="badge bg-danger">Sale</span>
                                    </div>

                                    <Link to="#!">
                                        <img src={row && row.image}
                                            alt="Grocery Ecommerce Template" className="mb-3 card-img-top" height={200} />
                                    </Link>

                                    <div className="product-action-btn">
                                        <Link to="#!" className="btn-action mb-1" data-bs-toggle="modal"
                                            data-bs-target="#quickViewModal"><i className="bi bi-eye"></i></Link>
                                        <Link to="../pages/shop-wishlist.html" className="btn-action mb-1"
                                            data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i
                                                className="bi bi-heart"></i></Link>
                                        <Link to="#!" className="btn-action" data-bs-toggle="tooltip"
                                            data-bs-html="true" title="Compare"><i
                                                className="bi bi-arrow-left-right"></i></Link>
                                    </div>
                                </div>

                                <h2 className="fs-6"><Link to="#!"
                                    className="text-inherit text-decoration-none">Haldiram's Sev Bhujia</Link>
                                </h2>
                                <div className='mb-2'>

                                    <small className="text-warning"> 
                                    <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i></small> <span
                                            className="text-muted small">4.5(149)</span>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <div><span className="text-danger">$18</span> <span
                                        className="text-decoration-line-through text-muted">$24</span>
                                    </div>
                                    <div><span className="text-uppercase small text-primary">
                                        In Stock</span>
                                    </div>
                                </div>
                                <div className="d-grid mt-4">
                                    <Link to="#" className="btn btn-primary rounded-pill">Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                })}

            </Slider>
        </div>
    );
}

export const NewArrivals = () => {
    const { products } = useSelector((store) => store.data)
    return <div className="mb-12 product-content">
        <div className="mb-4">
            <h3 className="mb-4 h5">New Arrivals</h3>
        </div>
        <Slider  {...newArrivals}>
            {products && products.map((row) => {
                return <div className="item" key={row.id}>
                    <div className="card card-product">
                        <div className="card-body">
                            <div className="text-center position-relative">
                                <Link to="#!" ><img src={row && row.image} alt="Grocery Ecommerce Template" className="mb-3 card-img-top" height={160} /></Link>

                                <div className="card-product-action">
                                    <Link to="#!" className="btn-action me-1" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                        <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                    </Link>
                                    <Link to="shop-wishlist.html" className="btn-action me-1" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></Link>
                                    <Link to="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></Link>
                                </div>
                            </div>

                            <div className="text-small mb-1">
                                <Link to="#!" className="text-decoration-none text-muted"><small>{row && row.brand} && {row && row.color}</small></Link>
                            </div>
                            <h2 className="fs-6">
                                <Link to="#!" className="text-inherit text-decoration-none">{`${row && row.name}`.slice(0, 15)}..</Link>
                            </h2>
                            <div className="text-small">
                                <Link to="#!" className="text-decoration-none text-muted"><small>{row.stock}</small></Link>
                            </div>

                            <div className="text-warning">
                                <small className='me-2'>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </small>
                                <span className="text-muted small">4.5 (67)</span>
                            </div>

                            <div className="d-flex justify-content-between align-items-center mt-1">
                                <div>
                                    <span className="me-2">$ {row && row.price}</span>
                                    <span className="text-decoration-line-through text-muted">$ {row && row.priceDiscount}</span>
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
                                            strokeWidth="2"
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
            })}

        </Slider>

    </div>
}

