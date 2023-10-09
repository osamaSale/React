import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const { user } = useSelector(store => store.users)
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand px-3 border-bottom">
            <button className="btn" type="button" data-bs-theme="dark">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
                        <li className="nav-item">
                            <Link className="nav-link text-light" aria-current="page" to="/home">Home</Link>
                        </li>
                    </ul>
                    {!user &&
                        <div className="d-flex">
                            <div className="hstack gap-3">
                                <Link to={"/"} className="btn btn-primary btn-sm"><i className="fa fa-sign-in h-15px me-2"></i>Login</Link>
                                <Link to={"/register"} className="btn btn-outline-primary btn-sm"><i className="fa fa-male h-15px me-2"></i>Register</Link>
                            </div>
                        </div>}


                    {user && <div className="d-flex">
                        <div className="hstack gap-3">
                            <div className="dropdown p-2">
                                <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={user && user.image} className="rounded-circle me-2" alt="" width={30} height={30} />
                                    {user && user.name}
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to={`/profile/${user._id}`}>
                                            <i className="fa fa-home h-15px me-3" ></i>Profile</Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <button className="dropdown-item" onClick={() => {
                                            localStorage.removeItem('user')
                                            navigate("/")
                                        }}>
                                            <i className="fa fa-sign-out h-15px me-3" ></i>  Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>}

                </div>
            </div>

        </nav>
    )
}
