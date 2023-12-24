import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

export const NavbarVertical = () => {
    const { user } = useSelector(store => store.data)
    const location = useLocation();
    const [mode, setTheme] = useState('light' ? "dark" : "light")
    const checkMode = () => {
        localStorage.setItem("color-scheme", mode)
        if (localStorage.getItem('color-scheme')) {
            let scheme = localStorage.getItem('color-scheme');

            const LTCSS = document.querySelectorAll('link[class=css-lt]');
            const DKCSS = document.querySelectorAll('link[class=css-dk]');

            [...LTCSS].forEach((link) => {
                link.media = (scheme === 'light') ? 'all' : 'not all';
                setTheme(link.media)
            });

            [...DKCSS].forEach((link) => {
                link.media = (scheme === 'dark') ? 'all' : 'not all';
                setTheme(link.media)
            });
        }
        /*    const m =  window.matchMedia('(prefers-color-scheme: light)');
           console.log(m)  
           let element = document.body
             element.dataset.bsTheme = element.dataset.bsTheme === "light" ? "dark" : "light"
             setTheme(element.dataset.bsTheme) */
    }

    if (location.pathname === "/signup" || location.pathname === "/") { return }
    return (
        <nav className="navigation d-flex flex-column text-center navbar navbar-light hide-scrollbar">

            <Link to="index.html" title="Messenger" className="d-none d-xl-block mb-6">

                <img src='./assets/images/bootstrap.svg' alt='' width={40} height={40} />


            </Link>


            <ul className="d-flex nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center align-items-center w-100 py-4 py-lg-2 px-lg-3" role="tablist">




                <li className="nav-item">
                    <Link to={"/createChat"} className={location.pathname === "/createChat" ? "nav-link active py-0 py-lg-8" : "nav-link py-0 py-lg-8"} >
                        <div className="icon icon-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                        </div>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className={location.pathname === "/friends" ? "nav-link active py-0 py-lg-8" : "nav-link py-0 py-lg-8"} to={'/friends'}>
                        <div className="icon icon-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className={location.pathname === "/chats" ? "nav-link active py-0 py-lg-8" : "nav-link py-0 py-lg-8"} to={'/chats'}>
                        <div className="icon icon-xl icon-badged">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            <div className="badge badge-circle bg-primary">
                                <span>4</span>
                            </div>
                        </div>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className={location.pathname === "/notifications" ? "nav-link active py-0 py-lg-8" : "nav-link py-0 py-lg-8"} to={'/notifications'} >
                        <div className="icon icon-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        </div>
                    </Link>
                </li>


                <li className="nav-item d-none d-xl-block flex-xl-grow-1">
                    <Link className={location.pathname === "/support" ? "nav-link active py-0 py-lg-8" : "nav-link py-0 py-lg-8"} to={'/support'} >
                        <div className="icon icon-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                        </div>
                    </Link>
                </li>
                <li className="nav-item d-none d-xl-block flex-xl-grow-1">
                    <Link className={location.pathname === "/support" ? "nav-link active py-0 py-lg-8" : "nav-link py-0 py-lg-8"} to={'/support'} onClick={checkMode}>
                        <div className="icon icon-xl">
                            {mode === 'dark' ?
                                <div>
                                    <i className="bi bi-brightness-high fs-4"></i>
                                </div> :
                                <div>
                                    <i className="bi bi-moon fs-4"></i>
                                </div>
                            }
                        </div>
                    </Link>
                </li>



                <li className="nav-item">
                    <Link className={location.pathname === "/settings" ? "nav-link active py-0 py-lg-8" : "nav-link py-0 py-lg-8"} to={'/settings'}>
                        <div className="icon icon-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        </div>
                    </Link>
                </li>

                <li className="nav-item d-none d-xl-block">
                    <Link to="#" className="nav-link p-0 mt-lg-2" data-bs-toggle="modal" data-bs-target="#modal-profile">
                        {user && <div className="avatar avatar-online mx-auto">
                            <img className="avatar-img" src={user && user.image} alt="" />
                        </div>}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}