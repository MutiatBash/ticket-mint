import React from 'react'

const Contact = () => {
  return (
		<div>
			<section class="form_div">
				<h2 id="reserve">Get In Touch</h2>
				<p id="reserve_child">
					We welcome your feedback and collaboration proposals! Please feel
					free to share your thoughts and ideas with us
				</p>

				<form class="my_form">
					<div>
						<label for="Email Address" class="Email-Address">
							Email Address
						</label>
						<input type="text" class="ema" />
					</div>

					<div>
						<label for="Topic" class="Topic">
							Topic
						</label>
						<input type="text" class="ema" />
					</div>

					<div id="textA">
						<label for="Message" class="Topic">
							Message
						</label>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							class="textA"
						></textarea>
						<br />
					</div>
				</form>
			</section>
		</div>
  );
}

export default Contact
