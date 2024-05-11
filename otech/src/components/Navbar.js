import React from 'react';
import { Link } from "react-router-dom"
const Navbar = () => {
  return (

    <header className="py-lg-2 py-5 px-0 border-bottom bg-secondary text-light sticky-top">
      <div className="container-fluid">
        <div className="row w-100 align-items-center g-0 gx-lg-3">

          <div className="col-xxl-4 col-lg-4 d-flex align-items-center ">
            <Link className="btn btn-outline-light fs-5 d-none d-lg-block" >
              <img src='./assets/images/user.svg' alt='' className="rounded-circle me-3" width={30} height={30} />
              الدخول
            </Link>
            <div className="list-inline ms-auto d-lg-block d-none">


              <div className="list-inline-item">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback"></span>
                  <input type="text" className="form-control bg-secondary" placeholder="Search" />
                </div>


              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-lg-8">
            <div className="d-flex align-items-center">

              <div className="w-100 ms-4  d-none d-lg-block ">
                <nav className="navbar navbar-expand-lg navbar-secondary navbar-default p-0 p-sm-0 d-flex flex-row-reverse" aria-label="Offcanvas navbar large">
                  <ul className="navbar-nav d-flex flex-row-reverse">
                    <li className="nav-item me-4">

                      <Link className="nav-link" to="/" >
                        <button className="btn btn-outline-light fs-5 " data-bs-dismiss="offcanvas" aria-label="Close">
                          الصفحة الرئيسية
                        </button>
                      </Link>
                    </li>
                    <li className="nav-item me-4">

                      <Link className="nav-link" to="/" >
                        <button className="nav-link  text-light fs-5" data-bs-dismiss="offcanvas" aria-label="Close">
                          الفريق
                        </button>
                      </Link>
                    </li>
                    <li className="nav-item me-4">
                      <Link className="nav-link" to="/about" data-bs-dismiss="offcanvas" aria-label="Close">
                        <button className="nav-link  text-light fs-5" data-bs-dismiss="offcanvas" aria-label="Close">
                          المعلومات عنا
                        </button>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <Link className="navbar-brand d-none d-lg-block" to="/">
                <img src="./assets/images/logo.png" alt="eCommerce HTML Template" className='rounded-circle' width={60} height={60} />
              </Link>
            </div>

            <div className="d-lg-none">
              <div className="row gy-3">
                <div className="col-xxl-2 col-lg-3">
                  <Link className="navbar-brand  d-lg-block">
                    <img src="./assets/images/logo.png" alt="eCommerce HTML Template" />
                  </Link>
                </div>
                <div className="col-xxl-5 col-lg-5  d-lg-block">
                  <div className="input-group">
                    <input className="form-control form-control-color rounded bg-transparent " type="text"
                      placeholder="Search for products" />
                    <span className="input-group-append">
                      <button className="btn ms-n10" type="button">
                        <i className="fas fa-search"></i>
                      </button>
                    </span>
                  </div>
                </div>

                <div className="order-lg-last col-lg-5">
                  <div className="d-flex float-end">
                    <Link className="btn btn-outline-light fs-5 " >
                      <img src='./assets/images/user.svg' alt='' className="rounded-circle me-3" width={30} height={30} />
                      الدخول
                    </Link>

                    {/* <button
                      className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center d-lg-none navbar-toggler collapsed"
                      type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-default"
                      aria-controls="navbar-default" aria-label="Toggle navigation">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                        fill="currentColor" className="bi bi-text-indent-left text-primary"
                        viewBox="0 0 16 16">
                        <path
                          d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z">
                        </path>
                      </svg>
                    </button> */}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </header>

  );
}

export default Navbar;
