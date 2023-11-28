import React from "react";
import { Button, IconButton } from "../../components/Button";

const HeroEvents = () => {
	return (
		<div className="p-3 lg:py-14 lg:px-16 text-center relative">
			<div>
				<img
					src="/images/right-gradient.svg"
					className="absolute right-0 top-0 pointer-events-none"
				/>
			</div>
			<div className="flex flex-col gap-6 lg:gap-10 items-center justify-center py-12 lg:py-16 font-['Stoke']">
				<h2 className="text-[#FFFDFC]  text-4xl lg:text-6xl w-full lg:w-[70%] lg:leading-[4.5rem]">
					Unlock the Future of Memorable Events
				</h2>
				<p className="text-[#D9D9D9D1] font-['Manrope'] w-full lg:w-[45%] text-base lg:text-[1.4rem] pb-4 leading-8">
					Experience a journey where events unfold, NFT tickets shine ,
					digital assets come to life and communities thrive.
				</p>
				<div className="flex flex-row gap-3 lg:gap-8 justify-between items-center px-10">
					<IconButton
						text="Create Events"
						icon="/images/arrow-up-right.svg"
						iconStyle={`text-[#FFFDFC] w-6 h-6`}
						className="text-[#FFFDFC] font-['Stoke'] text-sm lg:text-base "
					/>
					<Button
						text="Explore Events"
						className="text-[#F57328] border hover:cursor-pointer border-[#F57328] bg-transparent lg:px-6 font-['Stoke'] text-sm lg:text-base"
					/>
				</div>
				<div>
					<img
						src="/images/left-gradient.svg"
						className="absolute left-0 bottom-0 pointer-events-none"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroEvents;
