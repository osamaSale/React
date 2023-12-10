import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from "@mui/joy/Modal";
import Stack from "@mui/joy/Stack";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import { useDispatch, useSelector } from "react-redux"
import { LoginSocialGoogle } from 'reactjs-social-login'
import { getAllUsers, login } from "../redux/api/users"
import { createCart, deleteCart, editCart } from '../redux/api/carts';
import { deleteWishlist } from '../redux/api/wishlist';
export const Modals = ({ loginShow, setLoginShow, update }) => {
    const { user, carts } = useSelector((store => store.data))
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordShown, setPasswordShown] = useState(false);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loginGoogle = async ({ provider, data }) => {
        let data1 = {
            name: data.name,
            email: data.email,
            image: data.picture,
            password: "12345",
            phone: "null",
            authorization: "user"
        }
        dispatch(login({ email: data1.email, password: data1.password })).then((res) => {
            if (res.payload.status === 200) {
                localStorage.setItem("user", JSON.stringify(res.payload.result))
                dispatch(getAllUsers())
                navigate('/')
                setLoginShow(false)
            }
            update()
        })
    }
    const getTotalPrice = () => {
        let totalPrice = 0;
        (user?.carts || []).forEach((e) => {
            return totalPrice += e.total
        })
        return totalPrice
    };
    return (
        <div>
            {/* Navbar */}
            <div className=" position-fixed bottom-0 w-100  z-1 shadow-lg d-block d-lg-none text-center">
                <div className="d-flex align-items-center ">

                    <div className="w-25 icon-hover py-4">
                        <button className="navbar-toggler collapsed d-lg-none" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                className="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                                <path
                                    d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>
                    </div>


                    <div className=" w-25 ms-2 py-4  icon-hover">
                        <Link to="#" className="text-inherit" /* onClick={checkMode} */>
                            <div className="text-center">
                                <div className="position-relative d-inline-block">
                                    <i className="bi bi-moon fs-4"></i>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="w-25 ms-2 py-4  icon-hover">
                        <Link className="text-inherit" onClick={() => setLoginShow(true)}>
                            <div className="text-center">
                                <div className="">
                                    <i className="bi bi-person-circle fs-4"></i>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div className="w-25 ms-2 py-4  icon-hover">
                        <Link className="text-inherit">
                            <div className="text-center">
                                <div className="">
                                    <i className="bi bi-archive fs-4"></i>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div className="w-25 ms-2 py-4  icon-hover">
                        <Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" to="#offcanvasExample" role="button"
                            aria-controls="offcanvasRight" className="text-inherit">
                            <div className="text-center">
                                <div className="">
                                    <i className="bi bi-cart2 fs-4"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-25 ms-2 py-4 icon-hover">
                        <Link className="text-inherit" >
                            <i className="bi bi-bookmark-heart fs-4"></i>
                        </Link>

                    </div>
                </div>
            </div>
            {/* Login */}
            <Modal open={loginShow} onClose={() => setLoginShow(false)}>
                <ModalDialog sx={{ width: '30%', p: 4 }}>
                    <ModalClose />
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent sx={{ fontSize: 14 }}> Enter your email to get started.</DialogContent>
                    <hr />
                    <Stack spacing={2}>
                        <FormControl>
                            <LoginSocialGoogle
                                client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                onResolve={loginGoogle}
                                onReject={(err) => {
                                    console.log(err)
                                }}>
                                <div className="d-grid">
                                    <Link className="btn  border">
                                        <img alt="Logo" src={'https://mobile-store1234.netlify.app/static/media/google.e12914ad8afda3f6f2e8.png'} className="h-15px me-2" width={20} height={15} />
                                        Sign in Google
                                    </Link>
                                </div>
                            </LoginSocialGoogle>
                        </FormControl>
                        <FormControl>
                            <FormLabel><i className="bi bi-envelope me-2"></i>Email</FormLabel>
                            <input type="email" className="form-control border" name='email' placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />

                        </FormControl>
                        <FormControl>
                            <FormLabel><i className="bi bi-key me-2"></i>Password</FormLabel>
                            <div className="password-field position-relative">
                                <input type={passwordShown ? "text" : "password"} placeholder="Enter Password" className="form-control border" onChange={(e) => setPassword(e.target.value)} />

                                <span onClick={() => { passwordShown === true ? setPasswordShown(false) : setPasswordShown(true) }}>
                                    {
                                        passwordShown === true ? <i id="passwordToggler" className="bi bi-eye"></i>
                                            : <i id="passwordToggler" className="bi bi-eye-slash"></i>
                                    }
                                </span>
                            </div>
                        </FormControl>

                        <FormControl>
                            <button type="button" className="btn btn-primary"
                                onClick={() => {
                                    setLoading(true)
                                    dispatch(login({ email: email, password: password })).then((res) => {

                                        if (res.payload.status === 200) {
                                            localStorage.setItem("user", JSON.stringify(res.payload.result))
                                            dispatch(getAllUsers())
                                            navigate('/')
                                            setLoginShow(false)
                                        }
                                    })
                                    update()
                                    setLoading(false)
                                }}
                            >
                                {loading === true ?
                                    <>
                                        <div className="spinner-border spinner-border-sm" role="status">
                                        </div> Please wait...
                                    </> :
                                    <span className="indicator-label"> Login</span>
                                }
                            </button>
                        </FormControl>
                        <Typography fontSize={14} textAlign={'center'}>
                            Already have an account? <Link onClick={() => setLoginShow(false)} to="/register">Sign in</Link>
                        </Typography>
                    </Stack>

                </ModalDialog>
            </Modal>

            {/* Cart */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <div className="text-start">
                        <h5 id="offcanvasRightLabel" className="mb-1 fs-4">Shop Cart</h5>
                        <small>Products : {user && user.carts && user.carts.length > 0 ? user && user.carts && user.carts.length : 0}</small>
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {user &&
                        <div className="">
                            {!user && <div className="alert alert-danger p-2" role="alert">
                                You must register now. Start <Link className="alert-link" onClick={() => setLoginShow(true)}>checkout now !</Link>
                            </div>}

                            <div className="d-flex justify-content-between mb-4">
                                <Link to="#!" className="btn btn-primary btn-sm"> Make Purchase </Link>
                                <span className='pt-1'>Result : $ {getTotalPrice()}</span>
                            </div>
                            <ul className="list-group list-group-flush">
                                {user && user.carts.map((row) => {
                                    return <li className="list-group-item py-3 ps-0 border-top border-bottom" key={row.id}>

                                        <div className="row align-items-center">

                                            <div className="col-6 col-md-6 col-lg-7">
                                                <div className="d-flex">
                                                    <img src={row.image} alt="Ecommerce" className="icon-shape icon-xxl" />
                                                    <div className="ms-3">

                                                        <Link to="../pages/shop-single.html" className="text-inherit">
                                                            <h6 className="mb-0">{row.name}</h6>
                                                        </Link>
                                                        <span>
                                                            <small className="text-muted me-1"> {row.device}</small> &&
                                                            <small className="text-muted"> {row.brand}</small>
                                                        </span>

                                                        <div className="mt-2 small lh-1">
                                                            <Link className="text-decoration-none text-inherit" onClick={() => {
                                                                dispatch(deleteCart(row.id)).then(() => {
                                                                    dispatch(getAllUsers())
                                                                    update()
                                                                })
                                                            }}>
                                                                <span className="me-1 align-text-bottom">
                                                                    <i className="bi bi-trash3"></i>Remove
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-4 col-md-3 col-lg-3">

                                                <div className="input-group input-spinner  ">
                                                    <button
                                                        disabled={row && row.quantity > 1 ? false : true}
                                                        className="button-minus btn  btn-sm"
                                                        onClick={() => {
                                                            if (row.quantity > 1) {
                                                                let quantity = row.quantity - 1
                                                                let data = {
                                                                    id: row.id,
                                                                    userId: user.id,
                                                                    productid: row.productid,
                                                                    quantity: quantity
                                                                }
                                                                dispatch(editCart(data)).then(() => {
                                                                    dispatch(getAllUsers())
                                                                    update()

                                                                })
                                                            }
                                                        }}>
                                                        -
                                                    </button>
                                                    <span className='quantity-field form-control-sm form-input'>{row && row.quantity}</span>
                                                    <button className="button-plus btn btn-sm"
                                                        onClick={() => {
                                                            if (row.quantity < 10) {
                                                                let quantity = row.quantity + 1

                                                                let data = {
                                                                    id: row.id,
                                                                    userId: user.id,
                                                                    productid: row.productid,
                                                                    quantity: quantity
                                                                }
                                                                dispatch(editCart(data)).then(() => {
                                                                    dispatch(getAllUsers())
                                                                    update()
                                                                })
                                                            }
                                                        }}
                                                    >
                                                        +
                                                    </button>

                                                </div>

                                            </div>

                                            <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                <span className="fw-bold text-danger">${row.total}</span>
                                                <div className="text-decoration-line-through text-muted small">$ {row.price}</div>
                                            </div>
                                        </div>

                                    </li>
                                })}


                            </ul>



                        </div>}
                </div>
            </div>
            {/* Wishlist */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel1">
                <div className="offcanvas-header border-bottom">
                    <div className="text-start">
                        <h5 id="offcanvasRightLabel1" className="mb-1 fs-4">Wishlist</h5>
                        <small>Result : $ {getTotalPrice()}</small>
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {user &&
                        <div className="">
                            {!user && <div className="alert alert-danger p-2" role="alert">
                                You must register now. Start <Link className="alert-link" onClick={() => setLoginShow(true)}>checkout now !</Link>
                            </div>}


                            <ul className="list-group list-group-flush">
                                {user && user.wishlist.map((row) => {
                                    return <li className="list-group-item py-3 ps-0 border-top border-bottom" key={row.id}>

                                        <div className="row align-items-center">

                                            <div className="col-6 col-md-6 col-lg-7">
                                                <div className="d-flex">
                                                    <img src={row.image} alt="Ecommerce" className="icon-shape icon-xxl" />
                                                    <div className="ms-3">

                                                        <Link className="text-inherit">
                                                            <h6 className="mb-0">{row.name}</h6>
                                                        </Link>
                                                        <span>
                                                            <small className="text-muted me-1"> {row.device}</small> &&
                                                            <small className="text-muted"> {row.brand}</small>
                                                        </span>

                                                        <div className="mt-2 small lh-1 text-primary">
                                                            {row.stock}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-2 col-md-2 col-lg-2">
                                                <span className="fw-bold text-danger">${row.priceDiscount}</span>
                                                <div className="text-decoration-line-through text-muted small">$ {row.price}</div>
                                            </div>
                                            <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                                                <div className="input-group input-spinner">
                                                    <button type='submit' className="btn btn-primary btn-sm mb-2"
                                                        disabled={carts && carts.find(up => (up.productid === row.productid))}
                                                        onClick={() => {
                                                            let data = {
                                                                userId: user.id,
                                                                productid: row.productid,
                                                                quantity: 1
                                                            }
                                                            dispatch(createCart(data)).then((res) => {
                    
                                                                dispatch(getAllUsers())
                                                                update()
                                                            })
                                                        }}
                                                    >
                                                        {carts && carts.find(c => c.productid === row.productid) ?
                                                            <><i className="bi bi-cart-check"></i> In Cart</>
                                                            : <><i className="bi bi-plus-lg"></i> Add Cart </>}
                                                    </button>
                                                    <Link className="text-decoration-none text-danger" onClick={() => {
                                                        dispatch(deleteWishlist(row.id)).then(() => {
                                                            dispatch(getAllUsers())
                                                            update()
                                                        })
                                                    }}>
                                                        <span className="me-1 align-text-bottom">
                                                            <i className="bi bi-trash3 me-1"></i>Remove
                                                        </span>
                                                    </Link>
                                                </div>

                                            </div>

                                        </div>

                                    </li>
                                })}


                            </ul>



                        </div>}
                </div>
            </div>
        </div>
    );
}

