import { Link } from "react-router-dom";
import { Header } from "./Header";

export const Products = () => {
  return (
    <main className="content-wrapper">
      <div className="container pt-4 pt-lg-5 pb-5">
        <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
          <Header />
          <div className="col-lg-9 pt-2 pt-xl-3">
            <div data-filter-list='{"searchClass": "product-search", "listClass": "product-list", "sortClass": "product-sort", "valueNames": ["product", "status", "sales", "earnings"]}'>
              <div className="d-sm-flex align-items-center justify-content-between gap-3 pb-2 pb-sm-3 mb-md-2">
                <h1 className="h2 text-nowrap mb-sm-0">Products (4)</h1>
                <div
                  className="position-relative w-100"
                  style={{
                    maxWidth: "300px",
                  }}
                >
                  <i className="bi-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                  <input
                    className="product-search form-control form-icon-start rounded-pill"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
              <table className="table align-middle fs-sm mb-0">
                <thead>
                  <tr>
                    <th className="ps-0" scope="col">
                      <span className="fw-normal text-body">Product</span>
                    </th>
                    <th className="d-none d-md-table-cell" scope="col">
                      <span className="fw-normal text-body">Status</span>
                    </th>
                    <th className="text-end d-none d-md-table-cell" scope="col">
                      <button
                        className="btn fw-normal text-body product-sort p-0 me-n2"
                        data-sort="sales"
                        type="button"
                      >
                        Sales
                      </button>
                    </th>
                    <th className="text-end d-none d-sm-table-cell" scope="col">
                      <button
                        className="btn fw-normal text-body product-sort p-0 me-n2"
                        data-sort="earnings"
                        type="button"
                      >
                        Earnings
                      </button>
                    </th>
                    <th className="text-end ps-0 ps-sm-3 pe-0" scope="col">
                      <span className="fw-normal text-body">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="product-list">
                  <tr>
                    <td className="py-3 ps-0">
                      <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                        <div
                          className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0"
                          style={{
                            "--cz-aspect-ratio": "calc(110 / 142 * 100%)",
                            maxWidth: "142px",
                          }}
                        >
                          <img
                            alt=""
                            className="hover-effect-target"
                            src="assets/img/account/products/09.jpg"
                          />
                        </div>
                        <div className="ps-2 ps-sm-3 ms-1">
                          <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">
                            Active
                          </span>
                          <h6 className="product mb-2">
                            <Link
                              className="fs-sm fw-medium hover-effect-underline stretched-link"
                              to="shop-product-marketplace.html"
                            >
                              iPhone 15 pro mockups
                            </Link>
                          </h6>
                          <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
                            <div className="h6 mb-0 me-1 me-md-0">$19</div>
                            <div className="d-flex gap-2">
                              <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                <i className="bi-heart text-body-secondary me-1" />
                                13
                              </div>
                              <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                <i className="bi-message-circle text-body-secondary me-1" />
                                4
                              </div>
                            </div>
                          </div>
                          <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
                            <span className="text-body-secondary">Sales:</span>{" "}
                            47
                          </div>
                          <div className="fs-xs text-nowrap d-sm-none">
                            <span className="text-body-secondary">
                              Earnings:
                            </span>{" "}
                            $669.75
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell py-3">
                      <span className="status badge fs-xs text-success bg-success-subtle rounded-pill">
                        Active
                      </span>
                    </td>
                    <td className="sales d-none d-md-table-cell text-end py-3">
                      47
                    </td>
                    <td className="text-end d-none d-sm-table-cell py-3">
                      $669.75
                      <span className="earnings visually-hidden">66975</span>
                    </td>
                    <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
                      <div className="dropdown">
                        <button
                          aria-expanded="false"
                          aria-label="Settings"
                          className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle"
                          data-bs-toggle="dropdown"
                          type="button"
                        >
                          <i className="bi bi-three-dots-vertical fs-base" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <Link className="dropdown-item" to="#!">
                              <i className="bi-edit opacity-75 me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#!">
                              <i className="bi-zap fs-base opacity-75 me-2" />
                              Promote
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#!">
                              <i className="bi-archive opacity-75 me-2" />
                              Move to archive
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item text-danger" to="#!">
                              <i className="bi-trash opacity-75 me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 ps-0">
                      <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                        <div
                          className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0"
                          style={{
                            "--cz-aspect-ratio": "calc(110 / 142 * 100%)",
                            maxWidth: "142px",
                          }}
                        >
                          <img
                            alt=""
                            className="hover-effect-target"
                            src="assets/img/account/products/10.jpg"
                          />
                        </div>
                        <div className="ps-2 ps-sm-3 ms-1">
                          <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">
                            Active
                          </span>
                          <h6 className="product mb-2">
                            <Link
                              className="fs-sm fw-medium hover-effect-underline stretched-link"
                              to="shop-product-marketplace.html"
                            >
                              3D box mockup bold rebrand
                            </Link>
                          </h6>
                          <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
                            <div className="h6 mb-0 me-1 me-md-0">$16</div>
                            <div className="d-flex gap-2">
                              <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                <i className="bi-heart text-body-secondary me-1" />
                                25
                              </div>
                              <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                <i className="bi-message-circle text-body-secondary me-1" />
                                2
                              </div>
                            </div>
                          </div>
                          <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
                            <span className="text-body-secondary">Sales:</span>{" "}
                            56
                          </div>
                          <div className="fs-xs text-nowrap d-sm-none">
                            <span className="text-body-secondary">
                              Earnings:
                            </span>{" "}
                            $672.00
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell py-3">
                      <span className="status badge fs-xs text-success bg-success-subtle rounded-pill">
                        Active
                      </span>
                    </td>
                    <td className="sales d-none d-md-table-cell text-end py-3">
                      56
                    </td>
                    <td className="text-end d-none d-sm-table-cell py-3">
                      $672.00
                      <span className="earnings visually-hidden">67200</span>
                    </td>
                    <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
                      <div className="dropdown">
                        <button
                          aria-expanded="false"
                          aria-label="Settings"
                          className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle"
                          data-bs-toggle="dropdown"
                          type="button"
                        >
                          <i className="bi bi-three-dots-vertical fs-base" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <Link className="dropdown-item" to="#!">
                              <i className="bi-edit opacity-75 me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#!">
                              <i className="bi-zap fs-base opacity-75 me-2" />
                              Promote
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#!">
                              <i className="bi-archive opacity-75 me-2" />
                              Move to archive
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item text-danger" to="#!">
                              <i className="bi-trash opacity-75 me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 ps-0">
                      <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                        <div
                          className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0"
                          style={{
                            "--cz-aspect-ratio": "calc(110 / 142 * 100%)",
                            maxWidth: "142px",
                          }}
                        >
                          <img
                            alt=""
                            className="hover-effect-target"
                            src="assets/img/account/products/11.jpg"
                          />
                        </div>
                        <div className="ps-2 ps-sm-3 ms-1">
                          <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">
                            Active
                          </span>
                          <h6 className="product mb-2">
                            <Link
                              className="fs-sm fw-medium hover-effect-underline stretched-link"
                              to="shop-product-marketplace.html"
                            >
                              Smartphone mockups for UI designs
                            </Link>
                          </h6>
                          <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
                            <div className="h6 mb-0 me-1 me-md-0">$18</div>
                            <div className="d-flex gap-2">
                              <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                <i className="bi-heart text-body-secondary me-1" />
                                36
                              </div>
                              <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                <i className="bi-message-circle text-body-secondary me-1" />
                                8
                              </div>
                            </div>
                          </div>
                          <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
                            <span className="text-body-secondary">Sales:</span>{" "}
                            152
                          </div>
                          <div className="fs-xs text-nowrap d-sm-none">
                            <span className="text-body-secondary">
                              Earnings:
                            </span>{" "}
                            $2,052.00
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell py-3">
                      <span className="status badge fs-xs text-success bg-success-subtle rounded-pill">
                        Active
                      </span>
                    </td>
                    <td className="sales d-none d-md-table-cell text-end py-3">
                      152
                    </td>
                    <td className="text-end d-none d-sm-table-cell py-3">
                      $2,052.00
                      <span className="earnings visually-hidden">205200</span>
                    </td>
                    <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
                      <div className="dropdown">
                        <button
                          aria-expanded="false"
                          aria-label="Settings"
                          className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle"
                          data-bs-toggle="dropdown"
                          type="button"
                        >
                          <i className="bi bi-three-dots-vertical fs-base" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <Link className="dropdown-item" to="#!">
                              <i className="bi-edit opacity-75 me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#!">
                              <i className="bi-zap fs-base opacity-75 me-2" />
                              Promote
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#!">
                              <i className="bi-archive opacity-75 me-2" />
                              Move to archive
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item text-danger" to="#!">
                              <i className="bi-trash opacity-75 me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 ps-0">
                      <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                        <div
                          className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0"
                          style={{
                            "--cz-aspect-ratio": "calc(110 / 142 * 100%)",
                            maxWidth: "142px",
                          }}
                        >
                          <img
                            alt=""
                            className="hover-effect-target"
                            src="assets/img/account/products/12.jpg"
                          />
                        </div>
                        <div className="ps-2 ps-sm-3 ms-1">
                          <span className="badge fs-xs text-warning bg-warning-subtle rounded-pill d-md-none mb-1">
                            Archived
                          </span>
                          <h6 className="product mb-2">
                            <Link
                              className="fs-sm fw-medium hover-effect-underline stretched-link"
                              to="shop-product-marketplace.html"
                            >
                              Multi device mockup PSD
                            </Link>
                          </h6>
                          <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
                            <div className="h6 mb-0 me-1 me-md-0">$27</div>
                            <div className="d-flex gap-2">
                              <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                <i className="bi-heart text-body-secondary me-1" />
                                9
                              </div>
                              <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                <i className="bi-message-circle text-body-secondary me-1" />
                                12
                              </div>
                            </div>
                          </div>
                          <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
                            <span className="text-body-secondary">Sales:</span>{" "}
                            43
                          </div>
                          <div className="fs-xs text-nowrap d-sm-none">
                            <span className="text-body-secondary">
                              Earnings:
                            </span>{" "}
                            $870.75
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell py-3">
                      <span className="status badge fs-xs text-warning bg-warning-subtle rounded-pill">
                        Archived
                      </span>
                    </td>
                    <td className="sales d-none d-md-table-cell text-end py-3">
                      43
                    </td>
                    <td className="text-end d-none d-sm-table-cell py-3">
                      $870.75
                      <span className="earnings visually-hidden">87075</span>
                    </td>
                    <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
                      <div className="dropdown">
                        <button
                          aria-expanded="false"
                          aria-label="Settings"
                          className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle"
                          data-bs-toggle="dropdown"
                          type="button"
                        >
                          <i className="bi bi-three-dots-vertical fs-base" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <Link className="dropdown-item" to="#!">
                              <i className="bi-edit opacity-75 me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#!">
                              <i className="bi-zap fs-base opacity-75 me-2" />
                              Promote
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#!">
                              <i className="bi-archive opacity-75 me-2" />
                              Move to archive
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item text-danger" to="#!">
                              <i className="bi-trash opacity-75 me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
