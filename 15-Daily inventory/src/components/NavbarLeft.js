import { Link } from "react-router-dom";

export const NavbarLeft = () => {
  return (
    <>
      <nav className="navbar-vertical-nav d-none d-xl-block">
        <div className="navbar-vertical border-end">
          <div className="px-6 py-5">
            <Link className="navbar-brand">
              <img src="../assets/images/logo/freshcart-logo.svg" alt="" />
            </Link>
          </div>
          <div
            className="navbar-vertical-content flex-grow-1 mt-4"
            data-simplebar=""
          >
            <ul className="navbar-nav flex-column" id="sideNavbar">
              <li className="nav-item ">
                <Link className="nav-link active" to="/">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-house"></i>
                    </span>
                    <span className="nav-link-text">Dashboard</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item mt-6 mb-3">
                <span className="nav-label">Store Managements</span>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <i className="bi bi-cart"></i>
                    </span>
                    <span className="nav-link-text">Products</span>
                  </div>
                </Link>
              </li>
           
            </ul>
          </div>
        </div>
      </nav>

      <nav
        className="navbar-vertical-nav offcanvas offcanvas-start navbar-offcanvac"
        tabIndex="-1"
        id="offcanvasExample"
      >
        <div className="navbar-vertical">
          <div className="px-4 py-5 d-flex justify-content-between align-items-center">
            <Link to="../index.html" className="navbar-brand">
              <img src="../assets/images/logo/freshcart-logo.svg" alt="" />
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="navbar-vertical-content flex-grow-1"
            data-simplebar=""
          >
            <ul className="navbar-nav flex-column">
              <li className="nav-item ">
                <Link
                  className="nav-link  active "
                  to="../dashboard/index.html"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      {" "}
                      <i className="bi bi-house"></i>
                    </span>
                    <span>Dashboard</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item mt-6 mb-3">
                <span className="nav-label">Store Managements</span>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="./Products.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      {" "}
                      <i className="bi bi-cart"></i>
                    </span>
                    <span className="nav-link-text">Products</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="../dashboard/categories.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      {" "}
                      <i className="bi bi-list-task"></i>
                    </span>
                    <span className="nav-link-text">Categories</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link   collapsed "
                  to="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#navOrders"
                  aria-expanded="false"
                  aria-controls="navOrders"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      {" "}
                      <i className="bi bi-bag"></i>
                    </span>
                    <span className="nav-link-text">Orders</span>
                  </div>
                </Link>
                <div
                  id="navOrders"
                  className="collapse "
                  data-bs-parent="#sideNavbar"
                >
                  <ul className="nav flex-column">
                    <li className="nav-item ">
                      <Link
                        className="nav-link "
                        to="../dashboard/order-list.html"
                      >
                        List
                      </Link>
                    </li>

                    <li className="nav-item ">
                      <Link
                        className="nav-link "
                        to="../dashboard/order-single.html"
                      >
                        Single
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="../dashboard/vendor-grid.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      {" "}
                      <i className="bi bi-shop"></i>
                    </span>
                    <span className="nav-link-text">Sellers / Vendors</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="../dashboard/customers.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      {" "}
                      <i className="bi bi-people"></i>
                    </span>
                    <span className="nav-link-text">Customers</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="../dashboard/reviews.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      {" "}
                      <i className="bi bi-star"></i>
                    </span>
                    <span className="nav-link-text">Reviews</span>
                  </div>
                </Link>
              </li>

              <li className="nav-item mt-6 mb-3">
                <span className="nav-label">Our Apps</span>
              </li>
              <li className="nav-item ">
                <Link className="nav-link disabled" to="#!">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      {" "}
                      <i className="bi bi-apple"></i>
                    </span>
                    <span className="nav-link-text">Apple Store</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link disabled" to="#!">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      {" "}
                      <i className="bi bi-google-play"></i>
                    </span>
                    <span className="nav-link-text">Google Play Store</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
