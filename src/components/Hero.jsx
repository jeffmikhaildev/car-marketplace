import React from "react";
import Search from "./Search";

const Hero = () => {
	return (
		<div>
			<div className="flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-[#eef0fc]">
				<h2 className="text-lg">Explore cars available in your area.</h2>
				<h2 className="text-[60px] font-bold">Drive Your Dreams</h2>

				<Search />

				<img
					src="/tesla.png"
					alt="tesla car"
					className="mt-10"
				/>
			</div>
		</div>
	);
};

export default Hero;
