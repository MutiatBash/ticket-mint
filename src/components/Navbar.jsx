import { useState, useContext } from "react";
// import { CartContext } from "../CartContext";
// import Logo from '../assets/svg/logo.svg'
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";
import { WalletButton } from "./WalletButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";

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

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
		<div className="w-full flex flex-col gap-3 h-full py-4 px-4 md:px-14 lg:px-16 bg-[#030202] sticky top-0 z-20">
			<div className="w-full flex items-center justify-between">
				<div>
					{/* <img
            // src={Logo}
            alt="logo"
          /> */}
					<h5 className="text-[#F57328]">TicketMynt</h5>
				</div>
				<ul className="hidden lg:flex items-center gap-5 lg:gap-[3rem]">
					{links.map((links) => (
						<li className="group relative" key={links.id}>
							<Link
								to={links.url}
								className={`text-[#F57328] transition duration-300 ease-in ${
									location.pathname === links.url
										? " text-[#F57328]"
										: "text-[#d9d9d9c7]"
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
					<Link
						to="/signup"
						className="text-[#F57328] font-semibold w-fit"
					>
						SignUp/Login
					</Link>
					<WalletButton />
				</div>
				<div className="flex lg:hidden flex-row gap-10 items-center justify-between">
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
