import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context";
// import { magic } from "../utils/magic";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faRightFromBracket,
	faArrowRightFromBracket,
    faWallet,
} from "@fortawesome/free-solid-svg-icons";
const ProfileModal = ({ user, setUser, onClick }) => {
	return (
		<div className="fixed font-['Manrope'] text-[#fdfcfd] border border-[#d9d9d934] rounded-2xl p-4 bg-[#030203] lg:w-[18rem] top-[4rem] lg:top-[5.5rem] right-4 lg:right-10">
			{user?.loading && <p className="text-[#fdfcfd93] text-sm">Getting your details....</p>}
			{user?.issuer && (
				<div className="flex flex-col gap-3 items-start">
					<p>
						<span className="pr-2">
							<FontAwesomeIcon icon={faEnvelope} size="sm" />
						</span>
						{user.email}
					</p>
					<p>
						<span className="pr-2">
							<FontAwesomeIcon icon={faWallet} size="sm" />
						</span>
						{user?.publicAddress?.slice(0, 12)}....
					</p>
					<button
						onClick={onClick}
						className="text-[#F57328] font-semibold"
					>
						<span className="pr-2">
							<FontAwesomeIcon
								icon={faRightFromBracket}
								style={{ color: "#F57328" }}
								size="sm"
							/>
						</span>
						Logout
					</button>
				</div>
			)}
		</div>
	);
};

export default ProfileModal;
