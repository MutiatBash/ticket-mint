import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, IconButton } from "./Button";
import {
	faClose,
	faCircleXmark,
	faMinus,
	faPlus,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
	useContractReads,
	useAccount,
	useContractWrite,
	usePrepareContractWrite,
	useContractRead,
} from "wagmi";
import { token } from "../../api/testAbi";
import { contractDetails } from "../../api/contractAbi";
import { useParams } from "react-router-dom";
import logo from "../../src/assets/ticket-logo.svg"
import {Link} from "react-router-dom"


export const BuyContractTicketsModal = ({ events, onClose }) => {
// const {formData}
	const handleDownload = () => {
		// Logic to trigger the download (e.g., using HTML5 download attribute)
		// You may need to create a downloadable file or link to the image
		// For simplicity, let's assume eventData.imageHash is the image URL
		const downloadLink = document.createElement("a");
		downloadLink.href = "../../src/assets/ticket-logo.svg";
		downloadLink.download = "event_ticket.png";
		downloadLink.click();
	};
	const {
		data: contractEvents,
		isError: dataError,
		isLoading: dataLoading,
	} = useContractRead({
		address: contractDetails.address,
		abi: contractDetails.abi,
		functionName: "getAllEvents",
	});

	const { eventId } = useParams();
	const event = contractEvents;
	const selectedEvent = event[eventId];
	//  const { eventIndex } = useParams();
	// const selectedEvent = event[eventIndex];
	// const selectedEvent = event?.find((event) => event.index === parseInt(eventId));
	// const selectedEvent = event?.find((e) => e.index === eventId);
	console.log(selectedEvent);
	console.log(eventId);

	const [address, setAddress] = useState("");
	const [amount, setAmount] = useState(0);
	// const [eventId, setEventId] = useState(events?.index);
	// const eventId = events?.index;
	const handleIncreaseTickets = () => {
		setAmount((prevAmount) => prevAmount + 1);
	};

	function handleDecreaseTickets() {
		if (amount > 0) {
			setAmount((prevAmount) => prevAmount - 1);
		}
	}
	// WRITING TO THE CONTRACT

	const { config, error: buyError } = usePrepareContractWrite({
		address: token.address,
		abi: token.abi,
		functionName: "buyTickets",
		args: [address, amount],
	});

	const {
		data: buyData,
		isLoading: buyLoading,
		isSuccess: buySuccess,
		write,
	} = useContractWrite(config);

	const handleSendToWallet = (e) => {
		e.preventDefault();
		write?.();
		console.log(buyError);
	};
	return (
		<div className="bg-[#19181870] backdrop-blur w-full fixed mx-auto z-20 flex flex-col justify-center items-start inset-x-0 inset-y-0 py-12 overflow-y-hidden">
			<div
				className="absolute cursor-pointer right-10 top-10"
				onClick={onClose}
			>
				<FontAwesomeIcon
					icon={faCircleXmark}
					style={{ color: "#fff", fontSize: "1.5rem" }}
				/>
			</div>
			<div className="border border-[#D9D9D926] rounded-2xl bg-[#030203] mx-auto z-20 h-full py-8 pt-0 w-full lg:w-[70%] overflow-y-scroll pb-0">
				<div className="absolute top-0 right-0 pointer-events-none">
					<img src="/images/form-gradient-right.svg" alt="gradient" />
				</div>
				<div className="h3-head">
					<h3 id="heading3">Buy Tickets</h3>
				</div>
				<div className="Purchase-form translate-y-0">
					<div className="box">
						<div className="flex flex-col gap-3 py-6">
							<p className="p-ticket">{eventId}</p>
							<p className="p-ticket">{selectedEvent?.eventName}</p>
							<p className="p-ticket">
								Purchase tickets that serve as NFTs that can be owned
								and minted.
							</p>
							<p className="p-ticket py-3 text-sm">
								Enter your wallet address or email address
							</p>
							<div className="">
								<form action="" className="forms py-2">
									<label htmlFor="Wallet Address">
										<span className="Wallet-Address">
											Wallet Address
										</span>
										<input
											value={address}
											onChange={(e) => setAddress(e.target.value)}
											type="text"
											className="purchase-input-form placeholder:text-[#d9d9d941]"
											placeholder="0x078h9uvribu9oupytvtytuyuuy"
										/>
									</label>
								</form>
							</div>

							<div className="flex flex-row gap-3 pt-3 justify-start items-center">
								<p className="ticket-h3">Tickets</p>
								<p className="ticket-p text-xs pt-0 font-bold">Free</p>
							</div>
							<div className="ticket-form">
								<div className="flex flex-row justify-between items-center p-4 py-5">
									<p className="text-[#D9D9D9CC]">General admission</p>

									<div className="flex flex-row justify-between gap-5 items-center">
										<button
											className={`bg-[#6D676745] py-0.5 px-2 border border-[#6D6767] rounded-lg cursor-pointer ${
												amount >= 1
													? "bg-[#F57328] border border-[#F57328]"
													: ""
											}`}
											onClick={handleDecreaseTickets}
											disabled={amount === 0}
										>
											<FontAwesomeIcon
												icon={faMinus}
												style={{
													color:
														amount >= 1 ? "#FFFDFC" : "#D9D9D9B2",
												}}
											/>
										</button>

										<p className="text-[#F57328] font-bold w-fit">
											{amount}
										</p>

										<button
											className="bg-[#F57328] py-0.5 px-2 rounded-lg cursor-pointer"
											onClick={handleIncreaseTickets}
										>
											<FontAwesomeIcon
												icon={faPlus}
												style={{ color: "#FFFDFC" }}
											/>
										</button>
									</div>
								</div>
								<hr className="hr-line"></hr>
								<div className="flex flex-row justify-between items-center p-4 py-4"></div>
							</div>

							<div className="py-10">
								<IconButton
									text="Buy Tickets"
									icon="/images/arrow-up-right.svg"
									iconStyle={{ color: "#FFFDFC" }}
									className="text-[#FFFDFC] font-['Stoke'] text-base "
									onClick={handleSendToWallet}
								/>
							</div>
						</div>

						<div className="vertical"></div>
						<div className="second">
							<div className="w-full">
								<img
									className="w-[50%] rounded-lg rotate-90 self-center mx-auto"
									src={logo}
								/>
							</div>
							<div className="flex flex-col gap-8 justify-center">
								<p className="cart-h6">Add tickets to your cart</p>
								<FontAwesomeIcon
									icon={faShoppingCart}
									style={{ color: "#6D6767" }}
								/>
							</div>
						</div>
					</div>
				</div>
				{buyLoading ||
					(buySuccess && (
						<div className="bg-[#19181870] backdrop-blur w-full fixed mx-auto z-20 flex flex-col justify-center items-start inset-x-0 inset-y-0 py-12 overflow-y-hidden">
							<div className=" rounded-2xl bg-[#030203] h-[30%] flex flex-col gap-4 items-center justify-center text-[#fdfcfd] mx-auto z-20 py-8 px-12 text-center w-full lg:w-[30%]">
								<h3 className="text-2xl lg:text-3xl text-[#F57328]">
									Event Status
								</h3>
								<p className="text-white">
									{buyLoading
										? "Buying your tickets...."
										: buySuccess
										? "Successful bought your tickets"
										: buyError
										? "Unsuccessful"
										: "An error occurred"}
								</p>
								{/* <Link to="/events" className="pt-6">
									<Button text="Go back" className="px-8" />
								</Link> */}
								<Link className="pt-6" to={logo} download="ticket" target="_blank" rel="noreferrer">
									<Button text="Download ticket" className="px-8" />
								</Link>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

const OptionsModal = () => {
	return <div></div>;
};
