import { useState } from "react";
import { Link } from "react-router-dom";

export const Categories = () => {
  const categories = [
    "All products",
    "Vectors",
    "Mockups",
    "Photos",
    "3D",
    "AI images",
    "Templates",
  ];
  const formats = [
    "All",
    "Figma",
    "Framer",
    "Illustrator",
    "Webflow",
    "Photoshop",
  ];
  const sortOptions = ["Best sellers", "Top rated", "Newest"];
  const [activeCategory, setActiveCategory] = useState('All products');
  const [selectedFormat, setSelectedFormat] = useState('All');
  const [sortBy, setSortBy] = useState('Best sellers');
  const products = [
  {
    id: 1,
    title: "Set of two badge identity cards",
    price: "$8",
    image: "assets/img/shop/marketplace/01.jpg",
    avatar: "assets/img/shop/marketplace/avatars/04.png",
    seller: "Fireby",
    category: "Mockups",
    sales: 17,
  },
  {
    id: 2,
    title: "Smart watches series 9 mockup",
    price: "$15",
    image: "assets/img/shop/marketplace/02.jpg",
    avatar: "assets/img/shop/marketplace/avatars/03.png",
    seller: "MD Studio",
    category: "Mockups",
    sales: 132,
  },
  {
    id: 3,
    title: "3D box mockup bold rebrand",
    price: "$16",
    image: "assets/img/shop/marketplace/03.jpg",
    avatar: "assets/img/shop/marketplace/avatars/01.png",
    seller: "Createx Studio",
    category: "Mockups",
    sales: 56,
  },
  {
    id: 4,
    title: "Falling gift cards mockup",
    price: "$9",
    image: "assets/img/shop/marketplace/04.jpg",
    avatar: "assets/img/shop/marketplace/avatars/02.png",
    seller: "Magic FS",
    category: "Mockups",
    sales: 34,
  },
  {
    id: 5,
    title: "City sign design mockup",
    price: "$12",
    image: "assets/img/shop/marketplace/05.jpg",
    avatar: "assets/img/shop/marketplace/avatars/01.png",
    seller: "Createx Studio",
    category: "Mockups",
    sales: 23,
  },
  {
    id: 6,
    title: "A stunning set of tablet pro mockups",
    price: "$18",
    image: "assets/img/shop/marketplace/06.jpg",
    avatar: "assets/img/shop/marketplace/avatars/04.png",
    seller: "Fireby",
    category: "Mockups",
    sales: 33,
  },
];
  return (
    <main className="content-wrapper">
      <div className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        {/* <!-- Breadcrumb --> */}
        <ol className="breadcrumb pt-3 mt-2 mt-md-3 mb-md-4">
          <li className="breadcrumb-item">
            <Link to="home-marketplace.html">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Categories
          </li>
        </ol>
        {/* <!-- Page title --> */}
        <h1 className="h3 pb-2">Marketplace Categories</h1>
        {/*  <!-- Filters --> */}
        <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-lg-4 mb-2">
          {/* Tabs */}
          <div className="overflow-x-auto">
            <ul className="nav nav-pills flex-nowrap gap-2 text-nowrap pb-3">
              {categories.map((category) => (
                <li className="nav-item" key={category}>
                  <Link
                    to="#"
                    className={`nav-link ${
                      activeCategory === category ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveCategory(category);
                    }}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Filters */}
          <div className="d-flex flex-column flex-sm-row gap-sm-2 pb-1 pb-lg-2">
            {/* Format Select */}
            <div className="d-flex align-items-center gap-2 pb-sm-2">
              <div className="fs-sm fw-semibold text-dark-emphasis me-1">
                Format:
              </div>
              <div style={{ width: "170px" }}>
                <select
                  className="form-select border-0 rounded-0 ps-0"
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  aria-label="Select format"
                >
                  {formats.map((format) => (
                    <option key={format} value={format}>
                      {format}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Select */}
            <div className="d-flex align-items-center gap-2 pb-2">
              <div className="fs-sm fw-semibold text-dark-emphasis text-nowrap me-1">
                Sort by:
              </div>
              <div style={{ width: "150px" }}>
                <select
                  className="form-select border-0 rounded-0 ps-0"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Sort"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Products grid --> */}
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 g-sm-4 g-lg-3 g-xl-4">
      {products.map((product) => (
        <div className="col" key={product.id}>
          <div className="card h-100 animate-underline hover-effect-opacity hover-effect-scale rounded-4 overflow-hidden">
            <div className="card-img-top position-relative bg-body-tertiary overflow-hidden">
              <a
                className="ratio d-block hover-effect-target"
                style={{ "--cz-aspect-ratio": "calc(220 / 304 * 100%)" }}
                href="shop-product-marketplace.html"
              >
                <img src={product.image} alt="Product" />
              </a>
              <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 pt-1 pt-sm-0 pe-1 pe-sm-0 mt-2 mt-sm-3 me-2 me-sm-3">
                <button
                  type="button"
                  className="btn btn-sm btn-icon btn-light bg-light border-0 rounded-circle animate-pulse"
                  aria-label="Add to wishlist"
                >
                  <i className="ci-heart animate-target fs-sm"></i>
                </button>
              </div>
            </div>
            <div className="card-body p-3">
              <div className="d-flex min-w-0 justify-content-between gap-2 gap-sm-3 mb-2">
                <h3 className="nav min-w-0 mb-0">
                  <a
                    className="nav-link text-truncate p-0"
                    href="shop-product-marketplace.html"
                  >
                    <span className="text-truncate animate-target">
                      {product.title}
                    </span>
                  </a>
                </h3>
                <div className="h6 mb-0">{product.price}</div>
              </div>
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                <div className="nav align-items-center gap-1 fs-xs">
                  <a className="nav-link fs-xs text-body gap-1 p-0" href="#!">
                    <div
                      className="flex-shrink-0 border rounded-circle"
                      style={{ width: "22px" }}
                    >
                      <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                        <img src={product.avatar} alt="Avatar" />
                      </div>
                    </div>
                    {product.seller}
                  </a>
                  <div className="text-body-secondary">in</div>
                  <a className="nav-link fs-xs text-body p-0" href="#!">
                    {product.category}
                  </a>
                </div>
                <div className="fs-xs text-body-secondary">
                  {product.sales} sales
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
    </main>
  );
};
