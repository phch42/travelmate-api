import CountryCard from "../CountryCard/CountryCard";
import { useFetch } from "../../hooks/useFetch";
import type { Country } from "../../types/travel";
import {
    CountriesGrid,
    SectionHeader,
    SectionTitle,
    ViewAllLink,
} from "../../styles/PopularCountries.styled";

function PopularCountries() {
    const { data } = useFetch<Country[]>(
        "http://localhost:4000/api/countries"
    );

    return (
        <section>
            <SectionHeader>
                <SectionTitle>Popular Countries</SectionTitle>

                <ViewAllLink to="/countries">
                    View all
                </ViewAllLink>
            </SectionHeader>

            <CountriesGrid>
                {data?.slice(0, 5).map((country) => {
                    const info = country.infos.find(
                        (info) => info.language.code === "en"
                    );

                    return (
                        <CountryCard
                            key={country.id}
                            name={info?.name ?? ""}
                            description={info?.description ?? ""}
                            flag={country.code}
                        />
                    );
                })}
            </CountriesGrid>
        </section>
    );
}

export default PopularCountries;