import React from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

const Offer = () => {
	return (
		<section className="flex flex-col lg:flex-row items-center justify-between px-2 lg:px-16  py-8 lg:py-14  gap-4 lg:gap-8">
			<div className="img-sect">
				<img
					src="./images/download__2_-removebg-preview 1.png"
					alt=""
					className="sect2_image"
				/>
			</div>

			<div className="w-[45%] flex flex-col gap-5 lg:gap-10">
				<h3 className="text-[#fdfcfd] text-2xl lg:text-[3.3rem] lg:leading-[4rem] font-['Stoke']">
					What We Offer
				</h3>
				<p className="text-[#d9d9d9] leading-7">
					The <span className="text-[#F57328] font-['Stoke']"> TICKETMINT</span> team
					consistently strives to enhance its digital business ecosystem by
					developing and refining its products in the form of traditional
					businesses. These ventures provide a valuable opportunity for
					investors to engage with the WEB2.5 ecosystem through the
					<span className="text-[#F57328] font-['Stoke']"> TICKETMINT</span> token,
					driving growth and creating a mutually beneficial environment for
					entrepreneurs.
				</p>
				<Link to="/events">
					<Button
						text="Learn more"
						className="text-[#F57328] border hover:cursor-pointer border-[#F57328] bg-transparent px-16 py-5 lg:px-6 font-['Stoke'] lg:text-base"
					/>
				</Link>
			</div>
		</section>
	);
};

export default Offer;
