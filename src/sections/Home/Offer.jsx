import React from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

const Offer = () => {
	return (
		<section className="flex flex-col lg:flex-row items-center justify-between px-5 lg:px-16  py-10 lg:py-14  gap-4 lg:gap-8">
			<div className="">
				{/* <img
					src="./images/download__2_-removebg-preview 1.png"
					alt=""
					className="sect2_image"
				/> */}
			</div>

			<div className="w-full lg:w-[45%] flex flex-col justify-center lg:items-start gap-6 lg:gap-10  lg:text-left">
				<h3 className="text-[#fdfcfd] text-3xl lg:text-[3.3rem] lg:leading-[4rem] font-['Stoke']">
					What We Offer
				</h3>
				<div className="flex flex-col gap-3">
					{" "}
					<p className="text-[#d9d9d9] leading-7 lg:w-full trackin-wide">
						The{" "}
						<span className="text-[#F57328] font-['Stoke']">
							{" "}
							TICKETMINT
						</span>{" "}
						team consistently strives to enhance its digital business
						ecosystem by developing and refining its products in the form
						of traditional businesses.
					</p>
					<p className="text-[#d9d9d9] leading-7 lg:w-full trackin-wide">
						These ventures provide a valuable opportunity for investors to
						engage with the WEB2.5 ecosystem through the
						<span className="text-[#F57328] font-['Stoke']">
							{" "}
							TICKETMINT
						</span>{" "}
						token, driving growth and creating a mutually beneficial
						environment for entrepreneurs.
					</p>
				</div>

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
