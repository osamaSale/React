import React from "react";

export const Footer = () => {
  return (
    <footer className="footer bg-dark pb-4" data-bs-theme="dark">
      <div className="container pb-md-3">
        {/* Subscription + Links */}
        <div className="py-5">
          <div className="row py-sm-1 py-md-2 py-lg-3">
            {/* Subscription + Social */}
            <div className="col-lg-5 mb-4 mb-sm-5 mb-lg-0">
              <h6 className="mb-4">Join our newsletter, get discounts 🔥</h6>
              <form
                className="needs-validation d-flex gap-2 pb-sm-2 pb-lg-0 mb-4 mb-lg-5"
                noValidate
              >
                <input
                  type="email"
                  className="form-control form-control-lg w-100 rounded-pill"
                  placeholder="Your email"
                  style={{ maxWidth: "340px" }}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-lg btn-primary rounded-pill"
                >
                  Subscribe
                </button>
              </form>
              <div className="d-flex gap-3">
                <a
                  className="btn btn-icon btn-secondary rounded-circle"
                  href="#!"
                  aria-label="Instagram"
                >
                  <i className="bi-instagram fs-base"></i>
                </a>
                <a
                  className="btn btn-icon btn-secondary rounded-circle"
                  href="#!"
                  aria-label="Facebook"
                >
                  <i className="bi-facebook fs-base"></i>
                </a>
                <a
                  className="btn btn-icon btn-secondary rounded-circle"
                  href="#!"
                  aria-label="YouTube"
                >
                  <i className="bi-youtube fs-base"></i>
                </a>
                <a
                  className="btn btn-icon btn-secondary rounded-circle"
                  href="#!"
                  aria-label="Telegram"
                >
                  <i className="bi-telegram fs-base"></i>
                </a>
              </div>
            </div>

            {/* Accordion Columns */}
            <div className="col-lg-7">
              <div className="accordion ps-lg-4" id="footerLinks">
                <div className="row">
                  {/* Categories */}
                  <div className="accordion-item col-sm-4 border-0">
                    <h6 className="accordion-header" id="categoriesHeading">
                      <span className="text-dark-emphasis d-none d-sm-block">
                        Categories
                      </span>
                      <button
                        type="button"
                        className="accordion-button collapsed py-3 d-sm-none"
                        data-bs-toggle="collapse"
                        data-bs-target="#categoriesLinks"
                        aria-expanded="false"
                        aria-controls="categoriesLinks"
                      >
                        Categories
                      </button>
                    </h6>
                    <div
                      className="accordion-collapse collapse d-sm-block"
                      id="categoriesLinks"
                      aria-labelledby="categoriesHeading"
                      data-bs-parent="#footerLinks"
                    >
                      <ul className="nav flex-column gap-2 pt-sm-3 pb-3 pb-sm-0 mt-n1 mb-1 mb-sm-0">
                        {[
                          "Vectors",
                          "Photos",
                          "3D illustrations",
                          "AI images",
                          "Templates",
                          "Mockups",
                        ].map((text) => (
                          <li className="d-flex w-100 pt-1" key={text}>
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="#!"
                            >
                              {text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr className="d-sm-none my-0" />
                  </div>

                  {/* Members */}
                  <div className="accordion-item col-sm-4 border-0">
                    <h6 className="accordion-header" id="membersHeading">
                      <span className="text-dark-emphasis d-none d-sm-block">
                        For members
                      </span>
                      <button
                        type="button"
                        className="accordion-button collapsed py-3 d-sm-none"
                        data-bs-toggle="collapse"
                        data-bs-target="#membersLinks"
                        aria-expanded="false"
                        aria-controls="membersLinks"
                      >
                        For members
                      </button>
                    </h6>
                    <div
                      className="accordion-collapse collapse d-sm-block"
                      id="membersLinks"
                      aria-labelledby="membersHeading"
                      data-bs-parent="#footerLinks"
                    >
                      <ul className="nav flex-column gap-2 pt-sm-3 pb-3 pb-sm-0 mt-n1 mb-1 mb-sm-0">
                        {[
                          "Licenses",
                          "Return policy",
                          "Payment methods",
                          "Become a vendor",
                        ].map((text) => (
                          <li className="d-flex w-100 pt-1" key={text}>
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="#!"
                            >
                              {text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr className="d-sm-none my-0" />
                  </div>

                  {/* Support */}
                  <div className="accordion-item col-sm-4 border-0">
                    <h6 className="accordion-header" id="supportHeading">
                      <span className="text-dark-emphasis d-none d-sm-block">
                        Support
                      </span>
                      <button
                        type="button"
                        className="accordion-button collapsed py-3 d-sm-none"
                        data-bs-toggle="collapse"
                        data-bs-target="#supportLinks"
                        aria-expanded="false"
                        aria-controls="supportLinks"
                      >
                        Support
                      </button>
                    </h6>
                    <div
                      className="accordion-collapse collapse d-sm-block"
                      id="supportLinks"
                      aria-labelledby="supportHeading"
                      data-bs-parent="#footerLinks"
                    >
                      <ul className="nav flex-column gap-2 pt-sm-3 pb-3 pb-sm-0 mt-n1 mb-1 mb-sm-0">
                        {["FAQs", "Search guide", "Contact"].map((text) => (
                          <li className="d-flex w-100 pt-1" key={text}>
                            <a
                              className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                              href="#!"
                            >
                              {text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr className="d-sm-none my-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="fs-xs text-body text-center text-lg-start mb-0">
          © All rights reserved. Made with{" "}
          <i className="bi-heart-filled align-middle"></i> by{" "}
          <span className="animate-underline">
            <a
              className="animate-target text-white text-decoration-none"
              href="https://createx.studio/"
              target="_blank"
              rel="noreferrer"
            >
              Createx Studio
            </a>
          </span>
        </p>
      </div>

      {/* Spacer for sticky offcanvas */}
      <div className="d-lg-none" style={{ height: "3.75rem" }}></div>
    </footer>
  );
};
