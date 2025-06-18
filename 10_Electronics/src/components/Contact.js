import { Link } from "react-router-dom";

export const Contact = () => {
  const isDarkMode = false; // Replace with your theme detection logic
  
  return (
    <main className="content-wrapper">
      {/*  <!-- Breadcrumb --> */}
      <nav className="container pt-3 my-3 my-md-4" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Contact Us
          </li>
        </ol>
      </nav>

      {/* <!-- Contact forms --> */}
      <section
        className="bg-body-tertiary pb-1 pb-sm-3 pb-md-4 pb-lg-5"
        style={{ marginTop: "-110px", paddingTop: "110px" }}
      >
        <div className="container py-5 mb-xxl-3">
          <h1 className="text-center pb-2 pb-sm-3 mt-lg-3 mt-xl-4">
            Contact our specialists
          </h1>

          <ul
            className="nav nav-pills justify-content-center pb-2 pb-sm-3 mb-3"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                type="button"
                className="nav-link active"
                id="customers-tab"
                data-bs-toggle="pill"
                data-bs-target="#customers"
                role="tab"
                aria-controls="customers"
                aria-selected="true"
              >
                <i className="bi bi-bag-plus-fill fs-base me-2 ms-n1"></i>
                For Customers
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="retailers-tab"
                data-bs-toggle="pill"
                data-bs-target="#retailers"
                type="button"
                role="tab"
                aria-controls="retailers"
                aria-selected="false"
              >
                <i className="bi-box fs-base me-2 ms-n1"></i>
                For Retailers
              </button>
            </li>
          </ul>

          <div className="row justify-content-center">
            <div className="col-md-11 col-lg-9 col-xl-8">
              <div className="tab-content bg-body rounded-5 py-3 py-sm-4 px-4 px-sm-5">
                <p
                  className="text-center py-3 mx-auto"
                  style={{ maxWidth: "450px" }}
                >
                  Fill out the form below and we will reply within 24 hours. You
                  may also directly reach out to us at{" "}
                  <Link
                    className="text-decoration-none"
                    to="mailto:info@cartzilla.com"
                  >
                    info@cartzilla.com
                  </Link>
                </p>

                <div
                  className="tab-pane fade show active"
                  id="customers"
                  role="tabpanel"
                  aria-labelledby="customers-tab"
                >
                  <form className="needs-validation" noValidate="">
                    <div className="row g-4">
                      <div className="col-md-6 position-relative">
                        <label htmlFor="fn" className="form-label">
                          First name *
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-pill"
                          id="fn"
                          required=""
                        />
                        <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">
                          Enter your first name!
                        </div>
                      </div>
                      <div className="col-md-6 position-relative">
                        <label htmlFor="ln" className="form-label">
                          Last name *
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-pill"
                          id="ln"
                          required=""
                        />
                        <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">
                          Enter your last name!
                        </div>
                      </div>
                      <div className="col-md-6 position-relative">
                        <label htmlFor="email" className="form-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg rounded-pill"
                          id="email"
                          required=""
                        />
                        <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">
                          Enter your email address!
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          className="form-control form-control-lg rounded-pill"
                          id="phone"
                          data-input-format='{"numericOnly": true, "delimiters": ["+1 ", " ", " "], "blocks": [0, 3, 3, 2]}'
                          placeholder="+1 ___ ___ __"
                        />
                      </div>
                      <div className="col-12 position-relative">
                        <label className="form-label">Subject *</label>
                        <select
                          className="form-select form-select-lg rounded-pill"
                          data-select='{
                          "classNames": {
                            "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
                          }
                        }'
                          required=""
                        >
                          <option value="">Select subject</option>
                          <option value="General inquiry">
                            General inquiry
                          </option>
                          <option value="Order status">Order status</option>
                          <option value="Product information">
                            Product information
                          </option>
                          <option value="Technical support">
                            Technical support
                          </option>
                          <option value="Website feedback">
                            Website feedback
                          </option>
                          <option value="Account assistance">
                            Account assistance
                          </option>
                          <option value="Security concerns">
                            Security concerns
                          </option>
                        </select>
                        <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">
                          Select the subject of your message!
                        </div>
                      </div>
                      <div className="col-12 position-relative">
                        <label htmlFor="message" className="form-label">
                          Message *
                        </label>
                        <textarea
                          className="form-control form-control-lg rounded-6"
                          id="message"
                          rows="5"
                          required=""
                        ></textarea>
                        <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">
                          Write your message!
                        </div>
                      </div>
                      <div className="col-12 text-center pt-2 pb-3">
                        <button
                          type="submit"
                          className="btn btn-lg btn-dark rounded-pill"
                        >
                          Send message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div
                  className="tab-pane fade"
                  id="retailers"
                  role="tabpanel"
                  aria-labelledby="retailers-tab"
                >
                  <form className="needs-validation" noValidate="">
                    <div className="row g-4">
                      <div className="col-md-6 position-relative">
                        <label htmlFor="company" className="form-label">
                          Company name *
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-pill"
                          id="company"
                          required=""
                        />
                        <div className="invalid-tooltip bg-transparent py-0 ps-3">
                          Enter your company name!
                        </div>
                      </div>
                      <div className="col-md-6 position-relative">
                        <label htmlFor="person" className="form-label">
                          Contact person *
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-pill"
                          id="person"
                          required=""
                        />
                        <div className="invalid-tooltip bg-transparent py-0 ps-3">
                          Enter contact person name!
                        </div>
                      </div>
                      <div className="col-md-6 position-relative">
                        <label htmlFor="email-r" className="form-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg rounded-pill"
                          id="email-r"
                          required=""
                        />
                        <div className="invalid-tooltip bg-transparent py-0 ps-3">
                          Enter company email address!
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone-r" className="form-label">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          className="form-control form-control-lg rounded-pill"
                          id="phone-r"
                          data-input-format='{"numericOnly": true, "delimiters": ["+1 ", " ", " "], "blocks": [0, 3, 3, 2]}'
                          placeholder="+1 ___ ___ __"
                        />
                      </div>
                      <div className="col-md-6 position-relative">
                        <label htmlFor="website" className="form-label">
                          Website
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-pill"
                          id="website"
                        />
                      </div>
                      <div className="col-md-6 position-relative">
                        <label className="form-label">Subject *</label>
                        <select
                          className="form-select form-select-lg rounded-pill"
                          data-select='{
                          "classNames": {
                            "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
                          }
                        }'
                          required=""
                        >
                          <option value="">Select subject</option>
                          <option value="General inquiry">
                            General inquiry
                          </option>
                          <option value="Product information">
                            Product information
                          </option>
                          <option value="Technical support">
                            Technical support
                          </option>
                          <option value="Account assistance">
                            Affiliation program
                          </option>
                          <option value="Security concerns">
                            Marketing and promotions
                          </option>
                          <option value="Security concerns">
                            Press and media inquiries
                          </option>
                        </select>
                        <div className="invalid-tooltip bg-transparent z-0 py-0 ps-3">
                          Select the subject of your message!
                        </div>
                      </div>
                      <div className="col-12 position-relative">
                        <label htmlFor="message-r" className="form-label">
                          Message *
                        </label>
                        <textarea
                          className="form-control form-control-lg rounded-6"
                          id="message-r"
                          rows="5"
                          required=""
                        ></textarea>
                        <div className="invalid-tooltip bg-transparent py-0 ps-3">
                          Write your message!
                        </div>
                      </div>
                      <div className="col-12 text-center pt-2 pb-3">
                        <button
                          type="submit"
                          className="btn btn-lg btn-dark rounded-pill"
                        >
                          Send message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact info --> */}

      <section className="container pt-5 mt-xxl-3">
        <div className="row row-cols-1 row-cols-sm-3 gy-4 gy-sm-0 pt-1 pt-sm-2 pt-md-3 pt-lg-4 pt-xl-5">
          <div className="col text-center mb-2 mb-sm-0">
            <i
              className={`bi bi-telephone-inbound-fill fs-4 rounded-circle p-3 mb-3 d-inline-flex ${
                isDarkMode
                  ? "bg-body-secondary text-white"
                  : "bg-dark text-white"
              }`}
            ></i>
            <h3 className="text-body fs-sm fw-normal mb-2">Call us directly</h3>
            <div className="nav animate-underline justify-content-center">
              <Link
                className="nav-link animate-target text-dark-emphasis fs-base p-0"
                to="tel:+15053753082"
              >
                +1&nbsp;50&nbsp;537&nbsp;53&nbsp;082
              </Link>
            </div>
          </div>

          <div className="col text-center mb-2 mb-sm-0">
            <i
              className={`bi bi-envelope fs-4 rounded-circle p-3 mb-3 d-inline-flex ${
                isDarkMode
                  ? "bg-body-secondary text-white"
                  : "bg-dark text-white"
              }`}
            ></i>
            <h3 className="text-body fs-sm fw-normal mb-2">
              Send us a message
            </h3>
            <div className="nav animate-underline justify-content-center">
              <Link
                className="nav-link animate-target text-dark-emphasis fs-base p-0"
                to="mailto:info@cartzilla.com"
              >
                info@cartzilla.com
              </Link>
            </div>
          </div>

          <div className="col text-center">
            <i
              className={`bi bi-info-circle fs-4 rounded-circle p-3 mb-3 d-inline-flex ${
                isDarkMode
                  ? "bg-body-secondary text-white"
                  : "bg-dark text-white"
              }`}
            ></i>
            <h3 className="text-body fs-sm fw-normal mb-2">
              Looking for support?
            </h3>
            <div className="nav animate-underline justify-content-center">
              <Link
                className="nav-link animate-target text-dark-emphasis fs-base p-0"
                to="#!"
              >
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Store locations + Map in lightbox --> */}
      <section className="container py-1 py-sm-2 py-md-3 py-lg-4 py-xl-5 my-xxl-3">
        <div className="row row-cols-1 row-cols-md-2 g-0 overflow-hidden rounded-5 my-5">
          {/* Map Image */}
          <div className="col position-relative">
            <div className="ratio ratio-4x3"></div>
            <img
              src="/assets/img/blog/grid/v2/video01.jpg"
              className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
              alt="Store Map"
            />
          </div>

          {/* Contact Details */}
          <div className="col bg-body-tertiary order-md-1 py-5 px-4 px-xl-5">
            <div className="py-md-4 py-lg-5 px-md-4 px-lg-5">
              <h1 className="pb-2 pb-sm-3 pb-lg-0 mb-md-4 mb-lg-5">
                Our stores
              </h1>

              {/* Store 1 */}
              <ul className="list-unstyled pb-sm-2 mb-0">
                <li className="lh-lg">
                  New York 11741, USA
                  <br />
                  396 Lillian Bolavandy, Holbrook
                </li>
                <li className="nav">
                  <Link
                    className="nav-link animate-underline fw-semibold px-0"
                    to="https://www.google.com/maps?q=396+Lillian+Blvd,+Holbrook,+NY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="animate-target">Show on map</span>
                    <i
                      className="bi-chevron-right fs-lg ms-2"
                      style={{ marginTop: ".1875rem" }}
                    ></i>
                  </Link>
                </li>
              </ul>

              <hr />

              {/* Store 2 */}
              <ul className="list-unstyled pb-sm-2 mb-0">
                <li className="lh-lg pt-2">
                  California 32806, USA
                  <br />
                  514 S. Magnolia St., San Francisco
                </li>
                <li className="nav">
                  <Link
                    className="nav-link animate-underline fw-semibold px-0"
                    to="https://www.google.com/maps?q=514+S+Magnolia+St,+San+Francisco,+CA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="animate-target">Show on map</span>
                    <i
                      className="bi-chevron-right fs-lg ms-2"
                      style={{ marginTop: ".1875rem" }}
                    ></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="floating-buttons position-fixed top-50 end-0 z-sticky me-3 me-xl-4 pb-4">
        {/* Scroll to top button */}
   <a
  className="btn btn btn-sm bg-body border-0 rounded-pill shadow animate-slide-end"
  href="#top">
  Top
  <i className="bi-arrow-right fs-base ms-1 me-n1 animate-target" />
  <span className="position-absolute top-0 start-0 w-100 h-100 border rounded-pill z-0" />
  <svg
    className="position-absolute top-0 start-0 w-100 h-100 z-1"
    fill="none"
    viewBox="0 0 62 32"
    xmlns="http://www.w3.org/2000/svg">
    <rect
      height="30.5"
      rx="15.25"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      width="60.5"
      x=".75"
      y=".75"
    />
  </svg>
</a>
      </div>
    </main>
  );
};
