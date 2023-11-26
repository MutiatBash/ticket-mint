import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import EventsPage from './pages/Events/Events'
import EventsDetails from './pages/Events/EventsDetails';


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
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
