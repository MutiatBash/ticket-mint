import React from 'react'
import { Button } from '../../components/Button';

const CommunityForm = () => {
  return (
		<section className="relative py-8 lg:py-24">
			<div className="flex flex-col justify-center gap-4 lg:gap-14 items-center p-3 font-['Manrope']">
				<h4 className="text-[#fdfcfd] text-2xl lg:text-4xl lg:py-3 lg:w-[50%] text-center lg:leading-[3.3rem]">
					Connect With Other Members Of The Community
				</h4>
				<form
					action=""
					className="signup-form w-full md:w-[50%] p-4 lg:p-8 lg:py-10 flex flex-col gap-4 lg:gap-8 justify-between"
				>
					<div className="flex flex-col gap-3">
						<h3 className="text-[#F57328] text-3xl font-['Stoke']">
							Join Now
						</h3>
					</div>

					<div className="flex flex-col w-full">
						<label htmlFor="fullName" className="username font-medium">
							Full Name
						</label>
						<input
							type="text"
							className="signup-input-form py-2 px-3 lg:py-3 rounded-xl placeholder:text-[#c5c3c3a8]"
							name="fullName"
							placeholder="Full name"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="email" className="username font-medium">
							Email Address
						</label>
						<input
							name="email"
							type="email"
							// value={email}
							placeholder="Email address"
							className="signup-input-form py-2 px-3 lg:py-3 rounded-xl placeholder:text-[#c5c3c3a8]"
							// onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="phoneNumber" className="username font-medium">
							Phone Number
						</label>
						<input
							type="text"
							className="signup-input-form py-2 px-3 lg:py-3 rounded-xl placeholder:text-[#c5c3c3a8]"
							name="phoneNumber"
							placeholder="+234"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="phoneNumber" className="username font-medium">
							Reason for joining
						</label>
						<textarea
							rows="6"
							className="signup-input-form py-2 px-3 lg:py-3 rounded-xl placeholder:text-[#c5c3c3a8]"
							name="phoneNumber"
							placeholder="Write your message here"
						></textarea>
					</div>
					<Button
						text="Send"
						className="lg:self-end text-[#fdfcfd] lg:px-10 font-['Stoke']"
					/>
				</form>
			</div>
		</section>
  );
}

export default CommunityForm
