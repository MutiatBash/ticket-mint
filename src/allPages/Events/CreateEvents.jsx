import React from 'react'
import { IconButton } from '../../components/Button';

const CreateEvents = () => {
  return (
		<div>
			<div className="bg-[#19181870] backdrop-blur w-full fixed mx-auto z-20 flex flex-col justify-center items-start inset-x-0 inset-y-0 py-12 overflow-y-hidden">
				<div
					className="absolute cursor-pointer right-10 top-10"
					// onClick={onClose}
				>
					{/* <FontAwesomeIcon
						icon={faCircleXmark}
						style={{ color: "#fff", fontSize: "1.5rem" }}
					/> */}
				</div>
				<div className="border border-[#D9D9D926] rounded-2xl bg-[#030203] mx-auto z-20 h-full py-8 pt-0 w-full lg:w-[70%] overflow-y-scroll pb-0">
					<div className="absolute top-0 right-0 pointer-events-none">
						<img src="/images/form-gradient-right.svg" alt="gradient" />
					</div>
					<div className="h3-head">
						<h3 id="heading3">Create Events</h3>
					</div>
					<div className="Purchase-form translate-y-0">
						<div className="box">
							<div className="flex flex-col gap-3 py-6">
								<p className="p-ticket">Create your next event</p>

								<div className="">
									<form action="" className="forms py-2">
										<label htmlFor="Event Name">
											<span className="Wallet-Address">
												Event name
											</span>
											<input
												// value={address}
												// onChange={(e) => setAddress(e.target.value)}
												type="text"
												className="purchase-input-form placeholder:text-[#d9d9d941]"
												placeholder="Event name here"
											/>
										</label>
										<label htmlFor="Event venue">
											<span className="Wallet-Address">
												Event venue
											</span>
											<input
												// value={address}
												// onChange={(e) => setAddress(e.target.value)}
												type="text"
												className="purchase-input-form placeholder:text-[#d9d9d941]"
												placeholder=""
											/>
										</label>
										<div className="flex flex-row gap-3">
											<label htmlFor="Date">
												<span className="Wallet-Address">Date</span>
												<input
													// value={address}
													// onChange={(e) => setAddress(e.target.value)}
													type="text"
													className="bg-[#191818] border border-[#d9d9d933] text-[#fdfcfd] rounded-lg p-2 placeholder:text-[#d9d9d941]"
													placeholder=""
												/>
											</label>
											<label htmlFor="Time">
												<span className="Wallet-Address">Time</span>
												<input
													// value={address}
													// onChange={(e) => setAddress(e.target.value)}
													type="text"
													className="bg-[#191818] border border-[#d9d9d955] text-[#fdfcfd] rounded-[0.8rem] p-2 placeholder:text-[#d9d9d941]"
													placeholder=""
												/>
											</label>
										</div>

										<label htmlFor="Wallet Address">
											<span className="Wallet-Address">
												Wallet Address
											</span>
											<input
												// value={address}
												// onChange={(e) => setAddress(e.target.value)}
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
									<p className="ticket-h3">Events</p>
									{/* <p className="ticket-p text-xs pt-0 font-bold">
										Free
									</p> */}
								</div>
								<div className="ticket-form">
									<div className="flex flex-row justify-between items-center p-4 py-5">
										<p className="text-[#D9D9D9CC]">
											General admission
										</p>

										<div className="flex flex-row justify-between gap-5 items-center">
											<button
												className={`bg-[#6D676745] py-0.5 px-2 border border-[#6D6767] rounded-lg cursor-pointer`}
												// onClick={handleDecreaseTickets}
												// disabled={amount === 0}
											>
												{/* <FontAwesomeIcon
													icon={faMinus}
													style={{
														color:
															amount >= 1
																? "#FFFDFC"
																: "#D9D9D9B2",
													}}
												/> */}
											</button>

											{/* <p className="text-[#F57328] font-bold w-fit">
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
											</button> */}
										</div>
									</div>
									<hr className="hr-line"></hr>
									<div className="flex flex-row justify-between items-center p-4 py-4"></div>
								</div>

								<div className="py-10">
									<IconButton
										text="Create Events"
										icon="/images/arrow-up-right.svg"
										iconStyle={{ color: "#FFFDFC" }}
										className="text-[#FFFDFC] font-['Stoke'] text-base "
										// onClick={handleSendToWallet}
									/>
								</div>
							</div>

							<div className="vertical"></div>
							<div className="second">
								<div>
									{/* <img src={events?.src} alt="" className="hack-img" /> */}
								</div>
								<div className="flex flex-col gap-8 justify-center">
									<p className="cart-h6">Upload your event image</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default CreateEvents
