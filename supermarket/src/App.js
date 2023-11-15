import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from "./components/Navbar"
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Login } from './components/Account/Login';
import { Register } from './components/Account/Register';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Shop } from './components/shop/Shop';
import { Wishlist } from './components/shop/Wishlist';
import { Cart } from './components/shop/Cart';
import { Dashboard } from './components/Dashboard/Dashboard';
function App() {
    const location = useLocation();
    console.log(location);
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
