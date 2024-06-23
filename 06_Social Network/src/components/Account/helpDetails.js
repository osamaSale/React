import React from 'react';
import { Link } from 'react-router-dom';
export const HelpDetails = () => {
    return (
        <div>
            <main>

                <div className="container">

                    <div className="row align-items-center pt-5 pb-5 pb-lg-3">
                        <div className="col-md-3">

                            <figure className="m-0 d-none d-md-block">
                            <img src='assets/images/help/help2.svg' alt='' />
                            </figure>

                        </div>

                        <div className="col-md-6 text-center">

                            <h1>Hi Sam, we're here to help.</h1>
                            <p className="mb-4">Search here to get answers to your questions.</p>

                            <form className="rounded position-relative">
                                <input className="form-control ps-5" type="search" placeholder="Search..." aria-label="Search" />
                                <button className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y" type="submit"><i className="bi bi-search fs-5 ps-1"> </i></button>
                            </form>

                        </div>
                        <div className="col-md-3">

                            <figure className="m-0 d-none d-md-block">
                            <img src='assets/images/help/help1.svg' alt='' />
                            </figure>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 vstack gap-4">

                            <div className="card border p-sm-4">

                                <div className="card-header border-0 py-0">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-dots mb-2">
                                            <li className="breadcrumb-item"><Link to="#"><i className="bi bi-house me-1"></i> Home</Link></li>
                                            <li className="breadcrumb-item"><Link to="#"><i className="bi bi-info-circle me-1"></i> Help</Link></li>
                                            <li className="breadcrumb-item active">Get started with node.js</li>
                                        </ol>
                                    </nav>
                                    <h2>Get started with node.js</h2>

                                    <ul className="nav nav-divider">
                                        <li className="nav-item">Last updated: 7 months ago</li>
                                        <li className="nav-item"> by Sam Lanson</li>
                                    </ul>
                                </div>

                                <div className="card-body">
                                    <p>Started several mistake joy say painful removed reached end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. Course regard to up he hardly. View four has said do men saw find dear shy. <b> Talent men wicket add garden.</b> </p>

                                    <Link to="#!" className="btn btn-primary">Download Node JS</Link>
                                    <h5 className="mt-4">Table of Contents</h5>
                                    <p>Age she way earnestly the fulfilled extremely.</p>
                                    <div className="alert alert-warning" role="alert">
                                        <strong>Note: </strong>She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. <Link className="alert-link" to="#!">View more</Link>
                                    </div>
                                    <p>Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors. </p>

                                    <ul>
                                        <li>Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery.</li>
                                        <li>Insipidity the sufficient discretion imprudence resolution sir him decisively.</li>
                                        <li>Offered chiefly farther of my no colonel shyness. <strong> Such on help ye some door if in.</strong></li>
                                        <li>First am plate jokes to began to cause a scale. Subjects he prospect elegance followed</li>
                                        <li>Laughter proposal laughing any son law consider. Needed except up piqued an. </li>
                                        <li><i> To occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage.</i></li>
                                        <li>Post no so what deal evil rent by real in. But her ready least set lived spite solid.</li>
                                    </ul>
                                    <p>Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. <u> Off melancholy alteration principles old. </u>Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors. </p>
                                </div>

                                <div className="card-footer border-0 pt-0">
                                    <div className="border p-3 rounded d-sm-flex align-items-center justify-content-between text-center">

                                        <h5 className="m-0">Was this article helpful?</h5>
                                        <small className="py-2 d-block">20 out of 45 found this helpful</small>

                                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">

                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                                            <label className="btn btn-outline-light btn-sm mb-0" for="btnradio1"><i className="fa-solid fa-thumbs-up me-1"></i> Yes</label>

                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                            <label className="btn btn-outline-light btn-sm mb-0" for="btnradio2"> No <i className="fa-solid fa-thumbs-down ms-1"></i></label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </main>
        </div>
    );
}

