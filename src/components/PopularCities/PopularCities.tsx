import CityCard from "../CityCard/CityCard";
import { useFetch } from "../../hooks/useFetch";
import { useLanguage } from "../../contexts/LanguageContext";
import type { City, Country } from "../../types/travel";
import {
    CitiesGrid,
    SectionHeader,
    SectionTitle,
    ViewAllLink,
} from "../../styles/PopularCities.styled";

function PopularCities() {
    const { selectedLanguage } = useLanguage();

    const { data: cities } = useFetch<City[]>(
        "http://localhost:4000/api/cities"
    );

    const { data: countries } = useFetch<Country[]>(
        "http://localhost:4000/api/countries"
    );

    return (
        <section>
            <SectionHeader>
                <SectionTitle>Popular Cities</SectionTitle>

                <ViewAllLink to="/cities">
                    View all
                </ViewAllLink>
            </SectionHeader>

            <CitiesGrid>
                {cities?.slice(0, 5).map((city) => {
                    const info = city.infos.find(
                        (info) =>
                            info.languageId ===
                            selectedLanguage?.id
                    );

                    const country = countries?.find(
                        (country) =>
                            country.id === city.countryId
                    );

                    const countryInfo = country?.infos.find(
                        (info) =>
                            info.languageId ===
                            selectedLanguage?.id
                    );

                    return (
                        <CityCard
                            key={city.id}
                            name={info?.name ?? ""}
                            country={countryInfo?.name ?? ""}
                            image={city.image}
                        />
                    );
                })}
            </CitiesGrid>
        </section>
    );
}

export default PopularCities;