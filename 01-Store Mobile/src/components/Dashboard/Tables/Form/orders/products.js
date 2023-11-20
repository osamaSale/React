import React from 'react';

export const Products = ({ selectedListProduct }) => {
    const getTotalPrice = () => {
        let totalPrice = 0;
        selectedListProduct?.forEach((e) => {
            return totalPrice += e.editPrice
        })
        return totalPrice
    };
    let discount = 10
    let taxNum = 7
    let Discount = getTotalPrice() - (getTotalPrice() * discount / 100)
    let tax = getTotalPrice() * taxNum / 100
    let result = Discount - tax
    return (

        <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title fs-6">List Orders Products {selectedListProduct && selectedListProduct.length > 0 ? selectedListProduct.length : 0}</h4>
                        <button type="button" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" data-bs-dismiss="modal">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>


                    <div className="modal-body">
                        {selectedListProduct && selectedListProduct.length > 0 ?
                            <div className="table-responsive">
                                <table className="table table-hover text-nowrap">
                                    <thead>

                                        <tr className="card-header">
                                            <th scope="col">userId</th>
                                            <th scope="col">productid</th>
                                            <th scope="col">editPrice</th>
                                            <th scope="col">device</th>
                                            <th scope="col">color</th>
                                            <th scope="col">image</th>
                                            <th scope="col">quantity</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {selectedListProduct && selectedListProduct.map((row, index) => {
                                            return <tr key={index}>
                                                <td className='pt-2'>{row && row.userId}</td>
                                                <td className='pt-2'>{row && row.productid}</td>
                                                <td className='pt-2'>{row && row.editPrice}</td>
                                                <td className='pt-2'>{row && row.device}</td>
                                                <td className='pt-2'>{row && row.color}</td>
                                                <td className='pt-2'>
                                                    <img src={row && row.image} className="rounded-circle" alt="" height={25} />
                                                </td>
                                                <td className='pt-2'>{row && row.quantity}</td>



                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div> :
                            <div className="justify-content-md-center pt-4">
                                <h5 className='text-center'> Orders Is Empty </h5>
                            </div>}
                    </div>


                    <div className="modal-footer">
                     
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">Total Price:</p>
                                    <p className="mb-2">${getTotalPrice()}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">Discount:</p>
                                    <p className="mb-2 text-success">${Discount}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">TAX:</p>
                                    <p className="mb-2">${tax}</p>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">Total price:</p>
                                    <p className="mb-2 fw-bold">$ {result}</p>
                                </div>

                                
                            </div>
                        </div>

                  

                </div>
            </div>
        </div>

    );
}


