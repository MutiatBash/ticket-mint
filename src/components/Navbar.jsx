import React, { useContext, useState, useEffect } from "react";
// import { CartContext } from "../CartContext";
// import Logo from '../assets/svg/logo.svg'
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPerson, faUser } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";
import { WalletButton } from "./WalletButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ProfileModal from "./ProfileModal";
import { UserContext } from "../Context";
import { magic } from "../../appApis/magic";
import { useNavigate } from "react-router-dom";
import Logo from "/images/ticket-logo.svg";

export const links = [
	{
		id: 1,
		url: "/",
		text: "Home",
	},
	{
		id: 2,
		url: "/events",
		text: "Events",
	},
	{
		id: 3,
		url: "/community",
		text: "Community",
	},
	{
		id: 4,
		url: "/terms-of-service",
		text: "Terms of service",
	},
];

const Navbar = () => {
	//   const { cartItems } = useContext(CartContext);
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);
	const [profileOpen, setProfileOpen] = useState(false);

	const handleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	const handleProfile = () => {
		setProfileOpen(!profileOpen);
	};

	const { user, setUser } = useContext(UserContext);

	const navigate = useNavigate();
	useEffect(() => {
		// Set loading to true to display our loading message within pages/homepage.js
		setUser({ loading: true });
		// Check if the user is authenticated already
		magic.user.isLoggedIn().then((isLoggedIn) => {
			if (isLoggedIn) {
				// Pull their metadata, update our state, and route to home
				magic.user.getInfo().then((userData) => setUser(userData));
				// navigate("/");
				setUser({ loading: false });
				// loading: false
			}
			// else {
			// 	// If false, route them to the login page and reset the user state
			// 	navigate("/signup");
			// 	setUser({ user: null });
			// }
		});
		// Add an empty dependency array so the useEffect only runs once upon page load
	}, []);

	// logout function
	const logout = () => {
		// Call Magic's logout method, reset the user state, and route to the login page
		magic.user.logout().then(() => {
			setUser({ user: null });
			navigate("/signup");
		});
	};
	return (
		<div className="w-full flex flex-col gap-3 h-full py-[1.1rem] px-4 md:px-14 lg:px-16 bg-[#030202] sticky top-0 z-20">
			<div className="w-full flex items-center justify-between">
				<Link to="/">
				
					<div className="flex flex-row gap-2 items-center">
						<img src={Logo} alt="logo" />
						<h5 className="text-[#F57328] font-['Stoke'] text-[1.1rem]">
							TicketMynt
						</h5>
					</div>
				</Link>

				<ul className="hidden lg:flex items-center gap-5 lg:gap-8">
					{links.map((links) => (
						<li className="group relative" key={links.id}>
							<Link
								to={links.url}
								className={`text-[#F57328] text-[0.9rem] transition duration-300 ease-in ${
									location.pathname === links.url
										? " text-[#F57328]"
										: "text-[#fdfcfdc4]"
								}`}
							>
								{links.text}
							</Link>
							<div className="absolute w-full left-0 h-0.5 bg-[#F57328] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
						</li>
					))}
				</ul>
				<div className="hidden lg:flex flex-row gap-6 items-center justify-between">
					{/* <ConnectButton/> */}
					{user?.issuer ? (
						<div onClick={handleProfile} className="cursor-pointer">
							<FontAwesomeIcon icon={faUser} style={{ color: "#fff" }} />{" "}
							{profileOpen && (
								<ProfileModal user={user} onClick={logout} />
							)}
						</div>
					) : (
						<Link
							to="/signup"
							className="text-[#F57328] font-semibold text-[0.9rem] w-fit"
						>
							SignUp/Login
						</Link>
					)}

					<WalletButton />
				</div>
				<div className="flex lg:hidden flex-row gap-6 items-center justify-between">
					{user?.issuer && (
						<div onClick={handleProfile} className="cursor-pointer">
							<FontAwesomeIcon icon={faUser} style={{ color: "#fff" }} />
							{profileOpen && (
								<ProfileModal user={user} onClick={logout} />
							)}
						</div>
					)}
					<button onClick={handleMenu} className="">
						{menuOpen ? (
							<FontAwesomeIcon
								icon={faXmark}
								style={{ color: "#FFFDFC" }}
							/>
						) : (
							<FontAwesomeIcon
								icon={faBars}
								style={{ color: "#FFFDFC" }}
							/>
						)}
					</button>
				</div>
			</div>
			{menuOpen && <MobileMenu />}
		</div>
	);
};

export default Navbar;
