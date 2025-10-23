import React from "react";

const InfoSection = () => {
	return (
		<section className="bg-white">
			<div className="mx-auto max-w-screen px-4 py-16 sm:px-6 lg:px-24">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
					<div className="order-2 md:order-1 flex justify-center items-center">
						<img
							src="https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9yZCUyMHJhcHRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
							className="rounded-xl shadow-lg w-[700px]"
							alt="Person renting a car"
						/>
					</div>

					<div className="order-1 md:order-2 space-y-6">
						<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Rent with Ease, Drive with Peace</h2>

						<p className="text-lg text-gray-700 leading-relaxed">Experience hassle-free car rentals with our premium fleet. From economy cars to luxury vehicles, we have the perfect ride for every journey.</p>

						<div className="grid grid-cols-2 gap-4">
							<div className="text-center p-4 bg-[#eef0fc] rounded-lg">
								<div className="text-2xl font-bold text-primary">24/7</div>
								<div className="text-sm text-gray-600">Support</div>
							</div>
							<div className="text-center p-4 bg-[#eef0fc] rounded-lg">
								<div className="text-2xl font-bold text-primary">500+</div>
								<div className="text-sm text-gray-600">Vehicles</div>
							</div>
							<div className="text-center p-4 bg-[#eef0fc] rounded-lg">
								<div className="text-2xl font-bold text-primary">50+</div>
								<div className="text-sm text-gray-600">Locations</div>
							</div>
							<div className="text-center p-4 bg-[#eef0fc] rounded-lg">
								<div className="text-2xl font-bold text-primary">5★</div>
								<div className="text-sm text-gray-600">Rating</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InfoSection;
