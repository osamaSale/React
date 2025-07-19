import { useState } from "react";
import { Header } from "./Header";

export const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <main className="content-wrapper">
      <div className="container pt-4 pt-lg-5 pb-5">
        <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
          <Header />
          <div className="col-lg-9 pt-2 pt-xl-3">
            <h1 className="h2 pb-1 pb-sm-2 pb-md-3">Settings</h1>
            <div className="overflow-auto mb-3">
              <ul
                className="nav nav-pills flex-nowrap gap-2 text-nowrap pb-3"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="profile"
                    aria-selected="true"
                    className="nav-link active"
                    data-bs-target="#profile"
                    data-bs-toggle="pill"
                    id="profile-tab"
                    role="tab"
                    type="button"
                  >
                    Profile
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="security"
                    aria-selected="false"
                    className="nav-link"
                    data-bs-target="#security"
                    data-bs-toggle="pill"
                    id="security-tab"
                    role="tab"
                    type="button"
                  >
                    Security
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="payment"
                    aria-selected="false"
                    className="nav-link"
                    data-bs-target="#payment"
                    data-bs-toggle="pill"
                    id="payment-tab"
                    role="tab"
                    type="button"
                  >
                    Payment methods
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    aria-controls="notifications"
                    aria-selected="false"
                    className="nav-link"
                    data-bs-target="#notifications"
                    data-bs-toggle="pill"
                    id="notifications-tab"
                    role="tab"
                    type="button"
                  >
                    Notifications
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div
                aria-labelledby="profile-tab"
                className="tab-pane fade show active"
                id="profile"
                role="tabpanel"
              >
                <div className="d-flex align-items-start align-items-sm-center pb-3 mb-3">
                  <div
                    className="ratio ratio-1x1 hover-effect-opacity border rounded-circle overflow-hidden"
                    style={{
                      width: "112px",
                    }}
                  >
                    <img alt="Avatar" src="assets/img/account/avatar-lg.png" />
                    <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
                      <button
                        aria-label="Remove"
                        className="btn btn-icon btn-sm btn-light position-relative z-2"
                        type="button"
                      >
                        <i className="bi-trash fs-base" />
                      </button>
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
                    </div>
                  </div>
                  <div className="ps-3 ps-sm-4">
                    <p
                      className="fs-sm"
                      style={{
                        maxWidth: "400px",
                      }}
                    >
                      Your profile picture will appear on your profile and
                      listings. PNG or JPG no bigger than 500px wide and tall.
                    </p>
                    <button
                      className="btn btn-sm btn-secondary animate-rotate rounded-pill"
                      type="button"
                    >
                      <i className="bi bi-arrow-clockwise animate-target fs-sm ms-n1 me-2" />
                      Update picture
                    </button>
                  </div>
                </div>
                <form className="needs-validation" noValidate>
                  <div className="row row-cols-1 row-cols-sm-2 g-4 mb-4">
                    <div className="col position-relative">
                      <label className="form-label fs-base" htmlFor="fn">
                        First name *
                      </label>
                      <input
                        className="form-control form-control-lg rounded-pill"
                        defaultValue="Createx"
                        id="fn"
                        required
                        type="text"
                      />
                      <div className="invalid-tooltip bg-transparent p-0">
                        Enter your first name!
                      </div>
                    </div>
                    <div className="col position-relative">
                      <label className="form-label fs-base" htmlFor="ln">
                        Last name *
                      </label>
                      <input
                        className="form-control form-control-lg rounded-pill"
                        defaultValue="Studio"
                        id="ln"
                        required
                        type="text"
                      />
                      <div className="invalid-tooltip bg-transparent p-0">
                        Enter your last name!
                      </div>
                    </div>
                    <div className="col position-relative">
                      <label
                        className="form-label d-flex align-items-center fs-base"
                        htmlFor="email"
                      >
                        Email address *{" "}
                        <span className="badge text-danger bg-danger-subtle ms-2">
                          Verify email
                        </span>
                      </label>
                      <input
                        className="form-control form-control-lg rounded-pill"
                        defaultValue="contact@createx.studio"
                        id="email"
                        required
                        type="email"
                      />
                      <div className="invalid-tooltip bg-transparent p-0">
                        Enter a valid email address!
                      </div>
                    </div>
                    <div className="col">
                      <label
                        className="form-label fs-base"
                        htmlFor="display-name"
                      >
                        Display name
                      </label>
                      <input
                        className="form-control form-control-lg form-icon-end rounded-pill"
                        defaultValue="Createx Studio"
                        id="display-name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="pb-2 mb-3 mb-sm-4">
                    <label className="form-label fs-base" htmlFor="description">
                      Description
                    </label>
                    <textarea
                      className="form-control form-control-lg rounded-5"
                      defaultValue="Digital products & bespoke development"
                      id="description"
                      rows="6"
                    />
                  </div>
                  <div className="pb-2 mb-4">
                    <div className="form-check fs-lg m-0">
                      <input
                        className="form-check-input"
                        id="allow-contact"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label fs-base"
                        htmlFor="allow-contact"
                      >
                        Allow other users to contact you with work inquiries.
                      </label>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-lg btn-primary rounded-pill"
                      type="submit"
                    >
                      Save changes
                    </button>
                    <button
                      className="btn btn-lg btn-secondary rounded-pill"
                      type="reset"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              <div
                aria-labelledby="security-tab"
                className="tab-pane fade"
                id="security"
                role="tabpanel"
              >
                <form className="needs-validation" noValidate>
                  <div className="row row-cols-1 row-cols-sm-2 g-4 mb-4">
                    <div className="col">
                      <label
                        className="form-label fs-base"
                        htmlFor="current-password"
                      >
                        Current password
                      </label>
                      <div className="password-toggle">
                        <input
                          className="form-control form-control-lg rounded-pill"
                          id="current-password"
                          required
                          type="password"
                        />
                        <div className="invalid-tooltip bg-transparent p-0">
                          Incorrect password. Please try again.
                        </div>
                        <label
                          aria-label="Show/hide password"
                          className="password-toggle-button"
                        >
                          <input className="btn-check" type="checkbox" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-sm-2 g-4 mb-4">
                    <div className="col">
                      <label
                        className="form-label fs-base"
                        htmlFor="new-password"
                      >
                        New password{" "}
                        <span className="fs-sm fw-normal text-body-secondary">
                          (Min 8 chars)
                        </span>
                      </label>
                      <div className="password-toggle">
                        <input
                          className="form-control form-control-lg rounded-pill"
                          id="new-password"
                          minLength="8"
                          required
                          type="password"
                        />
                        <div className="invalid-tooltip bg-transparent p-0">
                          Please ensure password is at least 8 characters long.
                        </div>
                        <label
                          aria-label="Show/hide password"
                          className="password-toggle-button"
                        >
                          <input className="btn-check" type="checkbox" />
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <label
                        className="form-label fs-base"
                        htmlFor="confirm-new-password"
                      >
                        Confirm new password
                      </label>
                      <div className="password-toggle">
                        <input
                          className="form-control form-control-lg rounded-pill"
                          id="confirm-new-password"
                          minLength="8"
                          required
                          type="password"
                        />
                        <div className="invalid-tooltip bg-transparent p-0">
                          Passwords do not match.
                        </div>
                        <label
                          aria-label="Show/hide password"
                          className="password-toggle-button"
                        >
                          <input className="btn-check" type="checkbox" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-lg btn-primary rounded-pill"
                      type="submit"
                    >
                      Update password
                    </button>
                    <button
                      className="btn btn-lg btn-secondary rounded-pill"
                      type="reset"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
                <h2 className="h6 pt-5 mt-xl-2 pb-1 mb-2">Delete account</h2>
                <p className="fs-sm">
                  When you delete your account, your public profile will be
                  deactivated immediately. If you change your mind before the 14
                  days are up, sign in with your email and password, and we'll
                  send a link to reactivate account.
                </p>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    id="confirm-deletion"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="confirm-deletion"
                  >
                    Yes, I want to delete my account
                  </label>
                </div>
                <a className="fs-sm fw-medium text-danger" href="#!">
                  Delete account
                </a>
              </div>
              <div
                aria-labelledby="payment-tab"
                className="tab-pane fade"
                id="payment"
                role="tabpanel"
              >
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4 g-lg-3 g-xl-4">
                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <div className="card-body pb-3">
                        <div className="d-flex align-items-start justify-content-between mb-4">
                          <img
                            alt="Mastercard"
                            className="m-n3"
                            src="assets/img/payment-methods/mastercard.svg"
                            width="100"
                          />
                          <span className="badge text-bg-info rounded-pill">
                            Primary
                          </span>
                        </div>
                        <div className="h6 mb-1">**** **** **** 8341</div>
                        <div className="text-danger fs-xs">Expired 05/24</div>
                      </div>
                      <div className="card-footer d-flex gap-2 bg-transparent border-0 pt-0 pb-4">
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-pill me-1"
                          type="button"
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-pill"
                          type="button"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100 rounded-4">
                      <div className="card-body pb-3">
                        <div className="d-flex align-items-start justify-content-between mb-4">
                          <img
                            alt="Visa"
                            className="d-none-dark m-n3"
                            src="assets/img/payment-methods/visa-light-mode.svg"
                            width="100"
                          />
                          <img
                            alt="Visa"
                            className="d-none d-block-dark m-n3"
                            src="assets/img/payment-methods/visa-dark-mode.svg"
                            width="100"
                          />
                          <div className="nav animate-underline">
                            <a
                              className="nav-link animate-target fs-xs p-0"
                              href="#!"
                            >
                              Set as primary
                            </a>
                          </div>
                        </div>
                        <div className="h6 mb-1">**** **** **** 1276</div>
                        <div className="text-body fs-xs">Expiration 01/27</div>
                      </div>
                      <div className="card-footer d-flex gap-2 bg-transparent border-0 pt-0 pb-4">
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-pill me-1"
                          type="button"
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-pill"
                          type="button"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0 h-100">
                      <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-secondary border-opacity-25 rounded-4 d-none-dark" />
                      <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-light border-opacity-25 rounded-4 d-none d-block-dark" />
                      <div className="card-body position-relative z-2 nav align-items-center justify-content-center py-5">
                        <a
                          className="nav-link animate-underline stretched-link min-w-0 fs-base px-0"
                          data-bs-toggle="modal"
                          href="#addPaymentModal"
                        >
                          <i className="bi-plus fs-lg ms-n2 me-2" />
                          <span className="animate-target text-truncate">
                            Add payment method
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                aria-labelledby="notifications-tab"
                className="tab-pane fade"
                id="notifications"
                role="tabpanel"
              >
                <div className="vstack gap-4 pt-sm-1">
                  <div className="form-check form-switch mb-0">
                    <input
                      className="form-check-input"
                      defaultChecked
                      id="product-sold"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label ps-2"
                      htmlFor="product-sold"
                    >
                      <span className="d-block h6 mb-2">
                        Product sold notifications
                      </span>
                      <span className="fs-sm">
                        Send an email when someone purchased one of my product.
                      </span>
                    </label>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input
                      className="form-check-input"
                      defaultChecked
                      id="product-update"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label ps-2"
                      htmlFor="product-update"
                    >
                      <span className="d-block h6 mb-2">
                        Product update notifications
                      </span>
                      <span className="fs-sm">
                        Send an email when a product I've purchased is updated.
                      </span>
                    </label>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input
                      className="form-check-input"
                      id="surveys"
                      type="checkbox"
                    />
                    <label className="form-check-label ps-2" htmlFor="surveys">
                      <span className="d-block h6 mb-2">Surveys and tests</span>
                      <span className="fs-sm">
                        Receive invitations to participate in surveys,
                        consultations, and tool testing.
                      </span>
                    </label>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input
                      className="form-check-input"
                      defaultChecked
                      id="product-review"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label ps-2"
                      htmlFor="product-review"
                    >
                      <span className="d-block h6 mb-2">
                        Product review notifications
                      </span>
                      <span className="fs-sm">
                        Company news and cooperation offers.
                      </span>
                    </label>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input
                      className="form-check-input"
                      id="daily-summary"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label ps-2"
                      htmlFor="daily-summary"
                    >
                      <span className="d-block h6 mb-2">
                        Daily summary emails
                      </span>
                      <span className="fs-sm">
                        Send an email when someone leaves a review with his/her
                        rating.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
