import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProducts } from '../../../redux/api/products';
import { Insert } from "./Form/products/Insert"
import { Edit } from "./Form/products/Edit"

export const Products = ({ update }) => {
    const { products } = useSelector((store) => store.data)
    // ================ Add User =======================// 
    const [openProduct, setOpenProduct] = useState(false);
    const [openEditProduct, setOpenEditProduct] = useState(false)
    const [selectedEdit, setSelectedEdit] = useState(null);
    const dispatch = useDispatch()
    return (
        <section className="container">
            <div className="row mb-5">
                <div className="col-md-12">
                    <div className="d-md-flex justify-content-between ">
                        <div className="mb-1">
                            <h4>Products</h4>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link className="text-inherit">Number</Link>
                                    </li>
                                    <li className="breadcrumb-item ">{products && products.length > 0 ? products.length : 0}</li>
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
                                    <Link className="btn btn-primary w-100" onClick={() => setOpenProduct(true)}><i className="bi bi-plus me-2"></i>Add Product</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0 px-2 py-5 main">
                            <section className="table__body">
                                {products && products.length > 0 ?
                                    <div className="table-responsive">
                                        <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                                            <thead className="bg-primary text-white">
                                                <tr>

                                                    <th scope="col">Image</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Brand</th>
                                                    <th scope="col">Device</th>
                                                    <th scope="col">Color</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Discount</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">Actions</th>
                                                    <th scope="col">Remove</th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                {products && products.map((row, index) => {
                                                    return <tr key={index} className='border'>

                                                        <td >
                                                            <img src={row && row.image} className="rounded-circle" alt="" height={35} width={35} />
                                                        </td>
                                                        <td >{row && row.name}</td>
                                                        <td >{row && row.brand}</td>
                                                        <td >{row && row.device}</td>
                                                        <td >{row && row.color}</td>
                                                        <td >{row && row.price}</td>
                                                        <td >{row && row.priceDiscount}</td>
                                                        <td >{row && row.stock}</td>
                                                        <td >
                                                            <button type='submit' className="btn" onClick={() => {
                                                                setOpenEditProduct(true);
                                                                setSelectedEdit(row)
                                                            }}>
                                                                <i className="fa-solid fa-pen-to-square text-primary"></i>
                                                            </button>
                                                        </td>
                                                        <td >
                                                            <button className="btn" onClick={() => {
                                                                if (window.confirm("Are you sure you want to delete this?")) {
                                                                    dispatch(deleteProducts(row.id)).then(() => update())
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
                                        <h5 className='text-center'> Products Is Empty </h5>
                                    </div>}
                            </section>
                        </div>

                    </div>

                </div>

            </div>
            {openProduct && (
                <Insert
                    openProduct={openProduct}
                    setOpenProduct={setOpenProduct}
                    update={update}
                />
            )}
            {openEditProduct &&
                <Edit
                    openEditProduct={openEditProduct}
                    setOpenEditProduct={setOpenEditProduct}
                    product={selectedEdit}
                    update={update}
                />
            }
        </section>
    );
}
