import React from "react";
import { EventsCard } from "../../components/Cards";
import { events } from "../../data";
import { Button } from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const tags = ["All", "Music", "Health", "Tech", "Education", "Finance"];

const EventsSection = () => {
	return (
		<div className="flex flex-col justify-center items-center px-4 lg:px-16 py-8 lg:py-20 gap-12 relative">
			<div className="border border-[#D9D9D926] rounded-2xl p-3 flex flex-row justify-between self-start items-center w-full  lg:w-[50%]">
				<input
					placeholder="Search for an event"
					className="bg-transparent  placeholder:text-[#6D6767] w-full border-none text-[#fdfcfd] focus:outline-none"
				/>
				<FontAwesomeIcon icon={faSearch} style={{ color: "#6D6767" }} />
			</div>
			<div className="flex flex-row flex-wrap gap-3 self-start">
				{tags.map((tag) => {
					return (
						<span
							className={`border hover:cursor-pointer border-[#D9D9D926] rounded-[0.9rem] w-fit px-4 py-1 text-[0.7rem] text-[#FFFDFC] ${
								tag === "All"
									? "bg-[#F57328]"
									: "bg-[#19181880] text-[#F57328]"
							}`}
						>
							{tag}
						</span>
					);
				})}
			</div>
			<div className="absolute top-0 pointer-events-none">
				<img src="/images/center-gradient.svg" alt="gradient" className="pointer-events-none" />
			</div>
			<div className="grid lg:grid-cols-4 gap-6 lg:gap-8 lg:gap-y-12 bg-[#020302] py-4 lg:py-8 w-full">
				{events?.map((events, index) => {
					return (
						<Link to={`/event-details/${events.id}`}>
							<EventsCard key={index} events={events} />
						</Link>
					);
				})}
			</div>
			{/* <Button text="View more" className="text-[#F57328] border hover:cursor-pointer border-[#F57328] bg-transparent px-6 font-['Stoke']"/> */}
		</div>
	);
};

export default EventsSection;
