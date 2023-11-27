import React from "react";
// import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const Button = ({ text, className, onClick }) => {
    return (
      <div>
        <button
        onClick={onClick}
          className={`w-[fit-content] py-[0.8rem] px-5  whitespace-nowrap text-base bg-[#F57328] font-bold rounded-[32px] md:py-[0.95rem] hover:b cursor-pointer hover:shadow-md transition-all ease-in ${className}`}
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
					className={`flex flex-row justify-between items-center w-[fit-content] py-[0.8rem] px-4 gap-2 whitespace-nowrap text-base bg-[#F57328] font-bold rounded-[32px] md:py-[0.95rem] md:px-6 hover:b cursor-pointer hover:shadow-md transition-all ease-in${className}`}
				>
					<span className={className}>{text}</span>
					<span>
						{icon && (
							<img src={icon} className={iconStyle}/>
						)}
					</span>
				</button>
			</div>
		);
  };