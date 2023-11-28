import React from 'react'
import { EventsCard } from '../../components/Cards'
import { events } from '../../data'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

const HomeEvents = () => {
  return (
		<div className="flex flex-col items-center justify-center px-2 lg:px-16 py-8 lg:py-14  gap-4 lg:gap-8 relative">
			<h2 className="font-['Stoke'] text-[#FFFDFC] text-center text-lg lg:text-4xl">
				Popular Events
			</h2>
			<div className="absolute top-12 w-full lg:w-[50%] lg:top-5 pointer-events-none">
				<img src="/images/center-gradient.svg" alt="gradient" />
			</div>
			<div className="grid lg:grid-cols-4 gap-8 bg-[#020302] py-8 lg:py-16" id="explore-events">
				{events?.paid?.slice(0, 4).map((events, index) => {
					return <EventsCard key={index} events={events} />;
				})}
			</div>
			<Link to="/events">
				<Button
					text="View more"
					className="text-[#F57328] border hover:cursor-pointer border-[#F57328] bg-transparent px-6 font-['Stoke'] self-center"
				/>
			</Link>
		</div>
  );
}

export default HomeEvents
