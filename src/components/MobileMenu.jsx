import { Button } from "./Button";
import { Link, useLocation } from "react-router-dom";
import { links } from "./Navbar";
import { WalletButton } from "./WalletButton";

export const MobileMenu = () => {
  const location = useLocation();
  return (
		<div className="bg-[#22212133] z-30 h-screen w-full inset-x-0 fixed top-[3.2rem]">
			<div className="lg:hidden bg-[#030202] w-full space-y-4 p-3 py-6 pb-8 flex flex-col gap-3 items-center h-[60%] justify-center">
				<ul className="lg:hidden flex flex-col items-center gap-8 justify-center">
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
						</li>
					))}
				</ul>
				<div className="flex flex-row gap-3 items-center justify-between">
					<Link
						to="/signup"
						className="text-[#F57328] font-semibold w-fit"
					>
						SignUp/Login
					</Link>
					<WalletButton />
				</div>
			</div>
		</div>
  );
};
