import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, addItem, deleteItem } from "../redux/api/inventory";
import { Link } from "react-router-dom";

const Inventory = () => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.users.inventory); // Get full inventory slice
  const items = inventory?.items || []; // Ensure items exists

  return (
    <main className="main-content-wrapper">
      <section className="container">
        <div className="row">
          <div className="col-xl-12 col-12 mb-5">
            <div className="card h-100 card-lg">
              <div className="px-2 py-6">
                <div className="row d-flex justify-content-between">
                  <div className="col-lg-5 col-md-6 col-12 mb-2 mb-lg-0">
                    <div className="input-group">
                      <input
                        className="form-control border"
                        type="search"
                        placeholder="Search for products"
                      />
                      <button
                        className="btn btn-primary"
                        type="button"
                        id="button-addon2"
                      >
                        <i className="bi bi-search"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-end">
                    <Link
                      to="/add"
                      className="btn btn-primary w-100"
                    >
                      Add Product
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Sell</th>
                        <th>Assets</th>
                        <th>Deportation</th>
                        <th>Output</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inventory &&
                        inventory.map((e) => {
                          return (
                            <tr key={e.id}>
                              <td>{e.item_name}</td>
                              <td>{e.quantity}</td>
                              <td>{e.sell}</td>
                              <td>{e.assets}</td>
                              <td>{e.deportation}</td>
                              <td>{e.output}</td>

                              <td>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="text-reset"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bi bi-three-dots-vertical fs-5"></i>
                                  </Link>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        <i className="bi bi-trash me-3"></i>
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item" to="#">
                                        <i className="bi bi-pencil-square me-3 "></i>
                                        Edit
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className=" border-top d-md-flex justify-content-between align-items-center px-6 py-6">
                <span>Showing 1 to 8 of 12 entries</span>
                <nav className="mt-2 mt-md-0">
                  <ul className="pagination mb-0 ">
                    <li className="page-item disabled">
                      <Link className="page-link border" to="#!">
                        Previous
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link active" to="#!">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#!">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#!">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#!">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Inventory;
