import { Link } from "react-router-dom";
import { Header } from "./Header";

export const Purchases = () => {
  const purchases = [
    {
      id: 1,
      title: "Smart watches series 9 mockup",
      author: "MD Studio",
      avatar: "assets/img/shop/marketplace/avatars/03.png",
      image: "assets/img/account/products/13.jpg",
      category: "Mockups",
      license: "Standard",
      date: "July 28, 2024",
      timestamp: 1722164400,
    },
    {
      id: 2,
      title: "Gradient glassmorphism icons set",
      author: "Magic FS",
      avatar: "assets/img/shop/marketplace/avatars/02.png",
      image: "assets/img/account/products/14.jpg",
      category: "Vectors",
      license: "Standard",
      date: "July 5, 2024",
      timestamp: 1720177200,
    },
    // Add the remaining 4 items here following the same structure...
  ];
  return (
    <main className="content-wrapper">
      <div className="container pt-4 pt-lg-5 pb-5">
        <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
         <Header/>
          <div className="col-lg-9 pt-2 pt-xl-3">
            <div>
              <div className="d-sm-flex align-items-center justify-content-between gap-3 pb-2 pb-sm-3 mb-md-2">
                <h1 className="h2 text-nowrap mb-sm-0">
                  Purchases ({purchases.length})
                </h1>
                <div
                  className="position-relative w-100"
                  style={{ maxWidth: 300 }}
                >
                  <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                  <input
                    type="search"
                    className="product-search form-control form-icon-start rounded-pill"
                    placeholder="Search"
                  />
                </div>
              </div>
              <table className="table align-middle fs-sm mb-0">
                <thead>
                  <tr>
                    <th className="px-0 pe-sm-2">Product</th>
                    <th className="d-none d-md-table-cell">
                      <button
                        className="btn fw-normal text-body product-sort p-0"
                        data-sort="date"
                      >
                        Purchase date
                      </button>
                    </th>
                    <th className="d-none d-md-table-cell">License</th>
                    <th className="d-none d-sm-table-cell pe-0" />
                  </tr>
                </thead>
                <tbody className="product-list">
                  {purchases.map((item) => (
                    <tr key={item.id}>
                      <td className="py-3 px-0 pe-sm-2">
                        <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                          <div
                            className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0"
                            style={{ maxWidth: 142 }}
                          >
                            <img
                              src={item.image}
                              className="hover-effect-target"
                              style={{position:"inherit"}}
                              alt="Product"
                            />
                          </div>
                          <div className="ps-2 ps-sm-3 ms-1">
                            <h6 className="product mb-2">
                              <Link
                                className="fs-sm fw-medium hover-effect-underline stretched-link"
                                to="#"
                              >
                                {item.title}
                              </Link>
                            </h6>
                            <div className="d-flex align-items-center flex-wrap gap-1 fs-xs">
                              <div className="author d-flex align-items-center fs-xs fw-medium text-body gap-1 p-0">
                                <div
                                  className="flex-shrink-0 border rounded-bi bircle"
                                  style={{ width: 22 }}
                                >
                                  <div className="ratio ratio-1x1 rounded-bi bircle overflow-hidden">
                                    <img src={item.avatar} alt="Avatar" style={{top:0}}/>
                                  </div>
                                </div>
                                {item.author}
                              </div>
                              <div className="text-body-secondary">in</div>
                              <div className="category fs-xs fw-medium text-body">
                                {item.category}
                              </div>
                            </div>
                            <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
                              <span className="text-body-secondary">
                                License:
                              </span>{" "}
                              <span className="license">{item.license}</span>
                            </div>
                            <div className="fs-xs text-nowrap d-md-none">
                              <span className="text-body-secondary">Date:</span>{" "}
                              {item.date}
                            </div>
                            <button
                              type="button"
                              className="btn btn-sm btn-secondary rounded-pill animate-scale position-relative z-2 d-sm-none mt-3"
                            >
                              <i className="bi bi-cloud-download animate-target fs-sm ms-n1 me-1" />
                              Download
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        {item.date}
                        <span className="date visually-hidden">
                          {item.timestamp}
                        </span>
                      </td>
                      <td className="d-none d-md-table-cell py-3">
                        {item.license}
                      </td>
                      <td
                        className="d-none d-sm-table-cell text-end py-3 ps-0 ps-sm-3 pe-0"
                        style={{ width: 120 }}
                      >
                        <button
                          type="button"
                          className="btn btn-sm btn-secondary rounded-pill animate-scale"
                        >
                          <i className="bi bi-cloud-download animate-target fs-sm ms-n1 me-1" />
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
