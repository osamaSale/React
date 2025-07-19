export const Offcanvas = () => {
  return (
    <>
      {/* /*  <!-- Shopping cart offcanvas --> */}
      <div>
        <div
          aria-labelledby="shoppingCartLabel"
          className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
          id="shoppingCart"
          style={{
            width: "500px",
          }}
          tabIndex="-1"
        >
          <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
            <div className="d-flex align-items-center justify-content-between w-100">
              <h4 className="offcanvas-title" id="shoppingCartLabel">
                Cart (3)
              </h4>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                type="button"
              />
            </div>
          </div>
          <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
            <div className="d-flex align-items-center">
              <a
                className="flex-sm-shrink-0"
                href="shop-product-marketplace.html"
                style={{
                  width: "142px",
                }}
              >
                <div
                  className="ratio bg-body-tertiary rounded overflow-hidden"
                  style={{
                    "--cz-aspect-ratio": "calc(110 / 142 * 100%)",
                  }}
                >
                  <img
                    alt="Thumbnail"
                    src="assets/img/home/marketplace/cart/01.jpg"
                  />
                </div>
              </a>
              <div className="w-100 min-w-0 ps-3">
                <h5 className="d-flex animate-underline mb-2">
                  <a
                    className="d-block fs-sm fw-medium text-truncate animate-target"
                    href="shop-product-marketplace.html"
                  >
                    Multi device mockup PSD
                  </a>
                </h5>
                <div className="h6 pb-1 mb-2">$27</div>
                <div className="d-flex align-items-center justify-content-between gap-1">
                  <div
                    className="w-100"
                    style={{
                      maxWidth: "185px",
                    }}
                  >
                    <select
                      aria-label="Small pill select"
                      className="form-select form-select-sm rounded-pill"
                      data-select='{                  "classNames": {                    "containerInner": ["form-select", "form-select-sm", "rounded-pill"]                  },                  "removeItemButton": false                }'
                    >
                      <option value="standard">Standard license</option>
                      <option value="extended">Extended license</option>
                    </select>
                  </div>
                  <button
                    aria-label="Remove from cart"
                    className="btn btn-icon btn-sm flex-shrink-0 fs-sm"
                    data-bs-custom-class="tooltip-sm"
                    data-bs-title="Remove"
                    data-bs-toggle="tooltip"
                    type="button"
                  >
                    <i className="bi-trash fs-base" />
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <a
                className="flex-sm-shrink-0"
                href="shop-product-marketplace.html"
                style={{
                  width: "142px",
                }}
              >
                <div
                  className="ratio bg-body-tertiary rounded overflow-hidden"
                  style={{
                    "--cz-aspect-ratio": "calc(110 / 142 * 100%)",
                  }}
                >
                  <img
                    alt="Thumbnail"
                    src="assets/img/home/marketplace/cart/02.jpg"
                  />
                </div>
              </a>
              <div className="w-100 min-w-0 ps-3">
                <h5 className="d-flex animate-underline mb-2">
                  <a
                    className="d-block fs-sm fw-medium text-truncate animate-target"
                    href="shop-product-marketplace.html"
                  >
                    Isometric device mockups
                  </a>
                </h5>
                <div className="h6 pb-1 mb-2">$12</div>
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <div
                    className="w-100"
                    style={{
                      maxWidth: "185px",
                    }}
                  >
                    <select
                      aria-label="Small pill select"
                      className="form-select form-select-sm rounded-pill"
                      data-select='{                  "classNames": {                    "containerInner": ["form-select", "form-select-sm", "rounded-pill"]                  },                  "removeItemButton": false                }'
                    >
                      <option value="standard">Standard license</option>
                      <option value="extended">Extended license</option>
                    </select>
                  </div>
                  <button
                    aria-label="Remove from cart"
                    className="btn btn-icon btn-sm flex-shrink-0 fs-sm"
                    data-bs-custom-class="tooltip-sm"
                    data-bs-title="Remove"
                    data-bs-toggle="tooltip"
                    type="button"
                  >
                    <i className="bi-trash fs-base" />
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <a
                className="flex-sm-shrink-0"
                href="shop-product-marketplace.html"
                style={{
                  width: "142px",
                }}
              >
                <div
                  className="ratio bg-body-tertiary rounded overflow-hidden"
                  style={{
                    "--cz-aspect-ratio": "calc(110 / 142 * 100%)",
                  }}
                >
                  <img
                    alt="Thumbnail"
                    src="assets/img/home/marketplace/cart/03.jpg"
                  />
                </div>
              </a>
              <div className="w-100 min-w-0 ps-3">
                <h5 className="d-flex animate-underline mb-2">
                  <a
                    className="d-block fs-sm fw-medium text-truncate animate-target"
                    href="shop-product-marketplace.html"
                  >
                    Modern poster with abstract shapes
                  </a>
                </h5>
                <div className="h6 pb-1 mb-2">$8</div>
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <div
                    className="w-100"
                    style={{
                      maxWidth: "185px",
                    }}
                  >
                    <select
                      aria-label="Small pill select"
                      className="form-select form-select-sm rounded-pill"
                      data-select='{                  "classNames": {                    "containerInner": ["form-select", "form-select-sm", "rounded-pill"]                  },                  "removeItemButton": false                }'
                    >
                      <option value="standard">Standard license</option>
                      <option value="extended">Extended license</option>
                    </select>
                  </div>
                  <button
                    aria-label="Remove from cart"
                    className="btn btn-icon btn-sm flex-shrink-0 fs-sm"
                    data-bs-custom-class="tooltip-sm"
                    data-bs-title="Remove"
                    data-bs-toggle="tooltip"
                    type="button"
                  >
                    <i className="bi-trash fs-base" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-header flex-column align-items-start">
            <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
              <span className="text-light-emphasis">Subtotal:</span>
              <span className="h6 mb-0">$47</span>
            </div>
            <a
              className="btn btn-lg btn-dark w-100 rounded-pill"
              href="checkout-marketplace.html"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>

     {/*   <!-- Search offcanvas --> */}
     <div
  className="offcanvas offcanvas-top"
  data-bs-backdrop="static"
  id="searchBox"
  tabIndex="-1">
  <div className="offcanvas-header border-bottom p-0 py-lg-1">
    <form className="container d-flex align-items-center">
      <input
        className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
        data-autofocus="offcanvas"
        placeholder="Search the products"
        type="search"
      />
      <button
        aria-label="Close"
        className="btn-close fs-lg"
        data-bs-dismiss="offcanvas"
        type="reset"
      />
    </form>
  </div>
  <div className="offcanvas-body px-0">
    <div className="container text-center">
      <svg
        className="text-body-tertiary opacity-60 mb-4"
        fill="currentColor"
        viewBox="0 0 512 512"
        width="60"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M340.115,361.412l-16.98-16.98c-34.237,29.36-78.733,47.098-127.371,47.098C87.647,391.529,0,303.883,0,195.765S87.647,0,195.765,0s195.765,87.647,195.765,195.765c0,48.638-17.738,93.134-47.097,127.371l16.98,16.98l11.94-11.94c5.881-5.881,15.415-5.881,21.296,0l112.941,112.941c5.881,5.881,5.881,15.416,0,21.296l-45.176,45.176c-5.881,5.881-15.415,5.881-21.296,0L328.176,394.648c-5.881-5.881-5.881-15.416,0-21.296L340.115,361.412z M195.765,361.412c91.484,0,165.647-74.163,165.647-165.647S287.249,30.118,195.765,30.118S30.118,104.28,30.118,195.765S104.28,361.412,195.765,361.412z M360.12,384l91.645,91.645l23.88-23.88L384,360.12L360.12,384z M233.034,233.033c5.881-5.881,15.415-5.881,21.296,0c5.881,5.881,5.881,15.416,0,21.296c-32.345,32.345-84.786,32.345-117.131,0c-5.881-5.881-5.881-15.415,0-21.296c5.881-5.881,15.416-5.881,21.296,0C179.079,253.616,212.45,253.616,233.034,233.033zM135.529,180.706c-12.475,0-22.588-10.113-22.588-22.588c0-12.475,10.113-22.588,22.588-22.588c12.475,0,22.588,10.113,22.588,22.588C158.118,170.593,148.005,180.706,135.529,180.706z M256,180.706c-12.475,0-22.588-10.113-22.588-22.588c0-12.475,10.113-22.588,22.588-22.588s22.588,10.113,22.588,22.588C278.588,170.593,268.475,180.706,256,180.706z" />
      </svg>
      <h6 className="mb-2">Your search results will appear here</h6>
      <p className="fs-sm mb-0">
        Start typing in the search field above to see instant search results.
      </p>
    </div>
  </div>
</div>

    </>
  );
};
