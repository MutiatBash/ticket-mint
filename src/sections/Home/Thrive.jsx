import React from 'react'

const Thrive = () => {
  return (
		<section className="flex flex-col lg:flex-row items-center justify-between px-2 lg:px-16 lg:pr-0 py-8 lg:py-0  gap-4 lg:gap-8">
			<div className="w-full lg:w-[45%] flex flex-col gap-3">
				<h3 className="h3_child text-2xl lg:text-[3.3rem] lg:leading-[4rem] font-['Stoke']">
					<span className="text-[#fdfcfd]">Thrive With</span> ticketmynt
				</h3>
				<p className="text-[#D9D9D9] py-3 font-['Manrope'] text-justify lg:leading-7 lg:w-[88%]">
					We deeply appreciate our early investors who have demonstrated
					unwavering support and a shared commitment to our long-term
					vision. They are the foundation of our success and are regarded
					as the core of our community. We believe in rewarding loyalty,
					and our early investors will be at the forefront of exclusive
					opportunities and benefits. As we continue to expand our
					ecosystem, we are developing exciting initiatives exclusively for
					our loyal supporters.
				</p>
			</div>
			<div className=" w-full lg:w-[45%]">
				<img
					src="/images/phone-ticket.svg"
					alt=""
					className=""
				/>
			</div>
		</section>
  );
}

export default Thrive
