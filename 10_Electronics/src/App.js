import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navber } from "./components/Navber";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Shop } from "./components/Shop";
import { Categories } from "./components/Categories";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Offcanvas } from "./components/Offcanvas";
import { Products } from "./components/Dashboard/Products";
import { Sales } from "./components/Dashboard/Sales";
import { Payouts } from "./components/Dashboard/Payouts";
import { Purchases } from "./components/Dashboard/Purchases";
import { Favorites } from "./components/Dashboard/Favorites";
import { Settings } from "./components/Dashboard/Settings";
import { Orders } from "./components/User/Orders";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navber />
        <Offcanvas/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/categories" element={<Categories />}/>
          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/sales" element={<Sales />}/>
          <Route path="/payouts" element={<Payouts />}/>
          <Route path="/purchases" element={<Purchases />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/settings" element={<Settings />}/>

          {/* User */}
           <Route path="/orders" element={<Orders />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
