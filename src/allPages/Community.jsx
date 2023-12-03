import React from "react";
import CommunityHero from "../sections/Community/CommunityHero";
import Navbar from "../components/Navbar";
import CommunityForm from "../sections/Community/CommunityForm";
import Footer from "../components/Footer";
import CommunityEvents from "../sections/Community/CommunityEvents";
import CommunityCategories from "../sections/Community/CommunityCategories";

const Community = () => {
	return (
		<div>
			<Navbar />
			<CommunityHero />
			<CommunityCategories/>
			<CommunityEvents />
			<CommunityForm />
			<Footer />
		</div>
	);
};

export default Community;
