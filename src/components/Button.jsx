import React from "react";
// import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const Button = ({ text, className, onClick , disabled}) => {
    return (
      <div>
        <button
        disabled={disabled}
        onClick={onClick}
          className={`w-[fit-content] py-[0.8rem] px-5 font-['Manrope'] whitespace-nowrap text-base bg-[#F57328] font-bold rounded-[32px] md:py-[0.95rem] hover:b cursor-pointer hover:shadow-md transition-all ease-in ${className}`}
        >
          {text}
        </button>
      </div>
    );
  };
 
  
  export const IconButton = ({ text, className, onClick, icon, iconSize, iconStyle }) => {
    return (
			<div>
				<button
					onClick={onClick}
					className={`flex flex-row justify-between items-center font-['Manrope'] py-[0.8rem] px-4 gap-2 whitespace-nowrap text-base bg-[#F57328] font-bold rounded-[32px] md:py-[0.95rem] md:px-6 hover:scale-105 cursor-pointer hover:shadow-md transition-all ease-in ${className}`}
				>
					<span>{text}</span>
					<img src={icon} className={iconStyle} />
				</button>
			</div>
		);
  };