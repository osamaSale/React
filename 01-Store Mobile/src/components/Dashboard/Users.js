import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
export const Users = ({ update }) => {
    const { users } = useSelector((store) => store.data)
    // ================ Add User =======================// 
    const [openUser, setOpenUser] = useState(false);
    // ================ Edit User ====================== //
    const [openEditUser, setEditOpenUser] = useState(false)
    const [selectedEdit, setSelectedEdit] = useState(null);
    return (
        <section className="container">
            <div className="row mb-5">
                <div className="col-md-12">
                    <div className="d-md-flex justify-content-between ">
                        <div className="mb-2">
                            <h2>Users</h2>
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
                                    <Link to="add-product.html" className="btn btn-primary w-100"><i className="bi bi-plus me-2"></i>Add User</Link>
                                </div>
                            </div>
                        </div>
                        <div className=" main">
                            <section className="table__body">
                                {users && users.length > 0 ?
                                    <div className="table-responsive">
                                        <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                                            <thead className="bg-primary text-white">
                                                <tr>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Phone</th>
                                                    <th scope="col">Phone</th>
                                                    <th scope="col">Actions</th>
                                                    <th scope="col">Remove</th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                {users && users.map((row, index) => {
                                                    return <tr key={index} className='border'>
                                                        <td >
                                                            <img src={row && row.image} className="rounded-circle" alt="" height={35} width={35} />
                                                        </td>
                                                        <td >{row && row.name}</td>
                                                        <td >{row && row.email}</td>
                                                        <td >{row && row.phone}</td>
                                                        <td >{row && row.authorization}</td>
                                                        <td className='pt-1'>
                                                            <button type='submit' className="btn" onClick={() => {
                                                                setEditOpenUser(true);
                                                                setSelectedEdit(row)
                                                            }}>
                                                                <i className="fa-solid fa-pen-to-square text-primary"></i>
                                                            </button>
                                                        </td>
                                                        <td className='pt-1'>
                                                            <button className="btn" onClick={() => {
                                                                /* if (window.confirm("Are you sure you want to delete this?")) {
                                                                    dispatch(deleteUser(row.id)).then(() => update())
                                                                } */
                                                            }}>
                                                                <i className="fa-solid fa-trash icon-trash-2 text-danger"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    </div> :
                                    <div className="justify-content-md-center pt-4">
                                        <h5 className='text-center'> Users Is Empty </h5>
                                    </div>}
                            </section>
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


