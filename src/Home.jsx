import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
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

			{/* INFO SECTION */}
			<InfoSection />

			{/* FOOTER */}
			<Footer />
		</div>
	);
};

export default Home;
