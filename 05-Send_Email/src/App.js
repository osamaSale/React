import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactUs } from "./components/ContactUs";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div >
      <BrowserRouter>
        <ToastContainer theme="dark"/>
        <Routes>
          <Route path="/" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
