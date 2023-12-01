import React, { useState, useContext, useEffect } from "react";
import Footer from "../components/Footer";
import HomeEvents from "../sections/Home/HomeEvents";
import Hero from "../sections/Home/Hero";
import Navbar from "../components/Navbar";
import Offer from "../sections/Home/Offer";
import Contact from "../sections/Home/Contact";
import Thrive from "../sections/Home/Thrive";
import Categories from "../sections/Home/Categories";

const Homepage = () => {
	return (
		<div className="relative">
			<Navbar />
			<Hero />
			<Categories />
			<HomeEvents />
			<Thrive />
			<Offer />
			<Contact />
			<div className="absolute bottom-0 left-0 pointer-events-none">
				<img src="/images/left-full-gradient.svg" alt="gradient" />
			</div>
			<Footer />
		</div>
	);
};

export default Homepage;
