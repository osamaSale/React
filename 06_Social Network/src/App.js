import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Index } from './components/Index';
import { Navbar } from './components/Navbar';
import { Messaging } from './components/Messaging';
import { MyProfile } from './components/Profile/MyProfile';
import useLocalStorage from "react-use-localstorage";
function App() {
  // Check user set theme mode...
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Create theme mode state...
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  return (
      <div className='app' data-bs-theme={theme}>
        <Navbar  theme={theme} setTheme={setTheme}/>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/messaging' element={<Messaging />} />
          <Route path='/myProfile' element={<MyProfile />} />
        </Routes>
      </div>
  );
}

export default App;
