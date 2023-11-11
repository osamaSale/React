import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* import './App.css'; */
import { Navbar } from "./components/Navbar"
import { Home } from './components/Home';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
