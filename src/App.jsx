import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Eventspage from './pages/Events'


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Eventspage />} />
        </Routes>
    </>
  )
}

export default App
