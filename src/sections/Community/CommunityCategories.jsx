import { faAngleRight, faArrowRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const CommunityCategories = () => {
	return (
		<section className=" p-5 py-8 lg:pb-12">
			<div className="flex flex-col lg:flex-row mx-auto gap-6 lg:gap-0 lg:w-[70%] justify-center">
				<div className="flex flex-col gap-6 lg:gap-8 lg:items-end lg:w-[80%]">
					<div className="bg-[#f5732833] rounded-2xl p-4 lg:p-5 py-8 flex flex-col gap-4 lg:mr-6">
						<h6 className="text-[#fdfcfd] text-lg font-['Manrope']">
							Contribute to the community
						</h6>
						<ul className="flex flex-col gap-2 text-[#d9d9d9d1] font-light">
							<li>
								<FontAwesomeIcon
									icon={faCircleCheck}
									style={{ color: "#F57328" }}
									size="sm"
								/>
								<span className="px-3">Get announcements first</span>
							</li>
							<li>
								<FontAwesomeIcon
									icon={faCircleCheck}
									style={{ color: "#F57328" }}
									size="sm"
								/>
								<span className="px-3">Expand your knowledge</span>
							</li>
							<li>
								<FontAwesomeIcon
									icon={faCircleCheck}
									style={{ color: "#F57328" }}
									size="sm"
								/>
								<span className="px-3">Networking opportunities</span>
							</li>
						</ul>
					</div>
					<div className="bg-[#f5732833] rounded-2xl p-4 lg:p-7 py-8 flex flex-col gap-4 text-[#fdfcfd] w-full">
						<div className="flex flex-col gap-3">
							<p className="font-light text-[#FFFFFF80]">
								RESOURCES - 29 NOV, 2023
							</p>
							<ul>
								<li>Find resources for inspiration</li>
							</ul>
						</div>
						<div className="border-[0.5px] borber-b border-[#D9D9D966]"></div>
						<div className="flex flex-col gap-3">
							<p className="font-light text-[#FFFFFF80]">
								TOOLS - 29 NOV 2023
							</p>
							<ul>
								<li>
									Explore a suite of powerful event planning tools
								</li>
							</ul>
						</div>
						<div className="border-[0.5px] borber-b border-[#D9D9D966]"></div>
						<div className="flex flex-col gap-3">
							<p className="font-light text-[#FFFFFF80]">
								RESOURCES - 29 NOV, 2023
							</p>
							<ul>
								<li>Track and analyze ticket sales data</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex flex-col lg:items-end gap-6 justify-between lg:py-10 lg:pb-16 lg:pr-12">
					<div className="bg-[#f5732833] rounded-2xl p-4 lg:p-5 py-8 flex flex-col gap-5 pt-10 lg:w-[70%]">
						<img
							src="/images/calendar-icon.svg"
							alt=""
							className="h-4 w-4"
						/>
						<h6 className="text-[#F57328] font-['Manrope'] font-bold">
							Attend an event
						</h6>
						<p className="text-[#d9d9d9d1]">
							Browse our online and offline events hosted by the most
							valued creators and contributors
						</p>
					</div>
					<div className="bg-[#F57328] text-[#fdfcfd] rounded-2xl p-4 py-8 pr-8 lg:w-[85%]">
						<p className="uppercase lg:text-xs font-light">
							WE’RE HERE FOR YOU
						</p>
						<Link>
							<div className="flex flex-row gap-3 items-center pt-2">
								<p className="">Get in touch with our community </p>
								<FontAwesomeIcon icon={faAngleRight} size="sm" />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CommunityCategories;
