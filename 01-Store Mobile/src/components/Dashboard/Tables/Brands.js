import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Insert } from "./Form/brands/Insert"
import { Edit } from "./Form/brands/Edit"
import { deleteBrand } from "../../../redux/api/brands"

export const Brands = ({ update }) => {
    const { brands } = useSelector((store) => store.data)
    // ================ Add Brands =======================// 
    const [openBrand, setOpenBrand] = useState(false);
    // ================ Edit Brands ====================== //
    const [openEditBrand, setEditOpenBrand] = useState(false)
    const [selectedEdit, setSelectedEdit] = useState(null);
    let dispatch = useDispatch()
    return (
        <section className="container">
            <div className="row mb-5">
                <div className="col-md-12">
                    <div className="d-md-flex justify-content-between ">
                        <div className="mb-1">
                            <h4>Brands</h4>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link className="text-inherit">Number</Link>
                                    </li>
                                    <li className="breadcrumb-item ">{brands && brands.length > 0 ? brands.length : 0}</li>
                                </ol>
                            </nav>
                        </div>
                        <div>
                            <select className="form-select border">
                                <option >Status</option>
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
                                    <Link className="btn btn-primary w-100" onClick={() => setOpenBrand(true)}><i className="bi bi-plus me-2"></i>Add Brand</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0 px-2 py-5 main">
                            <section className="table__body">
                                {brands && brands.length > 0 ?
                                    <div className="table-responsive">
                                        <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                                            <thead className="bg-primary text-white">
                                                <tr>
                                                    <th scope="col">Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Actions</th>
                                                    <th scope="col">Remove</th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                {brands && brands.map((row, index) => {
                                                    return <tr key={index} className='border'>
                                                        <td >{row && row.id}</td>
                                                        <td >{row && row.name}</td>
                                                        <td >
                                                            <button type='submit' className="btn" onClick={() => {
                                                                setEditOpenBrand(true);
                                                                setSelectedEdit(row)
                                                            }}>
                                                                <i className="fa-solid fa-pen-to-square text-primary"></i>
                                                            </button>
                                                        </td>
                                                        <td >
                                                            <button className="btn" onClick={() => {
                                                                if (window.confirm("Are you sure you want to delete this?")) {
                                                                    dispatch(deleteBrand(row.id)).then(() => update())
                                                                }
                                                            }}>
                                                                <i className="fa-solid fa-trash icon-trash-2 text-danger"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    </div> :
                                    <div className="justify-content-md-center pt-4 pb-4">
                                        <h5 className='text-center'> Brands Is Empty </h5>
                                    </div>}
                            </section>
                        </div>

                    </div>

                </div>

            </div>
            {openBrand && (
                <Insert
                    openBrand={openBrand}
                    setOpenBrand={setOpenBrand}
                    update={update}
                />
            )}
            {openEditBrand && (
                <Edit
                    openEditBrand={openEditBrand}
                    setEditOpenBrand={setEditOpenBrand}
                    brand={selectedEdit}
                    update={update}
                />
            )}
        </section>
    );
}

