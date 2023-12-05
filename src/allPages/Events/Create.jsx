import React, { useState, useContext } from "react";
import { IconButton } from "../../components/Button";
// import { create as ipfsHttpClient } from "ipfs-http-client";
import { FormContext } from "../../Contexts/CreateEventContext";
import axios from "axios";
import {
	MY_PINATA_JWT,
	pinata_api_key,
	pinata_secret_api_key,
} from "../../../api/pinataKey";
import {
	useContractReads,
	useAccount,
	useContractWrite,
	usePrepareContractWrite,
	useContractRead,
} from "wagmi";
import { contractDetails } from "../../../api/contractAbi";

const CreateEvents = () => {
	const { formData, setFormData } = useContext(FormContext);

	const { config, error: createError } = usePrepareContractWrite({
		address: contractDetails.address,
		abi: contractDetails.abi,
		functionName: "createEvent",
		args: [
			formData.eventName,
			formData.eventDate,
			formData.eventTime,
			formData.eventVenue,
			formData.numberOfTickets,
			formData.ticketPrice,
			formData.imageHash,
		],
	});

	const {
		data: createEventData,
		isLoading: createLoading,
		isSuccess: createSuccess,
		write,
	} = useContractWrite(config, createError);

	const handleCreateEvent = (e) => {
		e?.preventDefault();
		write?.();
		console.log(createError);
	};
	// FUNCTION TO HANDLE INPUT CHANGE FOR THE FORM
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleFileSelect = (event) => {
		const fileInput = event.target;
		const file = fileInput.files[0];

		if (file) {
			setFormData((prevData) => ({
				...prevData,
				imageFile: file,
			}));

			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function (e) {
				setFormData((prevData) => ({
					...prevData,
					imagePreview: e.target.result,
				}));
				console.log(reader.result);
			};
		}
		// console.log(`${import.meta.env.DEV.VITE_MY_PINATA_JWT}`);
	};

	const pinFileToIPFS = async (file) => {
		const formData = new FormData();
		formData.append("file", file);

		const metadata = JSON.stringify({
			name: "File name",
		});
		formData.append("pinataMetadata", metadata);

		const options = JSON.stringify({
			cidVersion: 0,
		});
		formData.append("pinataOptions", options);

		// Pin to IPFS using Pinata

		try {
			const response = await axios.post(
				"https://api.pinata.cloud/pinning/pinFileToIPFS",
				formData,
				{
					maxBodyLength: "Infinity",
					headers: {
						"Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
						Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiNDdjOGE2Yy0zZjZlLTQ2OWEtODMwMC1iMTliZjJjNzlmM2QiLCJlbWFpbCI6Im11dGlhdGJhc2h1YUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYTM0NDM5NmVkMTk3ZTYzOGU5ODciLCJzY29wZWRLZXlTZWNyZXQiOiI4ODgyYzJjYmE3NGMyYjUyN2I4NzcwNmIxYTE4ZTQ4ODljNDVjYTc1ZDA5ODVmMjNmMDQ2OTk3NTc5M2U4OGFkIiwiaWF0IjoxNzAxMjYxMDc2fQ.2x0wf0APRvjQV4jsiapC-gl_dX1fJRcwU3dorffre10`,
						// Authorization: `Bearer import.meta.env.DEV.VITE_MY_PINATA_JWT`,
					},
				}
			);

			console.log("IPFS Pin Response:", response.data);
			return response.data.IpfsHash;
		} catch (error) {
			console.error(
				"Error pinning to IPFS:",
				error.response ? error.response.data : error.message
			);
			throw error;
		}
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		// 	// // Check if all required fields are filled
		// 	// if (
		// 	// !formData.name ||
		// 	// !formData.date ||
		// 	// !formData.location ||
		// 	// !formData.imageFile
		// 	// ) {
		// 	// 	console.error("All fields must be filled!");
		// 	// 	return;
		// 	// }

		try {
			if (formData.imageFile !== null) {
				// Pin the image to IPFS
				const ipfsHash = await pinFileToIPFS(formData.imageFile);
				console.log(ipfsHash);
				// Set the IPFS hash in the formData
				setFormData((prevData) => ({
					...prevData,
					// imageHash: JSON.stringify(ipfsHash),
					imageHash: ipfsHash?.toString(),
				}));
			}
			handleCreateEvent();
			console.log(createEventData);

			// 		// Now you can interact with your smart contract to store the form data and image IPFS hash
			// 		// Example: Call the createEvent function on your smart contract with the form data and image IPFS hash

			// 		// For simplicity, let's assume you have a smart contract instance
			// 		// const contractInstance = ...

			// 		// You can call the createEvent function on your smart contract
			// 		// await contractInstance.createEvent(formData.name, formData.date, formData.location, formData.numberOfTickets, imageIPFSHash);

			// 		// You've now stored the data on the blockchain and the image on IPFS

			// 		// Optionally, you can clear the form data after submission
			// 		// setFormData({
			// 		// 	name: "",
			// 		// 	date: "",
			// 		// 	location: "",
			// 		// 	numberOfTickets: 0,
			// 		// 	imageFile: null,
			// 		// 	imageIPFSHash: null,
			// 		// 	imagePreview: null,
			// 		// });
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	return (
		<div>
			<div className="bg-[#19181870] backdrop-blur w-full fixed mx-auto z-20 flex flex-col justify-center items-start inset-x-0 inset-y-0 py-12 overflow-y-hidden">
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
										<label htmlFor="eventName">
											<span className="Wallet-Address">
												Event name
											</span>
											<input
												value={formData.eventName}
												name="eventName"
												onChange={handleInputChange}
												type="text"
												className="purchase-input-form placeholder:text-[#d9d9d941]"
												placeholder="Event name"
											/>
										</label>
										<label htmlFor="eventVenue">
											<span className="Wallet-Address">
												Event venue
											</span>
											<input
												value={formData.eventVenue}
												name="eventVenue"
												onChange={handleInputChange}
												type="text"
												className="purchase-input-form placeholder:text-[#d9d9d941]"
												placeholder="Event venue"
											/>
										</label>
										<div className="flex flex-row gap-3">
											<label htmlFor="Date">
												<span className="Wallet-Address">Date</span>
												<input
													value={formData.eventDate}
													name="eventDate"
													onChange={handleInputChange}
													type="text"
													className="bg-[#191818] border border-[#d9d9d955] text-[#fdfcfd] rounded-[0.8rem] p-2 placeholder:text-[#d9d9d941]"
													placeholder="26/07/23"
												/>
											</label>
											<label htmlFor="Time">
												<span className="Wallet-Address">Time</span>
												<input
													value={formData.eventTime}
													name="eventTime"
													onChange={handleInputChange}
													type="text"
													className="bg-[#191818] border border-[#d9d9d955] text-[#fdfcfd] rounded-[0.8rem] p-2 placeholder:text-[#d9d9d941]"
													placeholder="12:00pm"
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
									<p className="ticket-h3">Tickets</p>
									{/* <p className="ticket-p text-xs pt-0 font-bold">
										Free
									</p> */}
								</div>
								<div className="ticket-form">
									<div className="flex flex-row justify-between items-center p-4 py-5 ">
										<label
											htmlFor="numberOfTickets"
											className="text-[#D9D9D9CC] font-['Manrope']"
										>
											General admission
										</label>

										<div className="">
											<input
												value={formData.numberOfTickets}
												name="numberOfTickets"
												onChange={handleInputChange}
												type="number"
												className="bg-[#191818] border border-[#d9d9d955] text-[#fdfcfd] rounded-[0.6rem] p-2 placeholder:text-[#d9d9d941]"
												placeholder=""
											/>
										</div>
									</div>
									<hr className="hr-line"></hr>
									<div className="flex flex-row justify-between items-center p-4 py-4">
										<label
											htmlFor="ticketPrice"
											className="Wallet-Address"
										>
											Price
										</label>
										<div className="">
											<input
												value={formData.ticketPrice}
												name="ticketPrice"
												onChange={handleInputChange}
												type="number"
												className="bg-[#191818] border border-[#d9d9d955] text-[#fdfcfd] rounded-[0.6rem] p-2 placeholder:text-[#d9d9d941]"
												placeholder=""
											/>
										</div>
									</div>
								</div>

								<div className="py-10">
									<IconButton
										text="Create Event"
										icon="/images/arrow-up-right.svg"
										iconStyle={{ color: "#FFFDFC" }}
										className="text-[#FFFDFC] font-['Stoke'] text-base "
										onClick={handleFormSubmit}
										// onClick={handleCreateEvent}
									/>
								</div>
								<p className="text-white">
									{createLoading ? "creating...." : "create event"}
								</p>

								<p className="text-white">
									{createSuccess ? "successful" : "unsuccesful"}
								</p>

								{/* <p>
									error message :{" "}
									{createError ? "error fetching data" : "no error"}
								</p> */}
								<p className="text-white">
									data loading :{" "}
									{createLoading ? "loading...." : "fetched"} error:
									{createError ? "error" : ""}
								</p>
								{/* <p className="text-white">{createEventData}</p> */}
							</div>

							<div className="vertical"></div>
							<div className="second flex flex-col gap-3">
								<div className="text-[#fdfcfd] w-full flex flex-col gap-5">
									{/* {formData.imagePreview ? (
										<div className="w-full rounded-lg">
											<img
												// src="/images/image-placeholder.png"
												src={`https://gateway.pinata.cloud/ipfs/${formData.imageIPFSHash}`}
												alt="Image Preview"
												className="w-full rounded-lg lg:h-[15rem]"
											/>
										</div>
									) : (
										<div className="w-full rounded-lg">
											<img
												// src="/images/image-placeholder.png"
												src={formData.imagePreview}
												alt="Image Preview"
												className="w-full rounded-lg lg:h-[15rem]"
											/>
										</div>
									)} */}

									<div className="w-full rounded-lg">
										<img
											// src="/images/image-placeholder.png"
											src={formData.imagePreview}
											alt="Image Preview"
											className="w-full rounded-lg lg:h-[14.5rem]"
										/>
									</div>
									<div>
										<input
											id="file-upload"
											type="file"
											onChange={handleFileSelect}
											name="imageFile"
											className="border"
											// accept="*/image"
										/>
									</div>
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
};

export default CreateEvents;
