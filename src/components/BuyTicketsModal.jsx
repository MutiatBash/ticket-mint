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

export const BuyTicketsModal = ({ events, onClose }) => {
	const [count, setCount] = useState(0);
	const [address, setAddress] = useState("");
	const [amount, setAmount] = useState(0);

	const handleIncreaseTickets =() => {
		setAmount(prevAmount =>prevAmount + 1);
	}

    function handleDecreaseTickets() {
        if(amount > 0){
			setAmount(prevAmount =>prevAmount - 1);
        }
		}
	// WRITING TO THE CONTRACT

	const { config, error } = usePrepareContractWrite({
		address: token.address,
		abi: token.abi,
		functionName: "buyTickets",
		args: [address, amount],
	});

	const {
		data: buyData,
		isLoading: writeLoading,
		isSuccess: buySuccess,
		write,
	} = useContractWrite(config);

	const handleSendToWallet = (e) => {
		e.preventDefault();
		write?.();
		console.log(error)
		console.log(error)
	};
	return (
		<div className="bg-[#19181870] backdrop-blur w-full fixed mx-auto z-20 flex flex-col justify-center items-start inset-x-0 inset-y-0 py-12 overflow-y-hidden">
			<div className="absolute cursor-pointer right-10 top-10" onClick={onClose}>
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

									{/* <label htmlFor="Email Address">
										<span className="Wallet-Address">
											Email Address
										</span>
										<input
											type="email"
											className="input-form placeholder:text-[#d9d9d941]"
											placeholder="johndoe@gmail.com"
										/>
									</label> */}
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
												style={{color: amount >= 1 ? "#FFFDFC" : "#D9D9D9B2"}}
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
								<div className="flex flex-row justify-between items-center p-4 py-4">
									{/* <p className="text-[#D9D9D9CC]">Vip</p>

									<div className="grid-3 gap-5 items-center">
										<button
											className={` bg-[#6D676745] py-0.5 px-2 border border-[#6D6767] rounded-lg`}
										>
											<FontAwesomeIcon
												icon={faMinus}
												style={{ color: "#D9D9D9B2" }}
											/>
										</button>

										<p className="text-[#F57328]">{amount}</p>

										<button className="bg-[#F57328] py-0.5 px-2 rounded-lg">
											<FontAwesomeIcon
												icon={faPlus}
												style={{ color: "#FFFDFC" }}
											/>
										</button>
									</div> */}
								</div>
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
							<div>
								<img src={events?.src} alt="" className="hack-img" />
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
			</div>
		</div>
	);
};


const OptionsModal = ()=>{
    return(
        <div></div>
    )
}