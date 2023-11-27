import React from "react";
import { Button } from "../../components/Button";

const HeroEvents = () => {
	return (
		<div className="py-14 lg:px-16 text-center relative">
			<div>
				<img
					src="/images/right-gradient.svg"
					className="absolute right-0 top-0"
				/>
			</div>
			<div className="flex flex-col gap-10 items-center justify-center py-16 font-['Stoke']">
				<h2 className="text-[#FFFDFC] text-6xl w-[70%] leading-[4.5rem]">
					Unlock the Future of Memorable Events
				</h2>
				<p className="text-[#D9D9D9D1] font-['Manrope'] w-[45%] text-[1.4rem] pb-4">
					Experience a journey where events unfold, NFT tickets shine ,
					digital assets come to life and communities thrive.
				</p>
				<div className="flex flex-row gap-10 justify-between items-center">
					<Button text="Create Events" className="text-[#FFFDFC]" />
					<Button
						text="Explore Events"
						className="text-[#F57328] border hover:cursor-pointer border-[#F57328] bg-transparent px-6 font-['Stoke']"
					/>
				</div>
				<div>
					<img
						src="/images/left-gradient.svg"
						className="absolute left-0 bottom-0"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroEvents;
