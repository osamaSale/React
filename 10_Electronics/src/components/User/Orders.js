import { Link } from "react-router-dom";
import { Header } from "./Header";

export const Orders = () => {
  return (
    <main className="content-wrapper">
      <div className="container py-5 mt-n2 mt-sm-0">
        <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
          <Header />
          <div className="col-lg-9">
            <div className="ps-lg-3 ps-xl-0">
              <div className="row align-items-center pb-3 pb-md-4 mb-md-1 mb-lg-2">
                <div className="col-md-4 col-xl-6 mb-3 mb-md-0">
                  <h1 className="h2 me-3 mb-0">Orders</h1>
                </div>
                <div className="col-md-8 col-xl-6">
                  <div className="row row-cols-1 row-cols-sm-2 g-3 g-xxl-4">
                    <div className="col">
                      <select
                        aria-label="Status sorting"
                        className="form-select"
                        data-select-template="true"
                      >
                        <option value="all-time">Select status</option>
                        <option value="In progress" className="d-flex align-items-center text-nowrap">
                           In progress
                        </option>
                        <option value=" Delivered">
                           Delivered
                        </option>
                        <option value=" Canceled">
                          Canceled
                        </option>
                        <option value=" Delayed">
                          Delayed
                        </option>
                      </select>
                    </div>
                    <div className="col">
                      <select
                        aria-label="Timeframe sorting"
                        className="form-select"
                        data-select='{"removeItemButton": false}'
                      >
                        <option value="all-time">For all time</option>
                        <option value="last-year">For last year</option>
                        <option value="last-3-months">For last 3 months</option>
                        <option value="last-30-days">For last 30 days</option>
                        <option value="last-week">For last week</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div data-filter-list='{"listClass": "orders-list", "sortClass": "orders-sort", "valueNames": ["date", "total"]}'>
                <table className="table align-middle fs-sm text-nowrap">
                  <thead>
                    <tr>
                      <th className="py-3 ps-0" scope="col">
                        <span className="text-body fw-normal">
                          Order <span className="d-none d-md-inline">#</span>
                        </span>
                      </th>
                      <th className="py-3 d-none d-md-table-cell" scope="col">
                        <button
                          className="btn orders-sort fw-normal text-body p-0"
                          data-sort="date"
                          type="button"
                        >
                          Order date
                        </button>
                      </th>
                      <th className="py-3 d-none d-md-table-cell" scope="col">
                        <span className="text-body fw-normal">Status</span>
                      </th>
                      <th className="py-3 d-none d-md-table-cell" scope="col">
                        <button
                          className="btn orders-sort fw-normal text-body p-0"
                          data-sort="total"
                          type="button"
                        >
                          Total
                        </button>
                      </th>
                      <th className="py-3" scope="col"></th>
                    </tr>
                  </thead>
                  <tbody className="text-body-emphasis orders-list">
                    <tr>
                      <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                        <Link
                          aria-controls="orderDetails"
                          aria-label="Show order details"
                          className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2"
                          data-bs-toggle="offcanvas"
                          to="#orderDetails"
                        >
                          <span className="animate-target">78A6431D409</span>
                        </Link>
                        <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                          <li>Feb 6, 2025</li>
                          <li className="d-flex align-items-center">
                            <span className="bg-info rounded-circle p-1 me-2" />
                            In progress
                          </li>
                          <li className="fw-medium text-body-emphasis">
                            $2,105.90
                          </li>
                        </ul>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        Feb 6, 2025
                        <span className="date d-none">25-02-06</span>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        <span className="d-flex align-items-center">
                          <span className="bg-info rounded-circle p-1 me-2" />
                          In progress
                        </span>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        $2,105.90
                        <span className="total d-none">210590</span>
                      </td>
                      <td className="py-3 pe-0">
                        <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                          <span>
                            <img
                              alt="Thumbnail"
                              src="assets/img/shop/electronics/thumbs/20.png"
                              width="64"
                            />
                          </span>
                          <span>
                            <img
                              alt="Thumbnail"
                              src="assets/img/shop/electronics/thumbs/16.png"
                              width="64"
                            />
                          </span>
                          <span>
                            <img
                              alt="Thumbnail"
                              src="assets/img/shop/electronics/thumbs/15.png"
                              width="64"
                            />
                          </span>
                          <Link
                            aria-controls="orderDetails"
                            aria-label="Show order details"
                            className="btn btn-icon btn-ghost btn-secondary stretched-link border-0"
                            data-bs-toggle="offcanvas"
                            to="#orderDetails"
                          >
                            <i className="bi bi-chevron-right fs-lg" />
                          </Link>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                        <Link
                          aria-controls="orderDetails"
                          aria-label="Show order details"
                          className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2"
                          data-bs-toggle="offcanvas"
                          to="#orderDetails"
                        >
                          <span className="animate-target">47H76G09F33</span>
                        </Link>
                        <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                          <li>Dec 12, 2024</li>
                          <li className="d-flex align-items-center">
                            <span className="bg-success rounded-circle p-1 me-2" />
                            Delivered
                          </li>
                          <li className="fw-medium text-body-emphasis">
                            $360.75
                          </li>
                        </ul>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        Dec 12, 2024
                        <span className="date d-none">24-12-12</span>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        <span className="d-flex align-items-center">
                          <span className="bg-success rounded-circle p-1 me-2" />
                          Delivered
                        </span>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        $360.75
                        <span className="total d-none">36075</span>
                      </td>
                      <td className="py-3 pe-0">
                        <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                          <span>
                            <img
                              alt="Thumbnail"
                              src="assets/img/shop/electronics/thumbs/14.png"
                              width="64"
                            />
                          </span>
                          <Link
                            aria-controls="orderDetails"
                            aria-label="Show order details"
                            className="btn btn-icon btn-ghost btn-secondary stretched-link border-0"
                            data-bs-toggle="offcanvas"
                            to="#orderDetails"
                          >
                            <i className="bi bi-chevron-right fs-lg" />
                          </Link>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                        <Link
                          aria-controls="orderDetails"
                          aria-label="Show order details"
                          className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2"
                          data-bs-toggle="offcanvas"
                          to="#orderDetails"
                        >
                          <span className="animate-target">502TR872W2</span>
                        </Link>
                        <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                          <li>Nov 7, 2024</li>
                          <li className="d-flex align-items-center">
                            <span className="bg-success rounded-circle p-1 me-2" />
                            Delivered
                          </li>
                          <li className="fw-medium text-body-emphasis">
                            $4,268.00
                          </li>
                        </ul>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        Nov 7, 2024
                        <span className="date d-none">24-11-07</span>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        <span className="d-flex align-items-center">
                          <span className="bg-success rounded-circle p-1 me-2" />
                          Delivered
                        </span>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        $4,268.00
                        <span className="total d-none">426800</span>
                      </td>
                      <td className="py-3 pe-0">
                        <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                          <span>
                            <img
                              alt="Thumbnail"
                              src="assets/img/shop/electronics/thumbs/12.png"
                              width="64"
                            />
                          </span>
                          <span>
                            <img
                              alt="Thumbnail"
                              src="assets/img/shop/electronics/thumbs/13.png"
                              width="64"
                            />
                          </span>
                          <span>
                            <img
                              alt="Thumbnail"
                              src="assets/img/shop/electronics/thumbs/18.png"
                              width="64"
                            />
                          </span>
                          <span className="fw-medium me-1">+3</span>
                          <Link
                            aria-controls="orderDetails"
                            aria-label="Show order details"
                            className="btn btn-icon btn-ghost btn-secondary stretched-link border-0"
                            data-bs-toggle="offcanvas"
                            to="#orderDetails"
                          >
                            <i className="bi bi-chevron-right fs-lg" />
                          </Link>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                        <Link
                          aria-controls="orderDetails"
                          aria-label="Show order details"
                          className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2"
                          data-bs-toggle="offcanvas"
                          to="#orderDetails"
                        >
                          <span className="animate-target">34VB5540K83</span>
                        </Link>
                        <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                          <li>Sep 15, 2024</li>
                          <li className="d-flex align-items-center">
                            <span className="bg-danger rounded-circle p-1 me-2" />
                            Canceled
                          </li>
                          <li className="fw-medium text-body-emphasis">
                            $987.50
                          </li>
                        </ul>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        Sep 15, 2024
                        <span className="date d-none">24-09-15</span>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        <span className="d-flex align-items-center">
                          <span className="bg-danger rounded-circle p-1 me-2" />
                          Canceled
                        </span>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        $987.50
                        <span className="total d-none">98750</span>
                      </td>
                      <td className="py-3 pe-0">
                        <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                          <span>
                            <img
                              alt="Thumbnail"
                              src="assets/img/shop/electronics/thumbs/21.png"
                              width="64"
                            />
                          </span>
                          <span>
                            <img
                              alt="Thumbnail"
                              src="assets/img/shop/electronics/thumbs/11.png"
                              width="64"
                            />
                          </span>
                          <Link
                            aria-controls="orderDetails"
                            aria-label="Show order details"
                            className="btn btn-icon btn-ghost btn-secondary stretched-link border-0"
                            data-bs-toggle="offcanvas"
                            to="#orderDetails"
                          >
                            <i className="bi bi-chevron-right fs-lg" />
                          </Link>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                        <Link
                          aria-controls="orderDetails"
                          aria-label="Show order details"
                          className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2"
                          data-bs-toggle="offcanvas"
                          to="#orderDetails"
                        >
                          <span className="animate-target">112P45A90V2</span>
                        </Link>
                        <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                          <li>May 12, 2024</li>
                          <li className="d-flex align-items-center">
                            <span className="bg-success rounded-circle p-1 me-2" />
                            Delivered
                          </li>
                          <li className="fw-medium text-body-emphasis">
                            $53.00
                          </li>
                        </ul>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        May 12, 2024
                        <span className="date d-none">24-05-12</span>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        <span className="d-flex align-items-center">
                          <span className="bg-success rounded-circle p-1 me-2" />
                          Delivered
                        </span>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        $53.00
                        <span className="total d-none">5300</span>
                      </td>
                      <td className="py-3 pe-0">
                        <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                          <span>
                            <img
                              alt="Thumbnail"
                              src="assets/img/shop/electronics/thumbs/17.png"
                              width="64"
                            />
                          </span>
                          <Link
                            aria-controls="orderDetails"
                            aria-label="Show order details"
                            className="btn btn-icon btn-ghost btn-secondary stretched-link border-0"
                            data-bs-toggle="offcanvas"
                            to="#orderDetails"
                          >
                            <i className="bi bi-chevron-right fs-lg" />
                          </Link>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                        <Link
                          aria-controls="orderDetails"
                          aria-label="Show order details"
                          className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2"
                          data-bs-toggle="offcanvas"
                          to="#orderDetails"
                        >
                          <span className="animate-target">28BA67U0981</span>
                        </Link>
                        <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                          <li>Apr 20, 2024</li>
                          <li className="d-flex align-items-center">
                            <span className="bg-danger rounded-circle p-1 me-2" />
                            Canceled
                          </li>
                          <li className="fw-medium text-body-emphasis">
                            $1,029.50
                          </li>
                        </ul>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        Apr 20, 2024
                        <span className="date d-none">24-04-20</span>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        <span className="d-flex align-items-center">
                          <span className="bg-danger rounded-circle p-1 me-2" />
                          Canceled
                        </span>
                      </td>
                      <td className="fw-medium py-3 d-none d-md-table-cell">
                        $1,029.50
                        <span className="total d-none">102950</span>
                      </td>
                      <td className="py-3 pe-0">
                        <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                          <span>
                            <img
                              alt="Thumbnail"
                              src="assets/img/shop/electronics/thumbs/19.png"
                              width="64"
                            />
                          </span>
                          <span>
                            <img
                              alt="Thumbnail"
                              src="assets/img/shop/electronics/thumbs/22.png"
                              width="64"
                            />
                          </span>
                          <Link
                            aria-controls="orderDetails"
                            aria-label="Show order details"
                            className="btn btn-icon btn-ghost btn-secondary stretched-link border-0"
                            data-bs-toggle="offcanvas"
                            to="#orderDetails"
                          >
                            <i className="bi bi-chevron-right fs-lg" />
                          </Link>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <nav
                aria-label="Page navigation example"
                className="pt-3 pb-2 pb-sm-0 mt-2 mt-md-3"
              >
                <ul className="pagination">
                  <li aria-current="page" className="page-item active">
                    <span className="page-link">
                      1<span className="visually-hidden">(current)</span>
                    </span>
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
    </main>
  );
};
