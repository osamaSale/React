import { Link } from "react-router-dom";
import { Header } from "./Header";

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
        <Header/>
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
            <div className="row g-3 g-xl-4 pb-3 mb-2 mb-sm-3">
              <div className="col-md-4 col-sm-6">
                <div className="h-100 bg-success-subtle rounded-4 text-center p-4">
                  <h2 className="fs-sm pb-2 mb-1">Earnings (before taxes)</h2>
                  <div className="h2 pb-1 mb-2">$842.00</div>
                  <p className="fs-sm text-body-secondary mb-0">
                    Sales 01/09/2024 - 13/09/2024
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="h-100 bg-info-subtle rounded-4 text-center p-4">
                  <h2 className="fs-sm pb-2 mb-1">Your balance</h2>
                  <div className="h2 pb-1 mb-2">$735.00</div>
                  <p className="fs-sm text-body-secondary mb-0">
                    To be paid on 15/09/2024
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="h-100 bg-warning-subtle rounded-4 text-center p-4">
                  <h2 className="fs-sm pb-2 mb-1">Lifetime earnings</h2>
                  <div className="h2 pb-1 mb-2">$9,156.74</div>
                  <p className="fs-sm text-body-secondary mb-0">
                    Based on list price
                  </p>
                </div>
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
                              style={{ position: "sticky" }}
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
