import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "../../components/Button";

const Hero = () => {
	return (
		<section className="flex flex-col lg:flex-row items-center justify-between px-2 lg:px-16 lg:pr-0 py-8 lg:py-0  gap-4 lg:gap-8">
			<div class="lg:w-[45%] flex flex-col gap-5 lg:gap-9 pt-0 mt-0">
				<h2 class="font-['Stoke'] pt-0 mt-0 text-2xl lg:text-[3.3rem] lg:leading-[4rem] capitalize text-[#fdfcfd]">
					be present while you {" "}
					<span className="text-[#F57328] capitalize">
						Enjoy the moments
					</span>
				</h2>
				<p class="p_child lg:font-[1.3rem] text-justify lg:w-[89%] leading-7 tracking-wide">
					Elevate your event experiences and unlock unforgettable moments
					with NFT tickets that serve as digital assets. We aim to curate
					the best moments for organizers and attendees. Embrace the
					present and let your moments unfold instantly
				</p>
				<div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center w-full lg:w-fit ">
					<Link to="/create-events">
						<IconButton
							text="Create Events"
							icon="/images/arrow-up-right.svg"
							divClass="w-full"
							iconStyle={`w-6 h-6`}
							className="text-[#FFFDFC] font-['Stoke'] px-14 w-full lg:text-base "
						/>
					</Link>
					<Link to="#explore-events">
						<Button
							text="Explore Events"
							className="text-[#F57328] border hover:cursor-pointer border-[#F57328] bg-transparent px-16 py-5 w-full lg:px-6 font-['Stoke'] lg:text-base"
						/>
					</Link>
				</div>
			</div>
			<div class="lg:w-[42%] z-10 p-0 m-0">
				<img src="/images/headphones.svg" alt="" class="w-full" />
			</div>
			<div className="absolute top-0 right-0 pointer-events-none lg:w-[60%]">
				<img
					src="/images/headphone-gradient.svg"
					alt="gradient"
					className="pointer-events-none w-full"
				/>
			</div>
		</section>
	);
};

export default Hero;
