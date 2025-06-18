import React from 'react';

export const Footer = () =>{
    return (
        <>
       <footer className="footer position-relative bg-dark">
      <span className="position-absolute top-0 start-0 w-100 h-100 bg-body d-none d-block-dark"></span>
      <div className="container position-relative z-1 pt-sm-2 pt-md-3 pt-lg-4" data-bs-theme="dark">
        {/* Accordion Footer Links */}
        <div className="accordion py-5" id="footerLinks">
          <div className="row">
            <div className="col-md-4 d-sm-flex flex-md-column align-items-center align-items-md-start pb-3 mb-sm-4">
              <h4 className="mb-sm-0 mb-md-4 me-4">
                <a className="text-dark-emphasis text-decoration-none" href="index.html">Cartzilla</a>
              </h4>
              <p className="text-body fs-sm text-sm-end text-md-start mb-sm-0 mb-md-3 ms-0 ms-sm-auto ms-md-0 me-4">
                Got questions? Contact us 24/7
              </p>
              <div className="dropdown" style={{ maxWidth: "250px" }}>
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle justify-content-between w-100"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Help and consultation
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#!">Help center & FAQ</a></li>
                  <li><a className="dropdown-item" href="#!">Support chat</a></li>
                  <li><a className="dropdown-item" href="#!">Open support ticket</a></li>
                  <li><a className="dropdown-item" href="#!">Call center</a></li>
                </ul>
              </div>
            </div>

            {/* Footer Columns */}
            <div className="col-md-8">
              <div className="row row-cols-1 row-cols-sm-3 gx-3 gx-md-4">

                {/* Reusable section */}
                {[
                  {
                    id: "company",
                    title: "Company",
                    links: ["About company", "Our team", "Careers", "Contact us", "News"],
                  },
                  {
                    id: "account",
                    title: "Account",
                    links: [
                      "Your account",
                      "Shipping rates & policies",
                      "Refunds & replacements",
                      "Delivery info",
                      "Order tracking",
                      "Taxes & fees",
                    ],
                  },
                  {
                    id: "customer",
                    title: "Customer service",
                    links: [
                      "Payment methods",
                      "Money back guarantee",
                      "Product returns",
                      "Support center",
                      "Shipping",
                      "Terms & conditions",
                    ],
                  },
                ].map(section => (
                  <div key={section.id} className="accordion-item col border-0">
                    <h6 className="accordion-header" id={`${section.id}Heading`}>
                      <span className="text-dark-emphasis d-none d-sm-block">{section.title}</span>
                      <button
                        type="button"
                        className="accordion-button collapsed py-3 d-sm-none"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${section.id}Links`}
                        aria-expanded="false"
                        aria-controls={`${section.id}Links`}
                      >
                        {section.title}
                      </button>
                    </h6>
                    <div
                      className="accordion-collapse collapse d-sm-block"
                      id={`${section.id}Links`}
                      aria-labelledby={`${section.id}Heading`}
                      data-bs-parent="#footerLinks"
                    >
                      <ul className="nav flex-column gap-2 pt-sm-3 pb-3 mt-n1 mb-1">
                        {section.links.map((link, i) => (
                          <li key={i} className="d-flex w-100 pt-1">
                            <a className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="#!">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr className="d-sm-none my-0" />
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="d-flex flex-column gap-3 pb-3 pb-md-4 pb-lg-5 mt-n2 mt-sm-n4 mt-lg-0 mb-4">
          {[
            [
              "Computers",
              "Smartphones",
              "TV, Video",
              "Speakers",
              "Cameras",
              "Printers",
              "Video Games",
              "Headphones",
              "Wearable",
              "HDD/SSD",
              "Smart Home",
              "Apple Devices",
              "Tablets",
            ],
            [
              "Monitors",
              "Scanners",
              "Servers",
              "Heating and Cooling",
              "E-readers",
              "Data Storage",
              "Networking",
              "Power Strips",
              "Plugs and Outlets",
              "Detectors and Sensors",
              "Accessories",
            ],
          ].map((tagGroup, i) => (
            <ul key={i} className="nav align-items-center text-body-tertiary gap-2">
              {tagGroup.map((tag, j) => (
                <React.Fragment key={j}>
                  <li className="animate-underline">
                    <a className="nav-link fw-normal p-0 animate-target" href="#!">
                      {tag}
                    </a>
                  </li>
                  {j < tagGroup.length - 1 && <li className="px-1">/</li>}
                </React.Fragment>
              ))}
            </ul>
          ))}
        </div>

        {/* Copyright */}
        <div className="d-md-flex align-items-center border-top py-4">
          <div className="d-flex gap-2 gap-sm-3 justify-content-center ms-md-auto mb-4 mb-md-0 order-md-2">
            {["visa", "mastercard", "paypal", "google-pay", "apple-pay"].map((name, i) => (
              <div key={i}>
                <img src={`assets/img/payment-methods/${name}-dark-mode.svg`} alt={name.replace("-", " ")} />
              </div>
            ))}
          </div>
          <p className="text-body fs-xs text-center text-md-start mb-0 me-4 order-md-1">
            © All rights reserved. Made by{" "}
            <span className="animate-underline">
              <a
                className="animate-target text-dark-emphasis fw-medium text-decoration-none"
                href="https://createx.studio/"
                target="_blank"
                rel="noreferrer"
              >
                Createx Studio
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
        </>
    )
}