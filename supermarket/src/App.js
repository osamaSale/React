import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from "./components/Navbar"
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Login } from './components/Account/Login';
import { Register } from './components/Account/Register';
import { About } from './components/About';
import { Contact } from './components/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
