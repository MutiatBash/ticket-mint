import React, { useEffect } from "react";
import { ContractEventsCard, EventsCard } from "../../components/Cards";
import { events } from "../../data";
import { Button } from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContractRead, useContractReads } from "wagmi";
import { contractDetails } from "../../../api/contractAbi";
import { pinataEvents } from "../../allPages/Events/CreateEvents";
import axios from "axios";

const tags = ["All", "Music", "Health", "Tech", "Education", "Finance"];
const contractEvents = [];

const EventsSection = () => {
	const {
		data: contractEvents,
		isError: dataError,
		isLoading: dataLoading,
	} = useContractRead({
		address: contractDetails.address,
		abi: contractDetails.abi,
		functionName: "getAllEvents",
	});

	useEffect(() => {
		console.log(contractEvents);
	}, []);

	// Assume cidsArray is your array containing the CIDs of events
	// const cidsArray = ["cid1", "cid2", "cid3"]; // Replace with your actual CIDs
	// Function to fetch events from Pinata using CIDs
	// async function fetchEventFromPinata(cid) {
	// 	try {
	// 		const response = await axios.get(
	// 			`https://gateway.pinata.cloud/ipfs/${cid}`
	// 		);

	// 		// Return the fetched event data
	// 		return response.data;
	// 	} catch (error) {
	// 		console.error("Error fetching event from Pinata:", error);
	// 		throw error;
	// 	}
	// }
	// Function to fetch and log event data for each CID
	// async function fetchAndLogEventData(cid) {
	// 	try {
	// 		for (const cid of pinataEvents) {
	// 			// Fetch event data for the current CID
	// 			const eventData = await axios.get(
	// 				`https://yellow-high-wren-994.mypinata.cloud/ipfs/${cid}`
	// 			);

	// 			// Log the fetched event data
	// 			console.log("Fetched Event Data for CID", cid, ":", eventData);
	// 		}
	// 	} catch (error) {
	// 		console.error("Error fetching event data:", error);
	// 	}
	// }

	// async function fetchAndLogEventData() {
	// 	try {
	// 		for (const cid of pinataEvents) {
	// 			// Fetch event data for the current CID
	// 			const response = await axios.get(
	// 				`https://gateway.pinata.cloud/ipfs/${cid}`
	// 			);

	// 			// Access the actual data from the response
	// 			const eventData = response.data;

	// 			// Log the fetched event data
	// 			console.log("Fetched Event Data for CID", cid, ":", eventData);
	// 		}
	// 	} catch (error) {
	// 		console.error("Error fetching event data:", error);
	// 	}
	// }

	// // Call the function to fetch and log event data
	// fetchAndLogEventData();
// const token= "LhdHzj-TC9AJt9mtN6LSZdMeSltsxEK6dYWfa0-NUe0Umdz1bomrNejJ3trmjfT9"
	async function fetchEventFromPinata() {
		try {
			const response = await axios.get(
				"https://yellow-high-wren-994.mypinata.cloud/ipfs/Qmeh1cEvWVY7GXAwki3TtvF4snsuxrCiesj58WwiFFj8nn"
				// {
				// 	headers: {
				// 		"x-pinata-gateway-token":
				// 			"LhdHzj-TC9AJt9mtN6LSZdMeSltsxEK6dYWfa0-NUe0Umdz1bomrNejJ3trmjfT9",
				// 	},
				// }
			);

			// Return the fetched event data
			return response.data;
		} catch (error) {
			console.error("Error fetching event from Pinata:", error);
			throw error;
		}
	}

	// Example usage:
	// Replace with an actual CID
	fetchEventFromPinata();

	return (
		<div
			className="flex flex-col justify-center items-center px-4 lg:px-16 py-8 lg:py-20 gap-12 relative"
			id="explore-events"
		>
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
				<img
					src="/images/center-gradient.svg"
					alt="gradient"
					className="pointer-events-none"
				/>
			</div>
			<div className="grid lg:grid-cols-4 gap-6 lg:gap-8 lg:gap-y-10 bg-[#020302] py-4  w-full">
				{contractEvents?.map((event, index) => {
					return (
						<Link to={`/contract-event-details/${index}`}>
							<ContractEventsCard key={index} events={event} />
						</Link>
					);
				})}
			</div>
			<div className="grid lg:grid-cols-4 gap-6 lg:gap-8 lg:gap-y-12 bg-[#020302] py-4 lg:py-8 w-full">
				{events?.slice(0, 8).map((events, index) => {
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
