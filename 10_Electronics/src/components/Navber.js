import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const Navber = () => {
  // الحالة للاحتفاظ بالثيم المختار
  const [theme, setTheme] = useState(() => {
    // جلب القيمة من localStorage لو موجودة، أو تعيين 'auto' كافتراضي
    return localStorage.getItem("theme") || "auto";
  });
  const applyTheme = (theme) => {
    document.body.dataset.bsTheme = theme; // لو Bootstrap 5.3+ يستخدم data-bs-theme
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "auto") {
      // لو "auto" نستخدم حسب تفضيل النظام (light أو dark)
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      applyTheme(prefersDark ? "dark" : "light");
    } else {
      applyTheme(theme);
    }
  }, [theme]);
  useEffect(() => {
    // Bootstrap auto-focus workaround
    const input = document.querySelector(
      '#searchBar input[data-autofocus="collapse"]'
    );
    if (input) {
      const observer = new MutationObserver(() => {
        if (document.getElementById("searchBar")?.classList.contains("show")) {
          input.focus();
        }
      });
      observer.observe(document.getElementById("searchBar"), {
        attributes: true,
        attributeFilter: ["class"],
      });
      return () => observer.disconnect();
    }
  }, []);
  return (
    <header
      className="navbar navbar-expand-lg navbar-dark bg-dark d-block z-fixed p-0"
      data-sticky-navbar='{"offset": 500}'
    >
      <div className="container d-block py-1 py-lg-3" data-bs-theme="dark">
        <div className="navbar-stuck-hide pt-1"></div>
        <div className="row flex-nowrap align-items-center g-0">
          <div className="col col-lg-3 d-flex align-items-center">
            {/* Mobile offcanvas menu toggler */}
            <button
              type="button"
              className="navbar-toggler me-4 me-lg-0"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar brand */}
            <Link to="index.html" className="navbar-brand me-0">
              <span className="d-none d-sm-flex flex-shrink-0 text-primary me-2">
                {/* Logo SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                  <path
                    d="M36 18.01c0 8.097-5.355 14.949-12.705 17.2a18.12 18.12 0 0 1-5.315.79C9.622 36 2.608 30.313.573 22.611.257 21.407.059 20.162 0 18.879v-1.758c.02-.395.059-.79.099-1.185.099-.908.277-1.817.514-2.686C2.687 5.628 9.682 0 18 0c5.572 0 10.551 2.528 13.871 6.517 1.502 1.797 2.648 3.91 3.359 6.201.494 1.659.771 3.436.771 5.292z"
                    fill="currentColor"
                  ></path>
                  <g fill="#fff">
                    <path d="M17.466 21.624c-.514 0-.988-.316-1.146-.829-.198-.632.138-1.303.771-1.501l7.666-2.469-1.205-8.254-13.317 4.621a1.19 1.19 0 0 1-1.521-.75 1.19 1.19 0 0 1 .751-1.521l13.89-4.818c.553-.197 1.166-.138 1.64.158a1.82 1.82 0 0 1 .85 1.284l1.344 9.183c.138.987-.494 1.994-1.482 2.33l-7.864 2.528-.375.04zm7.31.138c-.178-.632-.85-1.007-1.482-.81l-5.177 1.58c-2.331.79-3.28.02-3.418-.099l-6.56-8.412a4.25 4.25 0 0 0-4.406-1.758l-3.122.987c-.237.889-.415 1.777-.514 2.686l4.228-1.363a1.84 1.84 0 0 1 1.857.81l6.659 8.551c.751.948 2.015 1.323 3.359 1.323.909 0 1.857-.178 2.687-.474l5.078-1.54c.632-.178 1.008-.829.81-1.481z"></path>
                    <use to="#czlogo"></use>
                    <use to="#czlogo" x="8.516" y="-2.172"></use>
                  </g>
                  <defs>
                    <path
                      id="czlogo"
                      d="M18.689 28.654a1.94 1.94 0 0 1-1.936 1.935 1.94 1.94 0 0 1-1.936-1.935 1.94 1.94 0 0 1 1.936-1.935 1.94 1.94 0 0 1 1.936 1.935z"
                    ></path>
                  </defs>
                </svg>
              </span>
              Cartzilla
            </Link>
          </div>

          <div className="col col-lg-9 d-flex align-items-center justify-content-end">
            {/* Search input */}
            <div className="position-relative flex-fill d-none d-lg-block pe-4 pe-xl-5">
              <i className="bi bi-search position-absolute top-50 translate-middle-y d-flex fs-lg text-white ms-3"></i>
              <input
                type="search"
                className="form-control form-control-lg form-icon-start border-white rounded-pill"
                placeholder="Search the products"
              />
            </div>

            {/* Super Sale link */}
            <Link
              className="d-none d-xl-flex align-items-center text-decoration-none animate-shake navbar-stuck-hide me-3 me-xl-4 me-xxl-5"
              to="shop-catalog-electronics.html"
            >
              <div className="btn btn-icon btn-lg fs-lg text-primary bg-body-secondary bg-opacity-75 pe-none rounded-circle">
                <i className="bi bi-percent animate-target"></i>
              </div>
              <div className="ps-2 text-nowrap">
                <div className="fs-xs text-body">Only this month</div>
                <div className="fw-medium text-white">Super Sale 20%</div>
              </div>
            </Link>

            {/* Button group */}
            <div className="d-flex align-items-center">
              {/* Theme switcher dropdown */}
              <div className="dropdown">
                <button
                  type="button"
                  className="theme-switcher btn btn-icon btn-lg btn-outline-secondary fs-lg border-0 rounded-circle animate-scale"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Toggle theme (light)"
                >
                  <span className="theme-icon-active d-flex animate-target">
                    <i className="bi bi-sun"></i>
                  </span>
                </button>
                <ul
                  className="dropdown-menu "
                  style={{ "--cz-dropdown-min-width": "9rem" }}
                  data-bs-popper="static"
                >
                  <li>
                    <button
                      type="button"
                      className={`dropdown-item${
                        theme === "light" ? " active" : ""
                      }`}
                      data-bs-theme-value="light"
                      aria-pressed={theme === "light"}
                      onClick={() => setTheme("light")}
                    >
                      <span className="theme-icon d-flex fs-base me-2">
                        <i className="bi bi-sun"></i>
                      </span>
                      <span className="theme-label">Light</span>
                      {theme === "light" && (
                        <i className="item-active-indicator bi bi-check ms-auto"></i>
                      )}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className={`dropdown-item${
                        theme === "dark" ? " active" : ""
                      }`}
                      data-bs-theme-value="dark"
                      aria-pressed={theme === "dark"}
                      onClick={() => setTheme("dark")}
                    >
                      <span className="theme-icon d-flex fs-base me-2">
                        <i className="bi bi-moon"></i>
                      </span>
                      <span className="theme-label">Dark</span>
                      {theme === "dark" && (
                        <i className="item-active-indicator bi bi-check ms-auto"></i>
                      )}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className={`dropdown-item${
                        theme === "auto" ? " active" : ""
                      }`}
                      data-bs-theme-value="auto"
                      aria-pressed={theme === "auto"}
                      onClick={() => setTheme("auto")}
                    >
                      <span className="theme-icon d-flex fs-base me-2">
                        <i className="bi bi-auto"></i>
                      </span>
                      <span className="theme-label">Auto</span>
                      {theme === "auto" && (
                        <i className="item-active-indicator bi bi-check ms-auto"></i>
                      )}
                    </button>
                  </li>
                </ul>
              </div>

              {/* Other buttons */}
              <button
                type="button"
                className="btn btn-icon btn-lg fs-xl btn-outline-secondary border-0 rounded-circle animate-shake d-lg-none"
                data-bs-toggle="collapse"
                data-bs-target="#searchBar"
                aria-expanded="false"
                aria-controls="searchBar"
                aria-label="Toggle search bar"
              >
                <i className="bi bi-search animate-target"></i>
              </button>

              <Link
                className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-md-inline-flex"
                to="account-signin.html"
              >
                <i className="bi bi-person animate-target"></i>
                <span className="visually-hidden">Account</span>
              </Link>

              <Link
                className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-pulse d-none d-md-inline-flex"
                to="account-wishlist.html"
              >
                <i className="bi bi-heart animate-target"></i>
                <span className="visually-hidden">Wishlist</span>
              </Link>

              <button
                type="button"
                className="btn btn-icon btn-lg btn-secondary position-relative rounded-circle ms-2"
                data-bs-toggle="offcanvas"
                data-bs-target="#shoppingCart"
                aria-controls="shoppingCart"
                aria-label="Shopping cart"
              >
                <span className="position-absolute top-0 start-100 mt-n1 ms-n3 badge text-bg-success border border-3 border-dark rounded-pill">
                  3
                </span>
                <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                  <i className="bi bi-cart animate-target ms-n1"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-stuck-hide pb-1"></div>
      </div>
      <div
        className="collapse position-absolute top-100 z-2 w-100 bg-dark d-lg-none"
        id="searchBar"
      >
        <div className="container position-relative my-3" data-bs-theme="dark">
          <i className="bi bi-search position-absolute top-50 translate-middle-y d-flex fs-lg text-white ms-3"></i>
          <input
            type="search"
            className="form-control form-icon-start border-white rounded-pill"
            placeholder="Search the products"
            data-autofocus="collapse"
          />
        </div>
      </div>
      {/* <!-- Main navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) --> */}
      <div className="collapse navbar-stuck-hide" id="stuckNav">
        <nav
          className="offcanvas offcanvas-start"
          id="navbarNav"
          tabIndex={-1}
          aria-labelledby="navbarNavLabel"
        >
          <div className="offcanvas-header py-3">
            <h5 className="offcanvas-title" id="navbarNavLabel">
              Browse Cartzilla
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body py-3 py-lg-0">
            <div className="container px-0 px-lg-3">
              <div className="row">
                <div className="col-lg-3">
                  <div className="navbar-nav">
                    <div className="dropdown w-100">
                      <div
                        className="cursor-pointer d-none d-lg-block"
                        data-bs-theme="dark"
                        data-bs-toggle="dropdown"
                        data-bs-trigger="hover"
                      >
                        <Link
                          className="position-absolute top-0 start-0 w-100 h-100"
                          to="shop-categories-electronics.html"
                        >
                          <span className="visually-hidden">Categories</span>
                        </Link>
                        <button
                          className="btn btn-lg btn-secondary dropdown-toggle w-100 rounded-bottom-0 justify-content-start pe-none"
                          type="button"
                        >
                          <i className="bi bi-grid fs-lg" />
                          <span className="ms-2 me-auto">Categories</span>
                        </button>
                      </div>
                      <button
                        className="btn btn-lg btn-secondary dropdown-toggle w-100 justify-content-start d-lg-none mb-2"
                        data-bs-auto-close="outside"
                        data-bs-toggle="dropdown"
                        type="button"
                      >
                        <i className="bi bi-grid fs-lg" />
                        <span className="ms-2 me-auto">Categories</span>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu w-100 rounded-top-0 rounded-bottom-4 py-1 p-lg-1"
                        style={{
                          "--cz-dropdown-item-padding-y": ".625rem",
                          "--cz-dropdown-item-spacer": "0",
                          "--cz-dropdown-spacer": "0",
                        }}
                      >
                        <li className="d-lg-none pt-2">
                          <Link
                            className="dropdown-item fw-medium"
                            to="shop-categories-electronics.html"
                          >
                            <i className="bi bi-grid fs-xl opacity-60 pe-1 me-2" />
                            All Categories
                            <i className="bi bi-chevron-right fs-base ms-auto me-n1" />
                          </Link>
                        </li>
                        <li className="dropend position-static">
                          <div
                            className="position-relative rounded pt-2 pb-1 px-lg-2"
                            data-bs-toggle="dropdown"
                            data-bs-trigger="hover"
                          >
                            <Link
                              className="dropdown-item fw-medium stretched-link d-none d-lg-flex"
                              to="shop-catalog-electronics.html"
                            >
                              <i className="bi bi-laptop fs-xl opacity-60 pe-1 me-2" />
                              <span className="text-truncate">
                                Computers & Accessories
                              </span>
                              <i className="bi bi-chevron-right fs-base ms-auto me-n1" />
                            </Link>
                            <div className="dropdown-item fw-medium text-wrap stretched-link d-lg-none">
                              <i className="bi bi-laptop fs-xl opacity-60 pe-1 me-2" />
                              Computers & Accessories
                              <i className="bi bi-chevron-down fs-base ms-auto me-n1" />
                            </div>
                          </div>
                          <div
                            className="dropdown-menu rounded-4 p-4"
                            style={{
                              "--cz-dropdown-spacer": ".3125rem",
                              animation: "none",
                              height: "calc(100% - .1875rem)",
                              top: "1rem",
                            }}
                          >
                            <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Computers
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Laptops & Tablets
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Desktop Computers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      External Components
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Interal Components
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Networking Products (NAS)
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Single Board Computers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Desktop Barebones
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Accessories
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Monitors
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Bags, Cases & Sleeves
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Batteries
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Charges & Adapters
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Cooling Pads
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Mounts
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Replacement Screens
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Security Locks
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Stands
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="d-none d-lg-block">
                                <div
                                  className="d-none d-xl-block"
                                  style={{
                                    width: "284px",
                                  }}
                                />
                                <div
                                  className="d-xl-none"
                                  style={{
                                    width: "240px",
                                  }}
                                />
                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                  <div className="text-center px-2">
                                    <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">
                                      Save up to $400
                                    </span>
                                    <div className="fs-sm text-light-emphasis mb-2">
                                      Starts from <del>$1,599.00</del> $1,399.00
                                    </div>
                                    <div className="h2 mb-4">
                                      Surface Laptop Studio
                                    </div>
                                  </div>
                                  <img
                                    alt="Surface Laptop Studio"
                                    src="assets/img/mega-menu/electronics/01.png"
                                    width="252"
                                  />
                                  <div className="text-center mt-4">
                                    <Link
                                      className="btn btn-sm btn-primary stretched-link"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Shop now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropend position-static">
                          <div
                            className="position-relative rounded pb-1 px-lg-2"
                            data-bs-toggle="dropdown"
                            data-bs-trigger="hover"
                            tabIndex="0"
                          >
                            <Link
                              className="dropdown-item fw-medium stretched-link d-none d-lg-flex"
                              to="shop-catalog-electronics.html"
                            >
                              <i className="bi bi-phone fs-xl opacity-60 pe-1 me-2" />
                              <span className="text-truncate">
                                Smartphones & Tablets
                              </span>
                              <i className="bi bi-chevron-right fs-base ms-auto me-n1" />
                            </Link>
                            <div className="dropdown-item fw-medium stretched-link d-lg-none">
                              <i className="bi bi-phone fs-xl opacity-60 pe-1 me-2" />
                              Smartphones & Tablets
                              <i className="bi bi-chevron-down fs-base ms-auto me-n1" />
                            </div>
                          </div>
                          <div
                            className="dropdown-menu rounded-4 p-4"
                            style={{
                              "--cz-dropdown-spacer": ".3125rem",
                              animation: "none",
                              height: "calc(100% - .1875rem)",
                              top: "1rem",
                            }}
                          >
                            <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Smartphones
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Apple iPhone
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Google Pixel
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Android Smartphones
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Phablets
                                    </Link>
                                  </li>
                                </ul>
                                <div className="d-flex w-100 pt-4">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Tablets
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Apple iPad
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Android Tablets
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Tablets with Keyboard
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Accessories
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Accessory Kits
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Batteries & Battery Packs
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Bags & Cases
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Cables
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Car Accessories
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Charges & Power Adapters
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      FM Transmitters
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Lens Attachments
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Mounts & Standsv
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Repair Kits
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Replacement Parts
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Styluses
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="d-none d-lg-block">
                                <div
                                  className="d-none d-xl-block"
                                  style={{
                                    width: "284px",
                                  }}
                                />
                                <div
                                  className="d-xl-none"
                                  style={{
                                    width: "240px",
                                  }}
                                />
                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                  <div className="text-center px-2">
                                    <i className="bi bi-apple fs-1 text-dark-emphasis mb-2" />
                                    <div className="fs-sm text-light-emphasis mb-2">
                                      Deal of the week
                                    </div>
                                    <div className="h2 mb-4">iPad Pro M1</div>
                                  </div>
                                  <img
                                    alt="iPad Pro"
                                    src="assets/img/mega-menu/electronics/02.png"
                                    width="252"
                                  />
                                  <div className="text-center mt-4">
                                    <Link
                                      className="btn btn-sm btn-primary stretched-link"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Shop now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropend position-static">
                          <div
                            className="position-relative rounded pb-1 px-lg-2"
                            data-bs-toggle="dropdown"
                            data-bs-trigger="hover"
                            tabIndex="0"
                          >
                            <Link
                              className="dropdown-item fw-medium stretched-link d-none d-lg-flex"
                              to="shop-catalog-electronics.html"
                            >
                              <i className="bi bi-tv fs-xl opacity-60 pe-1 me-2" />
                              <span className="text-truncate">
                                TV, Video & Audio
                              </span>
                              <i className="bi bi-chevron-right fs-base ms-auto me-n1" />
                            </Link>
                            <div className="dropdown-item fw-medium stretched-link d-lg-none">
                              <i className="bi bi-tv fs-xl opacity-60 pe-1 me-2" />
                              TV, Video & Audio
                              <i className="bi bi-chevron-down fs-base ms-auto me-n1" />
                            </div>
                          </div>
                          <div
                            className="dropdown-menu rounded-4 p-4"
                            style={{
                              "--cz-dropdown-spacer": ".3125rem",
                              animation: "none",
                              height: "calc(100% - .1875rem)",
                              top: "1rem",
                            }}
                          >
                            <div className="d-flex flex-column flex-lg-row h-100 gap-lg-4">
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    TV, Video & Audio
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      TV Sets
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Home Theater Systems
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      DVD Players & Recorders
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Blue-ray Players & Recorders
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      HD DVD Players & Recorders
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      DVD-VCR Combos
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      DTV Converters
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      AV Receivers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      AV Amplifiers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Projectors
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Projection Screens
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Satellite Television
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      TV-DTD Combos
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Sound Systems
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <ul className="nav flex-column gap-2 mt-2 mt-lg-0">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Home Cinema Systems
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Streaming Media Players
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      VCRs
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Video Glasses
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Lens Attachments
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Subwoofers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Sound Boosters
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="d-none d-lg-block">
                                <div
                                  className="d-none d-xl-block"
                                  style={{
                                    width: "284px",
                                  }}
                                />
                                <div
                                  className="d-xl-none"
                                  style={{
                                    width: "240px",
                                  }}
                                />
                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                  <div className="text-center px-2">
                                    <div className="fs-sm text-light-emphasis mb-2">
                                      Best deal! Save up to{" "}
                                      <span className="fw-semibold">$500</span>
                                    </div>
                                    <div className="h2 mb-4">
                                      LG OLED 4K Smart TV
                                    </div>
                                  </div>
                                  <img
                                    alt="Smart TV"
                                    src="assets/img/mega-menu/electronics/03.png"
                                    width="252"
                                  />
                                  <div className="text-center mt-4">
                                    <Link
                                      className="btn btn-sm btn-primary stretched-link"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Shop now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropend position-static">
                          <div
                            className="position-relative rounded pb-1 px-lg-2"
                            data-bs-toggle="dropdown"
                            data-bs-trigger="hover"
                            tabIndex="0"
                          >
                            <Link
                              className="dropdown-item fw-medium stretched-link d-none d-lg-flex"
                              to="shop-catalog-electronics.html"
                            >
                              <i className="bi bi-boombox fs-xl opacity-60 pe-1 me-2" />
                              <span className="text-truncate">
                                Speakers & Home Music
                              </span>
                              <i className="bi bi-chevron-right fs-base ms-auto me-n1" />
                            </Link>
                            <div className="dropdown-item fw-medium stretched-link d-lg-none">
                              <i className="bi bi-boombox fs-xl opacity-60 pe-1 me-2" />
                              Speakers & Home Music
                              <i className="bi bi-chevron-down fs-base ms-auto me-n1" />
                            </div>
                          </div>
                          <div
                            className="dropdown-menu rounded-4 p-4"
                            style={{
                              "--cz-dropdown-spacer": ".3125rem",
                              animation: "none",
                              height: "calc(100% - .1875rem)",
                              top: "1rem",
                            }}
                          >
                            <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Speakers
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Smart Speakers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Bluetooth Speakers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Bookshelf Speakers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Ceiling & In-Wall Speakers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Center-Channel Speakers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Floorstanding Speakers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Outdoor Speakers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Satellite Speakers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Sound Bars
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Surround Sound Systems
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Home Audio
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Home Theater
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Wireless & Streaming Audio
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Stereo System Components
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Compact Radios & Stereos
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Home Audio Accessories
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Subwoofers
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="d-none d-lg-block">
                                <div
                                  className="d-none d-xl-block"
                                  style={{
                                    width: "284px",
                                  }}
                                />
                                <div
                                  className="d-xl-none"
                                  style={{
                                    width: "240px",
                                  }}
                                />
                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                  <div className="text-center px-2">
                                    <i className="bi bi-google fs-2 text-dark-emphasis mb-3" />
                                    <div className="fs-sm text-light-emphasis mb-2">
                                      Deal of the week
                                    </div>
                                    <div className="h2 mb-4">Nest Audio</div>
                                  </div>
                                  <img
                                    alt="Nest Audio"
                                    src="assets/img/mega-menu/electronics/04.png"
                                    width="252"
                                  />
                                  <div className="text-center mt-4">
                                    <Link
                                      className="btn btn-sm btn-primary stretched-link"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Shop now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropend position-static">
                          <div
                            className="position-relative rounded pb-1 px-lg-2"
                            data-bs-toggle="dropdown"
                            data-bs-trigger="hover"
                            tabIndex="0"
                          >
                            <Link
                              className="dropdown-item fw-medium stretched-link d-none d-lg-flex"
                              to="shop-catalog-electronics.html"
                            >
                              <i className="bi bi-camera fs-xl opacity-60 pe-1 me-2" />
                              <span className="text-truncate">
                                Cameras, Photo & Video
                              </span>
                              <i className="bi bi-chevron-right fs-base ms-auto me-n1" />
                            </Link>
                            <div className="dropdown-item fw-medium stretched-link d-lg-none">
                              <i className="bi bi-camera fs-xl opacity-60 pe-1 me-2" />
                              Cameras, Photo & Video
                              <i className="bi bi-chevron-down fs-base ms-auto me-n1" />
                            </div>
                          </div>
                          <div
                            className="dropdown-menu rounded-4 p-4"
                            style={{
                              "--cz-dropdown-spacer": ".3125rem",
                              animation: "none",
                              height: "calc(100% - .1875rem)",
                              top: "1rem",
                            }}
                          >
                            <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Cameras & Lenses
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Point & Shoot Cameras
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      DSLR Cameras
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Mirrorless Cameras
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Body Mounted Cameras
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Camcorders
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Camcorder Lenses
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Camera Lenses
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Macro & Ringlight Flashes
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Shoe Mount Flashes
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Tripods & Monopods
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Video Studio
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Accessories
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Bags & Cases
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Binoculars & Scopes
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Batteries & Chargers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Cables & Cords
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Camcorder Accessories
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Cleaning Equipment
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Protector Foils
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Filters & Accessories
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Remote Controls
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Rain Covers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Viewfinders
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="d-none d-lg-block">
                                <div
                                  className="d-none d-xl-block"
                                  style={{
                                    width: "284px",
                                  }}
                                />
                                <div
                                  className="d-xl-none"
                                  style={{
                                    width: "240px",
                                  }}
                                />
                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                  <div className="text-center px-2">
                                    <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">
                                      Save up to $300
                                    </span>
                                    <div className="fs-sm text-light-emphasis mb-2">
                                      Starts from <del>$1,100.00</del> 899.00
                                    </div>
                                    <div className="h2 mb-4">
                                      Canon Digital Cameras
                                    </div>
                                  </div>
                                  <img
                                    alt="Canon Camera"
                                    src="assets/img/mega-menu/electronics/05.png"
                                    width="252"
                                  />
                                  <div className="text-center mt-4">
                                    <Link
                                      className="btn btn-sm btn-primary stretched-link"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Shop now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropend position-static">
                          <div
                            className="position-relative rounded pb-1 px-lg-2"
                            data-bs-toggle="dropdown"
                            data-bs-trigger="hover"
                            tabIndex="0"
                          >
                            <Link
                              className="dropdown-item fw-medium stretched-link d-none d-lg-flex"
                              to="shop-catalog-electronics.html"
                            >
                              <i className="bi bi-printer fs-xl opacity-60 pe-1 me-2" />
                              <span className="text-truncate">
                                Printers & Ink
                              </span>
                              <i className="bi bi-chevron-right fs-base ms-auto me-n1" />
                            </Link>
                            <div className="dropdown-item fw-medium stretched-link d-lg-none">
                              <i className="bi bi-printer fs-xl opacity-60 pe-1 me-2" />
                              Printers & Ink
                              <i className="bi bi-chevron-down fs-base ms-auto me-n1" />
                            </div>
                          </div>
                          <div
                            className="dropdown-menu rounded-4 p-4"
                            style={{
                              "--cz-dropdown-spacer": ".3125rem",
                              animation: "none",
                              height: "calc(100% - .1875rem)",
                              top: "1rem",
                            }}
                          >
                            <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    By type
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      All-in-One
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Copying
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Faxing
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Photo Printing
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Printing Only
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Scanning
                                    </Link>
                                  </li>
                                </ul>
                                <div className="d-flex w-100 pt-4">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Scanners
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Business Card Scanners
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Document Scanners
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Flatbed & Photo Scanners
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Slide & Negative Scanners
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Printers
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Dot Matrix Printers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Inkjet Printers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Label Printers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Laser Printers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Photo Printers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Wide Format Printers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Plotter Printers
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="d-none d-lg-block">
                                <div
                                  className="d-none d-xl-block"
                                  style={{
                                    width: "284px",
                                  }}
                                />
                                <div
                                  className="d-xl-none"
                                  style={{
                                    width: "240px",
                                  }}
                                />
                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                  <div className="text-center px-2">
                                    <div className="fs-sm text-light-emphasis mb-2">
                                      Best deal! Save up to{" "}
                                      <span className="fw-semibold">$200</span>
                                    </div>
                                    <div className="h2 mb-4">
                                      Epson Color Printers
                                    </div>
                                  </div>
                                  <img
                                    alt="Epson Printer"
                                    src="assets/img/mega-menu/electronics/06.png"
                                    width="252"
                                  />
                                  <div className="text-center mt-4">
                                    <Link
                                      className="btn btn-sm btn-primary stretched-link"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Shop now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropend position-static">
                          <div
                            className="position-relative rounded pb-1 px-lg-2"
                            data-bs-toggle="dropdown"
                            data-bs-trigger="hover"
                            tabIndex="0"
                          >
                            <Link
                              className="dropdown-item fw-medium stretched-link d-none d-lg-flex"
                              to="shop-catalog-electronics.html"
                            >
                              <i className="bi bi-battery fs-xl opacity-60 pe-1 me-2" />
                              <span className="text-truncate">
                                Charging Stations
                              </span>
                              <i className="bi bi-chevron-right fs-base ms-auto me-n1" />
                            </Link>
                            <div className="dropdown-item fw-medium stretched-link d-lg-none">
                              <i className="bi bi-battery fs-xl opacity-60 pe-1 me-2" />
                              Charging Stations
                              <i className="bi bi-chevron-down fs-base ms-auto me-n1" />
                            </div>
                          </div>
                          <div
                            className="dropdown-menu rounded-4 p-4"
                            style={{
                              "--cz-dropdown-spacer": ".3125rem",
                              animation: "none",
                              height: "calc(100% - .1875rem)",
                              top: "1rem",
                            }}
                          >
                            <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Charging Stations
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Portable Power Stations
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Inverter Power Stations
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Outdoor Generators
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Gasoline Generators
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Cell Phone Chargers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Power Strips
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Wall Charges
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="d-none d-lg-block">
                                <div
                                  className="d-none d-xl-block"
                                  style={{
                                    width: "284px",
                                  }}
                                />
                                <div
                                  className="d-xl-none"
                                  style={{
                                    width: "240px",
                                  }}
                                />
                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                  <div className="text-center px-2">
                                    <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">
                                      Huge sale!
                                    </span>
                                    <div className="fs-sm text-light-emphasis mb-2">
                                      Save up to{" "}
                                      <span className="fw-semibold">$350</span>
                                    </div>
                                    <div className="h2 mb-4">
                                      Portable Power Stations
                                    </div>
                                  </div>
                                  <img
                                    alt="Power Station"
                                    src="assets/img/mega-menu/electronics/07.png"
                                    width="252"
                                  />
                                  <div className="text-center mt-4">
                                    <Link
                                      className="btn btn-sm btn-primary stretched-link"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Shop now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropend position-static">
                          <div
                            className="position-relative rounded pb-1 px-lg-2"
                            data-bs-toggle="dropdown"
                            data-bs-trigger="hover"
                            tabIndex="0"
                          >
                            <Link
                              className="dropdown-item fw-medium stretched-link d-none d-lg-flex"
                              to="shop-catalog-electronics.html"
                            >
                              <i className="bi bi-headphones fs-xl opacity-60 pe-1 me-2" />
                              <span className="text-truncate">Headphones</span>
                              <i className="bi bi-chevron-right fs-base ms-auto me-n1" />
                            </Link>
                            <div className="dropdown-item fw-medium stretched-link d-lg-none">
                              <i className="bi bi-headphones fs-xl opacity-60 pe-1 me-2" />
                              Headphones
                              <i className="bi bi-chevron-down fs-base ms-auto me-n1" />
                            </div>
                          </div>
                          <div
                            className="dropdown-menu rounded-4 p-4"
                            style={{
                              "--cz-dropdown-spacer": ".3125rem",
                              animation: "none",
                              height: "calc(100% - .1875rem)",
                              top: "1rem",
                            }}
                          >
                            <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Headphones
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Earbud Headphones
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Over-Ear Headphones
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      On-Ear Headphones
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Bluetooth Headphones
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Sports & Fitness
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Noise-Cancelling
                                    </Link>
                                  </li>
                                </ul>
                                <div className="d-flex w-100 pt-4">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Accessories
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Cases & Sleeves
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Cables & Cords
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Ear Pads
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Repair Kits
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Cleaning Equipment
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="d-none d-lg-block">
                                <div
                                  className="d-none d-xl-block"
                                  style={{
                                    width: "284px",
                                  }}
                                />
                                <div
                                  className="d-xl-none"
                                  style={{
                                    width: "240px",
                                  }}
                                />
                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                  <div className="text-center px-2">
                                    <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">
                                      Save up to $200
                                    </span>
                                    <div className="fs-sm text-light-emphasis mb-2">
                                      Starts from $119.99
                                    </div>
                                    <div className="h2 mb-4">
                                      Wireless Headphones
                                    </div>
                                  </div>
                                  <img
                                    alt="Wireless Headphones"
                                    src="assets/img/mega-menu/electronics/08.png"
                                    width="252"
                                  />
                                  <div className="text-center mt-4">
                                    <Link
                                      className="btn btn-sm btn-primary stretched-link"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Shop now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropend position-static">
                          <div
                            className="position-relative rounded pb-1 px-lg-2"
                            data-bs-toggle="dropdown"
                            data-bs-trigger="hover"
                            tabIndex="0"
                          >
                            <Link
                              className="dropdown-item fw-medium stretched-link d-none d-lg-flex"
                              to="shop-catalog-electronics.html"
                            >
                              <i className="bi bi-watch fs-xl opacity-60 pe-1 me-2" />
                              <span className="text-truncate">
                                Wearable Electronics
                              </span>
                              <i className="bi bi-chevron-right fs-base ms-auto me-n1" />
                            </Link>
                            <div className="dropdown-item fw-medium stretched-link d-lg-none">
                              <i className="bi bi-watch fs-xl opacity-60 pe-1 me-2" />
                              Wearable Electronics
                              <i className="bi bi-chevron-down fs-base ms-auto me-n1" />
                            </div>
                          </div>
                          <div
                            className="dropdown-menu rounded-4 p-4"
                            style={{
                              "--cz-dropdown-spacer": ".3125rem",
                              animation: "none",
                              height: "calc(100% - .1875rem)",
                              top: "1rem",
                            }}
                          >
                            <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Wearable Gadgets
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Smartwatches
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Fitness Trackers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Smart Glasses
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Rings
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Virtual Reality
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Clips, Arm & Wristbands
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Accessories
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="d-none d-lg-block">
                                <div
                                  className="d-none d-xl-block"
                                  style={{
                                    width: "284px",
                                  }}
                                />
                                <div
                                  className="d-xl-none"
                                  style={{
                                    width: "240px",
                                  }}
                                />
                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                  <div className="text-center px-2">
                                    <i className="bi bi-google fs-2 text-dark-emphasis mb-3" />
                                    <div className="fs-sm text-light-emphasis mb-2">
                                      Deal of the week
                                    </div>
                                    <div className="h2 mb-4">Pixel Watch</div>
                                  </div>
                                  <img
                                    alt="Pixel Watch"
                                    src="assets/img/mega-menu/electronics/09.png"
                                    width="252"
                                  />
                                  <div className="text-center mt-4">
                                    <Link
                                      className="btn btn-sm btn-primary stretched-link"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Shop now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropend position-static">
                          <div
                            className="position-relative rounded pb-1 px-lg-2"
                            data-bs-toggle="dropdown"
                            data-bs-trigger="hover"
                            tabIndex="0"
                          >
                            <Link
                              className="dropdown-item fw-medium stretched-link d-none d-lg-flex"
                              to="shop-catalog-electronics.html"
                            >
                              <i className="bi bi-battery-charging fs-xl opacity-60 pe-1 me-2" />
                              <span className="text-truncate">Powerbanks</span>
                              <i className="bi bi-chevron-right fs-base ms-auto me-n1" />
                            </Link>
                            <div className="dropdown-item fw-medium stretched-link d-lg-none">
                              <i className="bi bi-battery-charging fs-xl opacity-60 pe-1 me-2" />
                              Powerbanks
                              <i className="bi bi-chevron-down fs-base ms-auto me-n1" />
                            </div>
                          </div>
                          <div
                            className="dropdown-menu rounded-4 p-4"
                            style={{
                              "--cz-dropdown-spacer": ".3125rem",
                              animation: "none",
                              height: "calc(100% - .1875rem)",
                              top: "1rem",
                            }}
                          >
                            <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Powerbanks
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Fast Charging
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Built In Cable
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Built In Wall Plug
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      LED Indicator Lights
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Pocket Size
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Wireless Charging
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Short Circuit Protection
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Scratch Resistant
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Flashlight
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Lightweight
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="d-none d-lg-block">
                                <div
                                  className="d-none d-xl-block"
                                  style={{
                                    width: "284px",
                                  }}
                                />
                                <div
                                  className="d-xl-none"
                                  style={{
                                    width: "240px",
                                  }}
                                />
                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                  <div className="text-center px-2">
                                    <div className="fs-sm text-light-emphasis mb-2">
                                      Save up to{" "}
                                      <span className="fw-semibold">$50</span>{" "}
                                      on our
                                    </div>
                                    <div className="h2 mb-4">
                                      Powerbank Deals
                                    </div>
                                  </div>
                                  <img
                                    alt="Powerbank"
                                    src="assets/img/mega-menu/electronics/10.png"
                                    width="252"
                                  />
                                  <div className="text-center mt-4">
                                    <Link
                                      className="btn btn-sm btn-primary stretched-link"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Shop now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropend position-static">
                          <div
                            className="position-relative rounded pb-1 px-lg-2"
                            data-bs-toggle="dropdown"
                            data-bs-trigger="hover"
                            tabIndex="0"
                          >
                            <Link
                              className="dropdown-item fw-medium stretched-link d-none d-lg-flex"
                              to="shop-catalog-electronics.html"
                            >
                              <i className="bi bi-hdd fs-xl opacity-60 pe-1 me-2" />
                              <span className="text-truncate">
                                HDD/SSD Data Storage
                              </span>
                              <i className="bi bi-chevron-right fs-base ms-auto me-n1" />
                            </Link>
                            <div className="dropdown-item fw-medium stretched-link d-lg-none">
                              <i className="bi bi-hdd fs-xl opacity-60 pe-1 me-2" />
                              HDD/SSD Data Storage
                              <i className="bi bi-chevron-down fs-base ms-auto me-n1" />
                            </div>
                          </div>
                          <div
                            className="dropdown-menu rounded-4 p-4"
                            style={{
                              "--cz-dropdown-spacer": ".3125rem",
                              animation: "none",
                              height: "calc(100% - .1875rem)",
                              top: "1rem",
                            }}
                          >
                            <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Data Storage
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      External Hard Drives
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      External SSD
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      External Zip Drives
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Floppy & Tape Drives
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Internal Hard Drives
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Internal SSD
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Network Attached Storage
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      USB Flash Drives
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="d-none d-lg-block">
                                <div
                                  className="d-none d-xl-block"
                                  style={{
                                    width: "284px",
                                  }}
                                />
                                <div
                                  className="d-xl-none"
                                  style={{
                                    width: "240px",
                                  }}
                                />
                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                  <div className="text-center px-2">
                                    <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">
                                      Save up to $100
                                    </span>
                                    <div className="fs-sm text-light-emphasis mb-2">
                                      Starts from $89.99
                                    </div>
                                    <div className="h2 mb-4">
                                      Samsung SSD Deals
                                    </div>
                                  </div>
                                  <img
                                    alt="SSD"
                                    src="assets/img/mega-menu/electronics/11.png"
                                    width="252"
                                  />
                                  <div className="text-center mt-4">
                                    <Link
                                      className="btn btn-sm btn-primary stretched-link"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Shop now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropend position-static">
                          <div
                            className="position-relative rounded pb-2 px-lg-2"
                            data-bs-toggle="dropdown"
                            data-bs-trigger="hover"
                            tabIndex="0"
                          >
                            <Link
                              className="dropdown-item fw-medium stretched-link d-none d-lg-flex"
                              to="shop-catalog-electronics.html"
                            >
                              <i className="bi bi-controller fs-xl opacity-60 pe-1 me-2" />
                              <span className="text-truncate">Video Games</span>
                              <i className="bi bi-chevron-right fs-base ms-auto me-n1" />
                            </Link>
                            <div className="dropdown-item fw-medium stretched-link d-lg-none">
                              <i className="bi bi-controller fs-xl opacity-60 pe-1 me-2" />
                              Video Games
                              <i className="bi bi-chevron-down fs-base ms-auto me-n1" />
                            </div>
                          </div>
                          <div
                            className="dropdown-menu rounded-4 p-4"
                            style={{
                              "--cz-dropdown-spacer": ".3125rem",
                              animation: "none",
                              height: "calc(100% - .1875rem)",
                              top: "1rem",
                            }}
                          >
                            <div className="d-flex flex-column flex-lg-row h-100 gap-lg-4">
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <div className="d-flex w-100">
                                  <Link
                                    className="animate-underline animate-target d-inline h6 text-dark-emphasis text-decoration-none text-truncate"
                                    to="shop-catalog-electronics.html"
                                  >
                                    Games & Hardware
                                  </Link>
                                </div>
                                <ul className="nav flex-column gap-2 mt-n2">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Video Games
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      PlayStation 5
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      PlayStation 4
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Xbox Series X
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Xbox Series S
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Nintendo Switch
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Gaming PC
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Gaming Laptops
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Wii U
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Wii
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Nintendo 3DS
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Nintendo 2DS
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Nintendo DS
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Wii
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div
                                style={{
                                  minWidth: "194px",
                                }}
                              >
                                <ul className="nav flex-column gap-2 mt-2 mt-lg-0">
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Mac
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      PlayStation Vita
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Sony PSP
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Retro Gaming
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Microconsoles
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Controllers
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Accessories
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Digital Games Screens
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Game Pass
                                    </Link>
                                  </li>
                                  <li className="d-flex w-100 pt-1">
                                    <Link
                                      className="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      to="shop-catalog-electronics.html"
                                    >
                                      PlayStation Plus
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="d-none d-lg-block">
                                <div
                                  className="d-none d-xl-block"
                                  style={{
                                    width: "284px",
                                  }}
                                />
                                <div
                                  className="d-xl-none"
                                  style={{
                                    width: "240px",
                                  }}
                                />
                                <div className="position-relative d-flex flex-column justify-content-center h-100 bg-body-secondary rounded-5 py-4 px-3">
                                  <div className="text-center px-2">
                                    <span className="badge bg-danger bg-opacity-10 text-danger fs-sm rounded-pill mb-2">
                                      Save $100
                                    </span>
                                    <div className="fs-sm text-light-emphasis mb-2">
                                      Starts from <del>$599.00</del> $499.00
                                    </div>
                                    <div className="h2 mb-4">Xbox Series X</div>
                                  </div>
                                  <img
                                    alt="Xbox"
                                    src="assets/img/mega-menu/electronics/12.png"
                                    width="252"
                                  />
                                  <div className="text-center mt-4">
                                    <Link
                                      className="btn btn-sm btn-primary stretched-link"
                                      to="shop-catalog-electronics.html"
                                    >
                                      Shop now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 d-lg-flex pt-3 pt-lg-0 ps-lg-0">
                  <ul className="navbar-nav position-relative">
                
                   
                    <li className="nav-item me-lg-n2 me-xl-0">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                   
                    <li className="nav-item me-lg-n2 me-xl-0">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item me-lg-n2 me-xl-0">
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                   
                    <li className="nav-item me-lg-n2 me-xl-0">
                      <Link className="nav-link" to="/categories">
                        Categories
                      </Link>
                    </li>
                    <li className="nav-item me-lg-n2 me-xl-0">
                      <Link className="nav-link" to="/shop">
                        Shop
                      </Link>
                    </li>
                    
                    <li className="nav-item me-lg-n2 me-xl-0">
                      <Link className="nav-link" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    
                  </ul>
                  <hr className="d-lg-none my-3" />
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown me-lg-n2 me-xl-n1">
                      <Link
                        aria-expanded="false"
                        className="nav-link dropdown-toggle fs-sm px-3"
                        data-bs-toggle="dropdown"
                        data-bs-trigger="hover"
                        to="#!"
                        role="button"
                      >
                        Eng
                      </Link>
                      <ul
                        className="dropdown-menu fs-sm"
                        style={{
                          "--cz-dropdown-min-width": "7.5rem",
                          "--cz-dropdown-spacer": ".25rem",
                        }}
                      >
                        <li>
                          <Link className="dropdown-item" to="#!">
                            Français
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#!">
                            Deutsch
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#!">
                            Italiano
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown me-lg-n1">
                      <Link
                        aria-expanded="false"
                        className="nav-link dropdown-toggle fs-sm px-3"
                        data-bs-toggle="dropdown"
                        data-bs-trigger="hover"
                        to="#!"
                        role="button"
                      >
                        USD ($)
                      </Link>
                      <ul
                        className="dropdown-menu dropdown-menu-end fs-sm"
                        style={{
                          "--cz-dropdown-min-width": "7rem",
                          "--cz-dropdown-spacer": ".25rem",
                        }}
                      >
                        <li>
                          <Link className="dropdown-item" to="#!">
                            € EUR
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#!">
                            £ UKP
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#!">
                            ¥ JPY
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="offcanvas-header border-top px-0 py-3 mt-3 d-md-none">
            <div className="nav nav-justified w-100">
              <Link className="nav-link border-end" to="/account-signin">
                <i className="bi bi-person fs-lg opacity-60 me-2"></i>
                Account
              </Link>
              <Link className="nav-link" to="/account-wishlist">
                <i className="bi bi-heart fs-lg opacity-60 me-2"></i>
                Wishlist
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
