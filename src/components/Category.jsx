import Data from "@/Shared/Data";

const Category = () => {
	return (
		<div className="mt-40">
			<h2 className="font-bold text-3xl text-center mb-7">Choose Your Category</h2>

			<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20">
				{Data.Category.map((category, index) => (
					<div
						key={index}
						className="border-2 border-blue-200 bg-[#eef0fc] rounded-xl p-4 items-center flex flex-col shadow-lg hover:shadow-xl hover:border-blue-300 hover:bg-blue-50 hover:scale-105 transition-all duration-300 cursor-pointer">
						<div className="bg-white rounded-full p-2 shadow-sm">
							<img
								width={40}
								height={40}
								src={category.icon}
								alt={category.name}
								className="transition-transform duration-300 hover:scale-110"
							/>
						</div>
						<h2 className="mt-3 font-semibold text-gray-800 text-center text-sm hover:text-primary transition-colors duration-300">{category.name}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
