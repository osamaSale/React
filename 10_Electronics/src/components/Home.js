import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Controller, Scrollbar ,Navigation} from "swiper/modules";
import { useState, useEffect , useRef ,useMemo} from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  const [textSwiper, setTextSwiper] = useState(null);
  const [imageSwiper, setImageSwiper] = useState(null);
  const products = [
  {
    id: 1,
    image: '/assets/img/shop/electronics/01.png',
    name: 'VRB01 Virtual Reality Glasses',
    price: 129.99,
    oldPrice: 156.00,
    rating: 4.5,
    reviews: 14,
    stock: 112,
  },
  {
    id: 2,
    image: '/assets/img/shop/electronics/05.png',
    name: 'Wireless Bluetooth Headphones Sony',
    price: 129.99,
    oldPrice: 156.00,
    rating: 4.5,
    reviews: 14,
    stock: 112,
  },
  {
    id: 3,
    image: '/assets/img/shop/electronics/02.png',
    name: 'Tablet Apple iPad Air M1',
    price: 129.99,
    oldPrice: 156.00,
    rating: 4.5,
    reviews: 14,
    stock: 112,
  },
  {
    id: 4,
    image: '/assets/img/shop/electronics/06.png',
    name: 'Power Bank PBS 10000 mAh Black',
    price: 129.99,
    oldPrice: 156.00,
    rating: 4.5,
    reviews: 14,
    stock: 112,
  },
  {
    id: 5,
    image: '/assets/img/shop/electronics/09.png',
    name: 'Xiaomi Wireless Buds Pro',
    price: 129.99,
    oldPrice: 156.00,
    rating: 4.5,
    reviews: 14,
    stock: 112,
  },
  // أضف منتجات أخرى هنا
];

  const slides = [
    {
      title: "Headphones ProMax",
      text: "Feel the real quality sound",
      link: "shop-product-general-electronics.html",
      image: "assets/img/home/electronics/hero-slider/01.png",
    },
    {
      title: "Powerful iPad Pro M2",
      text: "Deal of the week",
      link: "shop-product-general-electronics.html",
      image: "assets/img/home/electronics/hero-slider/02.png",
    },
    {
      title: "Experience New Reality",
      text: "Virtual reality glasses",
      link: "shop-catalog-electronics.html",
      image: "assets/img/home/electronics/hero-slider/03.png",
    },
  ];
  const features = [
    {
      icon: "bi-truck",
      title: "Free Shipping & Returns",
      subtitle: "For all orders over $199.00",
    },
    {
      icon: "bi-credit-card",
      title: "Secure Payment",
      subtitle: "We ensure secure payment",
    },
    {
      icon: "bi-arrow-clockwise",
      title: "Money Back Guarantee",
      subtitle: "Returning money 30 days",
    },
    {
      icon: "bi-chat",
      title: "24/7 Customer Support",
      subtitle: "Friendly customer support",
    },
  ];
  const brands = [
    {
      name: "Apple",
      light: "assets/img/shop/electronics/brands/apple-light-mode.svg",
      dark: "assets/img/shop/electronics/brands/apple-dark-mode.svg",
    },
    {
      name: "Motorola",
      light: "assets/img/shop/electronics/brands/motorola-light-mode.svg",
      dark: "assets/img/shop/electronics/brands/motorola-dark-mode.svg",
    },
    {
      name: "Canon",
      light: "assets/img/shop/electronics/brands/canon-light-mode.svg",
      dark: "assets/img/shop/electronics/brands/canon-dark-mode.svg",
    },
    {
      name: "Samsung",
      light: "assets/img/shop/electronics/brands/samsung-light-mode.svg",
      dark: "assets/img/shop/electronics/brands/samsung-dark-mode.svg",
    },
    {
      name: "Sony",
      light: "assets/img/shop/electronics/brands/sony-light-mode.svg",
      dark: "assets/img/shop/electronics/brands/sony-dark-mode.svg",
    },
  ];
  const vlogItems = [
    {
      duration: "6:16",
      title: "5 New Cool Gadgets You Must See on Cartzilla - Cheap Budget",
      img: "assets/img/home/electronics/vlog/01.jpg",
    },
    {
      duration: "10:20",
      title: "5 Super Useful Gadgets on Cartzilla You Must Have in 2023",
      img: "assets/img/home/electronics/vlog/02.jpg",
    },
    {
      duration: "8:40",
      title: "Top 5 New Amazing Gadgets on Cartzilla You Must See",
      img: "assets/img/home/electronics/vlog/03.jpg",
    },
  ];
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const prevRef = useRef(null);
  const nextRef = useRef(null);
