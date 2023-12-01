import React, { useContext, useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { WalletButton } from "../components/WalletButton";
import { Button } from "../components/Button";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate, Link ,redirect} from "react-router-dom";
import { magic } from "../../api/magic";
import { ThreeCircles } from "react-loader-spinner";

const SignUp = () => {
	const { user, setUser } = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	useEffect(() => {
		// Check for an issuer on our user object. If it exists, route them to the dashboard.
		// user?.issuer && navigate("/");
		user?.issuer 
	}, [user]);

	const handleSignup = async (e) => {
		e.preventDefault();
		setLoading(true);
		// Log in using our email with Magic and store the returned DID token in a variable
		try {
			const didToken = await magic.auth.loginWithMagicLink({
				email,
				// redirectURI: "http://localhost:5173",
				// redirectURI: "https://ticketmynt.vercel.app",
			});
			console.log({ didToken });
			// Send this token to our validation endpoint
			const res = await fetch("/api/login", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${didToken}`,
				},
			});
			setLoading(false);
			// If successful, update our user state with their metadata and route to the dashboard
			if (res.ok) {
				const userData = await magic.user.getInfo();
				navigate("/");
				setUser(userData);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center p-3 mb-0 pb-0 h-screen font-['Manrope']">
			<div className="absolute top-0 right-0 pointer-events-none">
				<img src="/images/right-gradient.svg" alt="gradient" />
			</div>
			{/* <div className="flex flex-col w-[95%] lg:w-full mx-auto justify-center items-center"> */}
			<form
				action=""
				onSubmit={handleSignup}
				className="signup-form w-full md:w-[45%] p-4 lg:p-8 lg:py-10 flex flex-col gap-4 lg:gap-8 justify-between"
			>
				<div className="flex flex-col gap-3">
					<h3 className="text-[#FFFDFC] text-3xl font-['Stoke']">
						Sign Up
					</h3>
					<p className="text-[#fffdfce4] py-2">
						Get started with your email address if you dont have a wallet
					</p>
				</div>

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
				<div className="w-full py-6 lg:px-24 self-center mx-auto">
					<button
						disabled={email === ""}
						type="submit"
						className={`w-full flex flex-row items-center justify-center mx-auto py-3 lg:py-4 rounded-[28px] text-[#FFFDFC] text-center self-center ${
							email === ""
								? "bg-[#3c3a3a9e] disabled:pointer-events-none disabled:cursor-none text-[#fffdfc55] font-normal"
								: "bg-[#F57328] font-semibold"
						}`}
					>
						{loading ? (
							<ThreeCircles
								height="20"
								color="#fdfcfd"
								ariaLabel="three-rotating-circles"
								wrapperClass="text-center mx-auto"
							/>
						) : (
							<span>Sign Up</span>
						)}
					</button>
				</div>

				{/* <button className="connect">connect with</button> */}
			</form>
			{/* </div> */}
			<div className="absolute top-0 left-0 pointer-events-none">
				<img src="/images/left-full-gradient.svg" alt="gradient" />
			</div>
			{user?.issuer && (
				<div className="fixed w-full backdrop-blur h-full flex flex-col justify-center items-center">
					<div className="text-[#fdfcfd] bg-[#030203] rounded-2xl p-10 py-8 text-center flex flex-col justify-center items-center gap-8 h-[40%] lg:w-[35%]">
						<p className="leading-7 text-lg">
							You have Successfully Signed Up or Logged In with your
							email address
						</p>
						<button className="rounded-3xl p-3 px-2 bg-[#F57328] font-semibold w-[45%] hover:font-bold hover:scale-105 transition-all ease-in-out">
							<Link to="/">Go home</Link>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default SignUp;
