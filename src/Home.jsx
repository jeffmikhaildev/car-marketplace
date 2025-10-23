import Category from "./components/Category";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MostSearchedCard from "./components/MostSearchedCard";

const Home = () => {
	return (
		<div>
			{/* HEADER */}
			<Header />

			{/* HERO */}
			<Hero />

			{/* CATEGORY */}
			<Category />

			{/* MOST SEARCHED CAR */}
			<MostSearchedCard />
		</div>
	);
};

export default Home;
