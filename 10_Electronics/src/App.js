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
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
