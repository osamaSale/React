import { Link } from "react-router-dom";

export const About = () => {
  return (
    <main class="content-wrapper">
      {/*  <!-- Breadcrumb --> */}
      <nav className="container pt-3 my-3 my-md-4" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About
          </li>
        </ol>
      </nav>
      {/* <!-- Hero --> */}
      <section className="container">
        <div className="row">
          {/* Cover image */}
          <div className="col-md-7 order-md-2 mb-4 mb-md-0">
            <div className="position-relative h-100">
              <div className="ratio ratio-16x9"></div>
              <img
                src="assets/img/about/v1/hero.jpg"
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rounded-5"
                alt=""
              />
            </div>
          </div>

          {/* Text + button */}
          <div className="col-md-5 order-md-1">
            <div className="position-relative py-5 px-4 px-sm-5">
              <span
                className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip"
                style={{
                  background:
                    "linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)",
                }}
              ></span>
              <span
                className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip"
                style={{
                  background:
                    "linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)",
                }}
              ></span>
              <div className="position-relative z-1 py-md-2 py-lg-4 py-xl-5 px-xl-2 px-xxl-4 my-xxl-3">
                <h1 className="pb-1 pb-md-2 pb-lg-3">
                  Cartzilla - More than a retailer
                </h1>
                <p className="text-dark-emphasis pb-sm-2 pb-lg-0 mb-4 mb-lg-5">
                  Since 2015, we have been fulfilling the small dreams and big
                  plans of millions of people. You can find literally everything
                  here.
                </p>
                <Link
                  className="btn btn-lg btn-outline-dark animate-slide-down"
                  to="#mission"
                >
                  Learn more
                  <i className="bi-arrow-down fs-lg animate-target ms-2 me-n1"></i>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Features --> */}
      <section className="container pt-5 mt-1 mt-sm-3 mt-md-4 mt-lg-5">
        <div className="row row-cols-1 row-cols-md-3 gy-3 gy-sm-4 gx-2 gx-lg-4">
          <div className="col text-center">
            <svg
              className="d-block text-dark-emphasis mx-auto mb-3 mb-lg-4"
              fill="currentColor"
              height="64"
              viewBox="0 0 64 64"
              width="64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M62.189 9.902c0-.604-.604-1.208-1.208-1.208h-6.158-3.14l-1.69.121-1.57.242c-2.174.483-4.226 1.087-6.158 2.174s-3.623 2.294-5.072 3.864h-.121c-3.14 3.019-5.313 7.004-6.038 11.351l-.241 1.57-.121 1.691v3.14 5.796c-.604.845-1.087 1.691-1.57 2.536.121-1.328.121-2.536.241-3.864 0-.966.121-1.811.121-2.777v-1.449l-.121-1.449c-.241-1.811-.845-3.743-1.691-5.434a20.6 20.6 0 0 0-3.26-4.71c-2.657-2.777-6.279-4.709-10.143-5.434L12.8 15.82l-1.449-.121H8.574 3.019c-.604 0-1.208.604-1.208 1.208v5.555 2.777l.121 1.449.242 1.449C2.898 32 4.83 35.502 7.729 38.159c1.449 1.328 3.019 2.415 4.709 3.26s3.623 1.328 5.434 1.691l1.449.121h1.449c.966 0 1.811-.121 2.777-.121 1.57-.121 3.14-.121 4.709-.242-.362.604-.604 1.328-.966 1.932-1.449 3.381-2.294 7.004-2.294 10.506.966-3.502 2.294-6.642 3.985-9.66.966-1.811 2.174-3.623 3.381-5.313h5.675 3.14l1.691-.121 1.57-.242c2.174-.483 4.227-1.087 6.159-2.174s3.623-2.294 5.072-3.864h.121c3.14-3.019 5.313-7.004 6.038-11.351l.242-1.57.121-1.69v-3.14-6.279zM49.63 35.743c-1.691.966-3.623 1.449-5.555 1.811l-1.449.242-1.449.121h-3.019-3.864c.242-.242.483-.604.725-.845 2.174-2.657 4.589-5.192 7.004-7.728l7.366-7.728c-3.019 1.932-5.917 3.985-8.694 6.279-2.657 2.294-5.192 4.709-7.487 7.487v-2.536-3.019l.121-1.449.242-1.449c.362-1.932.845-3.864 1.811-5.555.845-1.691 2.053-3.381 3.381-4.83 1.449-1.328 3.019-2.415 4.709-3.381s3.623-1.449 5.555-1.811l1.449-.241 1.449-.121h3.019 4.951v4.951 3.019l-.121 1.57-.242 1.449c-.362 1.932-.845 3.864-1.811 5.555-.845 1.691-2.053 3.381-3.381 4.83-1.449 1.449-3.019 2.536-4.709 3.381zm-26.083 6.762c-.966 0-1.811-.121-2.777-.121l-1.328-.121-1.328-.242c-3.502-.724-6.641-2.536-9.057-5.072-1.208-1.328-2.174-2.657-3.019-4.226-.725-1.57-1.208-3.26-1.57-4.951l-.242-1.328-.121-1.328V22.34v-4.347h4.347 2.777 1.328l1.328.121c1.691.242 3.381.725 4.951 1.57 1.449 1.087 2.898 2.053 4.106 3.26 2.536 2.415 4.347 5.555 5.072 9.057l.241 1.328.121 1.328c.121.845.121 1.811.121 2.777.121 1.449.121 2.777.241 4.226-.241.483-.483.845-.724 1.328-1.328-.362-2.898-.362-4.468-.483zm-5.434-12.437c-1.449-.966-2.898-1.932-4.589-2.657.966 1.449 2.174 2.777 3.381 3.985 2.415 2.536 4.83 4.709 7.487 7.124 1.328 1.087 2.536 2.294 4.106 3.381-.725-1.691-1.57-3.26-2.657-4.589-2.174-2.898-4.709-5.193-7.728-7.245z" />
            </svg>
            <h3 className="h5">Eco-friendly</h3>
            <p className="fs-sm px-5 mb-md-0">
              Decorate your space with eco-friendly furniture with low VOCs,
              environmentally friendly materials and safe coatings.
            </p>
          </div>
          <div className="col text-center">
            <svg
              className="d-block text-dark-emphasis mx-auto mb-3 mb-lg-4"
              fill="currentColor"
              height="64"
              viewBox="0 0 64 64"
              width="64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M55.526 24.465l-.145-10.159-.094-5.08-.012-.635c-.016-.23-.016-.481-.061-.717-.06-.481-.22-.945-.413-1.384-.407-.875-1.061-1.625-1.868-2.136a4.99 4.99 0 0 0-2.699-.769l-2.548.061-15.238.437 15.238.437 2.532.069a3.93 3.93 0 0 1 2.088.71c.601.431 1.085 1.017 1.365 1.692.131.339.242.688.27 1.051.029.181.017.356.026.548l-.012.635-.094 5.08-.119 8.281c-3.476-.415-6.952-.651-10.428-.808-3.769-.185-7.537-.235-11.306-.255-3.769.023-7.537.073-11.306.258-3.471.158-6.941.392-10.412.803l-.131-9.156-.085-5.05c.009-1.448.949-2.849 2.313-3.435.691-.318 1.391-.355 2.28-.357l2.54-.066 15.239-.439-17.778-.505c-.425-.009-.83-.032-1.325-.006-.472.048-.941.145-1.388.317-1.798.674-3.123 2.475-3.216 4.432l-.105 5.109-.145 10.159-.111 10.159-.046 5.714c.011.242.006.518.048.774.054.523.214 1.031.415 1.516.421.967 1.122 1.802 1.996 2.394a5.52 5.52 0 0 0 2.985.937l1.885.008a219.85 219.85 0 0 0-2.615 7.372l-1.399 4.349-.166.552a2.42 2.42 0 0 0-.062 1.062c.109.703.567 1.362 1.196 1.705a2.42 2.42 0 0 0 2.973-.484c.144-.164.17-.207.235-.287l.177-.224c3.518-4.56 6.926-9.206 10.121-14.015l5.451.014 6.309-.017c3.205 4.808 6.615 9.457 10.14 14.017l.177.224c.065.081.092.123.235.287.753.837 2.009 1.035 2.971.484.629-.343 1.086-1.001 1.195-1.704a2.42 2.42 0 0 0-.062-1.061l-.166-.552-1.403-4.349a228.34 228.34 0 0 0-2.625-7.375l1.007-.003c.425-.003.814.01 1.383-.037.524-.067 1.042-.192 1.53-.396 1.966-.798 3.353-2.796 3.404-4.903l-.03-5.126-.112-10.159zM14.167 57.718l-.293.386c-.011.016-.023.027-.04.035-.035.018-.081.021-.114.004-.043-.018-.066-.046-.08-.095a.18.18 0 0 1-.002-.069l.153-.545 1.157-4.419c.65-2.627 1.271-5.264 1.822-7.92l7.761.02c-3.608 4.082-7.037 8.303-10.363 12.603zm34.91-4.704l1.155 4.42.153.544a.19.19 0 0 1-.002.07c-.014.049-.037.077-.081.096-.034.018-.08.015-.115-.004-.018-.008-.029-.019-.041-.035l-.294-.386c-3.321-4.302-6.749-8.521-10.35-12.607l7.309-.02.452-.001c.549 2.657 1.17 5.293 1.814 7.922zm4.528-18.39l-.05 5.033c-.051 1.297-.928 2.501-2.124 2.963-.626.251-1.14.252-2.08.235l-17.778-.047c-25.374.066 7.11-.017-17.761.043a3.42 3.42 0 0 1-1.802-.541 3.43 3.43 0 0 1-1.238-1.434c-.123-.294-.234-.599-.268-.92-.032-.162-.025-.312-.04-.492l-.046-5.714-.112-10.159-.011-.8c3.47.411 6.94.645 10.409.803 3.769.186 7.537.235 11.306.258 3.769-.02 7.537-.07 11.306-.255 3.475-.157 6.95-.393 10.425-.808l-.024 1.677-.112 10.159zm-14.693-23.94c-3.673-1.557-10.14-1.544-13.805 0 3.66 1.542 10.125 1.559 13.805 0zM25.107 28.829c3.647 1.537 10.114 1.564 13.805 0-3.697-1.567-10.167-1.533-13.805 0z" />
            </svg>
            <h3 className="h5">Unbeatable quality</h3>
            <p className="fs-sm px-5 mb-md-0">
              We choose raw materials from the best manufacturers, so our
              furniture and decor are of the highest quality at the best prices.
            </p>
          </div>
          <div className="col text-center">
            <svg
              className="d-block text-dark-emphasis mx-auto mb-3 mb-lg-4"
              fill="currentColor"
              height="64"
              viewBox="0 0 64 64"
              width="64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.36 29.423c.111 0 2.111 1 6.333 2.667l-.222 10.222c-.111 3.667-.111 7.334-.111 11a1.07 1.07 0 0 0 .778 1c.333.111 10 2.778 9.889 2.667.111 0 10 2.667 9.889 2.667h.111.111.111.111.111l9.889-2.667c.111 0 10-2.778 9.889-2.667a1.07 1.07 0 0 0 .778-1c-.111-3.667-.111-7.334-.111-11l-.222-10.222 6.222-2.667c.111 0 .111-.111.222-.111.222-.222.333-.667 0-.889l-7.111-7.556 5.556 7.667c-3.111 1-6.111 2-9.111 3.111l-9.111 3.333-5.333-6.334c6.222-2.556 12-5.111 18.112-7.889-6-2.778-11.889-5.333-18-7.889l5.333-6.333 9.111 3.333c3 1.111 6.111 2.111 9.111 3.111l-5.556 7.667c2.333-2.333 4.778-4.889 7.111-7.556 0 0 .111-.111.111-.222.111-.333 0-.667-.333-.889-3.222-1.444-6.445-2.778-9.778-4l-9.778-3.889c-.444-.222-.889 0-1.222.333l-5.778 7.111c-1.889-2.445-3.889-4.778-5.778-7.111-.333-.333-.778-.556-1.222-.333-3.222 1.222-6.556 2.556-9.778 3.889-3.778 1.444-7 2.778-10.222 4.222-.111 0-.222.111-.222.111-.222.222-.333.667 0 .889 2.111 2.333 4.333 4.667 6.334 6.778-.444.444-.444 1.222 0 1.556-2.111 2.111-4.222 4.444-6.334 6.778-.444.444-.222 1 .111 1.111zm6.556-7.556l9.889 3.556 3.778 1.333 4.778 2-5.333 6.334-9.111-3.333c-3-1.111-6.111-2.111-9.111-3.111 1.667-2.222 3.222-4.444 4.889-6.778 0-.111.111 0 .222 0zm1.445 30.667c0-3.111-.111-9.556-.445-19.889.778.333 1.445.667 2.222.889l9.778 3.889c.444.222.889 0 1.222-.333 1.778-2.111 3.556-4.333 5.222-6.444-.111 1.778-.111 3.556-.111 5.333l-.222 7.556-.222 13.778-8.556-2.333-8.889-2.444zm37.334 0l-9.111 2.444-8.556 2.333c0-5.778-.111-7.222-.222-13.778l-.222-7.556c-.111-1.778-.111-3.556-.111-5.333 1.778 2.111 3.445 4.333 5.222 6.444.333.333.778.556 1.222.333 3.222-1.222 6.556-2.556 9.778-3.889.778-.333 1.444-.556 2.222-.889l-.222 19.889zm.889-31.667c-5.334 1.556-9.111 2.778-13.556 4.333-2 .667-4 1.222-6 1.889l-9.556-3.667-7-2.556 7-2.556 9.556-3.667c1.889.667 3.778 1.222 5.667 1.889l14 4.445c0-.111-.111-.111-.111-.111zm-44.89-7.667l9.222-3.222 9.111-3.333 5.333 6.333c-1.556.667-3.111 1.222-4.667 1.889l-3.889 1.333-9.889 3.556c-.111 0-.222.111-.222.111l-5-6.667z" />
            </svg>
            <h3 className="h5">Delivery to your door</h3>
            <p className="fs-sm px-5 mb-md-0">
              {" "}
              We will deliver to your door anywhere in the world. If you're not
              100% satisfied, let us know within 30 days and we'll solve the
              problem.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Image + Text --> */}
      <section className="container pt-5 pb-5 mt-md-4 mt-xl-5 mb-xxl-3">
        <h2
          className="h1 text-center pt-xxl-3 mx-auto mb-2"
          style={{
            maxWidth: "620px",
          }}
        >
          Design that inspires a better way to work
        </h2>
        <div className="row py-4 py-lg-5">
          <div className="col-md-6 col-lg-7">
            <div className="position-relative h-100">
              <div className="ratio ratio-16x9" />
              <img
                alt=""
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rounded-5"
                src="assets/img/blog/grid/v2/01.jpg"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="pt-4 py-md-5 my-lg-3 my-xl-4 my-xxl-5 ps-md-3 ps-lg-4 ps-xxl-5">
              <h3 className="mb-4">
                Decorate your space with eco-friendly furniture
              </h3>
              <p>
                Eco-friendly furniture help reduce your carbon footprint, but it
                also provides a healthier living environment for you and your
                loved ones. It crafted with sustainable materials such as
                bamboo, reclaimed wood, or recycled plastic.
              </p>
              <hr className="my-lg-5" />
              <div className="d-flex gap-3">
                <span className="display-5 text-success-emphasis">75%</span>
                <span className="h6 pt-1 mb-0">
                  our products are made of natural and eco-friendly materials
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-4 py-lg-5">
          <div className="col-md-6 col-lg-7 order-md-2">
            <div className="position-relative h-100">
              <div className="ratio ratio-16x9" />
              <img
                alt=""
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rounded-5"
                src="assets/img/blog/grid/v2/02.jpg"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-5 order-md-1">
            <div className="pt-4 py-md-5 my-lg-3 my-xl-4 my-xxl-5 pe-md-3 pe-lg-4 pe-xxl-5">
              <h3 className="mb-4">Quality in every detail</h3>
              <p>
                We always choose raw materials from the best manufacturers, so
                our furniture and decor are of the highest quality in every
                detail at the best prices.
              </p>
              <hr className="my-lg-5" />
              <figure className="mb-0">
                <blockquote className="blockquote">
                  <p className="fs-base">
                    "Every Cartzilla project is an opportunity to create value
                    for homeowners on many levels. Working with materials from
                    the best manufacturers is an added bonus."
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer mb-0">
                  William, Architect
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog grid --> */}
      <section className="container py-5 my-2 my-sm-3 my-lg-4 my-xl-5">
        <div className="d-flex align-items-center justify-content-between pb-3 mb-2 mb-sm-3 mt-xxl-3">
          <h2 className="mb-0">Blog and news</h2>
          <div className="nav ms-3">
            <Link
              className="nav-link animate-underline px-0 py-2"
              to="blog-grid-v2.html"
            >
              <span className="animate-target">View all</span>
              <i className="bi-chevron-right fs-base ms-1" />
             </Link>
          </div>
        </div>
        <div className="row gy-5 mb-xxl-3">
          <article className="col-md-6">
            <Link
              className="ratio d-flex hover-effect-scale rounded-4 overflow-hidden"
              to="#!"
              style={{
                "--cz-aspect-ratio": "calc(500 / 636 * 100%)",
              }}
            >
              <img
                alt=""
                className="hover-effect-target"
                src="assets/img/blog/grid/v2/15.jpg"
              />
             </Link>
            <div className="pt-4">
              <div className="nav pb-2 mb-1">
                <Link
                  className="nav-link text-body fs-xs text-uppercase p-0"
                  to="#!"
                >
                  Home decoration
                 </Link>
              </div>
              <h3 className="h5 mb-3">
                <Link className="hover-effect-underline" to="#!">
                  Decorate your home for the festive season in 3 easy steps
                 </Link>
              </h3>
              <div className="nav align-items-center gap-2 fs-xs">
                <Link
                  className="nav-link text-body-secondary fs-xs fw-normal p-0"
                  to="#!"
                >
                  Ava Johnson
                 </Link>
                <hr className="vr my-1 mx-1" />
                <span className="text-body-secondary">September 11, 2024</span>
              </div>
            </div>
          </article>
          <div className="col-md-6">
            <div className="row row-cols-1 row-cols-sm-2 gy-5">
              <article className="col">
                <Link
                  className="ratio d-flex hover-effect-scale rounded-4 overflow-hidden"
                  to="#!"
                  style={{
                    "--cz-aspect-ratio": "calc(260 / 306 * 100%)",
                  }}
                >
                  <img
                    alt=""
                    className="hover-effect-target"
                    src="assets/img/blog/grid/v2/10.jpg"
                  />
                 </Link>
                <div className="pt-4">
                  <div className="nav pb-2 mb-1">
                    <Link
                      className="nav-link text-body fs-xs text-uppercase p-0"
                      to="#!"
                    >
                      Furniture
                    </Link>
                  </div>
                  <h3 className="h6 mb-3">
                    <Link className="hover-effect-underline" to="#!">
                      Furnishing your space: a guide to choosing the perfect
                      furniture pieces
                     </Link>
                  </h3>
                  <div className="nav align-items-center gap-2 fs-xs">
                    <Link
                      className="nav-link text-body-secondary fs-xs fw-normal p-0"
                      to="#!"
                    >
                      Oliver Harris
                    </Link>
                    <hr className="vr my-1 mx-1" />
                    <span className="text-body-secondary">
                      September 5, 2024
                    </span>
                  </div>
                </div>
              </article>
              <article className="col">
                <Link
                  className="ratio d-flex hover-effect-scale rounded-4 overflow-hidden"
                  to="#!"
                  style={{
                    "--cz-aspect-ratio": "calc(260 / 306 * 100%)",
                  }}
                >
                  <img
                    alt=""
                    className="hover-effect-target"
                    src="assets/img/blog/grid/v2/11.jpg"
                  />
                 </Link>
                <div className="pt-4">
                  <div className="nav pb-2 mb-1">
                    <Link
                      className="nav-link text-body fs-xs text-uppercase p-0"
                      to="#!"
                    >
                      Interior design
                     </Link>
                  </div>
                  <h3 className="h6 mb-3">
                    <Link className="hover-effect-underline" to="#!">
                      Transform your living space with these chic interior
                      design tips
                     </Link>
                  </h3>
                  <div className="nav align-items-center gap-2 fs-xs">
                    <Link
                      className="nav-link text-body-secondary fs-xs fw-normal p-0"
                      to="#!"
                    >
                      Ethan Miller
                     </Link>
                    <hr className="vr my-1 mx-1" />
                    <span className="text-body-secondary">August 23, 2024</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
};
