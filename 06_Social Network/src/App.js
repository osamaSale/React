import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Index } from './components/Index';
import { Navbar } from './components/Navbar';
import { Messaging } from './components/Messaging';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/messaging' element={<Messaging />} />
      </Routes>
    </div>
  );
}

export default App;
