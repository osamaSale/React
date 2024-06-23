import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Index } from './components/Index';
import { Navbar } from './components/Navbar';
import { Albums } from './components/Pages/Albums';
import { Messaging } from './components/Pages/Messaging';
import { MyProfile } from './components/Profile/MyProfile';
import useLocalStorage from "react-use-localstorage";
import { MyProfileAbout } from './components/Profile/MyProfile-About';
import { MyProfileConnections } from './components/Profile/MyProfile-Connections';
import { MyProfileMedia } from './components/Profile/MyProfile-Media';
import { MyProfileVideos } from './components/Profile/MyProfile-Videos';
import { MyProfileEvents } from './components/Profile/MyProfile-Events';
import { MyProfileActivity } from './components/Profile/MyProfile-Activity';
import { Settings } from './components/Account/Settings';
import { Modals } from './components/Modals';
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
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/albums' element={<Albums />} />
        <Route path='/messaging' element={<Messaging />} />
        <Route path='/settings' element={<Settings />} />
        {/* 
          <Route path='/myProfile' element={<MyProfile />} />
          <Route path='/myProfile-about' element={<MyProfileAbout />} />
          <Route path='/myProfile-connections' element={<MyProfileConnections />} />
          <Route path='/myProfile-media' element={<MyProfileMedia />} />
          <Route path='/myProfile-videos' element={<MyProfileVideos />} />
          <Route path='/myProfile-events' element={<MyProfileEvents />} />

          <Route path='/myProfile-activity' element={<MyProfileActivity />} /> */}
        
      </Routes>
      <Modals />
    </div>
  );
}

export default App;
