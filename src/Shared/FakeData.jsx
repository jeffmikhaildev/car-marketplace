import { faker } from "@faker-js/faker";

const createRandomCarList = () => {
	return {
		name: faker.vehicle.vehicle(),
		fuelType: faker.vehicle.fuel(),
		model: faker.vehicle.model(),
		type: faker.vehicle.type(),
		image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJtd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
		miles: 1200,
		gearType: "Automatic",
		price: faker.finance.amount({ min: 4000, max: 21000 }),
	};
};

const carList = faker.helpers.multiple(createRandomCarList, { count: 10 });

export default {
	carList,
};
