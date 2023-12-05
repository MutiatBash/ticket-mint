import { useState, useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./allPages/Signup";
import Homepage from "./allPages/Homepage";
import EventsPage from "./allPages/Events/Events";
import EventsDetails from "./allPages/Events/EventsDetails";
import ContractEventDetails from "./allPages/Events/ContractEventDetails";
import CreateEvents from "./allPages/Events/CreateEvents";
import SignUp from "./allPages/Signup";
import { UserContext } from "./Contexts/UserContext";
import { magic } from "../api/magic";
import Community from "./allPages/Community";

function App() {
	return (
		<>
			{/* <Navbar/> */}
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/events" element={<EventsPage />} />
				<Route path="/create-events" element={<CreateEvents />} />
				<Route path="/event-details/:eventId" element={<EventsDetails />} />
				<Route path="/contract-event-details/:index" element={<ContractEventDetails />} />
				<Route path="/community" element={<Community />} />
			</Routes>
		</>
	);
}

export default App;
