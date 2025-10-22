import Data from "@/Shared/Data";

const Category = () => {
	return (
		<div className="mt-40">
			<h2 className="font-bold text-3xl text-center mb-6">Choose Your Category</h2>

			<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20">
				{Data.Category.map((category, index) => (
					<div
						key={index}
						className="border bg-[#eef0fc] rounded-md p-3 items-center flex flex-col shadow-md">
						<img
							width={40}
							height={40}
							src={category.icon}
							alt={category.name}
						/>
						<h2 className="mt-2 font-medium">{category.name}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
