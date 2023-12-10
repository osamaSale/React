import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom"
import Slider from "react-slick";
import { useSelector } from 'react-redux';
export const Home = () => {
    const { products } = useSelector((store) => store.data)
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
    const settings = {
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
    return (
        <div>
            <section className="mt-lg-12 mb-lg-14 mb-8 mt-8">
                <div className="container-fluid">
                    <Carousel showThumbs={false}
                        infiniteLoop
                        showStatus
                        autoPlay >
                        <div style={{ background: 'url(assets/images/slider/slider-1.jpg)no-repeat', backgroundSize: "cover", borderRadius: ".5rem", backgroundPosition: "center", textAlign: "left", height: "550px" }}>
                            <div className="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-cente r">
                                <span className="badge text-bg-warning mb-3" >Opening Sale Discount 50%</span>
                                <h1 className="text-dark display-5 fw-bold mt-4"> Galaxy Watch6 | <br></br>
                                    Watch6 Classic </h1>
                                <p className="lead text-secondary">Buy the new Galaxy Watch6 now and get 3x rewards
                                    & you’re guaranteed happiness before you doze!
                                </p>
                                <Link to="#!" className="btn btn-dark mt-3">Shop Now <i
                                    className="feather-icon icon-arrow-right ms-1"></i></Link>
                            </div>
                        </div>

                        <div style={{ background: 'url(assets/images/slider/slider-2.jpg)no-repeat', backgroundSize: "cover", borderRadius: ".5rem", backgroundPosition: "center", textAlign: "left", height: "550px" }}>
                            <div className="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7  col-md-8 py-14 px-8 text-xs-center">
                                <span className="badge text-bg-warning mb-3" >Opening Sale Discount 50%</span>
                                <h1 className=" display-5 fw-bold mt-4 text-dark">Galaxy Z Fold5<br />
                                    Discount up to <span className="text-primary display-6">50%</span></h1>
                                <p className="lead ">
                                    Buy now and get a 50-inch Crystal UHD 4K Smart TV CU7000
                                </p>

                            </div>
                        </div>

                        <div style={{ background: 'url(assets/images/slider/slider-3.jpg)no-repeat', backgroundSize: "cover", borderRadius: ".5rem", backgroundPosition: "center", textAlign: "left", height: "550px" }}>
                            <div className="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7  col-md-8 py-14 px-8 text-xs-center">
                                <span className="badge text-bg-warning mb-3" >Opening Sale Discount 50%</span>
                                <h1 className=" display-5 fw-bold mt-4 text-dark">Galaxy Tab<br></br> S9 Series</h1>
                                <p className="lead ">Buy now and get an instant voucher worth up to 175 JOD and 3x rewards
                                </p>
                                <Link to="#!" className="btn btn-dark mt-3">Shop Now <i
                                    className="feather-icon icon-arrow-right ms-1"></i></Link>
                            </div>

                        </div>
                    </Carousel>
                </div>
            </section>
            <section className="mt-lg-12 mb-lg-14 mb-8 mt-8">
                <div className="container-fluid">
                    <div className="row ">
                        <aside className="col-xl-3 col-lg-4 col-md-4 mb-6 mb-md-0">
                            <div id="sidebar">
                                <div className="sidebar__inner">
                                    <div className="offcanvas offcanvas-start offcanvas-collapse" tabIndex="-1"
                                        id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">

                                        <div className="offcanvas-header d-lg-none">
                                            <h5 className="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body p-lg-0 ">
                                            <div className="mb-4">
                                                <h3 className="mb-4 h5">Brands</h3>
                                                <div className="card">
                                                    <ul className="nav nav-category" id="categoryCollapseMenu">
                                                        <li className="nav-item border-bottom w-100 collapsed px-4 py-1">
                                                            <Link className="nav-link" data-bs-toggle="collapse"
                                                                data-bs-target="#categoryFlushOne" aria-expanded="false"
                                                                aria-controls="categoryFlushOne">
                                                                <span className="d-flex align-items-center">
                                                                    <img src='assets/images/brands/apple.svg' alt='' />
                                                                    <span className="ms-2">Apple</span>
                                                                </span><i className="fa fa-arrow-right"></i>
                                                            </Link>
                                                            <div id="categoryFlushOne" className="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                                                <div>

                                                                    <ul className="nav flex-column ms-8">

                                                                        <li className="nav-item"><Link className="nav-link">Milk</Link>
                                                                        </li>

                                                                        <li className="nav-item"><Link className="nav-link">Milk
                                                                            Drinks</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Curd &
                                                                            Yogurt</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Eggs</Link>
                                                                        </li>

                                                                        <li className="nav-item"><Link className="nav-link">Bread</Link>
                                                                        </li>

                                                                        <li className="nav-item"><Link className="nav-link">Buns &
                                                                            Bakery</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Butter &
                                                                            More</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Cheese</Link>
                                                                        </li>

                                                                        <li className="nav-item"><Link className="nav-link">Paneer &
                                                                            Tofu</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Cream &
                                                                            Whitener</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Condensed
                                                                            Milk</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Vegan
                                                                            Drinks</Link></li>
                                                                    </ul>



                                                                </div>
                                                            </div>

                                                        </li>

                                                        <li className="nav-item border-bottom w-100 collapsed px-4 py-1">
                                                            <Link
                                                                className="nav-link" data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                                                aria-controls="flush-collapseTwo">
                                                                <span className="d-flex align-items-center">
                                                                    <img src='assets/images/brands/samsung.svg' alt='' />
                                                                    <span className="ms-2">Samsung</span>
                                                                </span>
                                                                <i className="fa fa-arrow-right"></i>
                                                            </Link>

                                                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                                                data-bs-parent="#categoryCollapseMenu">
                                                                <div>



                                                                    <ul className="nav flex-column ms-8">

                                                                        <li className="nav-item"><Link className="nav-link">Chips &
                                                                            Crisps</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Nachos</Link>
                                                                        </li>

                                                                        <li className="nav-item"><Link className="nav-link">Popcorn</Link>
                                                                        </li>

                                                                        <li className="nav-item"><Link className="nav-link">Bhujia &
                                                                            Mixtures</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Namkeen
                                                                            Snacks</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Healthy
                                                                            Snacks</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Cakes &
                                                                            Rolls</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Energy
                                                                            Bars</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Papad &
                                                                            Fryums</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Rusks &
                                                                            Wafers</Link></li>
                                                                    </ul>


                                                                </div>
                                                            </div>

                                                        </li>
                                                        <li className="nav-item border-bottom w-100 collapsed px-4 py-1">
                                                            <Link className="nav-link" data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseThree" aria-expanded="false"
                                                                aria-controls="flush-collapseThree">
                                                                <span className="d-flex align-items-center">
                                                                    <img src='assets/images/brands/huawei.svg' alt='' />
                                                                    <span className="ms-2"> Huawei  </span>
                                                                </span>
                                                                <i className="fa fa-arrow-right"></i></Link>


                                                            <div id="flush-collapseThree"
                                                                className="accordion-collapse collapse"
                                                                data-bs-parent="#categoryCollapseMenu">
                                                                <div>

                                                                    <ul className="nav flex-column ms-8">

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link active"
                                                                                aria-current="page">Fresh Vegetables</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Herbs & Seasonings</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Fresh Fruits</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Organic Fruits &
                                                                                Vegetables</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Cuts & Sprouts</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Exotic Fruits & Veggies</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Flower Bouquets, Bunches</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="nav-item border-bottom w-100 collapsed px-4 py-1">
                                                            <Link className="nav-link" data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseFour" aria-expanded="false"
                                                                aria-controls="flush-collapseFour">
                                                                <span className="d-flex align-items-center">
                                                                    <img src='assets/images/brands/Infinix.svg' alt='' />
                                                                    <span className="ms-2">Infinix </span>
                                                                </span>
                                                                <i className="fa fa-arrow-right"></i></Link>


                                                            <div id="flush-collapseFour" className="accordion-collapse collapse"
                                                                data-bs-parent="#categoryCollapseMenu">
                                                                <div>
                                                                    <ul className="nav flex-column ms-8">

                                                                        <li className="nav-item"><Link className="nav-link">Soft
                                                                            Drinks</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Fruit
                                                                            Juices</Link></li>

                                                                        <li className="nav-item"><Link
                                                                            className="nav-link">Coldpress</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Energy
                                                                            Drinks</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Water & Ice
                                                                            Cubes</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Soda &
                                                                            Mixers</Link></li>

                                                                        <li className="nav-item"><Link
                                                                            className="nav-link">Concentrates & Syrups</Link>
                                                                        </li>

                                                                        <li className="nav-item"><Link className="nav-link">Detox &
                                                                            Energy Drinks</Link></li>

                                                                        <li className="nav-item"><Link className="nav-link">Juice
                                                                            Collection</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>



                                                        <li className="nav-item border-bottom w-100 collapsed px-4 py-1">
                                                            <Link className="nav-link" data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseFive" aria-expanded="false"
                                                                aria-controls="flush-collapseFive">
                                                                <span className="d-flex align-items-center">
                                                                    <img src='assets/images/brands/vivo.svg' alt='' />
                                                                    <span className="ms-2">Vivo</span>
                                                                </span>
                                                                <i className="fa fa-arrow-right"></i></Link>


                                                            <div id="flush-collapseFive" className="accordion-collapse collapse"
                                                                data-bs-parent="#categoryCollapseMenu">
                                                                <div>

                                                                    <ul className="nav flex-column ms-8">

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link active"
                                                                                aria-current="page">Diapers, Wipes & More
                                                                            </Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Baby Food</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Bath & Hair Care
                                                                            </Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Oral & Nasal Care
                                                                            </Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Baby Skin Care Online</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Cleaning Needs Online</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Feeding Accessories
                                                                                Online</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="nav-item border-bottom w-100 collapsed px-4 py-1">
                                                            <Link className="nav-link" data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseSix" aria-expanded="false"
                                                                aria-controls="flush-collapseSix">
                                                                <span className="d-flex align-items-center">

                                                                    <img src='assets/images/brands/honor.svg' alt='' />
                                                                    <span className="ms-2">Honor</span>
                                                                </span>
                                                                <i className="fa fa-arrow-right"></i></Link>


                                                            <div id="flush-collapseSix" className="accordion-collapse collapse"
                                                                data-bs-parent="#categoryCollapseMenu">
                                                                <div>

                                                                    <ul className="nav flex-column ms-8">

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link active"
                                                                                aria-current="page">Cookies</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Glucose & Marie</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Sweet & Salty</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Healthy & Digestive</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Cream Biscuits</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Rusks & Wafers</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Cakes & Rolls</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">
                                                                                Buns & Bakery</Link>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="nav-item w-100 collapsed px-4 py-1">
                                                            <Link className="nav-link" data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseSeven" aria-expanded="false"
                                                                aria-controls="flush-collapseSeven">
                                                                <span className="d-flex align-items-center">
                                                                    <img src='assets/images/brands/nokia.svg' alt='' />
                                                                    <span className="ms-2"> Nokia</span>
                                                                </span>
                                                                <i className="fa fa-arrow-right"></i></Link>


                                                            <div id="flush-collapseSeven"
                                                                className="accordion-collapse collapse"
                                                                data-bs-parent="#categoryCollapseMenu">
                                                                <div>

                                                                    <ul className="nav flex-column ms-8">

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link active"
                                                                                aria-current="page">Chicken</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Sausage, Salami & Ham</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Exotic Meat</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Eggs</Link>
                                                                        </li>

                                                                        <li className="nav-item">
                                                                            <Link className="nav-link">Frozen Non-Veg Snacks</Link>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>

                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <div className="col-xl-9 col-lg-8 col-md-12 mb-6 mb-md-0">
                            <div className="mb-12 product-content">
                                <div className="mb-4">
                                    <h3 className="mb-4 h5">New Arrivals</h3>
                                </div>
                                <Slider  {...settings}>
                                    {products && products.map((row) => {
                                        return <div className="item" key={row.id}>
                                            <div className="card card-product">
                                                <div className="card-body">

                                                    <div className="text-center position-relative">
                                                        <Link to="#!"><img src={row && row.image} alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></Link>

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
                                                        <Link to="#!" className="text-inherit text-decoration-none">{`${row && row.name}`.slice(0, 20)}..</Link>
                                                    </h2>
                                                    <div className="text-small">
                                                        <Link to="#!" className="text-decoration-none text-muted"><small>{`${row && row.description}`.slice(0, 30)}..</small></Link>
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
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
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
                                    {/*   <div className="item">

                                        <div className="card card-product mb-lg-4">
                                            <div className="card-body text-center py-8">

                                                <Link to="#"><img
                                                    src="./assets/images/category/category-dairy-bread-eggs.jpg"
                                                    alt="Grocery Ecommerce Template" className="rounded mx-auto d-block mb-3" />
                                                </Link>


                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger rounded-pill">-12%</span>
                                            <h2 className="mt-3 fs-6"> <Link to="#" className="text-inherit">Blueberry Greek
                                                Yogurt</Link></h2>
                                            <div><span className=" fs-5 fw-bold">$15</span> <span
                                                className="text-decoration-line-through text-muted">$20</span>
                                            </div>
                                            <div className="text-warning">

                                                <small> <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i></small> <span
                                                        className="text-muted small">5.0</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="item">

                                        <div className="card card-product mb-4">
                                            <div className="card-body text-center py-8">

                                                <Link to="#"><img src="./assets/images/category/category-snack-munchies.jpg"
                                                    alt="Grocery Ecommerce Template" className="rounded mx-auto d-block mb-3" /></Link>


                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger rounded-pill">-55%</span>
                                            <h2 className="mt-3 fs-6"> <Link to="#" className="text-inherit">Kellogg s Original
                                                Cereals
                                            </Link></h2>
                                            <div><span className=" fs-5 fw-bold">$18</span> <span
                                                className="text-decoration-line-through text-muted">$24</span>
                                            </div>
                                            <div className="text-warning">

                                                <small> <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i>
                                                    <i className="bi bi-star-half"></i></small> <span
                                                        className="text-muted small">3.5</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="item">

                                        <div className="card card-product mb-4">
                                            <div className="card-body text-center py-8">

                                                <Link to="#"><img
                                                    src="./assets/images/category/category-tea-coffee-drinks.jpg"
                                                    alt="Grocery Ecommerce Template" className="rounded mx-auto d-block mb-3" /></Link>


                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger rounded-pill">-45%</span>
                                            <h2 className="mt-3 fs-6"> <Link to="#" className="text-inherit">Tea Coffee & Drinks</Link>
                                            </h2>
                                            <div><span className=" fs-5 fw-bold">$18</span> <span
                                                className="text-decoration-line-through text-muted">$24</span>
                                            </div>
                                            <div className="text-warning">

                                                <small> <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i></small> <span
                                                        className="text-muted small">4.5</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="item">

                                        <div className="card card-product mb-4">
                                            <div className="card-body text-center py-8">

                                                <Link to="#"><img
                                                    src="./assets/images/category/category-bakery-biscuits.jpg"
                                                    alt="Grocery Ecommerce Template" className="rounded mx-auto d-block mb-3" /></Link>


                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger rounded-pill">-25%</span>
                                            <h2 className="mt-3 fs-6"> <Link to="#" className="text-inherit">Slurrp Millet
                                                Chocolate</Link></h2>
                                            <div><span className=" fs-5 fw-bold">$120</span> <span
                                                className="text-decoration-line-through text-muted">$165</span>
                                            </div>
                                            <div className="text-warning">

                                                <small> <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i></small> <span
                                                        className="text-muted small">4.5</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="item">

                                        <div className="card card-product mb-4">
                                            <div className="card-body text-center py-8">

                                                <Link to="#"><img src="./assets/images/category/category-atta-rice-dal.jpg"
                                                    alt="Grocery Ecommerce Template" className="rounded mx-auto d-block mb-3" /></Link>


                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger rounded-pill">-55%</span>
                                            <h2 className="mt-3 fs-6"> <Link to="#" className="text-inherit">Atta, Rice & Dal
                                            </Link></h2>
                                            <div><span className=" fs-5 fw-bold">$18</span> <span
                                                className="text-decoration-line-through text-muted">$24</span>
                                            </div>
                                            <div className="text-warning">

                                                <small> <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i>
                                                    <i className="bi bi-star-half"></i></small> <span
                                                        className="text-muted small">3.5</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="item">

                                        <div className="card card-product mb-4">
                                            <div className="card-body text-center py-8">

                                                <Link to="#"><img
                                                    src="./assets/images/category/category-chicken-meat-fish.jpg"
                                                    alt="Grocery Ecommerce Template" className="rounded mx-auto d-block mb-3" /></Link>


                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger rounded-pill">-45%</span>
                                            <h2 className="mt-3 fs-6"> <Link to="#" className="text-inherit">Chicken, Meat & Fish</Link>
                                            </h2>
                                            <div><span className=" fs-5 fw-bold">$18</span> <span
                                                className="text-decoration-line-through text-muted">$24</span>
                                            </div>
                                            <div className="text-warning">

                                                <small> <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i></small> <span
                                                        className="text-muted small">4.5</span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="item">

                                        <div className="card card-product mb-4">
                                            <div className="card-body text-center py-8">

                                                <Link to="#"><img
                                                    src="./assets/images/category/category-cleaning-essentials.jpg"
                                                    alt="Grocery Ecommerce Template" className="rounded mx-auto d-block mb-3" /></Link>


                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger rounded-pill">-25%</span>
                                            <h2 className="mt-3 fs-6"> <Link to="#" className="text-inherit">Cleaning Essentials</Link>
                                            </h2>
                                            <div><span className=" fs-5 fw-bold">$120</span> <span
                                                className="text-decoration-line-through text-muted">$165</span>
                                            </div>
                                            <div className="text-warning">

                                                <small> <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i></small> <span
                                                        className="text-muted small">4.5</span>
                                            </div>

                                        </div>
                                    </div> */}
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-lg-12 mb-lg-14 mb-8 mt-8">
                <div className="container-fluid">
                    <div className="table-responsive-xxl pb-6 pb-lg-0">
                        <div className="row flex-nowrap">
                            <div className="col-md">
                                <div className="card border-0 card-hover">
                                    <Link to="#" className="img-zoom">
                                        <img src="./assets/images/banner/banner_1.avif" alt=""
                                            className="rounded w-100" /></Link>
                                    <div className="position-absolute bg-dark-info w-100 bottom-0 py-3 px-4 rounded-bottom">
                                        <Link to="#" className="text-white  d-flex align-items-center btn-transition">App Store
                                            <i className="feather-icon icon-chevron-right fs-5"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="card border-0">
                                    <Link to="#" className="img-zoom">
                                        <img src="./assets/images/banner/banner_2.avif" alt="" className=" rounded w-100" /></Link>
                                    <div className="position-absolute bg-dark-warning w-100 bottom-0 py-3 px-4 rounded-bottom">
                                        <Link to="#" className="text-white  d-flex align-items-center btn-transition">Google Play
                                            <i className="feather-icon icon-chevron-right fs-5"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="card border-0">
                                    <Link to="#" className="img-zoom"><img src="./assets/images/banner/banner_3.avif" alt=""
                                        className="rounded w-100" /></Link>
                                    <div className="position-absolute bg-dark-danger w-100 bottom-0 py-3 px-4 rounded-bottom">
                                        <Link to="#" className="text-white   btn-transition">App Gallery
                                            <i className="feather-icon icon-chevron-right fs-5"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-lg-12 mb-lg-14 mb-8 mt-8">
                <div className="container-fluid ">
                    <div className="row align-items-center mb-6">
                        <div className="col-lg-10 col-9">
                            <div className="d-xl-flex justify-content-between align-items-center">

                                <div className="d-flex">
                                    <div className="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="feather feather-shopping-bag text-primary">
                                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                            <line x1="3" y1="6" x2="21" y2="6"></line>
                                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                                        </svg>
                                    </div>
                                    <div className="ms-3">
                                        <h3 className=" mb-0">Best Selling Products</h3>
                                        <p className="mb-0">Find the bestseller products in your area with discount.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="slider-arrow  " id="slider-third-arrows"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product-slider-second " id="slider-third">
                                <Slider  {...bestSellingProducts}>
                                    {products && products.map((row) => {
                                        return <div className="item ">
                                            <div className="card card-product h-100 mb-4">
                                                <div className="card-body position-relative">

                                                    <div className="text-center position-relative ">
                                                        <div className=" position-absolute top-0 start-0">
                                                            <span className="badge bg-danger">Sale</span>
                                                        </div>

                                                        <Link to="#!"> <img src={row && row.image}
                                                            alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></Link>

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
                                                    <div>

                                                        <small className="text-warning"> <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-half"></i></small> <span
                                                                className="text-muted small">4.5(149)</span>
                                                    </div>

                                                    <div className="d-flex justify-content-between align-items-center mt-3">
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
                        </div>
                    </div>
                </div>

            </section>

            <section className="mt-lg-12 mb-lg-14 mb-8 mt-8">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6"><img src="assets/images/icons/clock.svg" alt="" /></div>
                                <h3 className="h5 mb-3">
                                    10 minute grocery now
                                </h3>
                                <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores
                                    near you.</p>
                            </div>
                        </div>
                        <div className="col-md-6  col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6"><img src="assets/images/icons/gift.svg" alt="" /></div>
                                <h3 className="h5 mb-3">Best Prices & Offers</h3>
                                <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best
                                    pricess &
                                    offers.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6"><img src="assets/images/icons/package.svg" alt="" /></div>
                                <h3 className="h5 mb-3">Wide Assortment</h3>
                                <p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg
                                    & other
                                    categories.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6"><img src="assets/images/icons/refresh-cw.svg" alt="" /></div>
                                <h3 className="h5 mb-3">Easy Returns</h3>
                                <p>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No
                                    questions asked
                                    <Link href="#!">policy</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}