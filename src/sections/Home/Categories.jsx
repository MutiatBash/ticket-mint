import React from 'react'

const Categories = () => {
  return (
		<section className="font-['Stoke'] bg-opacity-10 bg-gradient-to-b from-[#f573281c] to-[#19181800] lg:my-8  px-2 lg:px-16  py-4 lg:py-8  gap-4 lg:gap-8">
			<div className="lg:w-[70%] mx-auto">
				<ul className="nav-lists flex flex-row items-center justify-between opacity-80">
					<li className="nav_children">tech</li>
					<li className="nav_children">arts</li>
					<li className="nav_children">music</li>
					<li className="nav_children">health</li>
					<li className="nav_children">education</li>
					<li className="nav_children">finance</li>
				</ul>
			</div>
		</section>
  );
}

export default Categories
