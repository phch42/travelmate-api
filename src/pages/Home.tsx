import Hero from "../components/Hero/Hero";
import PopularCities from "../components/PopularCities/PopularCities";
import PopularCountries from "../components/PopularCountries/PopularCountries";

function Home() {
    return (
        <>
            <Hero />
            <PopularCountries />
            <PopularCities />
        </>
    );
}

export default Home;