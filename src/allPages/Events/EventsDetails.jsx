import React from "react";
import { events } from "../../data";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleArrowLeft,
	faArrowLeftLong,
	faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useState, useContext } from "react";
import { EventsCard } from "../../components/Cards";
import { Button, IconButton } from "../../components/Button";
import Footer from "../../components/Footer";
import { BuyTicketsModal } from "../../components/BuyTicketsModal";
import Navbar from "../../components/Navbar"

const EventsDetails = () => {
	const { eventId } = useParams();
	//   const { addToCart, setCartItems } = useContext(CartContext);
   const [buyModal, setBuyModal] = useState(false)
	const event = events;
	const selectedEvent = event?.find(
		(event) => event.id === parseInt(eventId)
	);

    function openBuyModal(){
        setBuyModal(!buyModal)
    }

	return (
		<div className="relative">
			<Navbar/>
			<section className="p-4 py-4 md:p-10 lg:px-16 lg:py-10 flex flex-col my-auto h-full">
				<Link to="/events">
					<div className="py-4">
						<FontAwesomeIcon
							icon={faArrowLeftLong}
							size="xl"
							style={{ color: "#FFFDFC" }}
						/>
					</div>
				</Link>
				{selectedEvent ? (
					<div className="flex w-full flex-col sm:flex-row justify-between gap-12 md:gap-14 h-full py-6 lg:py-10 lg:pb-16">
						<div
							className="border border-[#D9D9D926] rounded-2xl bg-[#19181833] lg:w-[45%] p-5"
							key={events.id}
						>
							<div className="w-full">
								<div className="flex flex-col gap-3 lg:gap-5">
									<div className="relative">
										<p className="absolute">
											{selectedEvent?.tags.map((tag) => {
												return <span>{tag.tags}</span>;
											})}
										</p>
										<img
											className="w-full h-35 rounded-lg"
											src={selectedEvent.src}
										/>
									</div>
									<h3 className="font-['Stoke'] text-[#FFFDFC] lg:text-2xl leading-[2.8rem]">
										{selectedEvent.title}
									</h3>
									<div className="flex flex-col gap-1.5 pb-1 justify-self-end">
										<div className="flex flex-row gap-2 items-center">
											<p className="text-zinc-300 text-opacity-80 font-normal font-['Manrope'] text-sm lg:text-base">
												{selectedEvent.date}
											</p>
											<span className="text-zinc-300 text-opacity-80">
												.
											</span>
											<p className="text-zinc-300 text-opacity-80 font-normal  text-sm lg:text-base font-['Manrope']">
												{selectedEvent.time}
											</p>
										</div>

										<p className="font-extralight text-[#fffdfcc9] text-sm lg:text-base font-['Stoke'] ">
											{selectedEvent.venue}
										</p>
										<p className=" font-['Stoke'] text-[#F57328] ">
											{selectedEvent.type}
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col justify-between gap-5 lg:gap-6 w-full md:w-[45%] ">
							<div className="flex flex-col lg:gap-10 h-full justify-between w-full">
								<h3 className="font-['Stoke'] text-[#FFFDFC] text-xl lg:text-3xl leading-[2.8rem]">
									{selectedEvent.title}
								</h3>
								<p className="text-base lg:text-lg text-[#D9D9D9D1] font-['Manrope'] tracking-wide text-justify">
									{/* {selectedEvent.details} */}
									HacktoberFest is a one-day event to be organized by
									BusinessDay Media. This conference will serve as a
									platform for all stakeholders in the creative
									industry, including professionals in tech, film,
									fashion, gaming, and animation, to engage in
									insightful discourse, network, and explore investment
									opportunities. The conference aims to highlight the
									challenges, potential, and vast opportunities
									available in open source.
								</p>
								<IconButton
									text="Buy Tickets"
									icon="/images/arrow-up-right.svg"
									iconStyle={{ color: "#FFFDFC" }}
									onClick={openBuyModal}
									className="text-[#FFFDFC] font-['Stoke']"
								/>
								{/* <div className=""> */}
								{buyModal && (
									<BuyTicketsModal
										events={selectedEvent}
										onClose={() => setBuyModal(false)}
									/>
								)}
								{/* </div> */}
							</div>
							{/* 
            </div>
            <div className="flex flex-row justify-between lg:justify-start items-center gap-6 w-full">
              <div className="flex flex-row items-center">
                <button
                  disabled={quantity === 0}
                  onClick={handleQuantityDecrease}
                  className={` ${
                    quantity === 0
                      ? "bg-gray-100 hover:shadow-none text-gray-200 font-normal"
                      : "bg-gray-50"
                  } px-5 py-3 font-semibold rounded-tl-md rounded-bl-md  border-r hover:shadow`}
                >
                  -
                </button>
                <span className="font-semibold bg-gray-50 px-5 py-3 text-[#ff7518] w-[fit-content]">
                  {quantity}
                </span>
                <button
                  onClick={handleQuantityIncrease}
                  className="bg-gray-50 px-5 py-3 font-semibold rounded-tr-md rounded-br-md  border-l hover:shadow"
                >
                  +
                </button>
              </div>
              <Button
                onClick={handleAddToCart}
                text={"Add to cart"}
                className="text-white w-full px-6 "
              />
            </div> */}
						</div>
					</div>
				) : (
					<p> Event not found </p>
				)}
			</section>
			{/* SIMILAR EVENTS */}
			<div className="flex flex-col items-center justify-center py-8 px-4 md:p-10 lg:px-16 lg:py-20 gap-8 relative lg:pt-24">
				<h2 className="font-['Stoke'] text-[#FFFDFC] text-center text-xl lg:text-4xl">
					Similar Events
				</h2>
				<div className="grid lg:grid-cols-4 gap-5 lg:gap-8 lg:gap-y-12 bg-[#020302] py-5 lg:py-14">
					{events?.paid?.slice(0, 8).map((events, index) => {
						return <EventsCard key={index} events={events} />;
					})}
				</div>
				<Button
					text="View more"
					className="text-[#F57328] border hover:cursor-pointer border-[#F57328] bg-transparent px-6 font-['Stoke']"
				/>
			</div>
			<div className="absolute bottom-0 left-0">
				<img src="/images/left-full-gradient.svg" alt="gradient" />
			</div>
			<Footer />
		</div>
	);
};

export default EventsDetails;
