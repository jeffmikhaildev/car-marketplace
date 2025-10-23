import { Separator } from "./ui/separator";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoSpeedometerSharp } from "react-icons/io5";
import { GiGearStick } from "react-icons/gi";

const CarItem = ({ car }) => {
	return (
		<div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
			<h2 className="absolute m-3 text-white bg-green-600 px-2 py-1 rounded-full text-sm pb-1 z-10">New</h2>
			<img
				src={car?.image}
				alt={car?.name}
				className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
			/>

			<div className="p-5">
				<h2 className="font-bold text-gray-900 text-xl mb-3 line-clamp-1">{car?.name}</h2>

				<Separator className="bg-gray-200" />

				{/* Features Grid */}
				<div className="grid grid-cols-3 gap-4 mt-6">
					<div className="flex flex-col items-center text-center">
						<div className="bg-blue-50 p-2 rounded-full mb-2">
							<IoSpeedometerSharp className="text-lg text-primary" />
						</div>
						<span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Mileage</span>
						<h3 className="font-semibold text-gray-900 mt-1">{car.miles?.toLocaleString()} miles</h3>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="bg-green-50 p-2 rounded-full mb-2">
							<BsFillFuelPumpFill className="text-lg text-primary" />
						</div>
						<span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Fuel</span>
						<h3 className="font-semibold text-gray-900 mt-1 capitalize">{car.fuelType}</h3>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="bg-purple-50 p-2 rounded-full mb-2">
							<GiGearStick className="text-lg text-primary" />
						</div>
						<span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Transmission</span>
						<h3 className="font-semibold text-gray-900 mt-1 capitalize">{car.gearType}</h3>
					</div>
				</div>

				{/* Price and CTA */}
				<div className="mt-6 pt-4 border-t border-gray-200">
					<div className="flex justify-between items-center">
						<div>
							<span className="text-2xl font-bold text-gray-900">${Math.floor(car.price)?.toLocaleString()}</span>
							{car.originalPrice && <span className="text-sm text-gray-500 line-through ml-2">${Math.floor(car.originalPrice)?.toLocaleString()}</span>}
						</div>
						<button className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">View Details</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarItem;
