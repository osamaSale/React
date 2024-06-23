import React from 'react';

export const Offline = () => {
    return (
        <main className="py-5">
            <div className="h-100px d-none d-lg-block"></div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-center ">

                    <div className="col-lg-6 mx-auto ">
                        <figure className="m-10">
                            <img src='assets/images/offline/offline.svg' alt='' />

                        </figure>

                        <h1 className="mb-2 display-5 mt-5">Hang on! We are under maintenance!</h1>
                        <p className="col-sm-8 mx-auto">We apologize for any inconvenience caused. We've almost done.</p>
                    </div>

                </div>

            </div>


        </main>
    );
}

