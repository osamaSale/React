export const Offcanvas =()=>{
    return(
        <>
        {/* /*  <!-- Shopping cart offcanvas --> */ }
        <div>
  <div
    aria-labelledby="shoppingCartLabel"
    className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
    id="shoppingCart"
    style={{
      width: "500px",
    }}
    tabIndex="-1">
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
          }}>
          <div
            className="ratio bg-body-tertiary rounded overflow-hidden"
            style={{
              "--cz-aspect-ratio": "calc(110 / 142 * 100%)",
            }}>
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
              href="shop-product-marketplace.html">
              Multi device mockup PSD
            </a>
          </h5>
          <div className="h6 pb-1 mb-2">$27</div>
          <div className="d-flex align-items-center justify-content-between gap-1">
            <div
              className="w-100"
              style={{
                maxWidth: "185px",
              }}>
              <select
                aria-label="Small pill select"
                className="form-select form-select-sm rounded-pill"
                data-select='{                  "classNames": {                    "containerInner": ["form-select", "form-select-sm", "rounded-pill"]                  },                  "removeItemButton": false                }'>
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
              type="button">
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
          }}>
          <div
            className="ratio bg-body-tertiary rounded overflow-hidden"
            style={{
              "--cz-aspect-ratio": "calc(110 / 142 * 100%)",
            }}>
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
              href="shop-product-marketplace.html">
              Isometric device mockups
            </a>
          </h5>
          <div className="h6 pb-1 mb-2">$12</div>
          <div className="d-flex align-items-center justify-content-between gap-2">
            <div
              className="w-100"
              style={{
                maxWidth: "185px",
              }}>
              <select
                aria-label="Small pill select"
                className="form-select form-select-sm rounded-pill"
                data-select='{                  "classNames": {                    "containerInner": ["form-select", "form-select-sm", "rounded-pill"]                  },                  "removeItemButton": false                }'>
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
              type="button">
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
          }}>
          <div
            className="ratio bg-body-tertiary rounded overflow-hidden"
            style={{
              "--cz-aspect-ratio": "calc(110 / 142 * 100%)",
            }}>
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
              href="shop-product-marketplace.html">
              Modern poster with abstract shapes
            </a>
          </h5>
          <div className="h6 pb-1 mb-2">$8</div>
          <div className="d-flex align-items-center justify-content-between gap-2">
            <div
              className="w-100"
              style={{
                maxWidth: "185px",
              }}>
              <select
                aria-label="Small pill select"
                className="form-select form-select-sm rounded-pill"
                data-select='{                  "classNames": {                    "containerInner": ["form-select", "form-select-sm", "rounded-pill"]                  },                  "removeItemButton": false                }'>
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
              type="button">
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
        href="checkout-marketplace.html">
        Checkout
      </a>
    </div>
  </div>
</div>

        </>
    )
}