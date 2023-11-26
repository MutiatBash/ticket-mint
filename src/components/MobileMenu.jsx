import { Button } from "./Button";
import { Link, useLocation } from "react-router-dom";
import { links } from "./Navbar";

export const MobileMenu = () => {
  const location = useLocation();
  return (
    <div className="bg-[#22212133] z-30 h-screen w-full inset-x-0 fixed top-[3.2rem]">
      <div className="lg:hidden bg-white w-full space-y-4 p-3 py-6 pb-8 flex flex-col gap-3 items-center h-[60%] justify-center">
        <ul className="lg:hidden flex flex-col items-center gap-8 justify-center">
          {links.map((links) => (
            <li className="group relative">
              <Link
                to={links.url}
                key={links.id}
                className={`nav-item text-[#353A43] transition duration-300 ease-in text-lg font-medium ${
                  location.pathname === links.url ? " text-[#ff7518]" : ""
                }`}
              >
                {links.text}
              </Link>
            </li>
          ))}
        </ul>
        
        <Button text={"Get in touch"} className="w-[100%] px-8 py-3 text-white" />
      </div>
    </div>
  );
};
