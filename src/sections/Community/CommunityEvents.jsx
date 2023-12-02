import React from "react";
import { communityEvents } from "../../data";
import { CommunityEventsCard } from "../../components/Cards";

const CommunityEvents = () => {
	return (
		<section className="flex flex-col justify-center items-center px-4 lg:px-16 py-8 lg:py-20 gap-12 ">
			<div className="flex flex-col gap-4 lg:gap-5 justify-center items-center text-center">
				<h2 className="text-[#FFFDFC]  text-[1.7rem] lg:text-5xl w-full  lg:leading-[3.5rem]">
					Our Community Events
				</h2>
				<p className="text-[#D9D9D9D1] font-['Manrope']  lg:w-[50%] lg:text-[1.1rem] pb-4 lg:leading-7">
					View some of our community events that interests you. Experience
					new moments, meet new people and form new relationships.
				</p>
			</div>
			<div className="grid lg:grid-cols-2 gap-4 lg:gap-12 lg:w-[70%]">
				{communityEvents?.map((event, index) => {
					return <CommunityEventsCard key={index} events={event} />;
				})}
			</div>
		</section>
	);
};

export default CommunityEvents;
