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

const EventsDetails = () => {
	const { eventId } = useParams();
	//   const { addToCart, setCartItems } = useContext(CartContext);

	const event = events;
	const selectedEvent = event?.paid?.find(
		(event) => event.id === parseInt(eventId)
	);

	//   function handleAddToCart() {
	//     let itemAdded = false;
	//     if (quantity > 0) {
	//       addToCart({ ...selectedFood, quantity });
	//       itemAdded = true;
	//     }

	//     if (itemAdded) {
	//       successful();
	//     } else {
	//       warning();
	//     }
	//   }

	//   function handleQuantityIncrease() {
	//     setQuantity(quantity + 1);
	//   }
	//   function handleQuantityDecrease() {
	//     setQuantity(quantity - 1);
	//   }

	return (
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
				<div className="flex flex-col sm:flex-row justify-between gap-12 md:gap-14 h-full py-6 lg:py-10 lg:pb-16">
					<div
						className="border border-[#D9D9D926] rounded-2xl bg-[#19181833] w-[45%] p-5"
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
								<h3 className="font-['Stoke'] text-[#FFFDFC] text-2xl leading-[2.8rem]">
									{selectedEvent.title}
								</h3>
								<div className="flex flex-col gap-1.5 pb-1 justify-self-end">
									<div className="flex flex-row gap-2 items-center">
										<p className="text-zinc-300 text-opacity-80 font-normal font-['Manrope']">
											{selectedEvent.date}
										</p>
										<span className="text-zinc-300 text-opacity-80">
											.
										</span>
										<p className="text-zinc-300 text-opacity-80 font-normal font-['Manrope']">
											{selectedEvent.time}
										</p>
									</div>

									<p className="font-extralight text-[#fffdfcc9] font-['Stoke'] ">
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
							<h3 className="font-['Stoke'] text-[#FFFDFC] text-3xl leading-[2.8rem]">
								{selectedEvent.title}
							</h3>
							<p className="text-base lg:text-lg text-[#D9D9D9D1] font-['Manrope'] tracking-wide text-justify">
								{/* {selectedEvent.details} */}
								HacktoberFest is a one-day event to be organized by
								BusinessDay Media. This conference will serve as a
								platform for all stakeholders in the creative industry,
								including professionals in tech, film, fashion, gaming,
								and animation, to engage in insightful discourse,
								network, and explore investment opportunities. The
								conference aims to highlight the challenges, potential,
								and vast opportunities available in open source.
							</p>
							<IconButton
								text="Buy Tickets"
								icon="/images/arrow-up-right.svg"
								iconStyle={{ color: "#FFFDFC" }}
								className="text-[#FFFDFC] font-['Stoke'] self-end mt-auto"
							/>
						</div>
						{/* <div className="flex flex-col gap-3">
              <p>Every order comes with a free drink, select your choice</p>
              </div>
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

            {/* SIMILAR EVENTS */}
			<div className="flex flex-col items-center justify-center py-8 lg:py-20 gap-8 relative lg:pt-24">
				<h2 className="font-['Stoke'] text-[#FFFDFC] text-center text-lg lg:text-4xl">
					Similar Events
				</h2>
				<div className="absolute top-0">
					<img src="/images/center-gradient.svg" alt="gradient" />
				</div>
				<div className="grid lg:grid-cols-4 gap-8 gap-y-12 bg-[#020302] py-8 lg:py-14">
					{events?.paid?.slice(0, 8).map((events, index) => {
						return <EventsCard key={index} events={events} />;
					})}
				</div>
				<Button
					text="View more"
					className="text-[#F57328] border hover:cursor-pointer border-[#F57328] bg-transparent px-6 font-['Stoke']"
				/>
			</div>
		</section>
	);
};

export default EventsDetails;
