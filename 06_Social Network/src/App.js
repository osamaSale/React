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
import { CreatePage } from './components/Account/CreatePage';
import { Notifications } from './components/Account/Notifications';
import { Help } from './components/Account/Help';
import { HelpDetails } from './components/Account/helpDetails';
import { Error } from './components/Account/Error';
import { Offline } from './components/Account/Offline';
import { SignIn } from './components/Account/Authentication/SignIn';
import { SignUp } from './components/Account/Authentication/SignUp';
import { ForgotPassword } from './components/Account/Authentication/ForgotPassword';
import { SignInAdvance } from './components/Account/Authentication/SignInAdvance';
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
        <Route path='/create-page' element={<CreatePage />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/help' element={<Help />} />
        <Route path='/help-details' element={<HelpDetails />} />
        <Route path='/error-404' element={<Error />} />
        <Route path='/offline' element={<Offline />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/sign-in-advance' element={<SignInAdvance />} />
        <Route path='/myProfile' element={<MyProfile />} />
        <Route path='/myProfile-about' element={<MyProfileAbout />} />
        <Route path='/my-profile-connections' element={<MyProfileConnections />} />
        <Route path='/myProfile-media' element={<MyProfileMedia />} />
        <Route path='/myProfile-videos' element={<MyProfileVideos />} />
        <Route path='/myProfile-events' element={<MyProfileEvents />} />
        <Route path='/myProfile-activity' element={<MyProfileActivity />} />

      </Routes>
      <Modals />
    </div>
  );
}

export default App;
