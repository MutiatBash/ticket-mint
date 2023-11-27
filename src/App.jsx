import { useState , useContext, useEffect} from 'react'
import { Routes, Route,useNavigate} from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Login from './pages/Signup'
import Homepage from './pages/Homepage'
import EventsPage from './pages/Events/Events'
import EventsDetails from './pages/Events/EventsDetails';
import SignUp from './pages/Signup';
import { UserContext } from './Context';
import { magic } from '../appApis/magic';


function App() {

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  return (
    <>
    {/* <Navbar/> */}
    <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/events" element={<EventsPage />} />
          <Route
            path="/event-details/:eventId"
            element={<EventsDetails />}
          />
        </Routes>
    </>
  )
}

export default App
