import React, { useContext, useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { WalletButton } from "../components/WalletButton";
import { Button } from "../components/Button";
import { UserContext } from "../Context";
import { useNavigate } from "react-router-dom";
import { magic } from "../apis/magic";

const SignUp = () => {
	const { user, setUser } = useContext(UserContext);
	const [email, setEmail] = useState("");

	const navigate = useNavigate();
	useEffect(() => {
		// Check for an issuer on our user object. If it exists, route them to the dashboard.
		user?.issuer && navigate("/");
	}, [user]);

	const handleSignup = async (e) => {
		e.preventDefault();

		// Log in using our email with Magic and store the returned DID token in a variable
		try {
			const didToken = await magic.auth.loginWithMagicLink({
				email,
				// redirectURI: "https://tickets-mint.vercel.app",
				// redirectURI: "https://tickets-mint.vercel.app",
			});
			console.log({ didToken });
			// Send this token to our validation endpoint
			const res = await fetch("./apis/apiLogin", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${didToken}`,
				},
			});

			// If successful, update our user state with their metadata and route to the dashboard
			if (res.ok) {
				const userMetadata = await magic.user.getMetadata();
				setUser(userMetadata);
				navigate("/");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center my-auto p-3 h-screen">
			<div className="absolute top-0 right-0 pointer-events-none">
				<img src="/images/right-gradient.svg" alt="gradient" />
			</div>
			{/* <div className="flex flex-col w-[95%] lg:w-full mx-auto justify-center items-center"> */}
				<form
					action=""
					onSubmit={handleSignup}
					className="signup-form w-full md:w-[45%] p-4 lg:p-8 lg:py-10 flex flex-col gap-4 lg:gap-8 justify-between"
				>
					<h3 className="text-[#FFFDFC] text-3xl font-['Stoke']">
						Sign Up
					</h3>
					<div className="flex flex-col w-full">
						<label htmlFor="username" className="username font-medium">
							Username
						</label>
						<span className="fa fa-user user"></span>
						<input
							type="text"
							className="signup-input-form py-2 px-3 lg:py-3 rounded-xl placeholder:text-[#c5c3c3a8]"
							name="username"
							placeholder="Username"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="email" className="username font-medium">
							Email Address
						</label>
						<span className="fa fa-user user"></span>
						<input
							name="email"
							type="email"
							value={email}
							placeholder="Email address"
							className="signup-input-form py-2 px-3 lg:py-3 rounded-xl placeholder:text-[#c5c3c3a8]"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="w-full py-6 px-20 self-center mx-auto">
						<Button
							type="submit"
							className="w-full mx-auto py-2 rounded-[28px] text-[#FFFDFC] text-center justify-self-center"
							text="Sign Up"
						/>
					</div>

					{/* <button className="connect">connect with</button> */}
				</form>
			{/* </div> */}
			<div className="absolute top-0 left-0 pointer-events-none">
				<img src="/images/left-full-gradient.svg" alt="gradient" />
			</div>
		</div>
	);
};

export default SignUp;
