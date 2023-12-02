import React from "react";

const Thrive = () => {
	return (
		<section className="flex flex-col lg:flex-row items-center justify-between px-5 lg:px-16 lg:pr-0 py-10 pb-0 lg:py-0 gap-4 lg:gap-8 relative">
			<div className="w-full lg:w-[45%] flex flex-col gap-3 lg:gap-7 items-start lg:text-left">
				<h3 className="h3_child text-3xl lg:text-[3.3rem] lg:leading-[4rem] font-['Stoke']">
					<span className="text-[#fdfcfd]">Thrive With</span> ticketmynt
				</h3>
				<div className="flex flex-col gap-3">
					<p className="text-[#D9D9D9]  leading-7 lg:w-[88%]">
						We deeply appreciate our early investors who have demonstrated
						unwavering support and a shared commitment to our long-term
						vision. They are the foundation of our success and are
						regarded as the core of our community.
					</p>
					<p className="text-[#D9D9D9] leading-7 lg:w-[88%]">
						We believe in rewarding loyalty, and our early investors will
						be at the forefront of exclusive opportunities and benefits.
						As we continue to expand our ecosystem, we are developing
						exciting initiatives exclusively for our loyal supporters.
					</p>
				</div>
			</div>
			{/* <div className="relative"> */}
			<div className="absolute lg:-top-32 lg:right-0 pointer-events-none lg:w-[50%]">
				<img
					src="/images/thrive-gradient.svg"
					alt="gradient"
					className="pointer-events-none w-full"
				/>
			</div>
			{/* </div> */}
			<div className="w-full lg:w-[45%] relative right-[15%] lg:right-0">
				<img
					src="/images/phone-ticket.svg"
					alt=""
					className="h-[20rem] lg:h-full w-full"
				/>
			</div>
		</section>
	);
};

export default Thrive;
