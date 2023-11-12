import React from 'react';

export const Contact = () => {
    return (
        <div>
             <section className="my-lg-15 my-8">
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                        <img src="../assets/images/svg-graphics/login.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                        <div className="mb-lg-9 mb-5">
                            <h1 className="mb-1 h2 fw-bold">Contact Us</h1>
                            <p>Do you have any questions? Please do not hesitate to contact us directly. </p>
                        </div>
                        <div className="row g-4">
                     
                            <div className="col-12">
                                <input type="email" className="form-control border"  placeholder="Name" />
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control border"  placeholder="Email" />
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control border"  placeholder="Email" />
                            </div>
                          
                            <div className="col-12 d-grid"> <button type="submit" className="btn btn-primary">Send</button>
                            </div>
                      
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

