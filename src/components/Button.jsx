import React from "react";
// import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";


export const Button = ({ text, className, onClick }) => {
    return (
      <div>
        <button
        onClick={onClick}
          className={`w-[fit-content] py-[0.8rem] px-3  whitespace-nowrap text-base md:text-lg bg-[#9318ff] font-bold rounded-md md:py-[0.6875rem] md:px-6 hover:bg-[#7e0dff] hover:shadow-md transition-all ease-in ${className}`}
        >
          {text}
        </button>
      </div>
    );
  };
 
  
//   export const IconButton = ({ text, className, onClick, icon, iconSize, iconStyle }) => {
//     return (
//       <div>
//         <button
//         onClick={onClick}
//           className={`w-[fit-content] flex flex-row justify-between items-center space-x-2 py-[0.8rem] px-2 whitespace-nowrap text-base md:text-lg bg-[#ff7518] font-bold rounded-md md:py-[0.6875rem] md:px-6 hover:bg-[#ff690d] hover:shadow-md transition-all ease-in ${className}`}
//         >
//             <span>{icon && <FontAwesomeIcon icon={icon} className="icon" style={iconStyle} size={iconSize}/>}</span>
//          <span>{text}</span>
//         </button>
//       </div>
//     );
//   };