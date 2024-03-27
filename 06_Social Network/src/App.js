import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Index } from './components/Index';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
