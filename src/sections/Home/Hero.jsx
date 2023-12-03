import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "../../components/Button";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
	return (
		<section className="flex flex-col lg:flex-row items-center justify-between px-5 lg:px-16 lg:pr-0 py-12 lg:py-0  gap-4 lg:gap-8 relative">
			<div className="absolute top-0  w-full lg:-top-[70%] lg:left-0 pointer-events-none">
				<img
					src="/images/home-left-gradient.svg"
					alt="gradient"
					className="pointer-events-none w-full"
				/>
			</div>
			<div class="w-full lg:w-[50%] flex flex-col items-center lg:items-start gap-7 lg:gap-9 pt-0 mt-0 text-center lg:text-left">
				<h2 class="font-['Stoke'] pt-0 mt-0 md:w-full text-3xl lg:text-6xl leading-10 lg:leading-[4.2rem] capitalize text-[#fdfcfd] ">
					be present while you{" "}
					<span className="text-[#F57328] capitalize">
						Enjoy the moments
					</span>
				</h2>
				<p class="text-[#d9d9d9d1] lg:text-[1.17rem] w-[95%] lg:w-[84%] leading-7 lg:tracking-wider">
					Elevate your event experiences and unlock unforgettable moments
					with NFT tickets that serve as digital assets. We aim to curate
					the best for organizers and attendees.
				</p>
				<div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:justify-center lg:items-center w-[95%] lg:w-fit lg:pt-4">
					<Link to="/create-events">
						<IconButton
							text="Create Events"
							icon="/images/arrow-up-right.svg"
							divClass="w-full"
							iconStyle={`w-6 h-6`}
							className="text-[#FFFDFC] font-['Stoke'] px-14 w-full lg:text-base "
						/>
					</Link>
					<HashLink smooth to="/events#explore-events">
						<Button
							text="Explore Events"
							className="text-[#F57328] border hover:cursor-pointer border-[#F57328] bg-transparent px-16 py-5 w-full lg:px-6 font-['Stoke'] lg:text-base"
						/>
					</HashLink>
				</div>
			</div>
			<div className="lg:w-[42%] hidden md:block relative">
				<div class="w-full pr-0 relative top-[30%] right-[15%] lg:right-0 z-10 lg:p-0 lg:m-0">
					<img
						src="/images/headphones-2.svg"
						alt=""
						class="w-full lg:w-full h-[25rem] lg:h-[48rem]"
					/>
				</div>
				<div className="hidden lg:block absolute bottom-0 lg:bottom-0 w-full lg:top-0 lg:right-0 pointer-events-none">
					<img
						src="/images/headphone-gradient.svg"
						alt="gradient"
						className="pointer-events-none w-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
