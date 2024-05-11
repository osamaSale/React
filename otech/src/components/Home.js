import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <section className="mt-lg-12 mb-lg-14 mb-8 mt-8">
                <div className="container-fluid">
                    <Carousel showThumbs={false}
                        infiniteLoop
                        showStatus
                        autoPlay >
                        <div >
                            <img src='assets/images/home.png' alt='' height={400} />
                        </div>
                        <div >
                            <img src='assets/images/home3.png' alt='' height={400} />
                        </div>
                    </Carousel>
                </div>
            </section>
            <section className="mt-lg-12 mb-lg-14 mb-8 mt-8">
                <button className='btn btn-secondary btn-lg fs-1 rounded-pill border-light mb-5' onClick={() => {
                    setShow(true)
                }}>منتجات</button>
                <div>
                    <p className='mt-2 fs-1 blockquote text-light'>تهدف إلى تزويد الأشخاص ب دورس تعليمية عبر دورات</p>
                    <p className=' fs-1 text-light'> تعليمية أونلاين لتقوية مهارات المشارك لسوق العمل التجاري</p>
                </div>
            </section>
            {show &&
                <section className="mt-lg-12 mb-lg-14 mb-8 mt-8">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md'>
                                <div class="card" >
                                    <img src="assets/images/p1.png" class="card-img-top" alt="..." height={300} />

                                </div>
                            </div>
                            <div className='col-md'>
                                <div class="card" >
                                    <img src="assets/images/p2.png" class="card-img-top" alt="..."  height={300}/>

                                </div>
                            </div>
                            <div className='col-md'>
                                <div class="card" >
                                    <img src="assets/images/p3.png" class="card-img-top" alt="..." height={300} />

                                </div>
                            </div>
                            <div className='col-md'>
                                <div class="card" >
                                    <img src="assets/images/p3.png" class="card-img-top" alt="..." height={300} />

                                </div>
                            </div>
                            <div className='col-md'>
                                <div class="card" >
                                    <img src="assets/images/p3.png" class="card-img-top" alt="..." height={300} />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
            <section className="mt-lg-12 mb-lg-14 mb-8 mt-8">
                <div className="container-fluid">
                    <Carousel showThumbs={false}
                        infiniteLoop
                        showStatus
                        autoPlay >
                        <div >
                            <img src='assets/images/home4.png' alt='' height={400} />
                        </div>
                        <div >
                            <img src='assets/images/home3.png' alt='' height={400} />
                        </div>
                    </Carousel>
                </div>
            </section>
        </div>
    );
}

export default Home;
