import FeaturedPlaces from "../components/FeaturedPlaces/FeaturedPlaces";
import Hero from "../components/Hero/Hero";
import PopularCities from "../components/PopularCities/PopularCities";
import PopularCountries from "../components/PopularCountries/PopularCountries";

function Home() {
    return (
        <>
            <Hero />
            <PopularCountries />
            <PopularCities />
            <FeaturedPlaces />
        </>
    );
}

export default Home;