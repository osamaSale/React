import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllUsers } from './redux/api/users';
import { getAllBrands } from './redux/api/brands';
import { getAllDevices } from './redux/api/devices';
import { getAllProducts } from './redux/api/products';
import { getAllOrders } from './redux/api/orders';
import { getAllCarts } from './redux/api/carts';
import { getAllContact } from './redux/api/contact';
import { getAllNews } from './redux/api/news';
import { getAllWishlist } from './redux/api/wishlist';
import { Navbar } from './components/Navbar';
import { Login } from './components/Login';
import { Admin } from './components/Admin/Admin';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Register } from './components/Register';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { CartsShop } from './components/Shop/CartsShop';
import { WishlistShop } from './components/Shop/WishlistShop';
import { ShopWide } from './components/Shop/ShopWide';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
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
    <div>
      <ToastContainer />
      <Navbar update={update} />
      <main>
        <Routes>
          <Route path='/' element={<Home update={update} />} />
          <Route path='/about' element={<About update={update} />} />
          <Route path='/contact' element={<Contact update={update} />} />
          <Route path='/login' element={<Login update={update} />} />
          <Route path='/register' element={<Register update={update} />} />
          <Route path='/carts' element={<CartsShop update={update} />} />
          <Route path='/wishlist' element={<WishlistShop update={update} />} />
          <Route path='/shop-wide' element={<ShopWide update={update} />} />
          <Route path='/admin' element={<Admin update={update} />} />
        </Routes>
      </main>
      <Footer update={update} />
    </div>
  );
}

export default App;

