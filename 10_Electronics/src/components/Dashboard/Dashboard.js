import { Link } from "react-router-dom";

export const Dashboard = () => {
  const sales = [
    {
      title: "iPhone 15 pro mockups",
      date: "June 30, 2024",
      status: "Pending",
      statusClass: "info",
      image: "assets/img/account/products/03.jpg",
      tendered: "$19.00",
      earning: "$14.25",
    },
    {
      title: "A collection of colorful items",
      date: "June 29, 2024",
      status: "Completed",
      statusClass: "success",
      image: "assets/img/account/products/03.jpg",
      tendered: "$21.00",
      earning: "$15.75",
    },
    {
      title: "House plants website template",
      date: "June 28, 2024",
      status: "Completed",
      statusClass: "success",
      image: "assets/img/account/products/05.jpg",
      tendered: "$35.00",
      earning: "$26.25",
    },
    {
      title: "A stunning set of tablet pro mockups",
      date: "June 27, 2024",
      status: "Completed",
      statusClass: "success",
      image: "assets/img/account/products/07.jpg",
      tendered: "$18.00",
      earning: "$13.50",
    },
    {
      title: "Multi device mockup PSD",
      date: "June 26, 2024",
      status: "Canceled",
      statusClass: "danger",
      image: "assets/img/account/products/08.jpg",
      tendered: "$27.00",
      earning: "$0.00",
    },
  ];
  return (
    <main className="content-wrapper">
      <div className="container pt-4 pt-lg-5 pb-5">
        <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
          {/*   <!-- Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) --> */}
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
                    to="/account-marketplace-dashboard"
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill pe-none active"
                  >
                    <i className="bi-grid fs-base opacity-75 me-2"></i>
                    Dashboard
                  </Link>
                  <Link
                    to="/account-marketplace-products"
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                  >
                    <i className="bi-layers fs-base opacity-75 me-2"></i>
                    Products (4)
                  </Link>
                  <Link
                    to="/account-marketplace-sales"
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                  >
                    <i className="bi-pie-chart fs-base opacity-75 me-2"></i>
                    Sales
                  </Link>
                  <Link
                    to="/account-marketplace-payouts"
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                  >
                    <i className="bi bi-currency-dollar fs-base opacity-75 me-2"></i>
                    Payouts
                  </Link>
                </nav>

                <h6 className="pt-4 ps-2 ms-1">User account</h6>
                <nav className="list-group list-group-borderless">
                  <Link
                    to="/account-marketplace-purchases"
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                  >
                    <i className="bi bi-bag fs-base opacity-75 me-2"></i>
                    Purchases (6)
                  </Link>
                  <Link
                    to="/account-marketplace-favorites"
                    className="list-group-item list-group-item-action d-flex align-items-center rounded-pill"
                  >
                    <i className="bi-heart fs-base opacity-75 me-2"></i>
                    Favorites
                  </Link>
                  <Link
                    to="/account-marketplace-settings"
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
          {/* <!-- Dashboard content --> */}
          <div className="col-lg-9 pt-2 pt-xl-3">
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between gap-3 pb-3 mb-2 mb-md-3">
              <h1 className="h2 mb-0">Dashboard</h1>
              <div className="position-relative" style={{ width: "190px" }}>
                <i className="bi-calendar position-absolute top-50 start-0 translate-middle-y z-1 ms-3" />
                <select
                  className="form-select form-icon-start rounded-pill"
                  aria-label="Period select"
                >
                  <option>Current month</option>
                  <option>Last month</option>
                  <option>Last 3 months</option>
                  <option>Last 6 months</option>
                  <option>Last year</option>
                </select>
              </div>
            </div>

            {/* Stats */}
            {/* <div className="row g-3 g-xl-4 pb-3 mb-2 mb-sm-3">
              <StatCard
                title="Earnings (before taxes)"
                value="$842.00"
                subtitle="Sales 01/09/2024 - 13/09/2024"
                bg="success-subtle"
              />
              <StatCard
                title="Your balance"
                value="$735.00"
                subtitle="To be paid on 15/09/2024"
                bg="info-subtle"
              />
              <StatCard
                title="Lifetime earnings"
                value="$9,156.74"
                subtitle="Based on list price"
                bg="warning-subtle"
              />
            </div> */}

            {/* Earnings Chart (placeholder) */}
            <div className="pb-3 mb-2 mb-sm-3">
              <div className="border rounded-4 py-4 px-3 px-sm-4">
                <h2 className="h5 text-center text-sm-start mb-sm-4">
                  Earnings history
                </h2>
                <canvas id="earningsChart" height="120" />
              </div>
            </div>

            {/* Sales Table */}
            <div className="border rounded-4 py-4 px-3 px-sm-4">
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 mb-3 mb-md-4">
                <h2 className="h5 mb-0">Most recent sales</h2>
                <div
                  className="position-relative w-100"
                  style={{ maxWidth: "250px" }}
                >
                  <i className="bi-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                  <input
                    type="search"
                    className="form-control form-icon-start rounded-pill"
                    placeholder="Search"
                  />
                </div>
              </div>

              <table className="table align-middle fs-sm mb-0">
                <thead>
                  <tr>
                    <th className="ps-0">Product</th>
                    <th className="d-none d-md-table-cell">Date</th>
                    <th className="d-none d-md-table-cell">Status</th>
                    <th className="text-end d-none d-sm-table-cell">
                      Tendered
                    </th>
                    <th className="text-end pe-0">Earning</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.map((sale, index) => (
                    <tr key={index}>
                      <td className="py-3 ps-0">
                        <div className="d-flex align-items-start align-items-md-center position-relative">
                          <div
                            className="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0"
                            style={{ width: "66px" }}
                          >
                            <img
                              src={`${sale.image}`}
                              alt="Product"
                              className="hover-effect-target"
                              style={{position:"sticky"}}
                            />
                          </div>
                          <div className="ps-2 ms-1">
                            <span
                              className={`badge fs-xs text-${sale.statusClass} bg-${sale.statusClass}-subtle d-md-none mb-1`}
                            >
                              {sale.status}
                            </span>
                            <h6 className="mb-1 mb-md-0">
                              <Link className="fs-sm fw-medium" to="#">
                                {sale.title}
                              </Link>
                            </h6>
                            <div className="fs-body-emphasis d-sm-none mb-1">
                              {sale.tendered}
                            </div>
                            <div className="fs-body-emphasis d-md-none">
                              {sale.date}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        {sale.date}
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        <span
                          className={`badge fs-xs text-${sale.statusClass} bg-${sale.statusClass}-subtle rounded-pill`}
                        >
                          {sale.status}
                        </span>
                      </td>
                      <td className="text-end d-none d-sm-table-cell py-3">
                        {sale.tendered}
                      </td>
                      <td className="text-end py-3 pe-0">{sale.earning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="d-flex align-items-center justify-content-between pt-4 gap-3">
                <div className="fs-sm">
                  Showing <span className="fw-semibold">5</span> of{" "}
                  <span className="fw-semibold">20</span> results
                </div>
                <nav>
                  <ul className="pagination">
                    <li className="page-item active">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        4
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
