import { Link } from "react-router-dom"

export const Header = ()=>{
    return (
        <aside className="col-lg-3">
            <div
              className="d-none d-lg-block"
              style={{ marginTop: "-105px" }}
            ></div>
            <div
              className="offcanvas-lg offcanvas-start sticky-lg-top pe-lg-0 pe-xl-4"
              id="accountSidebar"
            >
              <div
                className="d-none d-lg-block"
                style={{ paddingTop: "105px" }}
              ></div>

              {/* Header */}
              <div className="offcanvas-header align-items-start d-lg-block py-3 p-lg-0">
                <div className="d-flex align-items-start flex-lg-column gap-lg-3">
                  {/* Avatar for large screens */}
                  <div
                    className="ratio ratio-1x1 border rounded-circle overflow-hidden d-none d-lg-block"
                    style={{ width: "86px" }}
                  >
                    <img src="/assets/img/account/avatar.png" alt="Avatar" />
                  </div>
                  {/* Avatar for small screens */}
                  <div
                    className="ratio ratio-1x1 border rounded-circle overflow-hidden flex-shrink-0 d-lg-none"
                    style={{ width: "48px" }}
                  >
                    <img src="/assets/img/account/avatar.png" alt="Avatar" />
                  </div>
                  <div className="w-100 ps-2 ms-1 ms-lg-0 ps-lg-0">
                    <h4 className="h6 mb-1 mb-lg-2">Createx Studio</h4>
                    <p className="fs-sm mb-0">
                      Digital products &amp; bespoke development
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close d-lg-none mt-n2"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#accountSidebar"
                  aria-label="Close"
                ></button>
              </div>

              {/* Body */}
              <div className="offcanvas-body d-block pt-2 pt-lg-4 pb-lg-0">
                <nav className="list-group list-group-borderless">
                  <Link
                    to="/dashboard"
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill pe-none active"
                  >
                    <i className="bi-grid fs-base opacity-75 me-2"></i>
                    Dashboard
                  </Link>
                  <Link
                    to="/products"
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                  >
                    <i className="bi-layers fs-base opacity-75 me-2"></i>
                    Products
                  </Link>
                  <Link
                    to="/sales"
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                  >
                    <i className="bi-pie-chart fs-base opacity-75 me-2"></i>
                    Sales
                  </Link>
                  <Link
                    to="/payouts"
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                  >
                    <i className="bi bi-currency-dollar fs-base opacity-75 me-2"></i>
                    Payouts
                  </Link>
                </nav>

                <h6 className="pt-4 ps-2 ms-1">User account</h6>
                <nav className="list-group list-group-borderless">
                  <Link
                    to="/purchases"
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                  >
                    <i className="bi bi-bag fs-base opacity-75 me-2"></i>
                    Purchases (6)
                  </Link>
                  <Link
                    to="/favorites"
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                  >
                    <i className="bi-heart fs-base opacity-75 me-2"></i>
                    Favorites
                  </Link>
                  <Link
                    to="/settings"
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                  >
                    <i className="bi bi-gear fs-base opacity-75 me-2"></i>
                    Settings
                  </Link>
                  <Link
                    to="/account-signin"
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                  >
                    <i className="bi bi-box-arrow-right fs-base opacity-75 me-2"></i>
                    Log out
                  </Link>
                </nav>
              </div>

              {/* CTA */}
              <div className="offcanvas-header d-lg-block p-lg-0">
                <button className="btn btn-dark rounded-pill w-100 animate-scale mt-lg-4">
                  <i className="bi-plus-circle fs-base animate-target me-2 ms-n1"></i>
                  Add product
                </button>
              </div>
            </div>
          </aside>
    )
}