import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Navbar } from "./components/Navbar"
import { Dashboard } from "./components/Dashboard/Dashboard"
import { getAllUsers } from './redux/api/users';
import { getAllBrands } from './redux/api/brands';
import { getAllDevices } from './redux/api/devices';
import { getAllProducts } from './redux/api/products';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Login } from './components/Account/Login';
import { Register } from './components/Account/Register';
import { getAllContact } from './redux/api/contact';
import { Shop } from './components/Shop/Shop';
import { ShopSingle } from './components/Shop/ShopSingle';
import { getAllNews } from './redux/api/news';
import { getAllWishlist } from './redux/api/wishlist';
import { getAllCarts } from './redux/api/carts';
import { getAllOrders } from './redux/api/orders';
import { BackTop } from './components/BackTop';
import { Modal } from 'bootstrap'
import { Modals } from './components/Modals'
function App() {
  const [modal, setModal] = useState(null)
  const dispatch = useDispatch()
  const exampleModal = useRef()
  useEffect(() => {
    setModal(new Modal(exampleModal.current))
    update()
  }, [])
  const update = () => {
    dispatch(getAllUsers())
    dispatch(getAllBrands())
    dispatch(getAllDevices())
    dispatch(getAllProducts())
    dispatch(getAllContact())
    dispatch(getAllNews())
    dispatch(getAllWishlist())
    dispatch(getAllCarts())
    dispatch(getAllOrders())
  }
  return (
    <div className="app" >
      <ToastContainer />
      <Modals update={update} exampleModal={exampleModal} modal={modal} />
      <Navbar update={update} exampleModal={exampleModal} modal={modal}/>
      <main>
        <Routes>
          <Route path='/' element={<Home update={update} />} />
          <Route path='/about' element={<About update={update} />} />
          <Route path='/contact' element={<Contact update={update} />} />
          <Route path='/login' element={<Login update={update} />} />
          <Route path='/register' element={<Register update={update} />} />
          <Route path='/shop' element={<Shop update={update} />} />
          <Route path='/shop/single/:id' element={<ShopSingle update={update} />} />
          <Route path='/dashboard' element={<Dashboard update={update} />} />
        </Routes>
      </main>
      <Footer />
      <BackTop />
    </div>
  );
}

export default App;