const targetDate = useMemo(() => new Date('2025-10-15T12:00:00'), []);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(interval);
    //
  }, [targetDate]);

 
  return (
    <main className="content-wrapper">
      {/* <!-- Hero slider --> */}
      <section className="container pt-4">
        <div className="row">
          <div className="col-lg-9 offset-lg-3">
            <div className="position-relative">
              {/* Backgrounds */}
              <span
                className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip"
                style={{
                  background:
                    "linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)",
                }}
              ></span>
              <span
                className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip"
                style={{
                  background:
                    "linear-gradient(90deg, #1b273a 0%, #1f2632 100%)",
                }}
              ></span>

              <div className="row justify-content-center position-relative z-2">
                {/* Text Swiper */}
                <div className="col-xl-5 col-xxl-4 offset-xxl-1 d-flex align-items-center mt-xl-n3">
                  <Swiper
                    onSwiper={setTextSwiper}
                    modules={[Autoplay, Scrollbar, Controller]}
                    spaceBetween={64}
                    loop={true}
                    speed={400}
                    autoplay={{ delay: 5500, disableOnInteraction: false }}
                    scrollbar={{ el: ".swiper-scrollbar" }}
                    controller={{ control: imageSwiper }}
                    className="text-swiper px-5 pe-xl-0 ps-xxl-0 me-xl-n5"
                  >
                    {slides.map((slide, index) => (
                      <SwiperSlide
                        key={index}
                        className="text-center text-xl-start pt-5 py-xl-5"
                      >
                        <p className="text-body">{slide.text}</p>
                        <h2 className="display-4 pb-2 pb-xl-4">
                          {slide.title}
                        </h2>
                        <Link className="btn btn-lg btn-primary" to={slide.link}>
                          Shop now{" "}
                          <i className="bi bi-arrow-up-right fs-lg ms-2 me-n1"></i>
                         </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Image Swiper */}
                <div className="col-9 col-sm-7 col-md-6 col-lg-5 col-xl-7">
                  <Swiper
                    onSwiper={setImageSwiper}
                    modules={[EffectFade, Controller]}
                    allowTouchMove={false}
                    loop={true}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    controller={{ control: textSwiper }}
                    className="user-select-none"
                  >
                    {slides.map((slide, index) => (
                      <SwiperSlide
                        key={index}
                        className="d-flex justify-content-end"
                      >
                        <div
                          className="ratio rtl-flip"
                          style={{
                            maxWidth: "495px",
                            aspectRatio: "537 / 495",
                          }}
                        >
                          <img src={slide.image} alt={`Slide ${index + 1}`} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              {/* Scrollbar */}
              <div className="row justify-content-center" data-bs-theme="dark">
                <div className="col-xxl-10">
                  <div className="position-relative mx-5 mx-xxl-0">
                    <div className="swiper-scrollbar mb-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Features --> */}
      <section className="container pt-5 mt-1 mt-sm-3 mt-lg-4">
        <div className="row row-cols-2 row-cols-md-4 g-4">
          {features.map((feature, index) => (
            <div className="col" key={index}>
              <div className="d-flex flex-column flex-xxl-row align-items-center">
                <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                  <i className={`bi ${feature.icon} fs-2 m-xxl-1`}></i>
                </div>
                <div className="text-center text-xxl-start ps-xxl-3">
                  <h3 className="h6 mb-1">{feature.title}</h3>
                  <p className="fs-sm mb-0">{feature.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <!-- New arrivals (List) --> */}
      <section className="container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4">
        <h2 className="h3 pb-2 pb-sm-3">New arrivals</h2>
        <div className="row">
          <div className="col-lg-4" data-bs-theme="dark">
            <div
              className="d-flex flex-column align-items-center justify-content-end h-100 text-center overflow-hidden rounded-5 px-4 px-lg-3 pt-4 pb-5"
              style={{
                background:
                  "#1d2c41 url(assets/img/home/electronics/banner/background.jpg) center/cover no-repeat",
              }}
            >
              <div
                className="ratio animate-up-down position-relative z-2 me-lg-4"
                style={{
                  "--cz-aspect-ratio": "calc(690 / 640 * 100%)",
                  marginBottom: "-19%",
                  maxWidth: "320px",
                }}
              >
                <img
                  alt="Laptop"
                  src="assets/img/home/electronics/banner/laptop.png"
                />
              </div>
              <h3 className="display-2 mb-2">MacBook</h3>
              <p className="text-body fw-medium mb-4">Be Pro Anywhere</p>
              <Link className="btn btn-sm btn-primary" to="#!">
                From $1,199
                <i className="bi bi-arrow-up-right fs-base ms-1 me-n1" />
              </Link>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4">
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div
                className="ratio ratio-1x1 flex-shrink-0"
                style={{
                  width: "110px",
                }}
              >
                <img
                  alt="Smart Watch"
                  src="assets/img/shop/electronics/thumbs/01.png"
                />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                  </div>
                  <span className="text-body-tertiary fs-xs">45</span>
                </div>
                <h4 className="mb-2">
                  <Link
                    className="stretched-link d-block fs-sm fw-medium text-truncate"
                    to="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      Smart Watch Series 7, White
                    </span>
                   </Link>
                </h4>
                <div className="h5 mb-0">$449.00</div>
              </div>
            </div>
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div
                className="ratio ratio-1x1 flex-shrink-0"
                style={{
                  width: "110px",
                }}
              >
                <img
                  alt="VR Glasses"
                  src="assets/img/shop/electronics/thumbs/03.png"
                  width="110"
                />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-half text-warning" />
                    <i className="bi bi-star text-body-tertiary opacity-75" />
                  </div>
                  <span className="text-body-tertiary fs-xs">123</span>
                </div>
                <h4 className="mb-2">
                  <Link
                    className="stretched-link d-block fs-sm fw-medium text-truncate"
                    to="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      VRB01 Virtual Reality Glasses
                    </span>
                   </Link>
                </h4>
                <div className="h5 mb-0">$340.99</div>
              </div>
            </div>
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div
                className="ratio ratio-1x1 flex-shrink-0"
                style={{
                  width: "110px",
                }}
              >
                <img
                  alt="Bluetooth Headphones"
                  src="assets/img/shop/electronics/thumbs/05.png"
                  width="110"
                />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star text-body-tertiary opacity-75" />
                  </div>
                  <span className="text-body-tertiary fs-xs">34</span>
                </div>
                <h4 className="mb-2">
                  <Link
                    className="stretched-link d-block fs-sm fw-medium text-truncate"
                    to="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      Wireless Bluetooth Headphones Sony
                    </span>
                   </Link>
                </h4>
                <div className="h5 mb-0">$357.00</div>
              </div>
            </div>
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div
                className="ratio ratio-1x1 flex-shrink-0"
                style={{
                  width: "110px",
                }}
              >
                <img
                  alt="MacBook"
                  src="assets/img/shop/electronics/thumbs/07.png"
                  width="110"
                />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                  </div>
                  <span className="text-body-tertiary fs-xs">34</span>
                </div>
                <h4 className="mb-2">
                  <Link
                    className="stretched-link d-block fs-sm fw-medium text-truncate"
                    to="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      Laptop Apple MacBook Pro 13 M2
                    </span>
                   </Link>
                </h4>
                <div className="h5 mb-0">$1,200.00</div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-3 py-lg-4">
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div
                className="ratio ratio-1x1 flex-shrink-0"
                style={{
                  width: "110px",
                }}
              >
                <img
                  alt="iPad Pro"
                  src="assets/img/shop/electronics/thumbs/02.png"
                  width="110"
                />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star text-body-tertiary opacity-75" />
                  </div>
                  <span className="text-body-tertiary fs-xs">126</span>
                </div>
                <h4 className="mb-2">
                  <Link
                    className="stretched-link d-block fs-sm fw-medium text-truncate"
                    to="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      Tablet Apple iPad Air M1
                    </span>
                   </Link>
                </h4>
                <div className="h5 mb-0">$540.00</div>
              </div>
            </div>
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div
                className="ratio ratio-1x1 flex-shrink-0"
                style={{
                  width: "110px",
                }}
              >
                <img
                  alt="AirPods 2 Pro"
                  src="assets/img/shop/electronics/thumbs/04.png"
                  width="110"
                />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                  </div>
                  <span className="text-body-tertiary fs-xs">340</span>
                </div>
                <h4 className="mb-2">
                  <Link
                    className="stretched-link d-block fs-sm fw-medium text-truncate"
                    to="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      Headphones Apple AirPods 2 Pro
                    </span>
                   </Link>
                </h4>
                <div className="h5 mb-0">
                  $209.99{" "}
                  <del className="text-body-tertiary fs-sm fw-normal">
                    $356.00
                  </del>
                </div>
              </div>
            </div>
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div
                className="ratio ratio-1x1 flex-shrink-0"
                style={{
                  width: "110px",
                }}
              >
                <img
                  alt="Power Bank"
                  src="assets/img/shop/electronics/thumbs/06.png"
                  width="110"
                />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star text-body-tertiary opacity-75" />
                  </div>
                  <span className="text-body-tertiary fs-xs">29</span>
                </div>
                <h4 className="mb-2">
                  <Link
                    className="stretched-link d-block fs-sm fw-medium text-truncate"
                    to="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      Power Bank PBS 10000 mAh Black
                    </span>
                   </Link>
                </h4>
                <div className="h5 mb-0">$49.99</div>
              </div>
            </div>
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div
                className="ratio ratio-1x1 flex-shrink-0"
                style={{
                  width: "110px",
                }}
              >
                <img
                  alt="iPhone 14"
                  src="assets/img/shop/electronics/thumbs/08.png"
                  width="110"
                />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                  </div>
                  <span className="text-body-tertiary fs-xs">12</span>
                </div>
                <h4 className="mb-2">
                  <Link
                    className="stretched-link d-block fs-sm fw-medium text-truncate"
                    to="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      Apple iPhone 14 128GB White
                    </span>
                   </Link>
                </h4>
                <div className="h5 mb-0">
                  $899.00{" "}
                  <del className="text-body-tertiary fs-sm fw-normal">
                    $958.00
                  </del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Trending products (Grid) --> */}
      <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">
        {/* <!-- Heading --> */}
        <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
          <h2 className="h3 mb-0">Trending products</h2>
          <div className="nav ms-3">
            <Link
              className="nav-link animate-underline px-0 py-2"
              to="/shop-catalog-electronics.html"
            >
              <span className="animate-target">View all</span>
              <i className="bi bi-chevron-right fs-base ms-1"></i>
             </Link>
          </div>
        </div>
        {/*    <!-- Product grid --> */}
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="position-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-heart fs-base animate-target" />
                    </button>
                    <button
                      aria-label="Compare"
                      className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-arrow-clockwise fs-base animate-target" />
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button
                    aria-expanded="false"
                    aria-label="More actions"
                    className="btn btn-icon btn-sm btn-secondary bg-body"
                    data-bs-toggle="dropdown"
                    type="button"
                  >
                    <i className="bi bi-three-dots-vertical fs-lg" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end fs-xs p-2"
                    style={{
                      minWidth: "auto",
                    }}
                  >
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2" />
                        Add to Wishlist
                       </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2" />
                        Compare
                       </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                  to="shop-product-general-electronics.html"
                >
                  <span className="badge bg-danger position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">
                    -21%
                  </span>
                  <div
                    className="ratio"
                    style={{
                      "--cz-aspect-ratio": "calc(240 / 258 * 100%)",
                    }}
                  >
                    <img
                      alt="VR Glasses"
                      src="assets/img/shop/electronics/01.png"
                    />
                  </div>
                 </Link>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star text-body-tertiary opacity-75" />
                  </div>
                  <span className="text-body-tertiary fs-xs">(123)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <Link
                    className="d-block fs-sm fw-medium text-truncate"
                    to="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      VRB01 Virtual Reality Glasses
                    </span>
                   </Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">
                    $340.99{" "}
                    <del className="text-body-tertiary fs-sm fw-normal">
                      $430.00
                    </del>
                  </div>
                  <button
                    aria-label="Add to Cart"
                    className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
                    type="button"
                  >
                    <i className="bi bi-cart fs-base animate-target" />
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Display:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      OLED 1440x1600
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Graphics:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      Adreno 540
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Sound:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      2x3.5mm jack
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Input:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      4 built-in cameras
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="position-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-heart fs-base animate-target" />
                    </button>
                    <button
                      aria-label="Compare"
                      className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-arrow-clockwise fs-base animate-target" />
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button
                    aria-expanded="false"
                    aria-label="More actions"
                    className="btn btn-icon btn-sm btn-secondary bg-body"
                    data-bs-toggle="dropdown"
                    type="button"
                  >
                    <i className="bi bi-three-dots-vertical fs-lg" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end fs-xs p-2"
                    style={{
                      minWidth: "auto",
                    }}
                  >
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2" />
                        Add to Wishlist
                       </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2" />
                        Compare
                       </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                  to="shop-product-general-electronics.html"
                >
                  <div
                    className="ratio"
                    style={{
                      "--cz-aspect-ratio": "calc(240 / 258 * 100%)",
                    }}
                  >
                    <img
                      alt="iPhone 14"
                      src="assets/img/shop/electronics/02.png"
                    />
                  </div>
                 </Link>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-half text-warning" />
                  </div>
                  <span className="text-body-tertiary fs-xs">(142)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <Link
                    className="d-block fs-sm fw-medium text-truncate"
                    to="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      Apple iPhone 14 128GB White
                    </span>
                   </Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$899.00</div>
                  <button
                    aria-label="Add to Cart"
                    className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
                    type="button"
                  >
                    <i className="bi bi-cart fs-base animate-target" />
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Display:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      6.1" XDR
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Capacity:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      128 GB
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Chip:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      A15 Bionic
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Camera:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      12 + 12 MP
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Weight:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      172 grams
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="position-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-heart fs-base animate-target" />
                    </button>
                    <button
                      aria-label="Compare"
                      className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-arrow-clockwise fs-base animate-target" />
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button
                    aria-expanded="false"
                    aria-label="More actions"
                    className="btn btn-icon btn-sm btn-secondary bg-body"
                    data-bs-toggle="dropdown"
                    type="button"
                  >
                    <i className="bi bi-three-dots-vertical fs-lg" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end fs-xs p-2"
                    style={{
                      minWidth: "auto",
                    }}
                  >
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2" />
                        Add to Wishlist
                       </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2" />
                        Compare
                       </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                  to="shop-product-general-electronics.html"
                >
                  <div
                    className="ratio"
                    style={{
                      "--cz-aspect-ratio": "calc(240 / 258 * 100%)",
                    }}
                  >
                    <img
                      alt="Smart Watch"
                      src="assets/img/shop/electronics/03.png"
                    />
                  </div>
                 </Link>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                  </div>
                  <span className="text-body-tertiary fs-xs">(67)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <Link
                    className="d-block fs-sm fw-medium text-truncate"
                    to="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      Smart Watch Series 7, White
                    </span>
                   </Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$429.00</div>
                  <button
                    aria-label="Add to Cart"
                    className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
                    type="button"
                  >
                    <i className="bi bi-cart fs-base animate-target" />
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Display:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      45mm OLED
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Chip:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      64-bit Dual-core
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Connectivity:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      Wi-Fi, Bluetooth
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Power:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      Lithium-ion battery
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Weight:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      37.0 grams
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="position-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-heart fs-base animate-target" />
                    </button>
                    <button
                      aria-label="Compare"
                      className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-arrow-clockwise fs-base animate-target" />
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button
                    aria-expanded="false"
                    aria-label="More actions"
                    className="btn btn-icon btn-sm btn-secondary bg-body"
                    data-bs-toggle="dropdown"
                    type="button"
                  >
                    <i className="bi bi-three-dots-vertical fs-lg" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end fs-xs p-2"
                    style={{
                      minWidth: "auto",
                    }}
                  >
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2" />
                        Add to Wishlist
                       </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2" />
                        Compare
                       </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                  to="shop-product-general-electronics.html"
                >
                  <span className="badge bg-info position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">
                    New
                  </span>
                  <div
                    className="ratio"
                    style={{
                      "--cz-aspect-ratio": "calc(240 / 258 * 100%)",
                    }}
                  >
                    <img
                      alt="MacBook"
                      src="assets/img/shop/electronics/04.png"
                    />
                  </div>
                 </Link>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-half text-warning" />
                  </div>
                  <span className="text-body-tertiary fs-xs">(51)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <Link
                    className="d-block fs-sm fw-medium text-truncate"
                    to="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      Laptop Apple MacBook Pro 13 M2
                    </span>
                   </Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$1,200.00</div>
                  <button
                    aria-label="Add to Cart"
                    className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
                    type="button"
                  >
                    <i className="bi bi-cart fs-base animate-target" />
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Chip:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      Apple M2
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Memory:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      8 GB unified
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Storage:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      256 GB SSD
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Display:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      13.3-inch Retina
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="posittion-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-heart fs-base animate-target" />
                    </button>
                    <button
                      aria-label="Compare"
                      className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-arrow-clockwise fs-base animate-target" />
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button
                    aria-expanded="false"
                    aria-label="More actions"
                    className="btn btn-icon btn-sm btn-secondary bg-body"
                    data-bs-toggle="dropdown"
                    type="button"
                  >
                    <i className="bi bi-three-dots-vertical fs-lg" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end fs-xs p-2"
                    style={{
                      minWidth: "auto",
                    }}
                  >
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2" />
                        Add to Wishlist
                       </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2" />
                        Compare
                       </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                  to="shop-product-general-electronics.html"
                >
                  <div
                    className="ratio"
                    style={{
                      "--cz-aspect-ratio": "calc(240 / 258 * 100%)",
                    }}
                  >
                    <img
                      alt="iPad Air"
                      src="assets/img/shop/electronics/05.png"
                    />
                  </div>
                 </Link>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                  </div>
                  <span className="text-body-tertiary fs-xs">(12)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <Link
                    className="d-block fs-sm fw-medium text-truncate"
                    to="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      Tablet Apple iPad Air M1
                    </span>
                   </Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$540.00</div>
                  <button
                    aria-label="Add to Cart"
                    className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
                    type="button"
                  >
                    <i className="bi bi-cart fs-base animate-target" />
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Display:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      10.9" LED
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Capacity:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      64 GB
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Chip:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      Apple M1
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Camera:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      12 MP Wide
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Weight:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      462 grams
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="position-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-heart fs-base animate-target" />
                    </button>
                    <button
                      aria-label="Compare"
                      className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-arrow-clockwise fs-base animate-target" />
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button
                    aria-expanded="false"
                    aria-label="More actions"
                    className="btn btn-icon btn-sm btn-secondary bg-body"
                    data-bs-toggle="dropdown"
                    type="button"
                  >
                    <i className="bi bi-three-dots-vertical fs-lg" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end fs-xs p-2"
                    style={{
                      minWidth: "auto",
                    }}
                  >
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2" />
                        Add to Wishlist
                       </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2" />
                        Compare
                       </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                  to="shop-product-general-electronics.html"
                >
                  <div
                    className="ratio"
                    style={{
                      "--cz-aspect-ratio": "calc(240 / 258 * 100%)",
                    }}
                  >
                    <img
                      alt="AirPods 2"
                      src="assets/img/shop/electronics/06.png"
                    />
                  </div>
                 </Link>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star text-body-tertiary opacity-75" />
                  </div>
                  <span className="text-body-tertiary fs-xs">(78)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <Link
                    className="d-block fs-sm fw-medium text-truncate"
                    to="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      Headphones Apple AirPods 2 Pro
                    </span>
                   </Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$224.00</div>
                  <button
                    aria-label="Add to Cart"
                    className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
                    type="button"
                  >
                    <i className="bi bi-cart fs-base animate-target" />
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Audio:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      Noise Cancellation
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Sensors:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      Touch control
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Chip:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      Apple H2
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Weight:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      50.8 grams
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="posittion-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-heart fs-base animate-target" />
                    </button>
                    <button
                      aria-label="Compare"
                      className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-arrow-clockwise fs-base animate-target" />
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button
                    aria-expanded="false"
                    aria-label="More actions"
                    className="btn btn-icon btn-sm btn-secondary bg-body"
                    data-bs-toggle="dropdown"
                    type="button"
                  >
                    <i className="bi bi-three-dots-vertical fs-lg" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end fs-xs p-2"
                    style={{
                      minWidth: "auto",
                    }}
                  >
                    <li>
                      <Link className="dropdown-item" to="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2" />
                        Add to Wishlist
                       </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2" />
                        Compare
                       </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                  href="shop-product-general-electronics.html"
                >
                  <div
                    className="ratio"
                    style={{
                      "--cz-aspect-ratio": "calc(240 / 258 * 100%)",
                    }}
                  >
                    <img
                      alt="iPad Pro"
                      src="assets/img/shop/electronics/07.png"
                    />
                  </div>
                 </Link>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-half text-warning" />
                  </div>
                  <span className="text-body-tertiary fs-xs">(49)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <Link
                    className="d-block fs-sm fw-medium text-truncate"
                    href="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      Tablet Apple iPad Pro M1
                    </span>
                   </Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$739.00</div>
                  <button
                    aria-label="Add to Cart"
                    className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
                    type="button"
                  >
                    <i className="bi bi-cart fs-base animate-target" />
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Display:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      11" LED
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Capacity:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      128 GB
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Chip:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      Apple M1
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Camera:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      12 MP Wide
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Weight:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      470 grams
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="posittion-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button
                      aria-label="Add to Wishlist"
                      className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-heart fs-base animate-target" />
                    </button>
                    <button
                      aria-label="Compare"
                      className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex"
                      type="button"
                    >
                      <i className="bi bi-arrow-clockwise fs-base animate-target" />
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button
                    aria-expanded="false"
                    aria-label="More actions"
                    className="btn btn-icon btn-sm btn-secondary bg-body"
                    data-bs-toggle="dropdown"
                    type="button"
                  >
                    <i className="bi bi-three-dots-vertical fs-lg" />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end fs-xs p-2"
                    style={{
                      minWidth: "auto",
                    }}
                  >
                    <li>
                      <Link className="dropdown-item" href="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2" />
                        Add to Wishlist
                       </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2" />
                        Compare
                       </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  className="d-block rounded-top overflow-hidden p-3 p-sm-4"
                  href="shop-product-general-electronics.html"
                >
                  <div
                    className="ratio"
                    style={{
                      "--cz-aspect-ratio": "calc(240 / 258 * 100%)",
                    }}
                  >
                    <img
                      alt="Bluetooth Headphones"
                      src="assets/img/shop/electronics/08.png"
                    />
                  </div>
                 </Link>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-half text-warning" />
                    <i className="bi bi-star text-body-tertiary opacity-75" />
                  </div>
                  <span className="text-body-tertiary fs-xs">(136)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <Link
                    className="d-block fs-sm fw-medium text-truncate"
                    href="shop-product-general-electronics.html"
                  >
                    <span className="animate-target">
                      Wireless Bluetooth Headphones Sony
                    </span>
                   </Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$299.00</div>
                  <button
                    aria-label="Add to Cart"
                    className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
                    type="button"
                  >
                    <i className="bi bi-cart fs-base animate-target" />
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Audio:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      Noise Cancellation
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Connectivity:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      Bluetooth, 3.5mm jack
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Material:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      Leather, Plastic
                    </span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Weight:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">
                      185 grams
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        ;
      </section>
      {/* <!-- Sale Banner (CTA) --> */}
      <section className="container pt-5 mt-sm-2 mt-md-3 mt-lg-4">
        <div className="row g-0">
          {/* Left Column - Discount Badge */}
          <div className="col-md-3 mb-n4 mb-md-0">
            <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100 py-5">
              {/* Background for desktop */}
              <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-md-block">
                <span
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark"
                  style={{ backgroundColor: "#accbee" }}
                ></span>
                <span
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark"
                  style={{ backgroundColor: "#1b273a" }}
                ></span>
              </div>
              {/* Background for mobile */}
              <div className="position-absolute top-0 start-0 w-100 h-100 d-md-none">
                <span
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none-dark"
                  style={{
                    background:
                      "linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)",
                  }}
                ></span>
                <span
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none d-block-dark"
                  style={{
                    background:
                      "linear-gradient(90deg, #1b273a 0%, #1f2632 100%)",
                  }}
                ></span>
              </div>
              <div className="position-relative z-1 display-1 text-dark-emphasis text-nowrap mb-0">
                20
                <span className="d-inline-block ms-n2">
                  <span className="d-block fs-1">%</span>
                  <span className="d-block fs-5">OFF</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Banner */}
          <div className="col-md-9 position-relative">
            <div
              className="position-absolute top-0 start-0 h-100 overflow-hidden rounded-pill z-2 d-none d-md-block"
              style={{ color: "var(--cz-body-bg)", marginLeft: "-2px" }}
            >
              <svg
                width="4"
                height="436"
                viewBox="0 0 4 436"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0L1.99998 436"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="8 12"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="position-relative">
              {/* Background gradient layers */}
              <span
                className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip"
                style={{
                  background:
                    "linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)",
                }}
              ></span>
              <span
                className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip"
                style={{
                  background:
                    "linear-gradient(90deg, #1b273a 0%, #1f2632 100%)",
                }}
              ></span>

              <div className="row align-items-center position-relative z-2">
                {/* Text */}
                <div className="col-md-6 mb-3 mb-md-0">
                  <div className="text-center text-md-start py-md-5 px-4 ps-md-5 pe-md-0 me-md-n5">
                    <h3 className="text-uppercase fw-bold ps-xxl-3 pb-2 mb-1">
                      Seasonal weekly sale 2024
                    </h3>
                    <p className="text-body-emphasis ps-xxl-3 mb-0">
                      Use code{" "}
                      <span className="d-inline-block fw-semibold bg-white text-dark rounded-pill py-1 px-2">
                        Sale 2024
                      </span>{" "}
                      to get best offer
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="col-md-6 d-flex justify-content-center justify-content-md-end pb-5 pb-md-0">
                  <div className="me-xxl-4">
                    <img
                      src="assets/img/home/electronics/banner/camera.png"
                      className="d-block rtl-flip"
                      width="420"
                      alt="Camera"
                    />
                    <div
                      className="d-none d-lg-block"
                      style={{ marginBottom: "-9%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-none d-lg-block"
          style={{ paddingBottom: "3%" }}
        ></div>
      </section>
      {/*  <!-- Special offers (Carousel) --> */}
      <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">
        {/* <!-- Heading + Countdown --> */}
        <div className="d-flex align-items-start align-items-md-center justify-content-between border-bottom pb-3 pb-md-4">
          <div className="d-md-flex align-items-center">
            <h2 className="h3 pe-3 me-3 mb-md-0">Special offers for you</h2>

            <div className="d-flex align-items-center">
              <div className="btn btn-primary pe-none px-2">
                <span>{timeLeft.days}</span>
                <span>d</span>
              </div>
              <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">
                :
              </div>
              <div className="btn btn-primary pe-none px-2">
                <span>{timeLeft.hours}</span>
                <span>h</span>
              </div>
              <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">
                :
              </div>
              <div className="btn btn-primary pe-none px-2">
                <span>{timeLeft.minutes}</span>
                <span>m</span>
              </div>
            </div>
          </div>

          <div className="nav ms-3">
            <Link
              className="nav-link animate-underline px-0 py-2"
              href="shop-catalog-electronics.html"
            >
              <span className="animate-target text-nowrap">View all</span>
              <i className="bi bi-chevron-right fs-base ms-1"></i>
             </Link>
          </div>
        </div>
        {/*  <!-- Product carousel --> */}
      <div className="position-relative mx-md-1">
      {/* أزرار خارجية للشاشات الكبيرة */}
      <button ref={prevRef} type="button" className="offers-prev btn btn-icon btn-outline-secondary bg-body rounded-circle position-absolute top-50 start-0 z-2 translate-middle-y d-none d-sm-inline-flex">
        <i className="bi bi-chevron-left fs-lg"></i>
      </button>
      <button ref={nextRef} type="button" className="offers-next btn btn-icon btn-outline-secondary bg-body rounded-circle position-absolute top-50 end-0 z-2 translate-middle-y d-none d-sm-inline-flex">
        <i className="bi bi-chevron-right fs-lg"></i>
      </button>

      {/* سلايدر */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        spaceBetween={24}
        loop={true}
        slidesPerView={2}
        breakpoints={{
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
        className="py-4 px-sm-3"
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <div className="product-card bg-body rounded">
              <Link href="#" className="d-block rounded-top overflow-hidden p-3 p-sm-4">
                <div className="ratio" style={{ aspectRatio: '240 / 258' }}>
                  <img src={product.image} alt={product.name} />
                </div>
               </Link>
              <div className="p-3">
                <h3 className="fs-sm fw-medium text-truncate">{product.name}</h3>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5">${product.price.toFixed(2)} <del className="text-muted fs-sm">${product.oldPrice.toFixed(2)}</del></span>
                  <button className="btn btn-icon btn-secondary">
                    <i className="bi bi-cart"></i>
                  </button>
                </div>
                <div className="progress mt-2" style={{ height: '4px' }}>
                  <div className="progress-bar" style={{ width: '25%' }}></div>
                </div>
                <small className="text-muted">Available: {product.stock}</small>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار للشاشات الصغيرة */}
      <div className="d-flex justify-content-center gap-2 mt-2 d-sm-none">
        <button ref={prevRef} type="button" className="btn btn-icon btn-outline-secondary bg-body rounded-circle">
          <i className="bi bi-chevron-left fs-lg"></i>
        </button>
        <button ref={nextRef} type="button" className="btn btn-icon btn-outline-secondary bg-body rounded-circle">
          <i className="bi bi-chevron-right fs-lg"></i>
        </button>
      </div>
    </div>
      </section>
      {/*  <!-- Brands --> */}
      <section className="container pt-4 pt-md-5 pb-5 mt-sm-2 mb-2 mb-sm-3 mb-md-4 mb-lg-5">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3 g-md-4 g-lg-3 g-xl-4">
          {brands.map((brand, index) => (
            <div className="col" key={index}>
              <Link
                className="btn btn-outline-secondary w-100 rounded-4 p-3"
                href="shop-catalog-electronics.html"
              >
                <img
                  src={brand.light}
                  className="d-none-dark"
                  alt={brand.name}
                />
                <img
                  src={brand.dark}
                  className="d-none d-block-dark"
                  alt={brand.name}
                />
               </Link>
            </div>
          ))}
          <div className="col">
            <Link
              className="btn btn-outline-secondary w-100 h-100 rounded-4 p-3"
              href="shop-categories-electronics.html"
            >
              All brands
              <i className="bi bi-plus-circle fs-base ms-2"></i>
             </Link>
          </div>
        </div>
      </section>
      {/*  <!-- Subscription form + Vlog --> */}
      <section className="bg-body-tertiary py-5">
        <div className="container pt-sm-2 pt-md-3 pt-lg-4 pt-xl-5">
          <div className="row">
            {/* Left Side: Newsletter */}
            <div className="col-md-6 col-lg-5 mb-5 mb-md-0">
              <h2 className="h4 mb-2">Sign up to our newsletter</h2>
              <p className="text-body pb-2 pb-ms-3">
                Receive our latest updates about our products &amp; promotions
              </p>
              <form
                className="d-flex needs-validation pb-1 pb-sm-2 pb-md-3 pb-lg-0 mb-4 mb-lg-5"
                noValidate
              >
                <div className="position-relative w-100 me-2">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Your email"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-lg btn-primary">
                  Subscribe
                </button>
              </form>
              <div className="d-flex gap-3">
                <Link
                  className="btn btn-icon btn-secondary rounded-circle"
                  href="#!"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram fs-base"></i>
                 </Link>
                <Link
                  className="btn btn-icon btn-secondary rounded-circle"
                  href="#!"
                  aria-label="Facebook"
                >
                  <i className="bi bi-facebook fs-base"></i>
                 </Link>
                <Link
                  className="btn btn-icon btn-secondary rounded-circle"
                  href="#!"
                  aria-label="YouTube"
                >
                  <i className="bi bi-youtube fs-base"></i>
                 </Link>
                <Link
                  className="btn btn-icon btn-secondary rounded-circle"
                  href="#!"
                  aria-label="Telegram"
                >
                  <i className="bi bi-telegram fs-base"></i>
                 </Link>
              </div>
            </div>

            {/* Right Side: Vlog List */}
            <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1 offset-xl-2">
              <ul className="list-unstyled d-flex flex-column gap-4 ps-md-4 ps-lg-0 mb-3">
                {vlogItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="nav flex-nowrap align-items-center position-relative"
                  >
                    <img
                      src={item.img}
                      className="rounded"
                      width="140"
                      alt="Video cover"
                    />
                    <div className="ps-3">
                      <div className="fs-xs text-body-secondary lh-sm mb-2">
                        {item.duration}
                      </div>
                      <Link
                        className="nav-link fs-sm hover-effect-underline stretched-link p-0"
                        href="#!"
                      >
                        {item.title}
                       </Link>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="nav ps-md-4 ps-lg-0">
                <Link
                  className="btn nav-link animate-underline text-decoration-none px-0"
                  href="#!"
                >
                  <span className="animate-target">View all</span>
                  <i className="bi bi-chevron-right fs-base ms-1"></i>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
