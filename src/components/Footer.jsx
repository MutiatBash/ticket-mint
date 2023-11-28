import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
// import Logo from '../assets/svg/logo_white.svg'

const Footer = () => {
	return (
		<div className="w-full h-full px-4 py-8 lg:py-10 lg:px-16 bg-[#030203] text-[#D9D9D9B2]  font-['Manrope']">
			<div className="flex flex-row flex-wrap lg:flex-nowrap lg:flex-row gap-y-7 gap-x-8 lg:gap-x-3 lg:justify-between py-10">
				<div className="flex flex-col gap-3 lg:w-1/4">
					<p className="text-[#F57328]  font-['Stoke']">TicketMynt</p>
					<p className="text-[#d9d9d971] text-sm">
						Experience a journey where events unfold, NFT tickets shine ,
						digital assets come to life and communities thrive.
					</p>
				</div>
				<div className="flex flex-col gap-3 lg:gap-6 ">
					<div>
						<p className="text-md font-semibold">Company</p>
					</div>
					<div className="flex flex-col gap-3 text-sm text-[#d9d9d988] font-light">
						<div>
							<Link className="hover:text-[#ff7518]" to="/">
								Home
							</Link>
						</div>
						<div>
							<Link className="hover:text-[#ff7518]" to="/information">
								Information
							</Link>
						</div>
						<div>
							<Link className="hover:text-[#ff7518]" to="/shop">
								NFTs
							</Link>
						</div>
						<div>
							<Link
								className="hover:text-[#ff7518]"
								to="/terms-of-service"
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-3 lg:gap-6 ">
					<div>
						<p className="text-md font-semibold">Events</p>
					</div>
					<div className="flex flex-col gap-3 text-sm text-[#d9d9d988] font-light">
						<div>
							<Link
								className="hover:text-[#ff7518] cursor-pointer"
								to="/"
							>
								Partnership
							</Link>
						</div>
						<div>
							<Link className="hover:text-[#ff7518]" to="/information">
								News
							</Link>
						</div>
						<div>
							<Link className="hover:text-[#ff7518]" to="/shop">
								Blog posts
							</Link>
						</div>
						<div>
							<Link
								className="hover:text-[#ff7518]"
								to="/terms-of-service"
							>
								Calendar
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col  gap-3 lg:gap-6 ">
					<div>
						<p className="text-md font-semibold">Policy</p>
					</div>
					<div className="flex flex-col gap-3 text-sm text-[#d9d9d988] font-['Manrope'] font-light">
						<div>
							<Link className="hover:text-[#ff7518]" to="/">
								Privacy
							</Link>
						</div>
						<div>
							<Link className="hover:text-[#ff7518]" to="/information">
								Information
							</Link>
						</div>
						<div>
							<Link className="hover:text-[#ff7518]" to="/shop">
								Copyright
							</Link>
						</div>
						<div>
							<Link
								className="hover:text-[#ff7518]"
								to="/terms-of-service"
							>
								Support
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/4">
					<p className="font-semibold">Subscribe</p>
					<div>
						<p className="pb-2 text-[#d9d9d988] text-sm">
							Stay up to date with our latest deals
						</p>
						<label htmlFor="email" className="mb-5 w-full lg:w-[420px]">
							<div className="relative">
								<input
									type="email"
									name="email"
									id="email"
									className="w-full text-[#fdfcfd] rounded-2xl bg-transparent border border-[#F57328] p-3 mt-2 appearance-none outline-none text-xs md:text-sm text-[#d9d9d971]"
									required
									placeholder="Enter your email"
								/>
							</div>
						</label>
					</div>
					<div>
						<button className="bg-[#F57328] font-semibold rounded-[30px]  text-white w-full lg:w-[50%] p-3">
							Subscribe
						</button>
					</div>
				</div>
			</div>
			<div className="border-[0.3px] w-full mt-10 border-[#d9d9d971]"></div>
			<div className="pt-6 flex flex-row justify-between text-[#d9d9d971]">
				<div>
					<p>2023 TicketMynt</p>
				</div>
				<div className="flex flex-row gap-4">
					<span>Terms</span> <span>Privacy</span>
					<span>Support</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
