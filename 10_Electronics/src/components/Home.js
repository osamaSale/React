import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
export const Home = () =>{
    return (
    
<main className="content-wrapper">

      {/* Hero slider */}
      <section className="container pt-4">
        <div className="row">
          <div className="col-lg-9 offset-lg-3">
            <div className="position-relative">
              <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip" style={{"background":"linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)"}}></span>
              <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip" style={{"background":"linear-gradient(90deg, #1b273a 0%, #1f2632 100%)"}}></span>
              <div className="row justify-content-center position-relative z-2">
                <div className="col-xl-5 col-xxl-4 offset-xxl-1 d-flex align-items-center mt-xl-n3">

                  {/* Text content master slider */}
                  <div className="swiper px-5 pe-xl-0 ps-xxl-0 me-xl-n5" data-swiper="{
                    &quot;spaceBetween&quot;: 64,
                    &quot;loop&quot;: true,
                    &quot;speed&quot;: 400,
                    &quot;controlSlider&quot;: &quot;#sliderImages&quot;,
                    &quot;autoplay&quot;: {
                      &quot;delay&quot;: 5500,
                      &quot;disableOnInteraction&quot;: false
                    },
                    &quot;scrollbar&quot;: {
                      &quot;el&quot;: &quot;.swiper-scrollbar&quot;
                    }
                  }">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide text-center text-xl-start pt-5 py-xl-5">
                        <p className="text-body">Feel the real quality sound</p>
                        <h2 className="display-4 pb-2 pb-xl-4">Headphones ProMax</h2>
                        <a className="btn btn-lg btn-primary" href="shop-product-general-electronics.html">
                          Shop now
                          <i className="bi bi-arrow-up-right fs-lg ms-2 me-n1"></i>
                        </a>
                      </div>
                      <div className="swiper-slide text-center text-xl-start pt-5 py-xl-5">
                        <p className="text-body">Deal of the week</p>
                        <h2 className="display-4 pb-2 pb-xl-4">Powerful iPad Pro M2</h2>
                        <a className="btn btn-lg btn-primary" href="shop-product-general-electronics.html">
                          Shop now
                          <i className="bi bi-arrow-up-right fs-lg ms-2 me-n1"></i>
                        </a>
                      </div>
                      <div className="swiper-slide text-center text-xl-start pt-5 py-xl-5">
                        <p className="text-body">Virtual reality glasses</p>
                        <h2 className="display-4 pb-2 pb-xl-4">Experience New Reality</h2>
                        <a className="btn btn-lg btn-primary" href="shop-catalog-electronics.html">
                          Shop now
                          <i className="bi bi-arrow-up-right fs-lg ms-2 me-n1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-9 col-sm-7 col-md-6 col-lg-5 col-xl-7">

                  {/* Binded images (controlled slider) */}
                  <div className="swiper user-select-none" id="sliderImages" data-swiper="{
                    &quot;allowTouchMove&quot;: false,
                    &quot;loop&quot;: true,
                    &quot;effect&quot;: &quot;fade&quot;,
                    &quot;fadeEffect&quot;: {
                      &quot;crossFade&quot;: true
                    }
                  }">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide d-flex justify-content-end">
                        <div className="ratio rtl-flip" style={{"maxWidth":"495px","--czAspectRatio":"calc(537 / 495 * 100%)"}}>
                          <img src="assets/img/home/electronics/hero-slider/01.png" alt="Image" />
                        </div>
                      </div>
                      <div className="swiper-slide d-flex justify-content-end">
                        <div className="ratio rtl-flip" style={{"maxWidth":"495px","--czAspectRatio":"calc(537 / 495 * 100%)"}}>
                          <img src="assets/img/home/electronics/hero-slider/02.png" alt="Image" />
                        </div>
                      </div>
                      <div className="swiper-slide d-flex justify-content-end">
                        <div className="ratio rtl-flip" style={{"maxWidth":"495px","--czAspectRatio":"calc(537 / 495 * 100%)"}}>
                          <img src="assets/img/home/electronics/hero-slider/03.png" alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
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


      {/* Features */}
      <section className="container pt-5 mt-1 mt-sm-3 mt-lg-4">
        <div className="row row-cols-2 row-cols-md-4 g-4">

          {/* Item */}
          <div className="col">
            <div className="d-flex flex-column flex-xxl-row align-items-center">
              <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                <i className="bi bi-truck fs-2 m-xxl-1"></i>
              </div>
              <div className="text-center text-xxl-start ps-xxl-3">
                <h3 className="h6 mb-1">Free Shipping &amp; Returns</h3>
                <p className="fs-sm mb-0">For all orders over $199.00</p>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="col">
            <div className="d-flex flex-column flex-xxl-row align-items-center">
              <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                <i className="bi bi-credit-card fs-2 m-xxl-1"></i>
              </div>
              <div className="text-center text-xxl-start ps-xxl-3">
                <h3 className="h6 mb-1">Secure Payment</h3>
                <p className="fs-sm mb-0">We ensure secure payment</p>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="col">
            <div className="d-flex flex-column flex-xxl-row align-items-center">
              <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                <i className="bi bi-arrow-clockwise fs-2 m-xxl-1"></i>
              </div>
              <div className="text-center text-xxl-start ps-xxl-3">
                <h3 className="h6 mb-1">Money Back Guarantee</h3>
                <p className="fs-sm mb-0">Returning money 30 days</p>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="col">
            <div className="d-flex flex-column flex-xxl-row align-items-center">
              <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                <i className="bi bi-chat fs-2 m-xxl-1"></i>
              </div>
              <div className="text-center text-xxl-start ps-xxl-3">
                <h3 className="h6 mb-1">24/7 Customer Support</h3>
                <p className="fs-sm mb-0">Friendly customer support</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* New arrivals (List) */}
      <section className="container pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4">
        <h2 className="h3 pb-2 pb-sm-3">New arrivals</h2>
        <div className="row">

          {/* Banner */}
          <div className="col-lg-4" data-bs-theme="dark">
            <div className="d-flex flex-column align-items-center justify-content-end h-100 text-center overflow-hidden rounded-5 px-4 px-lg-3 pt-4 pb-5" style={{"background":"#1d2c41 url(assets/img/home/electronics/banner/background.jpg) center/cover no-repeat"}}>
              <div className="ratio animate-up-down position-relative z-2 me-lg-4" style={{"maxWidth":"320px","marginBottom":"-19%","--czAspectRatio":"calc(690 / 640 * 100%)"}}>
                <img src="assets/img/home/electronics/banner/laptop.png" alt="Laptop" />
              </div>
              <h3 className="display-2 mb-2">MacBook</h3>
              <p className="text-body fw-medium mb-4">Be Pro Anywhere</p>
              <a className="btn btn-sm btn-primary" href="#!">
                From $1,199
                <i className="bi bi-arrow-up-right fs-base ms-1 me-n1"></i>
              </a>
            </div>
          </div>

          {/* Product list */}
          <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4">

            {/* Item */}
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div className="ratio ratio-1x1 flex-shrink-0" style={{"width":"110px"}}>
                <img src="assets/img/shop/electronics/thumbs/01.png" alt="Smart Watch" />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">45</span>
                </div>
                <h4 className="mb-2">
                  <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">Smart Watch Series 7, White</span>
                  </a>
                </h4>
                <div className="h5 mb-0">$449.00</div>
              </div>
            </div>

            {/* Item */}
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div className="ratio ratio-1x1 flex-shrink-0" style={{"width":"110px"}}>
                <img src="assets/img/shop/electronics/thumbs/03.png" width="110" alt="VR Glasses" />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                    <i className="bi bi-star text-body-tertiary opacity-75"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">123</span>
                </div>
                <h4 className="mb-2">
                  <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">VRB01 Virtual Reality Glasses</span>
                  </a>
                </h4>
                <div className="h5 mb-0">$340.99</div>
              </div>
            </div>

            {/* Item */}
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div className="ratio ratio-1x1 flex-shrink-0" style={{"width":"110px"}}>
                <img src="assets/img/shop/electronics/thumbs/05.png" width="110" alt="Bluetooth Headphones" />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-body-tertiary opacity-75"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">34</span>
                </div>
                <h4 className="mb-2">
                  <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">Wireless Bluetooth Headphones Sony</span>
                  </a>
                </h4>
                <div className="h5 mb-0">$357.00</div>
              </div>
            </div>

            {/* Item */}
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div className="ratio ratio-1x1 flex-shrink-0" style={{"width":"110px"}}>
                <img src="assets/img/shop/electronics/thumbs/07.png" width="110" alt="MacBook" />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">34</span>
                </div>
                <h4 className="mb-2">
                  <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">Laptop Apple MacBook Pro 13 M2</span>
                  </a>
                </h4>
                <div className="h5 mb-0">$1,200.00</div>
              </div>
            </div>
          </div>

          {/* Product list */}
          <div className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-3 py-lg-4">

            {/* Item */}
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div className="ratio ratio-1x1 flex-shrink-0" style={{"width":"110px"}}>
                <img src="assets/img/shop/electronics/thumbs/02.png" width="110" alt="iPad Pro" />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-body-tertiary opacity-75"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">126</span>
                </div>
                <h4 className="mb-2">
                  <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">Tablet Apple iPad Air M1</span>
                  </a>
                </h4>
                <div className="h5 mb-0">$540.00</div>
              </div>
            </div>

            {/* Item */}
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div className="ratio ratio-1x1 flex-shrink-0" style={{"width":"110px"}}>
                <img src="assets/img/shop/electronics/thumbs/04.png" width="110" alt="AirPods 2 Pro" />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">340</span>
                </div>
                <h4 className="mb-2">
                  <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html"><span className="animate-target">Headphones Apple AirPods 2 Pro</span></a>
                </h4>
                <div className="h5 mb-0">$209.99 <del className="text-body-tertiary fs-sm fw-normal">$356.00</del></div>
              </div>
            </div>

            {/* Item */}
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div className="ratio ratio-1x1 flex-shrink-0" style={{"width":"110px"}}>
                <img src="assets/img/shop/electronics/thumbs/06.png" width="110" alt="Power Bank" />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-body-tertiary opacity-75"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">29</span>
                </div>
                <h4 className="mb-2">
                  <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">Power Bank PBS 10000 mAh Black</span>
                  </a>
                </h4>
                <div className="h5 mb-0">$49.99</div>
              </div>
            </div>

            {/* Item */}
            <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
              <div className="ratio ratio-1x1 flex-shrink-0" style={{"width":"110px"}}>
                <img src="assets/img/shop/electronics/thumbs/08.png" width="110" alt="iPhone 14" />
              </div>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">12</span>
                </div>
                <h4 className="mb-2">
                  <a className="stretched-link d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">Apple iPhone 14 128GB White</span>
                  </a>
                </h4>
                <div className="h5 mb-0">$899.00 <del className="text-body-tertiary fs-sm fw-normal">$958.00</del></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Trending products (Grid) */}
      <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">

        {/* Heading */}
        <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
          <h2 className="h3 mb-0">Trending products</h2>
          <div className="nav ms-3">
            <a className="nav-link animate-underline px-0 py-2" href="shop-catalog-electronics.html">
              <span className="animate-target">View all</span>
              <i className="bi bi-chevron-right fs-base ms-1"></i>
            </a>
          </div>
        </div>

        {/* Product grid */}
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">

          {/* Item */}
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="position-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                      <i className="bi bi-heart fs-base animate-target"></i>
                    </button>
                    <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                      <i className="bi bi-arrow-clockwise fs-base animate-target"></i>
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                    <i className="bi bi-three-dots-vertical fs-lg"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2"></i>
                        Add to Wishlist
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2"></i>
                        Compare
                      </a>
                    </li>
                  </ul>
                </div>
                <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                  <span className="badge bg-danger position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">-21%</span>
                  <div className="ratio" style={{"--czAspectRatio":"calc(240 / 258 * 100%)"}}>
                    <img src="assets/img/shop/electronics/01.png" alt="VR Glasses" />
                  </div>
                </a>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-body-tertiary opacity-75"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">(123)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">VRB01 Virtual Reality Glasses</span>
                  </a>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$340.99 <del className="text-body-tertiary fs-sm fw-normal">$430.00</del></div>
                  <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                    <i className="bi bi-cart fs-base animate-target"></i>
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2"></span>
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Display:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">OLED 1440x1600</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Graphics:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">Adreno 540</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Sound:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">2x3.5mm jack</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Input:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">4 built-in cameras</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="position-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                      <i className="bi bi-heart fs-base animate-target"></i>
                    </button>
                    <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                      <i className="bi bi-arrow-clockwise fs-base animate-target"></i>
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                    <i className="bi bi-three-dots-vertical fs-lg"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2"></i>
                        Add to Wishlist
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2"></i>
                        Compare
                      </a>
                    </li>
                  </ul>
                </div>
                <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                  <div className="ratio" style={{"--czAspectRatio":"calc(240 / 258 * 100%)"}}>
                    <img src="assets/img/shop/electronics/02.png" alt="iPhone 14" />
                  </div>
                </a>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">(142)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">Apple iPhone 14 128GB White</span>
                  </a>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$899.00</div>
                  <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                    <i className="bi bi-cart fs-base animate-target"></i>
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2"></span>
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Display:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">6.1" XDR</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Capacity:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">128 GB</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Chip:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">A15 Bionic</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Camera:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">12 + 12 MP</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Weight:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">172 grams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="position-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                      <i className="bi bi-heart fs-base animate-target"></i>
                    </button>
                    <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                      <i className="bi bi-arrow-clockwise fs-base animate-target"></i>
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                    <i className="bi bi-three-dots-vertical fs-lg"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2"></i>
                        Add to Wishlist
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2"></i>
                        Compare
                      </a>
                    </li>
                  </ul>
                </div>
                <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                  <div className="ratio" style={{"--czAspectRatio":"calc(240 / 258 * 100%)"}}>
                    <img src="assets/img/shop/electronics/03.png" alt="Smart Watch" />
                  </div>
                </a>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">(67)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">Smart Watch Series 7, White</span>
                  </a>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$429.00</div>
                  <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                    <i className="bi bi-cart fs-base animate-target"></i>
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2"></span>
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Display:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">45mm OLED</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Chip:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">64-bit Dual-core</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Connectivity:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">Wi-Fi, Bluetooth</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Power:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">Lithium-ion battery</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Weight:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">37.0 grams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="position-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                      <i className="bi bi-heart fs-base animate-target"></i>
                    </button>
                    <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                      <i className="bi bi-arrow-clockwise fs-base animate-target"></i>
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                    <i className="bi bi-three-dots-vertical fs-lg"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2"></i>
                        Add to Wishlist
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2"></i>
                        Compare
                      </a>
                    </li>
                  </ul>
                </div>
                <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                  <span className="badge bg-info position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">New</span>
                  <div className="ratio" style={{"--czAspectRatio":"calc(240 / 258 * 100%)"}}>
                    <img src="assets/img/shop/electronics/04.png" alt="MacBook" />
                  </div>
                </a>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">(51)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">Laptop Apple MacBook Pro 13 M2</span>
                  </a>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$1,200.00</div>
                  <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                    <i className="bi bi-cart fs-base animate-target"></i>
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2"></span>
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Chip:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">Apple M2</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Memory:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">8 GB unified</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Storage:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">256 GB SSD</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Display:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">13.3-inch Retina</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="posittion-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                      <i className="bi bi-heart fs-base animate-target"></i>
                    </button>
                    <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                      <i className="bi bi-arrow-clockwise fs-base animate-target"></i>
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                    <i className="bi bi-three-dots-vertical fs-lg"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2"></i>
                        Add to Wishlist
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2"></i>
                        Compare
                      </a>
                    </li>
                  </ul>
                </div>
                <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                  <div className="ratio" style={{"--czAspectRatio":"calc(240 / 258 * 100%)"}}>
                    <img src="assets/img/shop/electronics/05.png" alt="iPad Air" />
                  </div>
                </a>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">(12)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">Tablet Apple iPad Air M1</span>
                  </a>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$540.00</div>
                  <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                    <i className="bi bi-cart fs-base animate-target"></i>
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2"></span>
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Display:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">10.9" LED</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Capacity:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">64 GB</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Chip:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">Apple M1</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Camera:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">12 MP Wide</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Weight:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">462 grams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="position-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                      <i className="bi bi-heart fs-base animate-target"></i>
                    </button>
                    <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                      <i className="bi bi-arrow-clockwise fs-base animate-target"></i>
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                    <i className="bi bi-three-dots-vertical fs-lg"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2"></i>
                        Add to Wishlist
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2"></i>
                        Compare
                      </a>
                    </li>
                  </ul>
                </div>
                <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                  <div className="ratio" style={{"--czAspectRatio":"calc(240 / 258 * 100%)"}}>
                    <img src="assets/img/shop/electronics/06.png" alt="AirPods 2" />
                  </div>
                </a>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-body-tertiary opacity-75"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">(78)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">Headphones Apple AirPods 2 Pro</span>
                  </a>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$224.00</div>
                  <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                    <i className="bi bi-cart fs-base animate-target"></i>
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2"></span>
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Audio:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">Noise Cancellation</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Sensors:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">Touch control</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Chip:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">Apple H2</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Weight:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">50.8 grams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="posittion-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                      <i className="bi bi-heart fs-base animate-target"></i>
                    </button>
                    <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                      <i className="bi bi-arrow-clockwise fs-base animate-target"></i>
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                    <i className="bi bi-three-dots-vertical fs-lg"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2"></i>
                        Add to Wishlist
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2"></i>
                        Compare
                      </a>
                    </li>
                  </ul>
                </div>
                <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                  <div className="ratio" style={{"--czAspectRatio":"calc(240 / 258 * 100%)"}}>
                    <img src="assets/img/shop/electronics/07.png" alt="iPad Pro" />
                  </div>
                </a>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">(49)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">Tablet Apple iPad Pro M1</span>
                  </a>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$739.00</div>
                  <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                    <i className="bi bi-cart fs-base animate-target"></i>
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2"></span>
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Display:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">11" LED</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Capacity:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">128 GB</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Chip:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">Apple M1</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Camera:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">12 MP Wide</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Weight:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">470 grams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
              <div className="posittion-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                  <div className="d-flex flex-column gap-2">
                    <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                      <i className="bi bi-heart fs-base animate-target"></i>
                    </button>
                    <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                      <i className="bi bi-arrow-clockwise fs-base animate-target"></i>
                    </button>
                  </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                  <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                    <i className="bi bi-three-dots-vertical fs-lg"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-heart fs-sm ms-n1 me-2"></i>
                        Add to Wishlist
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2"></i>
                        Compare
                      </a>
                    </li>
                  </ul>
                </div>
                <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                  <div className="ratio" style={{"--czAspectRatio":"calc(240 / 258 * 100%)"}}>
                    <img src="assets/img/shop/electronics/08.png" alt="Bluetooth Headphones" />
                  </div>
                </a>
              </div>
              <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="d-flex gap-1 fs-xs">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                    <i className="bi bi-star text-body-tertiary opacity-75"></i>
                  </div>
                  <span className="text-body-tertiary fs-xs">(136)</span>
                </div>
                <h3 className="pb-1 mb-2">
                  <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                    <span className="animate-target">Wireless Bluetooth Headphones Sony</span>
                  </a>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="h5 lh-1 mb-0">$299.00</div>
                  <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                    <i className="bi bi-cart fs-base animate-target"></i>
                  </button>
                </div>
              </div>
              <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2"></span>
                <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Audio:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">Noise Cancellation</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Connectivity:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">Bluetooth, 3.5mm jack</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Material:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">Leather, Plastic</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="fs-xs">Weight:</span>
                    <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                    <span className="text-dark-emphasis fs-xs fw-medium text-end">185 grams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Sale Banner (CTA) */}
      <section className="container pt-5 mt-sm-2 mt-md-3 mt-lg-4">
        <div className="row g-0">
          <div className="col-md-3 mb-n4 mb-md-0">
            <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100 py-5">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-md-block">
                <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark" style={{"backgroundColor":"#accbee"}}></span>
                <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark" style={{"backgroundColor":"#1b273a"}}></span>
              </div>
              <div className="position-absolute top-0 start-0 w-100 h-100 d-md-none">
                <span className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none-dark" style={{"background":"linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)"}}></span>
                <span className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none d-block-dark" style={{"background":"linear-gradient(90deg, #1b273a 0%, #1f2632 100%)"}}></span>
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
          <div className="col-md-9 position-relative">
            <div className="position-absolute top-0 start-0 h-100 overflow-hidden rounded-pill z-2 d-none d-md-block" style={{"color":"var(--cz-body-bg)","marginLeft":"-2px"}}>
              <svg width="4" height="436" viewBox="0 0 4 436" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 0L1.99998 436" stroke="currentColor" strokeWidth="3" strokeDasharray="8 12" strokeLinecap="round"></path>
              </svg>
            </div>
            <div className="position-relative">
              <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip" style={{"background":"linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)"}}></span>
              <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip" style={{"background":"linear-gradient(90deg, #1b273a 0%, #1f2632 100%)"}}></span>
              <div className="row align-items-center position-relative z-2">
                <div className="col-md-6 mb-3 mb-md-0">
                  <div className="text-center text-md-start py-md-5 px-4 ps-md-5 pe-md-0 me-md-n5">
                    <h3 className="text-uppercase fw-bold ps-xxl-3 pb-2 mb-1">Seasonal weekly sale 2024</h3>
                    <p className="text-body-emphasis ps-xxl-3 mb-0">Use code <span className="d-inline-block fw-semibold bg-white text-dark rounded-pill py-1 px-2">Sale 2024</span> to get best offer</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center justify-content-md-end pb-5 pb-md-0">
                  <div className="me-xxl-4">
                    <img src="assets/img/home/electronics/banner/camera.png" className="d-block rtl-flip" width="420" alt="Camera" />
                    <div className="d-none d-lg-block" style={{"marginBottom":"-9%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block" style={{"paddingBottom":"3%"}}></div>
      </section>


      {/* Special offers (Carousel) */}
      <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4">

        {/* Heading + Countdown */}
        <div className="d-flex align-items-start align-items-md-center justify-content-between border-bottom pb-3 pb-md-4">
          <div className="d-md-flex align-items-center">
            <h2 className="h3 pe-3 me-3 mb-md-0">Special offers for you</h2>

            {/* Replace "demoDate" inside data-countdown-date attribute with the real date, ex: "10/15/2025 12:00:00" */}
            <div className="d-flex align-items-center" data-countdown-date="demoDate">
              <div className="btn btn-primary pe-none px-2">
                <span data-days=""></span>
                <span>d</span>
              </div>
              <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
              <div className="btn btn-primary pe-none px-2">
                <span data-hours=""></span>
                <span>h</span>
              </div>
              <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
              <div className="btn btn-primary pe-none px-2">
                <span data-minutes=""></span>
                <span>m</span>
              </div>
            </div>
          </div>
          <div className="nav ms-3">
            <a className="nav-link animate-underline px-0 py-2" href="shop-catalog-electronics.html">
              <span className="animate-target text-nowrap">View all</span>
              <i className="bi bi-chevron-right fs-base ms-1"></i>
            </a>
          </div>
        </div>

        {/* Product carousel */}
        <div className="position-relative mx-md-1">

          {/* External slider prev/next buttons visible on screens > 500px wide (sm breakpoint) */}
          <button type="button" className="offers-prev btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start position-absolute top-50 start-0 z-2 translate-middle-y ms-n1 d-none d-sm-inline-flex" aria-label="Prev">
            <i className="bi bi-chevron-left fs-lg animate-target"></i>
          </button>
          <button type="button" className="offers-next btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end position-absolute top-50 end-0 z-2 translate-middle-y me-n1 d-none d-sm-inline-flex" aria-label="Next">
            <i className="bi bi-chevron-right fs-lg animate-target"></i>
          </button>

          {/* Slider */}
          <div className="swiper py-4 px-sm-3" data-swiper="{
            &quot;slidesPerView&quot;: 2,
            &quot;spaceBetween&quot;: 24,
            &quot;loop&quot;: true,
            &quot;navigation&quot;: {
              &quot;prevEl&quot;: &quot;.offers-prev&quot;,
              &quot;nextEl&quot;: &quot;.offers-next&quot;
            },
            &quot;breakpoints&quot;: {
              &quot;768&quot;: {
                &quot;slidesPerView&quot;: 4
              },
              &quot;992&quot;: {
                &quot;slidesPerView&quot;: 4
              }
            }
          }">
            <div className="swiper-wrapper">

              {/* Item */}
              <div className="swiper-slide">
                <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                  <div className="position-relative">
                    <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                        <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                          <i className="bi bi-heart fs-base animate-target"></i>
                        </button>
                        <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                          <i className="bi bi-arrow-clockwise fs-base animate-target"></i>
                        </button>
                      </div>
                    </div>
                    <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                        <i className="bi bi-three-dots-vertical fs-lg"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-heart fs-sm ms-n1 me-2"></i>
                            Add to Wishlist
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2"></i>
                            Compare
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                      <div className="ratio" style={{"--czAspectRatio":"calc(240 / 258 * 100%)"}}>
                        <img src="assets/img/shop/electronics/09.png" alt="Wireless Buds" />
                      </div>
                    </a>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-half text-warning"></i>
                      </div>
                      <span className="text-body-tertiary fs-xs">(14)</span>
                    </div>
                    <h3 className="pb-1 mb-2">
                      <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                        <span className="animate-target">Xiaomi Wireless Buds Pro</span>
                      </a>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                      <div className="h5 lh-1 mb-0">$129.99 <del className="text-body-tertiary fs-sm fw-normal">$156.00</del></div>
                      <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                        <i className="bi bi-cart fs-base animate-target"></i>
                      </button>
                    </div>
                    <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
                      <div className="progress-bar rounded-pill" style={{"width":"25%"}}></div>
                    </div>
                    <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">112</span></div>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="swiper-slide">
                <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                  <div className="position-relative">
                    <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                        <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                          <i className="bi bi-heart fs-base animate-target"></i>
                        </button>
                        <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                          <i className="bi bi-arrow-clockwise fs-base animate-target"></i>
                        </button>
                      </div>
                    </div>
                    <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                        <i className="bi bi-three-dots-vertical fs-lg"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-heart fs-sm ms-n1 me-2"></i>
                            Add to Wishlist
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2"></i>
                            Compare
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                      <div className="ratio" style={{"--czAspectRatio":"calc(240 / 258 * 100%)"}}>
                        <img src="assets/img/shop/electronics/03.png" alt="Smart Watch" />
                      </div>
                    </a>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                      </div>
                      <span className="text-body-tertiary fs-xs">(138)</span>
                    </div>
                    <h3 className="pb-1 mb-2">
                      <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                        <span className="animate-target">Smart Watch Series 7, White</span>
                      </a>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                      <div className="h5 lh-1 mb-0">$429.00 <del className="text-body-tertiary fs-sm fw-normal">$486.00</del></div>
                      <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                        <i className="bi bi-cart fs-base animate-target"></i>
                      </button>
                    </div>
                    <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
                      <div className="progress-bar rounded-pill" style={{"width":"50%"}}></div>
                    </div>
                    <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">45</span></div>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="swiper-slide">
                <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                  <div className="position-relative">
                    <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                        <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                          <i className="bi bi-heart fs-base animate-target"></i>
                        </button>
                        <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                          <i className="bi bi-arrow-clockwise fs-base animate-target"></i>
                        </button>
                      </div>
                    </div>
                    <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                        <i className="bi bi-three-dots-vertical fs-lg"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-heart fs-sm ms-n1 me-2"></i>
                            Add to Wishlist
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2"></i>
                            Compare
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                      <div className="ratio" style={{"--czAspectRatio":"calc(240 / 258 * 100%)"}}>
                        <img src="assets/img/shop/electronics/11.png" alt="Nikon Camera" />
                      </div>
                    </a>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star text-body-tertiary opacity-75"></i>
                      </div>
                      <span className="text-body-tertiary fs-xs">(64)</span>
                    </div>
                    <h3 className="pb-1 mb-2">
                      <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                        <span className="animate-target">VRB01 Camera Nikon Max</span>
                      </a>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                      <div className="h5 lh-1 mb-0">$652.00 <del className="text-body-tertiary fs-sm fw-normal">$785.00</del></div>
                      <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                        <i className="bi bi-cart fs-base animate-target"></i>
                      </button>
                    </div>
                    <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
                      <div className="progress-bar rounded-pill" style={{"width":"75%"}}></div>
                    </div>
                    <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">13</span></div>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="swiper-slide">
                <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                  <div className="position-relative">
                    <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                        <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                          <i className="bi bi-heart fs-base animate-target"></i>
                        </button>
                        <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                          <i className="bi bi-arrow-clockwise fs-base animate-target"></i>
                        </button>
                      </div>
                    </div>
                    <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                        <i className="bi bi-three-dots-vertical fs-lg"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-heart fs-sm ms-n1 me-2"></i>
                            Add to Wishlist
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2"></i>
                            Compare
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                      <div className="ratio" style={{"--czAspectRatio":"calc(240 / 258 * 100%)"}}>
                        <img src="assets/img/shop/electronics/10.png" alt="iPhone 14" />
                      </div>
                    </a>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-half text-warning"></i>
                        <i className="bi bi-star text-body-tertiary opacity-75"></i>
                      </div>
                      <span className="text-body-tertiary fs-xs">(51)</span>
                    </div>
                    <h3 className="pb-1 mb-2">
                      <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                        <span className="animate-target">Apple iPhone 14 128GB Blue</span>
                      </a>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                      <div className="h5 lh-1 mb-0">$652.00 <del className="text-body-tertiary fs-sm fw-normal">$785.00</del></div>
                      <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                        <i className="bi bi-cart fs-base animate-target"></i>
                      </button>
                    </div>
                    <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
                      <div className="progress-bar rounded-pill" style={{"width":"25%"}}></div>
                    </div>
                    <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">7</span></div>
                  </div>
                </div>
              </div>

              {/* Item */}
              <div className="swiper-slide">
                <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                  <div className="position-relative">
                    <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                      <div className="d-flex flex-column gap-2">
                        <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                          <i className="bi bi-heart fs-base animate-target"></i>
                        </button>
                        <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                          <i className="bi bi-arrow-clockwise fs-base animate-target"></i>
                        </button>
                      </div>
                    </div>
                    <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                      <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                        <i className="bi bi-three-dots-vertical fs-lg"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{"minWidth":"auto"}}>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-heart fs-sm ms-n1 me-2"></i>
                            Add to Wishlist
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-arrow-clockwise fs-sm ms-n1 me-2"></i>
                            Compare
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="shop-product-general-electronics.html">
                      <div className="ratio" style={{"--czAspectRatio":"calc(240 / 258 * 100%)"}}>
                        <img src="assets/img/shop/electronics/01.png" alt="VR Glasses" />
                      </div>
                    </a>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-flex gap-1 fs-xs">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-half text-warning"></i>
                      </div>
                      <span className="text-body-tertiary fs-xs">(19)</span>
                    </div>
                    <h3 className="pb-1 mb-2">
                      <a className="d-block fs-sm fw-medium text-truncate" href="shop-product-general-electronics.html">
                        <span className="animate-target">VRB01 Virtual Reality Glasses</span>
                      </a>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between pb-2 mb-1">
                      <div className="h5 lh-1 mb-0">$340.99 <del className="text-body-tertiary fs-sm fw-normal">$430.00</del></div>
                      <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                        <i className="bi bi-cart fs-base animate-target"></i>
                      </button>
                    </div>
                    <div className="progress mb-2" role="progressbar" aria-label="Available in stock" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style={{"height":"4px"}}>
                      <div className="progress-bar rounded-pill" style={{"width":"33%"}}></div>
                    </div>
                    <div className="text-body-secondary fs-sm">Available: <span className="text-dark-emphasis fw-medium">16</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* External slider prev/next buttons visible on screens < 500px wide (sm breakpoint) */}
          <div className="d-flex justify-content-center gap-2 mt-n2 mb-3 pb-1 d-sm-none">
            <button type="button" className="offers-prev btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start me-1" aria-label="Prev">
              <i className="bi bi-chevron-left fs-lg animate-target"></i>
            </button>
            <button type="button" className="offers-next btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end" aria-label="Next">
              <i className="bi bi-chevron-right fs-lg animate-target"></i>
            </button>
          </div>
        </div>
      </section>


      {/* Brands */}
      <section className="container pt-4 pt-md-5 pb-5 mt-sm-2 mb-2 mb-sm-3 mb-md-4 mb-lg-5">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3 g-md-4 g-lg-3 g-xl-4">
          <div className="col">
            <a className="btn btn-outline-secondary w-100 rounded-4 p-3" href="shop-catalog-electronics.html">
              <img src="assets/img/shop/electronics/brands/apple-light-mode.svg" className="d-none-dark" alt="Apple" />
              <img src="assets/img/shop/electronics/brands/apple-dark-mode.svg" className="d-none d-block-dark" alt="Apple" />
            </a>
          </div>
          <div className="col">
            <a className="btn btn-outline-secondary w-100 rounded-4 p-3" href="shop-catalog-electronics.html">
              <img src="assets/img/shop/electronics/brands/motorola-light-mode.svg" className="d-none-dark" alt="Apple" />
              <img src="assets/img/shop/electronics/brands/motorola-dark-mode.svg" className="d-none d-block-dark" alt="Apple" />
            </a>
          </div>
          <div className="col">
            <a className="btn btn-outline-secondary w-100 rounded-4 p-3" href="shop-catalog-electronics.html">
              <img src="assets/img/shop/electronics/brands/canon-light-mode.svg" className="d-none-dark" alt="Apple" />
              <img src="assets/img/shop/electronics/brands/canon-dark-mode.svg" className="d-none d-block-dark" alt="Apple" />
            </a>
          </div>
          <div className="col">
            <a className="btn btn-outline-secondary w-100 rounded-4 p-3" href="shop-catalog-electronics.html">
              <img src="assets/img/shop/electronics/brands/samsung-light-mode.svg" className="d-none-dark" alt="Apple" />
              <img src="assets/img/shop/electronics/brands/samsung-dark-mode.svg" className="d-none d-block-dark" alt="Apple" />
            </a>
          </div>
          <div className="col">
            <a className="btn btn-outline-secondary w-100 rounded-4 p-3" href="shop-catalog-electronics.html">
              <img src="assets/img/shop/electronics/brands/sony-light-mode.svg" className="d-none-dark" alt="Apple" />
              <img src="assets/img/shop/electronics/brands/sony-dark-mode.svg" className="d-none d-block-dark" alt="Apple" />
            </a>
          </div>
          <div className="col">
            <a className="btn btn-outline-secondary w-100 h-100 rounded-4 p-3" href="shop-categories-electronics.html">
              All brands
              <i className="bi bi-plus-circle fs-base ms-2"></i>
            </a>
          </div>
        </div>
      </section>


      {/* Subscription form + Vlog */}
      <section className="bg-body-tertiary py-5">
        <div className="container pt-sm-2 pt-md-3 pt-lg-4 pt-xl-5">
          <div className="row">
            <div className="col-md-6 col-lg-5 mb-5 mb-md-0">
              <h2 className="h4 mb-2">Sign up to our newsletter</h2>
              <p className="text-body pb-2 pb-ms-3">Receive our latest updates about our products &amp; promotions</p>
              <form className="d-flex needs-validation pb-1 pb-sm-2 pb-md-3 pb-lg-0 mb-4 mb-lg-5" noValidate="">
                <div className="position-relative w-100 me-2">
                  <input type="email" className="form-control form-control-lg" placeholder="Your email" required="" />
                </div>
                <button type="submit" className="btn btn-lg btn-primary">Subscribe</button>
              </form>
              <div className="d-flex gap-3">
                <a className="btn btn-icon btn-secondary rounded-circle" href="#!" aria-label="Instagram">
                  <i className="bi bi-instagram fs-base"></i>
                </a>
                <a className="btn btn-icon btn-secondary rounded-circle" href="#!" aria-label="Facebook">
                  <i className="bi bi-facebook fs-base"></i>
                </a>
                <a className="btn btn-icon btn-secondary rounded-circle" href="#!" aria-label="YouTube">
                  <i className="bi bi-youtube fs-base"></i>
                </a>
                <a className="btn btn-icon btn-secondary rounded-circle" href="#!" aria-label="Telegram">
                  <i className="bi bi-telegram fs-base"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1 offset-xl-2">
              <ul className="list-unstyled d-flex flex-column gap-4 ps-md-4 ps-lg-0 mb-3">
                <li className="nav flex-nowrap align-items-center position-relative">
                  <img src="assets/img/home/electronics/vlog/01.jpg" className="rounded" width="140" alt="Video cover" />
                  <div className="ps-3">
                    <div className="fs-xs text-body-secondary lh-sm mb-2">6:16</div>
                    <a className="nav-link fs-sm hover-effect-underline stretched-link p-0" href="#!">5 New Cool Gadgets You Must See on Cartzilla - Cheap Budget</a>
                  </div>
                </li>
                <li className="nav flex-nowrap align-items-center position-relative">
                  <img src="assets/img/home/electronics/vlog/02.jpg" className="rounded" width="140" alt="Video cover" />
                  <div className="ps-3">
                    <div className="fs-xs text-body-secondary lh-sm mb-2">10:20</div>
                    <a className="nav-link fs-sm hover-effect-underline stretched-link p-0" href="#!">5 Super Useful Gadgets on Cartzilla You Must Have in 2023</a>
                  </div>
                </li>
                <li className="nav flex-nowrap align-items-center position-relative">
                  <img src="assets/img/home/electronics/vlog/03.jpg" className="rounded" width="140" alt="Video cover" />
                  <div className="ps-3">
                    <div className="fs-xs text-body-secondary lh-sm mb-2">8:40</div>
                    <a className="nav-link fs-sm hover-effect-underline stretched-link p-0" href="#!">Top 5 New Amazing Gadgets on Cartzilla You Must See</a>
                  </div>
                </li>
              </ul>
              <div className="nav ps-md-4 ps-lg-0">
                <a className="btn nav-link animate-underline text-decoration-none px-0" href="#!">
                  <span className="animate-target">View all</span>
                  <i className="bi bi-chevron-right fs-base ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    )
}