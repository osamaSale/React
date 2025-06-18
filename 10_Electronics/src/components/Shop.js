import { Link } from "react-router-dom";
import React, { useState } from "react";
export const Shop = ({ shown = 4, total = 64 }) => {
  const products = [
    {
      id: 1,
      name: "Soft chair with cushion and wooden legs",
      price: "$245.00",
      link: "shop-product-furniture.html",
      image: "assets/img/shop/furniture/01.png",
      hoverImage: "assets/img/shop/furniture/01-hover.jpg",
      colors: ["#32808e", "#767e93", "#cd8d01"],
      outOfStock: false,
    },
    {
      id: 2,
      name: "Decorative flowerpot with a plant",
      price: "$107.50",
      link: "shop-product-furniture.html",
      image: "assets/img/shop/furniture/02.png",
      hoverImage: "assets/img/shop/furniture/02-hover.jpg",
      colors: ["#6a6f7b", "#373b42", "#216aae", "#187c1c"],
      outOfStock: false,
    },
    {
      id: 12,
      name: "Wooden shelf for decor elements",
      price: "$278.00",
      link: "shop-product-furniture.html",
      image: "assets/img/shop/furniture/12.png",
      hoverImage: "assets/img/shop/furniture/12-hover.jpg",
      colors: ["#af8d6a"],
      outOfStock: true,
    },
    {
      id: 13,
      name: "Aluminium foldable desk lamp",
      price: "$89.99",
      link: "shop-product-furniture.html",
      image: "assets/img/shop/furniture/13.png",
      hoverImage: "assets/img/shop/furniture/13-hover.jpg",
      colors: ["#5b92b0", "#e0e5eb", "#373b42"],
      outOfStock: false,
    },
    {
      id: 14,
      name: "Modern lounge couch on wooden frame",
      price: "$638.00",
      link: "shop-product-furniture.html",
      image: "assets/img/shop/furniture/14.png",
      hoverImage: "assets/img/shop/furniture/14-hover.jpg",
      colors: ["#6a6662", "#b2b8c0"],
      outOfStock: false,
    },
    {
      id: 15,
      name: "Adjustable hardwire wall sconce",
      price: "$74.00",
      link: "shop-product-furniture.html",
      image: "assets/img/shop/furniture/15.png",
      hoverImage: "assets/img/shop/furniture/15-hover.jpg",
      colors: ["#e0e5eb"],
      outOfStock: false,
    },
    {
      id: 15,
      name: "Adjustable hardwire wall sconce",
      price: "$74.00",
      link: "shop-product-furniture.html",
      image: "assets/img/shop/furniture/15.png",
      hoverImage: "assets/img/shop/furniture/15-hover.jpg",
      colors: ["#e0e5eb"],
      outOfStock: false,
    },
    {
      id: 15,
      name: "Adjustable hardwire wall sconce",
      price: "$74.00",
      link: "shop-product-furniture.html",
      image: "assets/img/shop/furniture/15.png",
      hoverImage: "assets/img/shop/furniture/15-hover.jpg",
      colors: ["#e0e5eb"],
      outOfStock: false,
    },
    {
      id: 15,
      name: "Adjustable hardwire wall sconce",
      price: "$74.00",
      link: "shop-product-furniture.html",
      image: "assets/img/shop/furniture/15.png",
      hoverImage: "assets/img/shop/furniture/15-hover.jpg",
      colors: ["#e0e5eb"],
      outOfStock: false,
    },
    {
      id: 15,
      name: "Adjustable hardwire wall sconce",
      price: "$74.00",
      link: "shop-product-furniture.html",
      image: "assets/img/shop/furniture/15.png",
      hoverImage: "assets/img/shop/furniture/15-hover.jpg",
      colors: ["#e0e5eb"],
      outOfStock: false,
    },
    {
      id: 15,
      name: "Adjustable hardwire wall sconce",
      price: "$74.00",
      link: "shop-product-furniture.html",
      image: "assets/img/shop/furniture/15.png",
      hoverImage: "assets/img/shop/furniture/15-hover.jpg",
      colors: ["#e0e5eb"],
      outOfStock: false,
    },
  ];
  const [selectedCategories, setSelectedCategories] = useState([
    "Living room",
    "Bedroom",
    "Lighting",
    "Accessories",
  ]);

  const removeCategory = (categoryToRemove) => {
    setSelectedCategories((prev) =>
      prev.filter((cat) => cat !== categoryToRemove)
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
  };
  const progress = (shown / total) * 100;
  return (
    <main className="content-wrapper">
      <div className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        {/* <!-- Breadcrumb --> */}
        <nav
          className="position-relative pt-3 my-3 my-md-4"
          aria-label="breadcrumb"
          style={{ zIndex: 1021 }}
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/home-furniture">Home</Link>{" "}
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Catalog with filters on top
            </li>
          </ol>
        </nav>
        {/*  <!-- Page title --> */}
        <h1
          className="h3 position-relative pb-sm-2 pb-md-3"
          style={{ zIndex: 1021 }}
        >
          Shop catalog
        </h1>

        {/* <!-- Filters --> */}
        <div
          className="sticky-top bg-body mb-3 mb-sm-4"
          style={{
            marginTop: "-4.5rem",
          }}
        >
          <div className="row align-items-center pt-5">
            <div className="col-5 col-sm-8 col-md-9 d-flex gap-2 pb-3 mt-4">
              <div className="d-none d-sm-block w-100 me-1">
                <select
                  aria-label="Sorting"
                  className="form-select rounded-pill"
                  data-select='{                  "classNames": {                    "containerInner": ["form-select", "filter-select", "rounded-pill"]                  }                }'
                >
                  <option value="">Sort by</option>
                  <option selected value="popular">
                    Most popular
                  </option>
                  <option value="match">Best match</option>
                  <option value="new">New arrivals</option>
                  <option value="price-asc">Price ascending</option>
                  <option value="price-desc">Price descending</option>
                </select>
              </div>
              <div className="dropdown w-100 d-none d-md-block me-1">
                <button
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="btn btn-outline-secondary dropdown-toggle filter-select justify-content-between w-100 text-body fw-normal rounded-pill px-3"
                  data-bs-auto-close="outside"
                  data-bs-toggle="dropdown"
                  type="button"
                >
                  Category <span className="ms-1 me-auto" id="categoryCount" />
                </button>
                <div className="dropdown-menu w-100 p-3">
                  <div className="d-flex flex-column gap-2">
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="categoryCount"
                        defaultChecked
                        id="living-room"
                        onclick="updateFilterCount('categoryCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="living-room"
                      >
                        Living room
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          657
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="categoryCount"
                        defaultChecked
                        id="bedroom"
                        onclick="updateFilterCount('categoryCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="bedroom"
                      >
                        Bedroom
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          528
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="categoryCount"
                        id="kitchen"
                        onclick="updateFilterCount('categoryCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="kitchen"
                      >
                        Kitchen
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          342
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="categoryCount"
                        id="office"
                        onclick="updateFilterCount('categoryCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="office"
                      >
                        Office
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          283
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="categoryCount"
                        defaultChecked
                        id="lighting"
                        onclick="updateFilterCount('categoryCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="lighting"
                      >
                        Lighting
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          395
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="categoryCount"
                        id="decoration"
                        onclick="updateFilterCount('categoryCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-labe d-flex align-items-endl"
                        htmlFor="decoration"
                      >
                        Decoration
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          204
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="categoryCount"
                        defaultChecked
                        id="accessories"
                        onclick="updateFilterCount('categoryCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="accessories"
                      >
                        Accessories
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          190
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown w-100 d-none d-lg-block me-1">
                <button
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="btn btn-outline-secondary dropdown-toggle filter-select justify-content-between w-100 text-body fw-normal rounded-pill px-3"
                  data-bs-auto-close="outside"
                  data-bs-toggle="dropdown"
                  type="button"
                >
                  Type <span className="ms-1 me-auto" id="typeCount" />
                </button>
                <div className="dropdown-menu w-100 p-3">
                  <div className="d-flex flex-column gap-2">
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="typeCount"
                        id="armchair"
                        onclick="updateFilterCount('typeCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="armchair"
                      >
                        Armchair
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          324
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="typeCount"
                        id="sofa"
                        onclick="updateFilterCount('typeCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="sofa"
                      >
                        Sofa
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          275
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="typeCount"
                        id="ottoman"
                        onclick="updateFilterCount('typeCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="ottoman"
                      >
                        Ottoman
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          117
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="typeCount"
                        id="bench"
                        onclick="updateFilterCount('typeCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="bench"
                      >
                        Bench
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          86
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="typeCount"
                        id="bed"
                        onclick="updateFilterCount('typeCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="bed"
                      >
                        Bed frame
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          263
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="typeCount"
                        id="lamp"
                        onclick="updateFilterCount('typeCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="lamp"
                      >
                        Lamp
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          415
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="typeCount"
                        id="stool"
                        onclick="updateFilterCount('typeCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-labe d-flex align-items-end"
                        htmlFor="stool"
                      >
                        Stool
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          104
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown w-100 d-none d-xl-block me-1">
                <button
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="btn btn-outline-secondary dropdown-toggle filter-select justify-content-between w-100 text-body fw-normal rounded-pill px-3"
                  data-bs-auto-close="outside"
                  data-bs-toggle="dropdown"
                  type="button"
                >
                  Color <span className="ms-1 me-auto" id="colorCount" />
                </button>
                <div className="dropdown-menu w-100 p-3">
                  <div className="d-flex flex-column gap-2">
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="colorCount"
                        id="emerald"
                        onclick="updateFilterCount('colorCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="emerald"
                      >
                        <span
                          className="align-self-center rounded-circle border border-2 p-1 me-2"
                          style={{
                            "--cz-border-color": "#32808e",
                            backgroundColor: "#32808e",
                          }}
                        />
                        Emerald
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          97
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="colorCount"
                        id="dark-gray"
                        onclick="updateFilterCount('colorCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="dark-gray"
                      >
                        <span
                          className="align-self-center rounded-circle border border-2 p-1 me-2"
                          style={{
                            "--cz-border-color": "#6a6f7b",
                            backgroundColor: "#6a6f7b",
                          }}
                        />
                        Dark gray
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          346
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="colorCount"
                        id="light-gray"
                        onclick="updateFilterCount('colorCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="light-gray"
                      >
                        <span
                          className="align-self-center rounded-circle border border-2 p-1 me-2"
                          style={{
                            "--cz-border-color": "#bdc5da",
                            backgroundColor: "#bdc5da",
                          }}
                        />
                        Light gray
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          291
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="colorCount"
                        id="brown"
                        onclick="updateFilterCount('colorCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="brown"
                      >
                        <span
                          className="align-self-center rounded-circle border border-2 p-1 me-2"
                          style={{
                            "--cz-border-color": "#af8d6a",
                            backgroundColor: "#af8d6a",
                          }}
                        />
                        Brown
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          105
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="colorCount"
                        id="blue"
                        onclick="updateFilterCount('colorCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="blue"
                      >
                        <span
                          className="align-self-center rounded-circle border border-2 p-1 me-2"
                          style={{
                            "--cz-border-color": "#216aae",
                            backgroundColor: "#216aae",
                          }}
                        />
                        Blue
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          84
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="colorCount"
                        id="green"
                        onclick="updateFilterCount('colorCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="green"
                      >
                        <span
                          className="align-self-center rounded-circle border border-2 p-1 me-2"
                          style={{
                            "--cz-border-color": "#187c1c",
                            backgroundColor: "#187c1c",
                          }}
                        />
                        Green
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          69
                        </span>
                      </label>
                    </div>
                    <div className="form-check m-0">
                      <input
                        className="form-check-input fs-base"
                        data-count-id="colorCount"
                        id="beige"
                        onclick="updateFilterCount('colorCount')"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label d-flex align-items-end"
                        htmlFor="beige"
                      >
                        <span
                          className="align-self-center rounded-circle border border-2 p-1 me-2"
                          style={{
                            "--cz-border-color": "#bdaB9e",
                            backgroundColor: "#bdaB9e",
                          }}
                        />
                        Beige
                        <span className="fs-xs text-body-secondary ps-2 ms-auto">
                          173
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="nav">
                <a
                  aria-controls="shopFilters"
                  className="nav-link animate-underline px-2"
                  data-bs-toggle="offcanvas"
                  href="#shopFilters"
                >
                  <i className="bi-filter me-1" />
                  <span className="animate-target text-nowrap">
                    All filters
                  </span>
                </a>
              </nav>
            </div>
            <div className="col-7 col-sm-4 col-md-3">
              <ul
                className="nav nav-underline flex-nowrap justify-content-end"
                id="viewShwitcher"
              >
                <li className="nav-item" role="presentation">
                  <button
                    aria-selected="true"
                    className="nav-link active"
                    id="showProduct"
                    role="tab"
                    type="button"
                  >
                    Product
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    aria-selected="false"
                    className="nav-link"
                    id="showRoom"
                    role="tab"
                    type="button"
                  >
                    Room
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  <!-- Selected filters --> */}
        <div className="d-flex flex-wrap align-items-center gap-2 text-nowrap mt-n3 mb-3 mb-lg-4">
          {selectedCategories.map((category) => (
            <button
              key={category}
              type="button"
              className="btn btn-sm btn-secondary rounded-pill me-1"
              onClick={() => removeCategory(category)}
            >
              <i className="bi bi-x-lg fs-sm me-1 ms-n1"></i>
              {category}
            </button>
          ))}

          {selectedCategories.length > 0 && (
            <div className="nav ps-1">
              <button
                className="nav-link fs-xs text-decoration-underline px-0 btn btn-link"
                onClick={clearAll}
              >
                Clear all
              </button>
            </div>
          )}
        </div>
        {/* <!-- Product grid --> */}
        <div
          className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-5"
          id="productGrid"
        >
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="animate-underline mb-sm-2">
                <a
                  className={`hover-effect-opacity ratio ratio-1x1 d-block mb-3 ${
                    product.outOfStock ? "opacity-50 pe-none" : ""
                  }`}
                  href={product.link}
                >
                  <img
                    src={product.image}
                    className="hover-effect-target opacity-100"
                    alt="Product"
                  />
                  <img
                    src={product.hoverImage}
                    className="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4"
                    alt="Room"
                  />
                </a>
                <div className="d-flex gap-2 mb-3">
                  {product.colors.map((color, index) => {
                    const radioId = `color-${product.id}-${index + 1}`;
                    return (
                      <React.Fragment key={radioId}>
                        <input
                          type="radio"
                          className="btn-check"
                          name={`colors-${product.id}`}
                          id={radioId}
                          defaultChecked={index === 0}
                        />
                        <label
                          htmlFor={radioId}
                          className="btn btn-color fs-base"
                          style={{ color }}
                        >
                          <span className="visually-hidden">Color option</span>
                        </label>
                      </React.Fragment>
                    );
                  })}
                </div>
                <h3 className="mb-2">
                  <a
                    className="d-block fs-sm fw-medium text-truncate"
                    href={product.link}
                  >
                    <span className="animate-target">{product.name}</span>
                  </a>
                </h3>
                <div className="h6">{product.price}</div>
                <div className="d-flex gap-2">
                  {product.outOfStock ? (
                    <button
                      type="button"
                      className="btn btn-secondary min-w-0 w-100 rounded-pill px-3"
                    >
                      <span className="text-truncate">
                        Notify of availability
                      </span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-dark w-100 rounded-pill px-3"
                    >
                      Add to cart
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-icon btn-secondary rounded-circle animate-pulse"
                    aria-label="Add to wishlist"
                  >
                    <i className="bi-heart fs-base animate-target"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*  <!-- Pagination --> */}
        <div
          className="text-center pt-5 mt-md-2 mt-lg-3 mt-xl-4 mb-xxl-3 mx-auto"
          style={{ maxWidth: "306px" }}
        >
          <p className="fs-sm">
            Showing {shown} from {total}
          </p>
          <div
            className="progress mb-3"
            role="progressbar"
            aria-label="Items shown"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "4px" }}
          >
            <div
              className="progress-bar bg-dark rounded-pill d-none-dark"
              style={{ width: `${progress}%` }}
            ></div>
            <div
              className="progress-bar bg-light rounded-pill d-none d-block-dark"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="nav justify-content-center">
            <a
              className="nav-link animate-underline fs-base pt-2 pb-0 px-0"
              href="#!"
            >
              <span className="animate-target my-1 me-2">Show more</span>
              <i className="bi-chevron-down fs-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
