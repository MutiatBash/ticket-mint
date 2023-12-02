import React from "react";

const Hero = () => {
	return (
		<section className="flex flex-col lg:flex-row items-center justify-between px-5 lg:px-16 py-8 lg:py-16  gap-4 lg:gap-8 relative">
			<div className="flex flex-col gap-8 lg:w-[70%]">
				<h5 className="text-2xl lg:text-6xl lg:leading-[4.4rem] text-[#fdfcfd] capitalize">
					Join our community to{" "}
					<span className="text-[#F57328]">stay in touch</span>
				</h5>
				<p className="text-[#d9d9d9d1] lg:w-[75%] lg:text-justify lg:text-[1.2rem]">
					Dive into our events community! Connect with planners, share
					event insights, and explore the future of gatherings.
					Join us in shaping innovative experiences—your gateway to
					the next era of events!
				</p>

				<p className="text-[#F57328]">+500 members have joined already</p>
			</div>
		</section>
	);
};

export default Hero;
