import React from 'react';
import { Link } from 'react-router-dom';

export const Products = () => {
    return (
        <section className="container">
            <div className="row mb-5">
                <div className="col-md-12">
                    <div className="d-md-flex justify-content-between ">
                        <div className="mb-2">
                            <h2>Products</h2>

                        </div>
                        <div>
                            <select className="form-select border">
                                <option selected="">Status</option>
                                <option value="1">Active</option>
                                <option value="2">Deactive</option>
                                <option value="3">Draft</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 col-12 mb-5">
                    <div className="card h-100 card-lg">
                        <div className="px-2 py-6">
                            <div className="row d-flex justify-content-between">
                                <div className="col-lg-5 col-md-6 col-12 mb-2 mb-lg-0">
                                    <div className="input-group">
                                        <input className="form-control border" type="search"
                                            placeholder="Search for products" />
                                        <button className="btn btn-primary" type="button" id="button-addon2"><i
                                            className="bi bi-search"></i></button>
                                    </div>
                                </div>
                                <div className="col-md-2 d-flex justify-content-end">
                                    <Link to="add-product.html" className="btn btn-primary w-100">Add Product</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table
                                    className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                                    <thead className="bg-primary text-white">
                                        <tr>

                                            <th>Image</th>
                                            <th>Proudct Name</th>
                                            <th>Category</th>
                                            <th>Status</th>
                                            <th>Price</th>
                                            <th>Create at</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td>
                                                <img src="../assets/images/products/product-img-1.jpg" alt="" className="icon-shape icon-md" />
                                            </td>
                                            <td>Haldiram's Sev Bhujia</td>
                                            <td>Snack &amp; Munchies</td>

                                            <td>
                                                <span className="badge bg-light-primary text-dark-primary">Active</span>
                                            </td>
                                            <td>$18.00</td>
                                            <td>24 Nov 2022</td>
                                            <td>
                                                <div className="dropdown">
                                                    <Link to="#"  className="text-reset" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i className="bi bi-three-dots-vertical fs-5"></i>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-trash me-3"></i>Delete</Link></li>
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-pencil-square me-3 "></i>Edit</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <Link to="#!"> <img src="../assets/images/products/product-img-2.jpg"
                                                    alt="" className="icon-shape icon-md" /></Link>
                                            </td>
                                            <td><Link to="#!" className="text-reset">NutriChoice Digestive</Link></td>
                                            <td>Bakery &amp; Biscuits</td>

                                            <td>
                                                <span className="badge bg-light-primary text-dark-primary">Active</span>
                                            </td>
                                            <td>$24.00</td>
                                            <td>20 Nov 2022</td>
                                            <td>
                                                <div className="dropdown">
                                                    <Link to="#" className="text-reset" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i className="bi bi-three-dots-vertical fs-5"></i>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-trash me-3"></i>Delete</Link></li>
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-pencil-square me-3 "></i>Edit</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <Link to="#!"> <img src="../assets/images/products/product-img-3.jpg"
                                                    alt="" className="icon-shape icon-md" /></Link>
                                            </td>
                                            <td>Cadbury 5 Star Chocolate</td>
                                            <td>Snack &amp; Munchies</td>

                                            <td>
                                                <span className="badge bg-light-primary text-dark-primary">Active</span>
                                            </td>
                                            <td>$3.00</td>
                                            <td>14 Nov 2022</td>
                                            <td>
                                                <div className="dropdown">
                                                    <Link to="#" className="text-reset" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i className="bi bi-three-dots-vertical fs-5"></i>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-trash me-3"></i>Delete</Link></li>
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-pencil-square me-3 "></i>Edit</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <Link to="#!"> <img src="../assets/images/products/product-img-4.jpg"
                                                    alt="" className="icon-shape icon-md" /></Link>
                                            </td>
                                            <td>Onion Flavour Potato</td>
                                            <td>Snack &amp; Munchies</td>

                                            <td>
                                                <span className="badge bg-light-warning text-dark-warning">Draft</span>
                                            </td>
                                            <td>$13.00</td>
                                            <td>08 Nov 2022</td>
                                            <td>
                                                <div className="dropdown">
                                                    <Link to="#" className="text-reset" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i className="bi bi-three-dots-vertical fs-5"></i>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-trash me-3"></i>Delete</Link></li>
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-pencil-square me-3 "></i>Edit</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <Link to="#!"> <img src="assets/images/products/product-img-5.jpg"
                                                    alt="" className="icon-shape icon-md" /></Link>
                                            </td>
                                            <td>Salted Instant Popcorn</td>
                                            <td>Instant Food</td>

                                            <td>
                                                <span className="badge bg-light-warning text-dark-warning">Draft</span>
                                            </td>
                                            <td>$9.00</td>
                                            <td>09 Nov 2022</td>
                                            <td>
                                                <div className="dropdown">
                                                    <Link to="#" className="text-reset" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i className="bi bi-three-dots-vertical fs-5"></i>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-trash me-3"></i>Delete</Link></li>
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-pencil-square me-3 "></i>Edit</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <Link to="#!"> <img src="../assets/images/products/product-img-6.jpg"
                                                    alt="" className="icon-shape icon-md" /></Link>
                                            </td>
                                            <td>Blueberry Greek Yogurt</td>
                                            <td>Dairy, Bread &amp; Eggs</td>

                                            <td>
                                                <span className="badge bg-light-danger text-dark-danger">Deactive</span>
                                            </td>
                                            <td>$11.00</td>
                                            <td>02 Nov 2022</td>
                                            <td>
                                                <div className="dropdown">
                                                    <Link to="#" className="text-reset" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i className="bi bi-three-dots-vertical fs-5"></i>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-trash me-3"></i>Delete</Link></li>
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-pencil-square me-3 "></i>Edit</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <Link to="#!"> <img src="../assets/images/products/product-img-7.jpg"
                                                    alt="" className="icon-shape icon-md" /></Link>
                                            </td>
                                            <td>Britannia Cheese Slices</td>
                                            <td>Dairy, Bread &amp; Eggs</td>

                                            <td>
                                                <span className="badge bg-light-success text-dark-success">Active</span>
                                            </td>
                                            <td>$24.00</td>
                                            <td>15 Oct 2022</td>
                                            <td>
                                                <div className="dropdown">
                                                    <Link to="#" className="text-reset" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i className="bi bi-three-dots-vertical fs-5"></i>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-trash me-3"></i>Delete</Link></li>
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-pencil-square me-3 "></i>Edit</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <Link to="#!"> <img src="../assets/images/products/product-img-8.jpg"
                                                    alt="" className="icon-shape icon-md" /></Link>
                                            </td>
                                            <td>Blueberry Greek Yogurt</td>
                                            <td>Instant Food</td>

                                            <td>
                                                <span className="badge bg-light-danger text-dark-danger">Deactive</span>
                                            </td>
                                            <td>$12.00</td>
                                            <td>24 Oct 2022</td>
                                            <td>
                                                <div className="dropdown">
                                                    <Link to="#" className="text-reset" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i className="bi bi-three-dots-vertical fs-5"></i>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-trash me-3"></i>Delete</Link></li>
                                                        <li><Link className="dropdown-item" to="#"><i
                                                            className="bi bi-pencil-square me-3 "></i>Edit</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div className=" border-top d-md-flex justify-content-between align-items-center px-6 py-6">
                            <span>Showing 1 to 8 of 12 entries</span>
                            <nav className="mt-2 mt-md-0">
                                <ul className="pagination mb-0 ">
                                    <li className="page-item disabled"><Link className="page-link border" to="#!">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link active" to="#!">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#!">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#!">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#!">Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}


