import { useState, useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./allPages/Signup";
import Homepage from "./allPages/Homepage";
import EventsPage from "./allPages/Events/Events";
import EventsDetails from "./allPages/Events/EventsDetails";
import CreateEvents from "./allPages/Events/CreateEvents";
import SignUp from "./allPages/Signup";
import { UserContext } from "./Context";
import { magic } from "../api/magic";

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
				<Route path="/create-events" element={<CreateEvents />} />
				<Route path="/event-details/:eventId" element={<EventsDetails />} />
			</Routes>
		</>
	);
}

export default App;
