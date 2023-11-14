import React from 'react';
import { Link } from 'react-router-dom';

export const Wishlist = () => {
    return (
        <div>
         
            <section className="mb-lg-14 mb-8 mt-10">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mb-8">     
                                <h1 className="mb-1">My Wishlist</h1>
                                <p>There are 5 products in this wishlist.</p>
                            </div>
                            <div>
                                <div className="table-responsive">
                                    <table className="table text-nowrap table-with-checkbox">
                                        <thead className="">
                                            <tr>
                                               
                                                <th>Image</th>
                                                <th>Product</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                
                                                <td className="align-middle">
                                                    <Link to="#"><img src="../assets/images/products/product-img-18.jpg"
                                                        className="icon-shape icon-xxl" alt="" /></Link>
                                                </td>
                                                <td className="align-middle">
                                                    <div>
                                                        <h5 className="fs-6 mb-0"><Link to="#" className="text-inherit">Organic
                                                            Banana</Link></h5>
                                                        <small>$.98 / lb</small>
                                                    </div>
                                                </td>
                                                <td className="align-middle">$35.00</td>
                                                <td className="align-middle"><span className="badge bg-success">In Stock</span></td>
                                                <td className="align-middle">
                                                    <div className="btn btn-primary btn-sm">Add to Cart</div>
                                                </td>
                                                <td className="align-middle">
                                                    <Link to="#" className="text-muted" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Delete">
                                                        <i className="bi bi-trash"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                
                                                <td className="align-middle">
                                                    <Link to="#"><img src="../assets/images/products/product-img-17.jpg"
                                                        className="icon-shape icon-xxl" alt="" /></Link>
                                                </td>
                                                <td className="align-middle">
                                                    <div>
                                                        <h5 className="fs-6 mb-0"><Link to="#" className="text-inherit">Fresh
                                                            Kiwi</Link></h5>
                                                        <small>4 no</small>
                                                    </div>
                                                </td>
                                                <td className="align-middle">$20.97</td>
                                                <td className="align-middle"><span className="badge bg-danger">Out of Stock</span>
                                                </td>
                                                <td className="align-middle">
                                                    <div className="btn btn-primary btn-sm">Add to Cart</div>
                                                </td>
                                                <td className="align-middle">
                                                    <Link to="#" className="text-muted" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Delete">
                                                        <i className="bi bi-trash"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                               
                                                <td className="align-middle">
                                                    <Link to="#"><img src="../assets/images/products/product-img-16.jpg"
                                                        className="icon-shape icon-xxl" alt="" /></Link>
                                                </td>
                                                <td className="align-middle">
                                                    <div>
                                                        <h5 className="fs-6 mb-0"><Link to="#" className="text-inherit">Golden
                                                            Pineapple</Link></h5>
                                                        <small>2 no</small>
                                                    </div>
                                                </td>
                                                <td className="align-middle">$35.00</td>
                                                <td className="align-middle"><span className="badge bg-success">In Stock</span></td>
                                                <td className="align-middle">
                                                    <div className="btn btn-primary btn-sm">Add to Cart</div>
                                                </td>
                                                <td className="align-middle">
                                                    <Link to="#" className="text-muted" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Delete">
                                                        <i className="bi bi-trash"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                               
                                                <td className="align-middle">
                                                    <Link to="#"><img src="../assets/images/products/product-img-19.jpg"
                                                        className="icon-shape icon-xxl" alt="" /></Link>
                                                </td>
                                                <td className="align-middle">
                                                    <div>
                                                        <h5 className="fs-6 mb-0"><Link to="#" className="text-inherit">BeatRoot</Link>
                                                        </h5>
                                                        <small>1 kg</small>
                                                    </div>
                                                </td>
                                                <td className="align-middle">$29.00</td>
                                                <td className="align-middle"><span className="badge bg-success">In Stock</span></td>
                                                <td className="align-middle">
                                                    <div className="btn btn-primary btn-sm">Add to Cart</div>
                                                </td>
                                                <td className="align-middle">
                                                    <Link to="#" className="text-muted" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Delete">
                                                        <i className="bi bi-trash"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                           
                                                <td className="align-middle">
                                                    <Link to="#"><img src="../assets/images/products/product-img-15.jpg"
                                                        className="icon-shape icon-xxl" alt="" /></Link>
                                                </td>
                                                <td className="align-middle">
                                                    <div>
                                                        <h5 className="fs-6 mb-0"><Link to="#" className="text-inherit">Fresh
                                                            Apple</Link></h5>
                                                        <small>2 kg</small>
                                                    </div>
                                                </td>
                                                <td className="align-middle">$70.00</td>
                                                <td className="align-middle"><span className="badge bg-success">In Stock</span></td>
                                                <td className="align-middle">
                                                    <div className="btn btn-primary btn-sm">Add to Cart</div>
                                                </td>
                                                <td className="align-middle">
                                                    <Link to="#" className="text-muted" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Delete">
                                                        <i className="bi bi-trash"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


