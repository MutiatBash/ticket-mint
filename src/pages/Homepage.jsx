import React, { useState, useContext, useEffect } from "react";
import {
	useContractReads,
	useAccount,
	useContractWrite,
	usePrepareContractWrite,
	useContractRead,
} from "wagmi";
import { token } from "../apis/testAbi";
import { Button } from "../components/Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Footer from "../components/Footer";
import HomeEvents from "../sections/Home/HomeEvents";
import { UserContext } from "../Context";
// import { magic } from "../apis/magic";
import {useNavigate} from "react-router-dom"
import Navbar from "../components/Navbar";

const Homepage = () => {
	const { user, setUser } = useContext(UserContext);

	const navigate = useNavigate();

	// useEffect(() => {
	// 	// Set loading to true to display our loading message within pages/homepage.js
	// 	setUser({ loading: true });
	// 	// Check if the user is authenticated already
	// 	magic.user.isLoggedIn().then((isLoggedIn) => {
	// 		if (isLoggedIn) {
	// 			// Pull their metadata, update our state, and route to home
	// 			magic.user.getMetadata().then((userData) => setUser(userData));
	// 			navigate("/");
	// 		} 
  //     // else {
	// 		// 	// If false, route them to the login page and reset the user state
	// 		// 	navigate("/signup");
	// 		// 	setUser({ user: null });
	// 		// }
	// 	});
	// 	// Add an empty dependency array so the useEffect only runs once upon page load
	// }, []);

  // // logout function
	// const logout = () => {
	// 	// Call Magic's logout method, reset the user state, and route to the login page
	// 	magic.user.logout().then(() => {
	// 		setUser({ user: null });
	// 		navigate("/signup");
	// 	});
	// };

	return (
		<div>
      <Navbar/>
			<HomeEvents />
			<Footer />
		</div>
	);
};

export default Homepage;
